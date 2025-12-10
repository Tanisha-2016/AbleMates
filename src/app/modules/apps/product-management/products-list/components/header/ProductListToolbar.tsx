import {KTIcon} from '../../../../../../../_metronic/helpers'
import {useListView} from '../../core/ListViewProvider'
import {UsersListFilter} from './ProductsListFilter'
import {motion} from 'framer-motion'
// import './ProductListToolbar.css'; // Import the CSS file for custom styles

const UsersListToolbar = () => {
  const {setItemIdForUpdate} = useListView()
  const openAddUserModal = () => {
    setItemIdForUpdate(null)
  }

  // Define animation properties
  const buttonVariants = {
    hover: {
      scale: 1.05, // Scale up on hover
      boxShadow: '0 4px 20px rgba(0, 123, 255, 0.3)', // Add shadow on hover
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95, // Scale down on tap
    },
  }

  return (
    <div
      className='d-flex justify-content-end align-items-center'
      data-kt-user-table-toolbar='base'
    >
      <UsersListFilter />

      {/* begin::Export */}
      <motion.button
        type='button'
        className='btn btn-light-primary me-3 rounded-pill dashed-border'
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
      >
        <KTIcon iconName='exit-up' className='fs-4' />
        <span className='ms-2'>Export</span>
      </motion.button>
      {/* end::Export */}

      {/* begin::Add user */}
      <motion.button
        type='button'
        className='btn btn-primary rounded-pill'
        onClick={openAddUserModal}
        variants={buttonVariants}
        whileHover='hover'
        whileTap='tap'
      >
        <KTIcon iconName='plus' className='fs-4' />
        <span className='ms-2'>Add Product</span>
      </motion.button>
      {/* end::Add user */}
    </div>
  )
}

export {UsersListToolbar}
