import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  className: string
  description: string
  color: string
  img: string
  amount: string
}

const CardsWidgetNew2 = ({className, description, color, img, amount}: Props) => (
  <motion.div
    className={`card card-flush ${className}`}
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    whileHover={{scale: 1.02}}
    style={{
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      position: 'relative',
    }}
  >
    {/* Decorative shape */}
    <div
      style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '50%',
        transform: 'rotate(45deg)',
      }}
    />

    {/* Card Header with Amount */}
    <motion.div
      className='card-header pt-5 pb-3'
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      transition={{delay: 0.2, duration: 0.5}}
    >
      <div className='card-title'>
        <span className='fs-2hx fw-bold text-white me-2 lh-1 ls-n2'>{amount}</span>
      </div>
    </motion.div>

    {/* Card Body with Text and Image */}
    <div className='card-body d-flex justify-content-between align-items-end pt-0'>
      <motion.div
        className='text-section'
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.4, duration: 0.5}}
      >
        <span className='text-white opacity-75 pt-1 fw-semibold fs-6'>{description}</span>
      </motion.div>
      <motion.div
        className='image-section'
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        transition={{delay: 0.6, duration: 0.5}}
        style={{
          backgroundImage: `url('${img}')`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      />
    </div>

    {/* Progress bar */}
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      transition={{delay: 0.8, duration: 1}}
      style={{
        height: '4px',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    />
  </motion.div>
)

export {CardsWidgetNew2}
