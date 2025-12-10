import {lazy, FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import {CreateProduct} from '../pages/dashboard/CreateProduct'

const PrivateRoutes = () => {
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))
  const ProductsPage = lazy(() => import('../modules/apps/product-management/ProductsPage'))
  const ExpiredProductPage = lazy(
    () => import('../modules/apps/expired-product-management/ExpiredProductsPage')
  )
  const CategoryPage = lazy(() => import('../modules/apps/category-management/CategorysPage'))
  const CouponsPage = lazy(() => import('../modules/apps/coupons-management/CouponsPage'))
  const CustomerPage = lazy(() => import('../modules/apps/customer-management/CustomersPage'))

  const DeleteAccountPage = lazy(
    () => import('../modules/apps/delete-account-management/UsersPage')
  )
  const DepartmentPage = lazy(() => import('../modules/apps/department-management/ProductsPage'))
  const DesignationsPage = lazy(() => import('../modules/apps/designation-management/ProductsPage'))
  const EmployeesPage = lazy(() => import('../modules/apps/employee-management/UsersPage'))
  const LowStocksPage = lazy(() => import('../modules/apps/low-stock-management/ProductsPage'))
  const UserProfilePage = lazy(() => import('../modules/apps/profile-management/UsersPage'))
 
  const PurchaseOrderPage = lazy(
    () => import('../modules/apps/purchase-order-management/ProductsPage')
  )
  
  const PurchaseReturnPage = lazy(
    () => import('../modules/apps/purchase-return-management/ProductsPage')
  )
  const PurchasePage = lazy(() => import('../modules/apps/purchases-management/ProductsPage'))
  const QuotationPage = lazy(() => import('../modules/apps/quotation-management/UsersPage'))
  const RolePage = lazy(() => import('../modules/apps/role-management/ProductsPage'))
  const SalePage = lazy(() => import('../modules/apps/sale-management/UsersPage'))
  const SalesReturnPage = lazy(() => import('../modules/apps/sale-return-management/UsersPage'))
  const SubCategoryPage = lazy(() => import('../modules/apps/sub-category-management/ProductsPage'))
 
  const SuppliersPage = lazy(() => import('../modules/apps/suppliers-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='create-product' element={<CreateProduct />} />

        <Route
          path='product-management/*'
          element={
            <SuspensedView>
              <ProductsPage />
            </SuspensedView>
          }
        />
        <Route
          path='expired-product-management/*'
          element={
            <SuspensedView>
              <ExpiredProductPage />
            </SuspensedView>
          }
        />
       
        <Route
          path='category-management/*'
          element={
            <SuspensedView>
              <CategoryPage />
            </SuspensedView>
          }
        />
        <Route
          path='coupons-management/*'
          element={
            <SuspensedView>
              <CouponsPage />
            </SuspensedView>
          }
        />
     
        <Route
          path='customer-management/*'
          element={
            <SuspensedView>
              <CustomerPage />
            </SuspensedView>
          }
        />
      
        <Route
          path='delete-account-management/*'
          element={
            <SuspensedView>
              <DeleteAccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='department-management/*'
          element={
            <SuspensedView>
              <DepartmentPage />
            </SuspensedView>
          }
        />
        <Route
          path='designation-management/*'
          element={
            <SuspensedView>
              <DesignationsPage />
            </SuspensedView>
          }
        />
        <Route
          path='employee-management/*'
          element={
            <SuspensedView>
              <EmployeesPage />
            </SuspensedView>
          }
        />
       
        <Route
          path='low-stock-management/*'
          element={
            <SuspensedView>
              <LowStocksPage />
            </SuspensedView>
          }
        />
      
    
        <Route
          path='profile-management/*'
          element={
            <SuspensedView>
              <UserProfilePage />
            </SuspensedView>
          }
        />
       
        <Route
          path='purchase-order-management/*'
          element={
            <SuspensedView>
              <PurchaseOrderPage />
            </SuspensedView>
          }
        />
       
        <Route
          path='purchase-return-management/*'
          element={
            <SuspensedView>
              <PurchaseReturnPage />
            </SuspensedView>
          }
        />
        <Route
          path='purchases-management/*'
          element={
            <SuspensedView>
              <PurchasePage />
            </SuspensedView>
          }
        />
        <Route
          path='quotation-management/*'
          element={
            <SuspensedView>
              <QuotationPage />
            </SuspensedView>
          }
        />
        <Route
          path='role-management/*'
          element={
            <SuspensedView>
              <RolePage />
            </SuspensedView>
          }
        />
        <Route
          path='sale-management/*'
          element={
            <SuspensedView>
              <SalePage />
            </SuspensedView>
          }
        />
       
        <Route
          path='sale-return-management/*'
          element={
            <SuspensedView>
              <SalesReturnPage />
            </SuspensedView>
          }
        />
      
      
        <Route
          path='sub-category-management/*'
          element={
            <SuspensedView>
              <SubCategoryPage />
            </SuspensedView>
          }
        />
      
        <Route
          path='suppliers-management/*'
          element={
            <SuspensedView>
              <SuppliersPage />
            </SuspensedView>
          }
        />
       
        <Route
          path='apps/user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
       
       
        <Route path='builder' element={<BuilderPageWrapper />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />

      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--bs-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
