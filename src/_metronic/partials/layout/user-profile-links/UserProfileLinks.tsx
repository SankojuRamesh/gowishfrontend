/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {KTIcon, toAbsoluteUrl, KTSVG} from '../../../helpers'

const UserProfileLinks: FC = () => {
  const {currentUser} = useAuth()

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-2.jpg')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bold d-flex align-items-center fs-5'>
              {currentUser?.fullname}
              <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
            <a href='#' className='fw-semibold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='row g-0'>
        <div className='col-6 menu-item'>
          <Link
            to={'/profile'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-success mb-2'
              path={toAbsoluteUrl('/media/custom-svg/settings.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Profile Settings</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <Link
            to={'/logout'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-danger mb-2'
              path={toAbsoluteUrl('/media/custom-svg/logout.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Logout</span>
          </Link>
        </div>

        <div className='col-12 menu-item'>
          <Link
            to={'/my_over_view'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/over-view.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Over View</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <Link
            to={'/order_list'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/order-list.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Order List</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <a
            href='#'
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/active-list.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Active List</span>
          </a>
        </div>

        <div className='col-6 menu-item'>
          <Link
            to={'/order_cancel_list'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/cancel-list.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Cancel List</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <a
            href='#'
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/approved-list.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Approved List</span>
          </a>
        </div>

        <div className='col-6 menu-item'>
          <Link
            to={'/my_users'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/user.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>My User</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <Link
            to={'/favorites'}
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/love.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>My Favorites</span>
          </Link>
        </div>

        <div className='col-6 menu-item'>
          <a
            href='#'
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/active-list.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>My Billing</span>
          </a>
        </div>

        <div className='col-6 menu-item'>
          <a
            href='#'
            className='d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom menu-link'
          >
            <KTSVG
              className='svg-icon-3x svg-icon-primary mb-2'
              path={toAbsoluteUrl('/media/custom-svg/rewords.svg')}
            />
            <span className='fs-5 fw-semibold text-gray-800 mb-0'>Reword Points</span>
          </a>
        </div>
      </div>

      {/* <div className='py-2 text-center border-top'>
        <Link
          to='/crafted/pages/profile'
          className='btn btn-color-gray-600 btn-active-color-primary'
        >
          View All <KTIcon iconName='arrow-right' className='fs-5' />
        </Link>
      </div> */}
    </div>
  )
}

export {UserProfileLinks}
