import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { getCSSVariableValue } from '../../_metronic/assets/ts/_utils'
import { WithChildren } from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import { CreateUser } from '../pages/dashboard/CreateUser'

const PrivateRoutes = () => {
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  const CategoryPage = lazy(() => import('../modules/apps/category-management/CategorysPage'))

  const DeleteAccountPage = lazy(
    () => import('../modules/apps/delete-account-management/UsersPage')
  )
  const LowStocksPage = lazy(() => import('../modules/apps/low-stock-management/ProductsPage'))
  const UserProfilePage = lazy(() => import('../modules/apps/profile-management/UsersPage'))


  const RolePage = lazy(() => import('../modules/apps/role-management/ProductsPage'))
  const SubCategoryPage = lazy(() => import('../modules/apps/sub-category-management/ProductsPage'))


  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='create-user' element={<CreateUser />} />

        <Route
          path='user-management/*'
          element={
            <SuspensedView>
              <UsersPage />
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
          path='delete-account-management/*'
          element={
            <SuspensedView>
              <DeleteAccountPage />
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
          path='role-management/*'
          element={
            <SuspensedView>
              <RolePage />
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

        <Route path='builder' element={<BuilderPageWrapper />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />

      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({ children }) => {
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

export { PrivateRoutes }
