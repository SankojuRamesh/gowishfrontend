import {lazy, FC, Suspense, useEffect} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import {SubCategoryPage} from '../pages/sub-categories/SubCategories'
import {ProductsListPage} from '../pages/products/ProductsListPage'
import {ProductDetailsPage} from '../pages/product_details/ProductDetailsPage'
import {FavoritePage} from '../pages/favorite/FavoritePage'
import {QuickOrderPage} from '../pages/orders/quick_order/QuickOrderPage'
import {ProfileDetailsPage} from '../modules/profile_details/ProfileDetailsPage'
import {OrderListPage} from '../pages/orders/order_list/OrderListPage'
import {OrderCancelListPage} from '../pages/orders/order_cancel_list/OrderCancelListPage'
import {MyUsersPage} from '../pages/my_users/MyUsersPage'
import {MyOverViewPage} from '../pages/my_over_view/MyOverViewPage'
import {useAuth} from '../modules/auth'
import DashboardPage from '../pages/dashboard/DashboardPage'
import { ProtectedRoute } from './ProtectedRoute'
import { CategoriesList } from '../pages/categories/CategoriesList'
import { SubCategoriesList } from '../pages/subcategories/SubCategoriesList'
import { TemplatesPage } from '../pages/templatesPage/TemplatesPage'
import { Templates } from '../pages/home_templates/Templates'
import { WishList } from '../pages/wishList/WishList'
import { TemplatesDetailsPage } from '../pages/templateDetails/TemplateDetailsPage'
import { CartPage } from '../pages/cart/CartPage'
import { CartOrderPage } from '../pages/cartOrder/CartOrderPage'
import { BillingPage } from '../pages/billing/BillingPage'
import { EditPage } from '../pages/editPage/EditPage'
import Composits from '../pages/composits/Composits'
import Layers from '../pages/layers/Layers'
import { MyTemplates } from '../pages/my_templates/MyTemplates'

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  const {currentUser} = useAuth()

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/home' />} />
        {/* Pages */}
        {/* <Route path='home' element={<DashboardWrapper />} /> */}
        <Route
        path='home'
        element={
          <ProtectedRoute
            element={<DashboardWrapper />}
            allowedRoles={[2, 3, 4]}
          />
        }
      />
        <Route
        path='dashboard'
        element={
          <ProtectedRoute
            element={<DashboardPage />}
            allowedRoles={[1]}
          />
        }
      />
        <Route
        path='admin/categories'
        element={
          <ProtectedRoute
            element={<CategoriesList />}
            allowedRoles={[1]}
          />
        }
      />
        <Route
        path='admin/subcategories'
        element={
          <ProtectedRoute
            element={<SubCategoriesList />}
            allowedRoles={[1]}
          />
        }
      />
      <Route
        path='admin/templates'
        element={
          <ProtectedRoute
            element={<TemplatesPage />}
            allowedRoles={[1]}
          />
        }
      />
      <Route
        path='/mywishlist'
        element={
          <ProtectedRoute
            element={<WishList />}
            allowedRoles={[1, 2, 3, 4]}
          />
        }
      />
      <Route
        path='/my-templates'
        element={
          <ProtectedRoute
            element={<MyTemplates />}
            allowedRoles={[4]}
          />
        }
      />
      {/* <Route
        path='/templates/details/:id'
        element={
          <ProtectedRoute
            element={<TemplatesDetailsPage />}
            allowedRoles={[1, 2, 3, 4]}
          />
        }
      /> */}
      <Route
        path='/cart'
        element={
          <ProtectedRoute
            element={<CartPage />}
            allowedRoles={[1,2,3,4]}
          />
        }
      />
      <Route
        path='/composits/:id'
        element={
          <ProtectedRoute
            element={<Composits />}
            allowedRoles={[1]}
          />
        }
      />
      <Route
        path='/layers'
        element={
          <ProtectedRoute
            element={<Layers />}
            allowedRoles={[1]}
          />
        }
      />
      <Route
        path='/edit-template/:id'
        element={
          <ProtectedRoute
            element={<EditPage />}
            allowedRoles={[1,2,3,4]}
          />
        }
      />
      <Route
        path='/billing-page'
        element={
          <ProtectedRoute
            element={<BillingPage />}
            allowedRoles={[1,2,3,4]}
          />
        }
      />
        {/* <Route path='dashboard' element={<DashboardPage />} /> */}
        <Route path='templates/:id' element={<Templates />} />
        <Route path='/templates/details/:id' element={<TemplatesDetailsPage />} />
        <Route path='/cart-order/:id' element={<CartOrderPage />} />
        <Route path='cart-order' element={<CartOrderPage />} />
        <Route path='sub_categories/:mainCategoryId' element={<SubCategoryPage />} />
        <Route path='products/:subCategoryId' element={<ProductsListPage />} />
        <Route path='product_details/:productId' element={<ProductDetailsPage />} />
        <Route path='order_list' element={<OrderListPage />} />
        {/* <Route path='cart' element={<CartPage />} /> */}
        <Route path='favorites' element={<FavoritePage />} />
        <Route path='quick_order' element={<QuickOrderPage />} />
        <Route
          path='profile'
          element={
            <SuspensedView>
              <ProfileDetailsPage />
            </SuspensedView>
          }
        />
        <Route
          path='order_cancel_list'
          element={
            <SuspensedView>
              <OrderCancelListPage />
            </SuspensedView>
          }
        />
        <Route
          path='my_users'
          element={
            <SuspensedView>
              <MyUsersPage />
            </SuspensedView>
          }
        />
        <Route
          path='my_over_view'
          element={
            <SuspensedView>
              <MyOverViewPage />
            </SuspensedView>
          }
        />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='menu-test' element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/pages/wizards/*'
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/widgets/*'
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
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
