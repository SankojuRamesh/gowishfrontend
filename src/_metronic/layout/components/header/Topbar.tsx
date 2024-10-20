/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {useState} from 'react'
import clsx from 'clsx'
import {KTIcon, KTSVG, toAbsoluteUrl} from '../../../helpers'
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  QuickLinks,
  Search,
  ThemeModeSwitcher,
  UserProfileLinks,
} from '../../../partials'
import {LoginModel} from '../../../partials'
import {useAuth} from '../../../../app/modules/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { MenuInnerWithSub } from './MenuInnerWithSub'
import { useNavigate } from 'react-router-dom'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
  toolbarButtonHeightClass = 'btn-active-light-primary text-muted btn-custom w-30px h-30px w-md-40px h-md-40p',
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
  toolbarButtonIconSizeClass = 'fs-1'

const Topbar: FC = () => {
  const [showLoginModel, setLoginModel] = useState<boolean>(false)
  const {auth, wishCount, cartCount} = useAuth()
  const [user, setUser] = useState<any>(auth)
  const navigate = useNavigate()
  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      <div className='topbar d-flex align-items-stretch flex-shrink-0'>
        <span className='my-auto mx-4 text-muted heart-icon cursor-pointer position-relative d-inline-block' onClick={() => auth ? navigate('/mywishlist') : setLoginModel(true)}>
          <FontAwesomeIcon icon={faHeart} size='2x' />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{background: 'linear-gradient(45deg, rgb(19 71 231), rgb(163 173 240 / 90%))'}}>
            {wishCount || ''}
          </span>
        </span>
        <span className='m-auto mx-4 text-muted cart-icon cursor-pointer position-relative d-inline-block' onClick={() => auth ? navigate('/cart') : setLoginModel(true)}>
        <FontAwesomeIcon icon={faCartShopping} size='2x' />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{background: 'linear-gradient(45deg, rgb(19 71 231), rgb(163 173 240 / 90%))'}}>
            {cartCount || ''}
          </span>
        </span>
        {user ? (
          <div
            className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
            id='kt_header_user_menu_toggle'
          >
            <div
              className={clsx('cursor-pointer symbol', toolbarUserAvatarHeightClass)}
              data-kt-menu-trigger='click'
              data-kt-menu-attach='parent'
              data-kt-menu-placement='bottom-end'
              data-kt-menu-flip='bottom'
            >
              <img
                className='h-30px w-30px rounded'
                src={user?.profile_pic}
                alt='metronic'
              />
            </div>
            <UserProfileLinks />
          </div>
        ) : (
          <a
            className='btn'
            id='kt_toolbar_primary_button'
            style={{color: 'rgb(24, 28, 50)'}}
            onClick={() => setLoginModel(true)}
          >
            <img
              className='h-30px w-30px rounded'
              src={toAbsoluteUrl('/media/avatars/blank.png')}
              alt='metronic'
            />
          </a>
        )}
        <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}>
          <ThemeModeSwitcher toggleBtnClass={toolbarButtonHeightClass} />
        </div>
      </div>
      <LoginModel show={showLoginModel} handleClose={() => setLoginModel(false)} />
    </div>
  )
}

export {Topbar}
