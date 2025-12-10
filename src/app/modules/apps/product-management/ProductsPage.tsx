import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {UsersListWrapper} from './products-list/ProductsList'

const usersBreadcrumbs: Array<PageLink> = [
  {
    title: 'Product Management',
    path: '/product-management/products',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='products'
          element={
            <>
              <PageTitle breadcrumbs={usersBreadcrumbs}>Products list</PageTitle>
              <UsersListWrapper />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/product-management/products' />} />
    </Routes>
  )
}

export default UsersPage
