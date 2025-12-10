
import React from 'react'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'
import { SidebarMenuItem } from './SidebarMenuItem'

const SidebarMenuMain = () => {
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Main</span>
        </div>
      </div>

      <SidebarMenuItem
        to='/dashboard'
        icon='cube-2'
        title='Dashboard'
        fontIcon='bi-app-indicator'
      />

    
      {/* Inventory Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Inventory</span>
        </div>
      </div>

      <SidebarMenuItem to='/product-management/products' icon='dropbox' title='Products' fontIcon='bi-layers' />
      <SidebarMenuItem to='/create-product' icon='add-item' title='Create Product' fontIcon='bi-layers' />
      <SidebarMenuItem to='/expired-product-management/expired-products' icon='ocean' title='Expired Products' fontIcon='bi-layers' />
      <SidebarMenuItem to='/category-management/categories' icon='diamonds' title='Category' fontIcon='bi-layers' />

    

      {/* Demo Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Demo</span>
        </div>
      </div>

      <SidebarMenuItemWithSub to='#' title='Demo' icon='element-11' fontIcon='bi-layers'>
        <SidebarMenuItem to='/demo/sub-demo-1' title='Sub Demo 1' hasBullet={true} />
        <SidebarMenuItem to='/demo/sub-demo-2' title='Sub Demo 2' hasBullet={true} />
      </SidebarMenuItemWithSub>

      {/* Sales Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Sales</span>
        </div>
      </div>

      <SidebarMenuItem to='/sale-management/sales' icon='graph-up' title='Sales' fontIcon='bi-layers' />
      <SidebarMenuItem to='/invoices-management/invoices' icon='file-sheet' title='Invoices' fontIcon='bi-layers' />
      <SidebarMenuItem to='/sale-return-management/sales-return' icon='arrow-circle-right' title='Sales Return' fontIcon='bi-layers' />
      <SidebarMenuItem to='/quotation-management/quotation' icon='file' title='Quotation' fontIcon='bi-layers' />
      <SidebarMenuItem to='/coupons-management/coupons' icon='note-2' title='Coupons' fontIcon='bi-layers' />

      {/* Purchases Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Purchases</span>
        </div>
      </div>

      <SidebarMenuItem to='/purchases-management/purchase' icon='package' title='Purchase' fontIcon='bi-layers' />
      <SidebarMenuItem to='/purchase-order-management/purchase-order' icon='handcart' title='Purchase Order' fontIcon='bi-layers' />
      <SidebarMenuItem to='/purchase-report-management/purchase-return' icon='double-left-arrow' title='Purchase Return' fontIcon='bi-layers' />

      {/* People Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>People</span>
        </div>
      </div>

      <SidebarMenuItem to='/customer-management/customers' icon='user' title='Customers' fontIcon='bi-layers' />
      <SidebarMenuItem to='/suppliers-management/suppliers' icon='truck' title='Suppliers' fontIcon='bi-layers' />
      <SidebarMenuItem to='/store-management/stores' icon='shop' title='Stores' fontIcon='bi-layers' />

      {/* HRM Section */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>HRM</span>
        </div>
      </div>

      <SidebarMenuItem to='/employee-management/employees' icon='people' title='Employees' fontIcon='bi-layers' />
      <SidebarMenuItem to='/department-management/departments' icon='user-square' title='Departments' fontIcon='bi-layers' />
      <SidebarMenuItem to='/designation-management/designations' icon='office-bag' title='Designations' fontIcon='bi-layers' />
    </>
  )
}

export { SidebarMenuMain }
