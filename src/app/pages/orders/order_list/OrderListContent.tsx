import React, {useEffect, useState} from 'react'
import {useAuth} from '../../../modules/auth'
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks'
import {getOrderList} from '../../../../redux/slices/orderList'
import {baseUrl2} from '../../../modules/auth/core/ApiAxios'

export default function OrderListContent() {
  const {currentUser} = useAuth()
  const userId = currentUser?.id
  const [getOrders, setOrders] = useState([])
  const {orderList, isLoading} = useAppSelector((state) => state.orderList)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getOrderList(userId))
  }, [dispatch])

  useEffect(() => {
    if (orderList.length > 0) {
      orderFilter(orderList)
    }
  }, [orderList])

  const orderFilter = async (orderListData: any) => {
    try {
      const statusOrderList = orderListData.filter((data: any) => data.status !== 'Cancelled')
      setOrders(statusOrderList)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/*begin::Wrapper*/}
      <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
        {/*begin::Main*/}
        <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
          {/*begin::Content wrapper*/}
          <div className='d-flex flex-column flex-column-fluid'>
            {/*begin::Toolbar*/}
            <div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
              {/*begin::Toolbar container*/}
              <div
                id='kt_app_toolbar_container'
                className='app-container container-xxl d-flex flex-stack'
              >
                {/*begin::Page title*/}
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
                  {/*begin::Title*/}
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    Order list
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>
                      <a
                        href='../../demo1/dist/index.html'
                        className='text-muted text-hover-primary'
                      >
                        Home
                      </a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-400 w-5px h-2px' />
                    </li>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>My orders</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content flex-column-fluid'>
              {/*begin::Content container*/}
              <div id='kt_app_content_container' className='app-container container-xxl'>
                {/*begin::Toolbar*/}
                <div className='d-flex flex-wrap flex-stack pb-7'>
                  {/*begin::Title*/}
                  <div className='d-flex flex-wrap align-items-center my-1'>
                    <h3 className='fw-bold me-5 my-1'>Total Orders</h3>
                    {/*begin::Search*/}
                    <div className='d-flex align-items-center position-relative my-1'>
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                      <span className='svg-icon svg-icon-3 position-absolute ms-3'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            opacity='0.5'
                            x='17.0365'
                            y='15.1223'
                            width='8.15546'
                            height={2}
                            rx={1}
                            transform='rotate(45 17.0365 15.1223)'
                            fill='currentColor'
                          />
                          <path
                            d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <input
                        type='text'
                        id='kt_filter_search'
                        className='form-control form-control-sm border-body bg-body w-150px ps-10'
                        placeholder='Search'
                      />
                    </div>
                    {/*end::Search*/}
                  </div>
                  {/*end::Title*/}
                  {/*begin::Controls*/}
                  <div className='d-flex my-0'>
                    {/*begin::Select*/}
                    <select
                      name='status'
                      data-control='select2'
                      data-hide-search='true'
                      data-placeholder='Filter'
                      className='form-select form-select-sm border-body bg-body w-150px me-5'
                    >
                      <option value={1}>All</option>
                      <option value={2}>Today</option>
                      <option value={3}>This Week</option>
                      <option value={4}>This Month</option>
                    </select>
                    {/*end::Select*/}
                  </div>
                  {/*end::Actions*/}
                </div>
                {/*end::Toolbar*/}
                {/*begin::Tab card Content*/}
                {/*begin::Row*/}
                <div className='row g-6 g-xl-9'>
                  {getOrders?.map((order_list: any, i = 0) => {
                    if (orderList !== 'undefined')
                      return (
                        <>
                          <div key={i} className='card card-flush h-xl-100'>
                            <div className='card-header'>
                              <div className='card-title'>
                                <h4 className='card-title d-flex align-items-start flex-column'>
                                  <span className='card-label fw-bold text-gray-800'>
                                    Orders (1)
                                  </span>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className='row g-6 mb-xl-9 mt-1'>
                            {order_list.cart_products?.map((cart_product: any, i = 0) => {
                              if (
                                order_list?.status !== 'undefined' &&
                                order_list?.status === 'Ordered'
                              ) {
                                return (
                                  <div key={i} className='col-md-4 col-xxl-3 mt-1'>
                                    <div className='ribbon ribbon-bottom'>
                                      <div className='card-header justify-content-end ribbon ribbon-top ps-0 pe-0'>
                                        <span className='ribbon-label bg-light-dark'>
                                          <a
                                            href='../../demo1/dist/GOWISH/04.DATA EMPTY/09.Order Processing.html'
                                            className='fs-6 fw-bold text-dark'
                                          >
                                            Pending
                                          </a>
                                        </span>
                                        <div className='card'>
                                          <div className='card-rounded position-relative mb-2'>
                                            {/*begin::Img*/}
                                            <div
                                              className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                                              style={{
                                                backgroundImage: `url("${baseUrl2}${cart_product?.product?.image}")`,
                                              }}
                                            />
                                            {/*end::Img*/}
                                            {/*begin::Play*/}
                                            <button
                                              className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'
                                              data-kt-element='list-play-button'
                                            >
                                              <i
                                                className='fonticon-play text-white fs-2x'
                                                data-kt-element='list-play-icon'
                                              />
                                              <i
                                                className='fonticon-pause text-white fs-2x d-none'
                                                data-kt-element='list-pause-icon'
                                              />
                                            </button>
                                            {/*end::Play*/}
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <span className='fs-6 text-dark fw-semi-bold'>
                                              {cart_product?.product?.product_name} Pro
                                            </span>
                                            {/*end::Title*/}
                                            <div className='d-flex flex-stack mb-2'>
                                              {/*begin::Label*/}
                                              <span className='fw-bold fs-7 text-gray-400 d-block lh-1'>
                                                WIDE00000001
                                              </span>
                                              {/*begin::Action*/}
                                              <div className='btn-chips'>
                                                <span className='badge badge-light fw-bold'>
                                                  Vertical
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Musilm
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Universal
                                                </span>
                                              </div>
                                              {/*end::Action*/}
                                            </div>
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <div className='d-flex flex-stack fw-bold'>
                                              <div className='btn-chips'>
                                                <div className='m-0 mb-2 px-3'>
                                                  <div className='d-flex flex-stack fw-bold'>
                                                    <div className='m-0 mb-2 px-3'>
                                                      <div className='separator separator-dashed my-3' />
                                                      <div className='d-flex align-items-center flex-wrap d-grid gap-4'>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center me-5 me-xl-10'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              09:32 AM
                                                            </span>
                                                            <span className='text-gray-800 fw-bold'>
                                                              Nov 26, 2020{' '}
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              {' '}
                                                              PC-500021
                                                            </span>
                                                            <span className='text-muted'>
                                                              <span className='text-gray-800 fw-bold'>
                                                                {' '}
                                                                OIDU 000001{' '}
                                                              </span>
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/*end::Action*/}
                                                </div>
                                              </div>
                                            </div>
                                            {/*end::Action*/}
                                          </div>
                                        </div>
                                      </div>
                                      {/*end::Card body*/}
                                    </div>{' '}
                                  </div>
                                )
                              } else if (
                                order_list?.status !== 'undefined' &&
                                order_list?.status === 'Processing'
                              ) {
                                return (
                                  <div key={i} className='col-md-4 col-xxl-3 mt-1'>
                                    <div className='ribbon ribbon-bottom'>
                                      <div className='card-header justify-content-end ribbon ribbon-top ps-0 pe-0'>
                                        <span className='ribbon-label bg-primary'>
                                          <a
                                            href='../../demo1/dist/GOWISH/04.DATA EMPTY/09.Order Processing.html'
                                            className='fs-6 fw-bold text-light'
                                          >
                                            {' '}
                                            Processing{' '}
                                          </a>
                                        </span>
                                        <div className='card'>
                                          <div className='card-rounded position-relative mb-2'>
                                            {/*begin::Img*/}
                                            <div
                                              className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                                              style={{
                                                backgroundImage: `url("${baseUrl2}${cart_product?.product?.image}")`,
                                              }}
                                            />
                                            {/*end::Img*/}
                                            {/*begin::Play*/}
                                            <button
                                              className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'
                                              data-kt-element='list-play-button'
                                            >
                                              <i
                                                className='fonticon-play text-white fs-2x'
                                                data-kt-element='list-play-icon'
                                              />
                                              <i
                                                className='fonticon-pause text-white fs-2x d-none'
                                                data-kt-element='list-pause-icon'
                                              />
                                            </button>
                                            {/*end::Play*/}
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <span className='fs-6 text-dark fw-semi-bold'>
                                              {cart_product?.product?.product_name}
                                            </span>
                                            {/*end::Title*/}
                                            <div className='d-flex flex-stack mb-2'>
                                              {/*begin::Label*/}
                                              <span className='fw-bold fs-7 text-gray-400 d-block lh-1'>
                                                WIDE00000001
                                              </span>
                                              {/*begin::Action*/}
                                              <div className='btn-chips'>
                                                <span className='badge badge-light fw-bold'>
                                                  Vertical
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Musilm
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Universal
                                                </span>
                                              </div>
                                              {/*end::Action*/}
                                            </div>
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <div className='d-flex flex-stack fw-bold'>
                                              <div className='btn-chips'>
                                                <div className='m-0 mb-2 px-3'>
                                                  <div className='d-flex flex-stack fw-bold'>
                                                    <div className='m-0 mb-2 px-3'>
                                                      <div className='separator separator-dashed my-3' />
                                                      <div className='d-flex align-items-center flex-wrap d-grid gap-4'>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center me-5 me-xl-10'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              09:32 AM
                                                            </span>
                                                            <span className='text-gray-800 fw-bold'>
                                                              Nov 26, 2020{' '}
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              {' '}
                                                              PC-500021
                                                            </span>
                                                            <span className='text-muted'>
                                                              <span className='text-gray-800 fw-bold'>
                                                                {' '}
                                                                OIDU 000001{' '}
                                                              </span>
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/*end::Action*/}
                                                </div>
                                              </div>
                                            </div>
                                            {/*end::Action*/}
                                          </div>
                                        </div>
                                      </div>
                                      {/*end::Card body*/}
                                    </div>{' '}
                                  </div>
                                )
                              } else if (
                                order_list?.status !== 'undefined' &&
                                order_list?.status === 'Completed'
                              ) {
                                return (
                                  <div key={i} className='col-md-4 col-xxl-3 mt-1'>
                                    <div className='ribbon ribbon-bottom'>
                                      <div className='ribbon-label bg-light-dark'>
                                        <span className='fs-6 fw-bold text-dark'>V01</span>
                                      </div>
                                      <div className='card-header justify-content-end ribbon ribbon-top ps-0 pe-0'>
                                        <span className='ribbon-label bg-info'>
                                          <a href='#' className='fs-6 fw-bold text-light'>
                                            {' '}
                                            For Review{' '}
                                          </a>
                                        </span>
                                        <div className='card'>
                                          <div className='card-rounded position-relative mb-2'>
                                            {/*begin::Img*/}
                                            <div
                                              className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                                              style={{
                                                backgroundImage: `url("${baseUrl2}${cart_product?.product?.image}")`,
                                              }}
                                            />
                                            {/*end::Img*/}
                                            {/*begin::Play*/}
                                            <button
                                              className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'
                                              data-kt-element='list-play-button'
                                            >
                                              <i
                                                className='fonticon-play text-white fs-2x'
                                                data-kt-element='list-play-icon'
                                              />
                                              <i
                                                className='fonticon-pause text-white fs-2x d-none'
                                                data-kt-element='list-pause-icon'
                                              />
                                            </button>
                                            {/*end::Play*/}
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <span className='fs-6 text-dark fw-semi-bold'>
                                              {cart_product?.product?.product_name}
                                            </span>
                                            {/*end::Title*/}
                                            <div className='d-flex flex-stack mb-2'>
                                              {/*begin::Label*/}
                                              <span className='fw-bold fs-7 text-gray-400 d-block lh-1'>
                                                WIDE00000001
                                              </span>
                                              {/*begin::Action*/}
                                              <div className='btn-chips'>
                                                <span className='badge badge-light fw-bold'>
                                                  Vertical
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Musilm
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Universal
                                                </span>
                                              </div>
                                              {/*end::Action*/}
                                            </div>
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <div className='d-flex flex-stack fw-bold'>
                                              <div className='btn-chips'>
                                                <div className='m-0 mb-2 px-3'>
                                                  <div className='d-flex flex-stack fw-bold'>
                                                    <div className='m-0 mb-2 px-3'>
                                                      <div className='separator separator-dashed my-3' />
                                                      <div className='d-flex align-items-center flex-wrap d-grid gap-4'>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center me-5 me-xl-10'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              10:49 AM
                                                            </span>
                                                            <span className='text-gray-800 fw-bold'>
                                                              Nov 26, 2020{' '}
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              {' '}
                                                              PC-500021
                                                            </span>
                                                            <span className='text-muted'>
                                                              <span className='text-gray-800 fw-bold'>
                                                                {' '}
                                                                OIDU 000001{' '}
                                                              </span>
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/*end::Action*/}
                                                </div>
                                              </div>
                                            </div>
                                            {/*end::Action*/}
                                          </div>
                                        </div>
                                      </div>
                                      {/*end::Card body*/}
                                    </div>{' '}
                                  </div>
                                )
                              } else if (
                                order_list?.status !== 'undefined' &&
                                order_list?.status === 'Rejected'
                              ) {
                                return (
                                  <div key={i} className='col-md-4 col-xxl-3 mt-1'>
                                    <div className='ribbon ribbon-bottom'>
                                      <div className='ribbon-label bg-light dark'>
                                        <span className='fs-6 fw-bold text-dark'>V01</span>
                                      </div>
                                      <div className='card-header justify-content-end ribbon ribbon-top ps-0 pe-0'>
                                        <span className='ribbon-label bg-warning'>
                                          <a href='#' className='fs-6 fw-bold text-light'>
                                            {' '}
                                            Rejected{' '}
                                          </a>
                                        </span>
                                        <div className='card'>
                                          <div className='card-rounded position-relative mb-2'>
                                            {/*begin::Img*/}
                                            <div
                                              className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                                              style={{
                                                backgroundImage: `url("${baseUrl2}${cart_product?.product?.image}")`,
                                              }}
                                            />
                                            {/*end::Img*/}
                                            {/*begin::Play*/}
                                            <button
                                              className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'
                                              data-kt-element='list-play-button'
                                            >
                                              <i
                                                className='fonticon-play text-white fs-2x'
                                                data-kt-element='list-play-icon'
                                              />
                                              <i
                                                className='fonticon-pause text-white fs-2x d-none'
                                                data-kt-element='list-pause-icon'
                                              />
                                            </button>
                                            {/*end::Play*/}
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <span className='fs-6 text-dark fw-semi-bold'>
                                              {cart_product?.product?.product_name}
                                            </span>
                                            {/*end::Title*/}
                                            <div className='d-flex flex-stack mb-2'>
                                              {/*begin::Label*/}
                                              <span className='fw-bold fs-7 text-gray-400 d-block lh-1'>
                                                WIDE00000001
                                              </span>
                                              {/*begin::Action*/}
                                              <div className='btn-chips'>
                                                <span className='badge badge-light fw-bold'>
                                                  Vertical
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Musilm
                                                </span>
                                                <span className='badge badge-light fw-bold'>
                                                  Universal
                                                </span>
                                              </div>
                                              {/*end::Action*/}
                                            </div>
                                          </div>
                                          <div className='m-0 mb-2 px-3'>
                                            <div className='d-flex flex-stack fw-bold'>
                                              <div className='btn-chips'>
                                                <div className='m-0 mb-2 px-3'>
                                                  <div className='d-flex flex-stack fw-bold'>
                                                    <div className='m-0 mb-2 px-3'>
                                                      <div className='separator separator-dashed my-3' />
                                                      <div className='d-flex align-items-center flex-wrap d-grid gap-4'>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center me-5 me-xl-10'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              11:30 AM
                                                            </span>
                                                            <span className='text-gray-800 fw-bold'>
                                                              Nov 26, 2020{' '}
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*begin::Item*/}
                                                        <div className='d-flex align-items-center'>
                                                          {/*begin::Info*/}
                                                          <div className='m-0'>
                                                            <span className='fw-semibold text-gray-400 d-block fs-8'>
                                                              {' '}
                                                              PC-500021
                                                            </span>
                                                            <span className='text-muted'>
                                                              <span className='text-gray-800 fw-bold'>
                                                                {' '}
                                                                OIDU 000001{' '}
                                                              </span>
                                                            </span>
                                                          </div>
                                                          {/*end::Info*/}
                                                        </div>
                                                        {/*end::Item*/}
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/*end::Action*/}
                                                </div>
                                              </div>
                                            </div>
                                            {/*end::Action*/}
                                          </div>
                                        </div>
                                      </div>
                                      {/*end::Card body*/}
                                    </div>{' '}
                                  </div>
                                )
                              }
                            })}
                          </div>
                        </>
                      )
                  })}
                </div>
                {/*end::Row*/}
                {/*begin::Modals*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </>
  )
}
function useSate(): {currentUserId: any; setCurrentUserId: any} {
  throw new Error('Function not implemented.')
}
