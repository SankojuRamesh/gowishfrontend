import React, {useEffect, useState} from 'react'
import {useAuth} from '../../../modules/auth'
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks'
import {getOrderList} from '../../../../redux/slices/orderList'
import {baseUrl2} from '../../../modules/auth/core/ApiAxios'

export default function OrderCancelListContent() {
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
      const statusOrderList = orderListData.filter((data: any) => data.status === 'Cancelled')
      setOrders(statusOrderList)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(getOrders)
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
                    My Cancel list
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>
                      <a href='index.html' className='text-muted text-hover-primary'>
                        Home
                      </a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-400 w-5px h-2px' />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>
                      Cancel Orders &amp; Refund Status
                    </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className='d-flex align-items-center gap-2 gap-lg-3'>
                  {/*begin::Filter menu*/}
                  <div className='m-0'>
                    {/*begin::Menu toggle*/}
                    <a
                      href='#'
                      className='btn btn-sm btn-flex bg-body btn-color-gray-700 btn-active-color-primary fw-bold'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                    >
                      {/*begin::Svg Icon | path: icons/duotune/general/gen031.svg*/}
                      <span className='svg-icon svg-icon-6 svg-icon-muted me-1'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}Select Filter
                    </a>
                    {/*end::Menu toggle*/}
                    {/*begin::Menu 1*/}
                    <div
                      className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
                      data-kt-menu='true'
                      id='kt_menu_62cfa2e304dd3'
                    >
                      {/*begin::Header*/}
                      <div className='px-7 py-5'>
                        <div className='fs-5 text-dark fw-bold'>Select Filter Options</div>
                      </div>
                      {/*end::Header*/}
                      {/*begin::Menu separator*/}
                      <div className='separator border-gray-200' />
                      {/*end::Menu separator*/}
                      {/*begin::Form*/}
                      <div className='px-7 py-5'>
                        {/*begin::Input group*/}
                        <div className='mb-10'>
                          {/*begin::Label*/}
                          <label className='form-label fw-semibold'>Select days</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className='form-select form-select-solid'
                              data-kt-select2='true'
                              data-placeholder='Select option'
                              data-dropdown-parent='#kt_menu_62cfa2e304dd3'
                              data-allow-clear='true'
                            >
                              <option />
                              <option value={0}>All</option>
                              <option value={1}> Today </option>
                              <option value={2}> This Week </option>
                              <option value={2}> This Month </option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Input group*/}
                        <div className='mb-10'>
                          {/*begin::Label*/}
                          <label className='form-label fw-semibold'>Select Refund Status</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className='form-select form-select-solid'
                              data-kt-select2='true'
                              data-placeholder='Select option'
                              data-dropdown-parent='#kt_menu_62cfa2e304dd3'
                              data-allow-clear='true'
                            >
                              <option value={1}>All</option>
                              <option value={2}>Pending</option>
                              <option value={6}>Refund Paid</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::Actions*/}
                        <div className='d-flex justify-content-end'>
                          <button
                            type='reset'
                            className='btn btn-sm btn-light btn-active-light-primary me-2'
                            data-kt-menu-dismiss='true'
                          >
                            Reset
                          </button>
                          <button
                            type='submit'
                            className='btn btn-sm btn-primary'
                            data-kt-menu-dismiss='true'
                          >
                            Apply
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </div>
                      {/*end::Form*/}
                    </div>
                    {/*end::Menu 1*/}
                  </div>
                  {/*end::Filter menu*/}
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content flex-column-fluid'>
              {/*begin::Content container*/}
              <div id='kt_app_content_container' className='app-container container-xxl'>
                {/*begin::oder lise sessions*/}
                <div className='card mb-5 mb-xxl-10'>
                  {/*begin::Card header*/}
                  <div className='card-header'>
                    {/*begin::Heading*/}
                    <div className='card-title'>
                      <h3> Cancel list </h3>
                    </div>
                    {/*end::Heading*/}
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Card body*/}
                  <div className='card-body p-0'>
                    {/*begin::Table wrapper*/}
                    <div className='table-responsive'>
                      {/*begin::Table*/}
                      <table className='table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9'>
                        {/*begin::Thead*/}
                        <thead className='border-gray-200 fs-5 fw-semibold bg-lighten'>
                          {/*begin::Table row*/}
                          <tr className='text-start text-muted fw-bold fs-7 text-uppercase gs-0'>
                            <th className='min-w-125px'> Date</th>
                            <th className='min-w-125px'>Product</th>
                            <th className='min-w-125px'>Amount</th>
                            <th className='min-w-125px'>CP Bounes</th>
                            <th className='min-w-125px'>Charges </th>
                            <th className='min-w-125px'>Refund Status</th>
                            <th className='min-w-125px'>Order Status </th>
                          </tr>
                          {/*end::Table row*/}
                        </thead>
                        {/*end::Thead*/}
                        {/*begin::Tbody*/}
                        <tbody className='fw-6 fw-semibold text-gray-600'>
                          {getOrders?.map((orderDetails: any) => {
                            return orderDetails.cart_products?.map((products: any) => {
                              console.log(products)
                              return (
                                <tr>
                                  {/*Start::Order ID=*/}
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <span className='fw-bold'>Feb 02, 2021</span>
                                      <a
                                        href='../../demo1/dist/apps/ecommerce/sales/details.html'
                                        className='text-gray-800 text-hover-primary fw-bold'
                                      >
                                        OIDU {products?.product?.id}
                                      </a>
                                    </div>
                                  </td>
                                  {/*end::Order ID=*/}
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <div className='d-flex align-items-center'>
                                        {/*begin::Thumbnail*/}
                                        <span className='symbol symbol-50px'>
                                          <span
                                            className='symbol-label'
                                            style={{
                                              backgroundImage:
                                                'url(assets/media//stock/ecommerce/2.gif)',
                                            }}
                                          />
                                        </span>
                                        {/*end::Thumbnail*/}
                                        <div className='d-flex flex-column'>
                                          <div className='ms-2'>
                                            {/*begin::Title*/}
                                            <span className='fw-bold'>
                                              {products?.product?.product_name}
                                            </span>
                                            {/*end::Title*/}
                                          </div>
                                          <div className='ms-2'>
                                            <span className='badge badge-light-dark fw-bolder'>
                                              hindus{' '}
                                            </span>
                                            <span className='badge badge-light-dark fw-bolder'>
                                              universal
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <div className='d-flex align-items-center'>
                                        <div className='d-flex flex-column'>
                                          <div className='ms-2'>
                                            {/*begin::Title*/}
                                            <span className='fw-bold'>
                                              ₹ {products?.product?.product_price}
                                            </span>
                                            {/*end::Title*/}
                                          </div>
                                          <div className='ms-2'>
                                            Online
                                            <span className='badge badge-light-success fw-bolder'>
                                              Paid
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <div className='d-flex align-items-center'>
                                        <div className='d-flex flex-column'>
                                          <div className='ms-2'>
                                            {/*begin::Title*/}
                                            <span className='fw-bold'>$ 0.00</span>
                                            {/*end::Title*/}
                                          </div>
                                          <div className='ms-2'>
                                            <span className='badge badge-light-danger fw-bolder'>
                                              CB DISCOUNT - 0%
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <div className='ms-2'>
                                        {/*begin::Title*/}
                                        <span className='fw-bold'>$ 250.00</span>
                                        {/*end::Title*/}
                                      </div>
                                      <div className='ms-2'>
                                        <span className='badge badge-light-danger fw-bolder'>
                                          Charges - 50%
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='d-flex flex-column'>
                                      <div className='ms-2'>
                                        <span className='fw-bold'>$ 250.00</span>
                                      </div>
                                      <div className='ms-2'>
                                        <span className='badge badge-light-dark fw-bolder'>
                                          Pending
                                        </span>{' '}
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className='ms-2'>
                                      <span className='badge badge-light-danger fw-bolder'>
                                        Cancel
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          })}
                        </tbody>
                        {/*end::Tbody*/}
                      </table>
                      {/*end::Table*/}
                    </div>
                    {/*end::Table wrapper*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::order list sessions*/}
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
