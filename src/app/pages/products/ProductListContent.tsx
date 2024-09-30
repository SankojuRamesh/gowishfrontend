import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import ApiAxios, {baseUrl2} from '../../modules/auth/core/ApiAxios'
import {ProductDetailsModel} from '../../../_metronic/partials'

export default function ProductListContent() {
  const {subCategoryId} = useParams()
  const [showProductDetailsModel, setProductDetailsModel] = useState<boolean>(false)
  const [getProductId, setProductId] = useState(null)

  const handleClick = (productId: any) => {
    setProductDetailsModel(true)
    setProductId(productId)
  }
  console.log(getProductId)

  const [getProductsList, setProductList] = useState([])
  useEffect(() => {
    getProductsListData()
  }, [])

  const getProductsListData = async () => {
    try {
      const getData = await ApiAxios.get(`products/sub_category_products/${subCategoryId}`)
      setProductList(getData.data)
    } catch (err) {
      console.log(err)
    }
  }
  console.log(getProductsList)
  return (
    <>
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
                      Engagement
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
                      <li className='breadcrumb-item'>
                        <span className='bullet bg-gray-400 w-5px h-2px' />
                      </li>
                      <li className='breadcrumb-item text-muted'>
                        <a
                          href='../../demo1/dist/front end/Page 02.html'
                          className='text-muted text-hover-primary'
                        >
                          Invatations
                        </a>
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className='breadcrumb-item'>
                        <span className='bullet bg-gray-400 w-5px h-2px' />
                      </li>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <li className='breadcrumb-item text-muted'>Engagement list</li>
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
                      <h3 className='fw-bold me-5 my-1'>Total Media (2 )</h3>
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
                    <div className='d-flex flex-wrap my-1'>
                      <div className='d-flex my-0'>
                        {/*begin::Select*/}
                        <select
                          name='status'
                          data-control='select2'
                          data-hide-search='true'
                          data-placeholder='Filter'
                          className='form-select form-select-sm border-body bg-body w-150px me-5'
                        >
                          <option value={1}>All View</option>
                          <option value={2}>Most Rcent</option>
                          <option value={3}>Most Rating</option>
                          <option value={4}>Most Tranding</option>
                        </select>
                        {/*end::Select*/}
                      </div>
                      {/*end::Actions*/}
                    </div>
                    {/*end::Controls*/}
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::Tab card Content*/}
                  <div className='tab-content'>
                    {/*begin::Tab card box pane*/}
                    <div id='kt_project_users_card_pane' className='tab-pane fade show active'>
                      {/*begin::Row*/}
                      <div className='row g-6 g-xl-9'>
                        {/*begin::Media Card Col*/}
                        {getProductsList?.map((products: any) => {
                          return (
                            <div className='col-md-6 col-xxl-4'>
                              {/*begin::Card*/}
                              <div className='card'>
                                {/*begin::Card body*/}
                                <div className='card-rounded position-relative mb-2'>
                                  {/*begin::Img*/}
                                  <Link
                                    to={`/product_details/${products?.id}`}
                                    className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                                  >
                                    <div
                                      className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                                      style={{
                                        backgroundImage: `url("${baseUrl2}${products?.image}")`,
                                      }}
                                    />
                                  </Link>
                                  {/*end::Img*/}
                                  {/*begin::Play*/}
                                  <a href='#'>
                                    <button className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'>
                                      <i className='fonticon-play text-white fs-2x' />
                                    </button>
                                  </a>
                                  {/*end::Play*/}
                                </div>
                                <div className='m-0 mb-2 p-2'>
                                  {/*begin::Title*/}
                                  <Link
                                    to={`/product_details/${products?.id}`}
                                    className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                                  >
                                    {products?.product_name}
                                  </Link>
                                  {/*end::Title*/}
                                  <div className='d-flex flex-stack mb-2'>
                                    {/*begin::Label*/}
                                    <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                                      {products?.short_description}
                                    </span>
                                    {/*begin::Action*/}
                                    <div className='btn-chips'>
                                      <span className='badge badge-light fw-bold'>hindus</span>
                                      <span className='badge badge-light fw-bold'>Standred</span>
                                    </div>
                                    {/*end::Action*/}
                                  </div>
                                  <div className='d-flex flex-stack fw-bold'>
                                    {/*begin::Label*/}
                                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                                      {products?.product_price}
                                    </span>
                                    <span>
                                      <s>$ {products?.mrp}</s>
                                    </span>
                                    {/* <span className='text-danger fs-8'>Save 10% off</span> */}
                                    {/*begin::Action*/}
                                    <div className='btn-chips'>
                                      {/*begin::add favourate*/}
                                      <span
                                        className='btn btn-icon btn-light-primary me-3'
                                        data-bs-toggle='tooltip'
                                        data-bs-placement='top'
                                        title='Add Favourites'
                                      >
                                        <i className='fonticon-like fs-2x' />
                                      </span>
                                      {/*End::add favourate*/}
                                      {/*begin::add to cart*/}
                                      <span
                                        className='btn btn-icon btn-light-primary me-3'
                                        data-bs-toggle='tooltip'
                                        data-bs-placement='top'
                                        title='Add To Cart'
                                      >
                                        <i className='fonticon-app-store fs-2x' />
                                      </span>
                                      {/*end::add to cart*/}
                                      {/*begin::quick to order*/}
                                      <span
                                        className='btn btn-icon btn-light-primary me-3'
                                        data-bs-toggle='tooltip'
                                        data-bs-placement='top'
                                        title='Quick to Order'
                                      >
                                        <svg
                                          width={24}
                                          height={24}
                                          viewBox='0 0 24 24'
                                          fill='none'
                                          xmlns='http://www.w3.org/2000/svg'
                                        >
                                          <path
                                            d='M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z'
                                            fill='currentColor'
                                          />
                                          <path
                                            opacity='0.3'
                                            d='M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z'
                                            fill='currentColor'
                                          />
                                        </svg>
                                      </span>
                                      {/*End::quick to order*/}
                                    </div>
                                    {/*end::Action*/}
                                  </div>
                                </div>
                                {/*end::Card body*/}
                              </div>
                              {/*end::Card*/}
                            </div>
                          )
                        })}

                        {/*End::Media Card Col*/}
                      </div>
                      {/*end::Row*/}
                    </div>
                    {/*end::Tab card box pane*/}
                  </div>
                  {/*end::Tab card table Content*/}
                </div>
                {/*end::Content*/}
              </div>
              {/*end::Content wrapper*/}
            </div>
            {/*end:::Main*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        <ProductDetailsModel
          show={showProductDetailsModel}
          handleClose={() => setProductDetailsModel(false)}
          productId={getProductId}
        />
      </>
    </>
  )
}
