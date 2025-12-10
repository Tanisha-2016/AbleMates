/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon} from '../../../helpers'
import {FaCheckCircle, FaExclamationCircle, FaInfoCircle} from 'react-icons/fa' 

import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {motion} from 'framer-motion'

type Props = {
  className: string
}

const ListsWidget3: React.FC<Props> = ({className}) => {
  const primaryColor = '#007bff' // Fallback to a static color
  const lightColor = '#f8f9fa' // Fallback to a static color
  const textColor = '#212529' // Fallback to a static color

  return (
    <motion.div
      initial={{opacity: 0, y: 20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className={`card ${className}`}
      style={{
        borderRadius: '15px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        border: `1px solid ${primaryColor}20`,
        overflow: 'hidden',
      }}
    >
      {/* begin::Header */}
      <div
        className='card-header border-0'
        style={{background: lightColor, borderBottom: `1px solid ${primaryColor}20`}}
      >
        <h3 className='card-title fw-bold' style={{color: textColor}}>
          Recent Products
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            type='button'
            className='btn btn-sm btn-icon'
            style={{color: primaryColor, background: `${primaryColor}20`}}
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTIcon iconName='category' className='fs-2' />
          </motion.button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {[
          {title: 'Create FireStone Logo', dueIn: '2 Days', status: 'New', color: 'success'},
          {title: 'Stakeholder Meeting', dueIn: '3 Days', status: 'New', color: 'primary'},
          {title: 'Scoping & Estimations', dueIn: '5 Days', status: 'New', color: 'warning'},
          {title: 'KPI App Showcase', dueIn: '2 Days', status: 'New', color: 'primary'},
          {title: 'Project Meeting', dueIn: '12 Days', status: 'New', color: 'danger'},
          {title: 'Customers Update', dueIn: '1 week', status: 'New', color: 'success'},
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: index * 0.1}}
            className={`d-flex align-items-center mb-8 p-3 ${
              index % 2 === 0 ? 'bg-light' : 'bg-white'
            } rounded`}
            style={{cursor: 'pointer', transition: 'background-color 0.3s'}}
            whileHover={{backgroundColor: '#e9ecef'}} // Change this color to your desired hover color
          >
            {/* begin::Bullet */}
            <span className={`bullet bullet-vertical h-40px bg-${item.color}`}></span>
            {/* end::Bullet */}
            {/* begin::Checkbox */}
            <div className='form-check form-check-custom form-check-solid mx-5'>
              <input className='form-check-input' type='checkbox' value='' />
            </div>
            {/* end::Checkbox */}
            {/* begin::Description */}
            <div className='flex-grow-1'>
              <a
                href='#'
                className='text-gray-800 text-hover-primary fw-bold fs-6'
                style={{color: textColor}}
              >
                {item.title}
              </a>
              <span className='text-muted fw-semibold d-block'>Due in {item.dueIn}</span>
            </div>
            {/* end::Description */}
            <span className={`badge badge-light-${item.color} fs-8 fw-bold`}>{item.status}</span>
          </motion.div>
        ))}
      </div>
      {/* end::Body */}
    </motion.div>
  )
}

export {ListsWidget3}
