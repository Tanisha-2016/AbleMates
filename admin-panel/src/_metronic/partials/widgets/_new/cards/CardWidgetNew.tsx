import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  className: string
  description: string
  color: string
  img: string
  amount: string
  text: string
}

const CardsWidgetNew = ({className, description, color, img, amount, text}: Props) => (
  <motion.div
    className={`card card-flush ${className}`}
    initial={{opacity: 0, y: 20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    whileHover={{scale: 1.03, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'}}
    style={{
      backgroundColor: color,
      padding: '30px',
      borderRadius: '20px',
      borderBottom: `4px solid ${text}`,
      // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      // border: 'none',
      // position: 'relative',
      // overflow: 'hidden',
    }}
  >
    {/* Background gradient overlay */}
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 0.7}}
      transition={{duration: 0.5, delay: 0.2}}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
        zIndex: 1,
      }}
    />

    {/* Content wrapper */}
    <motion.div
      className='d-flex justify-content-between align-items-center'
      style={{position: 'relative', zIndex: 2}}
      initial={{opacity: 0, x: -20}}
      animate={{opacity: 1, x: 0}}
      transition={{duration: 0.5, delay: 0.3}}
    >
      {/* Image on the left side */}
      <div className='d-flex align-items-center'>
        <motion.img
          src={img}
          alt='Widget Image'
          whileHover={{scale: 1.1, rotate: 5}}
          style={{
            width: '80px',
            height: '80px',
            marginRight: '25px',
            borderRadius: '50%',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
          }}
        />

        {/* Text and amount */}
        <div>
          <motion.span
            className='fs-1 fw-bolder lh-1 mb-2 d-block'
            style={{color: text}}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
          >
            {amount}
          </motion.span>
          <motion.span
            className='opacity-75 fw-semibold fs-6 d-block'
            style={{color: text}}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
          >
            {description}
          </motion.span>
        </div>
      </div>

      {/* Decorative element */}
      <motion.div
        initial={{scale: 0, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.5, delay: 0.6}}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.2)',
          position: 'absolute',
          top: '-30px',
          right: '-30px',
        }}
      />
    </motion.div>

    {/* Progress bar */}
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      transition={{duration: 1, delay: 0.7}}
      style={{
        height: '4px',
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        bottom: 0,
        left: 0,
      }}
    />

    {/* Additional decorative elements */}
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 0.5, scale: 1}}
      transition={{duration: 0.5, delay: 0.8}}
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
      }}
    />
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 0.5, scale: 1}}
      transition={{duration: 0.5, delay: 0.9}}
      style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
      }}
    />
  </motion.div>
)

export {CardsWidgetNew}
