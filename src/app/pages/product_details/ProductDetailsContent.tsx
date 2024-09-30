import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import {useFormik} from 'formik'
import {useAppDispatch, useAppSelector} from '../../../redux/hooks'
import {
  getProductDetails,
  getProductOptions,
  // getCategoryById,
  // getSubCategoryImg,
} from '../../../redux/slices/productDetails'
import ReactPlayer from 'react-player'
import {baseUrl2} from '../../modules/auth/core/ApiAxios'
import Carousel from 'react-multi-carousel'
import {Responsive} from '../../../_metronic/sliders/responsive'
import {useAuth} from '../../modules/auth'
import {LoginModel} from '../../../_metronic/partials'

const initialValues = {
  user_email: '',
  password: '',
}

export default function ProductDetailsContent() {
  const {productId} = useParams()
  const responsive = Responsive
  const {currentUser} = useAuth()
  const [showLoginModel, setLoginModel] = useState<boolean>(false)

  const {productDetails, productOptions, isLoading} = useAppSelector(
    (state) => state.productDetails
  )
  const dispatch = useAppDispatch()
  // const categoryId = productDetails?.category_id
  // const subCategoryId = productDetails?.sub_category

  useEffect(() => {
    dispatch(getProductDetails(productId))
    dispatch(getProductOptions(productId))
  }, [dispatch, productId])

  console.log(productOptions)

  const mrp = productDetails?.mrp
  const product_price = productDetails?.product_price
  const percentage = ((mrp - product_price) / mrp) * 100

  const formik = useFormik({
    initialValues,
    // validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {},
  })

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
                    Media View
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
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>Prodcut Media card</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                <div className='d-flex align-items-center gap-2 gap-lg-3'>
                  {/*begin::Filter menu*/}
                  <a href='#' className='btn btn-sm fw-bold btn-light-dark'>
                    Back
                  </a>
                </div>
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content flex-column-fluid'>
              {/*begin::Content container*/}
              <div id='kt_app_content_container' className='app-container container-xxl'>
                {/*begin::Layout*/}
                <div className='d-flex flex-column flex-xl-row'>
                  {/*begin::Content*/}
                  <div className='flex-lg-row-fluid '>
                    {/*begin:::Tab content*/}
                    {/*begin:::Tab pane*/}
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-2'>
                      {/*begin::Card header*/}
                      <ReactPlayer
                        className='react-player'
                        controls
                        url={`${baseUrl2}${productDetails?.video}`}
                        width='100%'
                        height='100%'
                      />
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*Start ::Media Images Discrepation*/}
                    <div className='card mb-2 mb-xl-2'>
                      {/*begin::Card header*/}
                      <div className='card-body pt-6'>
                        <div className='d-flex flex-stack my-2'>
                          {/*begin::Label*/}
                          <div className='me-2'>
                            {/*begin::Label*/}
                            <label className='fs-6 fw-semibold'>Media Refeance Cards</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <div className='fs-7 fw-semibold text-muted'>
                              {' '}
                              Media Cards Refence Images
                            </div>
                            {/*end::Input*/}
                          </div>
                          {/*end::Label*/}
                        </div>
                        <div className='card card-flush h-xl-100'>
                          <div className='row'>
                            <Carousel
                              responsive={responsive}
                              swipeable={true}
                              showDots={true}
                              autoPlay={true}
                              infinite={true}
                              // autoPlaySpeed={3000}
                              removeArrowOnDeviceType={['tablet', 'mobile']}
                            >
                              <div className='col w-100 pb-5 ps-2 pe-3'>
                                <a
                                  className='d-block overlay'
                                  data-fslightbox='lightbox-hot-sales'
                                  href='/media/images/hindu.webp.jpg'
                                >
                                  <div
                                    className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-100px'
                                    style={{
                                      backgroundImage: `url("")`,
                                    }}
                                  />
                                  <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                                    <i className='bi bi-eye-fill fs-2x text-white' />
                                  </div>
                                </a>
                                <div className='m-2'>
                                  {/*begin::Title*/}
                                  <a
                                    href='#'
                                    className='text-gray-600 text-hover-primary fs-6 fw-bold d-block mb-2'
                                  >
                                    Card
                                  </a>
                                  <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                                    Intro Captions
                                  </span>
                                </div>
                              </div>
                            </Carousel>
                          </div>
                          {/*end::Card body*/}
                          {/*end::Card header*/}
                        </div>
                      </div>
                    </div>
                    {/*Start ::Product Discrepation*/}
                    <div className='card mb-2 mb-xl-2'>
                      <div className='accordion' id='kt_accordion_2'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header' id='kt_accordion_1_header_2'>
                            <button
                              className='accordion-button fs-4 fw-semibold'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#kt_accordion_1_body_2'
                              aria-expanded='true'
                              aria-controls='kt_accordion_1_body_2'
                            >
                              <div
                                className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
                                data-kt-menu-trigger='click'
                                data-kt-menu-attach='parent'
                                data-kt-menu-placement='bottom-end'
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen022.svg*/}
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={16}
                                  height={16}
                                  fill='currentColor'
                                  className='bi bi-file-text'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z' />
                                  <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z' />
                                </svg>
                                {/*end::Svg Icon*/}
                              </div>
                              Meida Discrepation Details
                            </button>
                          </h2>
                          <div
                            id='kt_accordion_1_body_2'
                            className='accordion-collapse collapse show'
                            aria-labelledby='kt_accordion_1_header_2'
                            data-bs-parent='#kt_accordion_2'
                            style={{}}
                          >
                            <div className='accordion-body'>
                              {/*begin::Table*/}
                              <table className='table table-row-dashed table-row-gray-300 align-middle gs-0'>
                                {/*begin::Table head*/}
                                <tbody className='border-bottom border-dashed'>
                                  <tr className='text-center'>
                                    <td className='text-start ps-6'>
                                      <div className='fw-semibold fs-2 text-gray-800'>
                                        Meida Details{' '}
                                      </div>
                                    </td>
                                  </tr>
                                  {productOptions?.map((product_op: any) => {
                                    return (
                                      <>
                                        {product_op?.view_to_customer === 'Yes' && (
                                          <tr className='fw-semibold fs-6 text-gray-600 text-center'>
                                            <td className='text-start ps-6 fs-4'>
                                              {product_op?.option_name}
                                            </td>
                                            <td className='fw-semibold fs-6 text-gray-800 text-end'>
                                              {product_op?.product_mapping_product_options.map(
                                                (product_op_val: any, j: any) => {
                                                  return (
                                                    <>
                                                      {
                                                        product_op_val.product_option_value
                                                          .value_name
                                                      }
                                                      , &nbsp;
                                                    </>
                                                  )
                                                }
                                              )}
                                            </td>
                                          </tr>
                                        )}
                                      </>
                                    )
                                  })}
                                  <tr className='text-center'>
                                    <td className='text-start ps-6'>
                                      <div className='fw-semibold fs-2 text-gray-800'>
                                        Meida Media Information{' '}
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className='fw-semibold fs-6 text-gray-600 text-center'>
                                    <td className='text-start ps-6 fs-4'>Product File</td>
                                    <td className='fw-semibold fs-6 text-gray-800 text-end'>
                                      Digital Video
                                    </td>
                                  </tr>
                                  <tr className='fw-semibold fs-6 text-gray-600 text-center'>
                                    <td className='text-start ps-6 fs-4'>Product Format</td>
                                    <td className='fw-semibold fs-6 text-gray-800 text-end'>
                                      WebM,MP4,MOV,AVI,MKV
                                    </td>
                                  </tr>
                                  <tr className='fw-semibold fs-6 text-gray-600 text-center'>
                                    <td className='text-start ps-6 fs-4'>Product Media Size</td>
                                    <td className='fw-semibold fs-6 text-gray-800 text-end'>
                                      HD,FULL HD,UHD,6K
                                    </td>
                                  </tr>
                                  <tr className='fw-semibold fs-6 text-gray-600 text-center'>
                                    <td className='text-start ps-6 fs-4'>Product Media Share</td>
                                    <td className='fw-semibold fs-6 text-gray-800 text-end '>
                                      Social Media Platforms,Televisions
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End ::Product Discrepation*/}
                    {/*Start ::Product Discrepation*/}
                    <div className='card mb-5 mb-xl-10'>
                      <div className='accordion' id='kt_accordion_3'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header' id='kt_accordion_1_header_3'>
                            <button
                              className='accordion-button fs-4 fw-semibold'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#kt_accordion_1_body_3'
                              aria-expanded='true'
                              aria-controls='kt_accordion_1_body_3'
                            >
                              <div
                                className='btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px'
                                data-kt-menu-trigger='click'
                                data-kt-menu-attach='parent'
                                data-kt-menu-placement='bottom-end'
                              >
                                {/*begin::Svg Icon | path: icons/duotune/general/gen022.svg*/}
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  width={20}
                                  height={20}
                                  fill='currentColor'
                                  className='bi bi-play-circle'
                                  viewBox='0 0 16 16'
                                >
                                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                                  <path d='M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z' />
                                </svg>
                                {/*end::Svg Icon*/}
                              </div>
                              Meida Referance Video{' '}
                            </button>
                          </h2>
                          <div
                            id='kt_accordion_1_body_3'
                            className='accordion-collapse collapse show'
                            aria-labelledby='kt_accordion_1_header_3'
                            data-bs-parent='#kt_accordion_3'
                            style={{}}
                          >
                            <div className='accordion-body'>
                              {/*begin::Table*/}
                              <div className='card-body pt-2'>
                                <iframe
                                  className='embed-responsive-item card-rounded h-400px w-100'
                                  src='https://www.youtube.com/embed/TWdDZYNqlg4'
                                  allowFullScreen
                                />
                                {/*end::Card body*/}
                                {/*end::Item*/}
                                {/*end::Items*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*End ::Product Discrepation*/}
                  </div>
                  {/*end::Content*/}
                  {/*begin::Sidebar*/}

                  <div className='flex-column flex-lg-row-auto w-100 w-xl-425px mb-5 ms-lg-10'>
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body'>
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='text-gray-800  fs-6  fw-bolder'>Share</span>
                        </div>
                        <div className='d-flex flex-stack'>
                          <div className='mb-2'>
                            {/*begin::add favourate*/}
                            <span
                              className='btn btn-icon btn-light-dark me-2'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              aria-label='Add Favourites'
                              data-bs-original-title='Add Favourites'
                              data-kt-initialized={1}
                            >
                              <i className='fa-brands fa-whatsapp fs-2x' />
                            </span>
                            {/*End::add favourate*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-dark me-2'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              aria-label='Add to Cart'
                              data-bs-original-title='Add to Cart'
                              data-kt-initialized={1}
                            >
                              <i className='fa-brands fa-facebook fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-dark me-2'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              aria-label='Add to Cart'
                              data-bs-original-title='Add to Cart'
                              data-kt-initialized={1}
                            >
                              <i className='fa-brands fa-pinterest fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-dark me-2'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              aria-label='Add to Cart'
                              data-bs-original-title='Add to Cart'
                              data-kt-initialized={1}
                            >
                              <i className='fa-brands fa-twitter fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-dark me-2'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              aria-label='Add to Cart'
                              data-bs-original-title='Add to Cart'
                              data-kt-initialized={1}
                            >
                              <i className='fa-solid fa-square-up-right fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*end::FAVOARATEE*/}
                          </div>
                        </div>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body'>
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='text-gray-800  fs-6  fw-bolder'>
                            {productDetails?.product_name}
                          </span>
                          {/*begin::Action*/}
                          <span className='text-success text-end fw-bold fs-4'>
                            $ {productDetails?.product_price}
                          </span>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='text-gray-400 fw-semibold d-block fs-6'>
                            WDI000000001
                          </span>
                          <span className='fs-8 fw-bolder text-gray-600'>
                            <s>MRP $ {productDetails?.mrp}</s>
                            <span className='fs-8 fw-bolder text-danger'>
                              {' '}
                              [ {percentage}% Off ]{' '}
                            </span>
                          </span>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='text-gray-400 fw-semibold d-block fs-8'>
                            Duratation 45 Sec
                          </span>
                          <span className='badge badge-light-dark my-2'>horizontal</span>
                          <span className='badge badge-light-dark my-2'>Hindus</span>
                          <span className='badge badge-light-dark my-2'>Modren</span>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack py-2'>
                          {currentUser ? (
                            <>
                              <div className='btn-chips'>
                                <Link to={'/favorites'} className='btn btn-light-primary'>
                                  <i className='fonticon-like fs-2 me-2' />
                                  add to Favorite
                                </Link>
                              </div>
                              <Link to={'/cart'} className='btn btn-light-primary'>
                                <i className='fonticon-app-store fs-2 me-2' />
                                add to cart
                              </Link>
                            </>
                          ) : (
                            <>
                              <div
                                className='btn btn-light-primary'
                                id='kt_toolbar_primary_button'
                                onClick={() => setLoginModel(true)}
                              >
                                <i className='fonticon-like fs-2 me-2' />
                                add to Favorite
                              </div>
                              <div
                                className='btn btn-light-primary'
                                id='kt_toolbar_primary_button'
                                onClick={() => setLoginModel(true)}
                              >
                                <i className='fonticon-app-store fs-2 me-2' />
                                add to cart
                              </div>
                              <LoginModel
                                show={showLoginModel}
                                handleClose={() => setLoginModel(false)}
                              />
                            </>
                          )}
                        </div>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Card*/}

                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        <div className='m-0'>
                          <div className='d-flex flex-stack my-2'>
                            {/*begin::Label*/}
                            <div className='me-5'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-semibold'>Select Video Language</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <div className='fs-7 fw-semibold text-muted'>
                                {' '}
                                Do You Want Change Language
                              </div>
                              {/*end::Input*/}
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue={1}
                                defaultChecked
                              />
                              <span
                                className='form-check-label fw-semibold text-muted'
                                // htmlFor='kt_modal_add_customer_billing'
                              >
                                Show
                              </span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*end::Title*/}
                          {/*begin::Radio group*/}
                          <div
                            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-4'
                            data-kt-buttons='true'
                            data-kt-buttons-target='[data-kt-button]'
                          >
                            {/*begin::Radio*/}
                            {productOptions?.map((productLanguage: any) => {
                              return (
                                <>
                                  {productLanguage?.option_name === 'Product  Languages' && (
                                    <>
                                      {productLanguage?.product_mapping_product_options.map(
                                        (product_op_val: any, j: any) => {
                                          return (
                                            <>
                                              <label
                                                className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 active'
                                                data-kt-button='true'
                                                htmlFor={`label_${product_op_val.product_option_value.id}`}
                                              >
                                                {/*begin::Input*/}
                                                <input
                                                  className='btn-check'
                                                  type='radio'
                                                  name='method'
                                                  defaultValue={1}
                                                  id={`label_${product_op_val.product_option_value.id}`}
                                                />
                                                <span className='fs-7 fw-bold d-block'>
                                                  {product_op_val.product_option_value.value_name}
                                                </span>
                                                {/*end::Title*/}
                                              </label>
                                            </>
                                          )
                                        }
                                      )}
                                    </>
                                  )}
                                </>
                              )
                            })}
                          </div>
                          {/*end::Radio group*/}
                        </div>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        <div className='m-0'>
                          {/*begin::Title*/}
                          <div className='d-flex flex-stack my-2'>
                            {/*begin::Label*/}
                            <div className='me-5'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-semibold'>Select additional language</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <div className='fs-7 fw-semibold text-muted'>
                                {' '}
                                Do You Want Other Language
                              </div>
                              {/*end::Input*/}
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue={1}
                                defaultChecked
                              />
                              <span
                                className='form-check-label fw-semibold text-muted'
                                // htmlFor='kt_modal_add_customer_billing'
                              >
                                Show
                              </span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          <div className='m-0'>
                            <div className='d-flex flex-stack my-2'>
                              {/*begin::Label*/}
                              <span className='text-gray-600  fs-6 fw-bolder'>
                                Add on Language 75 % Off
                              </span>
                              {/*begin::Action*/}
                              <span className='text-success text-end fw-bold fs-4'>$ 500.00</span>
                              {/*end::Action*/}
                            </div>
                            <div className='d-flex flex-stack my-2'>
                              {/*begin::Label*/}
                              <span className='text-gray-400 fw-semibold d-block fs-8'>
                                {' '}
                                Discount{' '}
                              </span>
                              <span className='fs-8 fw-bolder text-gray-600'>
                                <s>MRP $ 2000.00</s>
                                <span className='fs-8     fw-bolder text-danger'>
                                  {' '}
                                  [ 75% Off ]{' '}
                                </span>
                              </span>
                              {/*end::Action*/}
                            </div>
                            {/*begin::Title*/}
                            {/*begin::Radio group*/}
                            <div
                              className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-5'
                              data-kt-buttons='true'
                              data-kt-buttons-target='[data-kt-button]'
                            >
                              {/*begin::Radio*/}
                              {productOptions?.map((productLanguage: any) => {
                                return (
                                  <>
                                    {productLanguage?.option_name === 'Product  Languages' && (
                                      <>
                                        {productLanguage?.product_mapping_product_options.map(
                                          (product_op_val: any, j: any) => {
                                            return (
                                              <>
                                                <label
                                                  className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 active'
                                                  data-kt-button='true'
                                                >
                                                  {/*begin::Input*/}
                                                  <input
                                                    className='btn-check'
                                                    type='radio'
                                                    name='method'
                                                    defaultValue={1}
                                                  />
                                                  <span className='fs-7 fw-bold d-block'>
                                                    {product_op_val.product_option_value.value_name}
                                                  </span>
                                                  {/*end::Title*/}
                                                </label>
                                              </>
                                            )
                                          }
                                        )}
                                      </>
                                    )}
                                  </>
                                )
                              })}
                              {/*end::Radio*/}
                            </div>
                          </div>
                          {/*end::Actions*/}
                        </div>
                        {/*end::Payment Method*/}
                      </div>
                      {/*end: Card Body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        <div className='m-0'>
                          <div className='d-flex flex-stack my-2'>
                            {/*begin::Label*/}
                            <div className='me-5'>
                              {/*begin::Label*/}
                              <label className='fs-6 fw-semibold'>
                                {' '}
                                Select Type Of Video Delivery
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <div className='fs-7 fw-semibold text-muted'>
                                {' '}
                                Choose Video Delivery Options
                              </div>
                              {/*end::Input*/}
                            </div>
                            {/*end::Label*/}
                            {/*begin::Switch*/}
                            <label className='form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                defaultValue={1}
                                defaultChecked
                              />
                              <span
                                className='form-check-label fw-semibold text-muted'
                                // htmlFor='kt_modal_add_customer_billing'
                              >
                                Show
                              </span>
                            </label>
                            {/*end::Switch*/}
                          </div>
                          {/*begin::Radio group*/}
                          <div
                            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-2'
                            data-kt-buttons='true'
                            data-kt-buttons-target='[data-kt-button]'
                          >
                            {/*begin::Radio*/}
                            <label
                              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-primary w-100 px-4'
                              data-kt-button='true'
                            >
                              {/*begin::Input*/}
                              <input
                                className='btn-check'
                                type='radio'
                                name='method'
                                defaultValue={0}
                              />
                              {/*end::Input*/}
                              <i className='fonticon-hourglass fs-2hx mb-2 pe-0' />
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className='fs-7 fw-bold d-block'>Normal</span>
                              <span className='text-gray-400 fw-semibold d-block fs-8'>
                                48 Hours
                              </span>
                              {/*end::Title*/}
                            </label>
                            {/*end::Radio*/}
                            {/*begin::Radio*/}
                            <label
                              className='btn bg-light btn-color-gray-600 btn-active-text-gray-800  btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-primary w-100 px-4'
                              data-kt-button='true'
                            >
                              {/*begin::Input*/}
                              <input
                                className='btn-check'
                                type='radio'
                                name='method'
                                defaultValue={1}
                              />
                              {/*end::Input*/}
                              {/*begin::Icon*/}
                              <i className='fonticon-24-hours fs-2hx mb-2 pe-0' />
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className='fs-7 fw-bold d-block'>Rapid</span>
                              <span className='text-gray-400 fw-semibold d-block fs-8'>
                                with in Day Hours
                              </span>
                              {/*end::Title*/}
                            </label>
                            {/*end::Radio*/}
                          </div>
                          {/*end::Radio group*/}
                          <div className='d-flex flex-stack my-2'>
                            {/*begin::Label*/}
                            <span className='text-gray-600  fs-8 fw-bolder'>
                              Choose Rapid Video Delivery
                            </span>
                            {/*begin::Action*/}
                            <span className='text-success text-end fw-bold fs-4'>$ 250.00</span>
                            {/*end::Action*/}
                          </div>
                          <div className='d-flex flex-stack my-2'>
                            {/*begin::Label*/}
                            <span className='text-gray-400 fw-semibold d-block fs-8'>Discount</span>
                            <span className='fs-8 fw-bolder text-gray-600'>
                              <s>MRP $ 500 .00</s>
                              <span className='fs-8     fw-bolder text-danger'> [ 50% Off ] </span>
                            </span>
                            {/*end::Action*/}
                          </div>
                        </div>
                      </div>
                      {/*end: Card Body*/}
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        <div className='m-0'>
                          {currentUser ? (
                            <>
                              <Link to={'/quick_order'} className='btn btn-light-primary w-100'>
                                <i className='fonticon-mobile-payment fs-4 me-2' />
                                Confirm Order
                              </Link>
                            </>
                          ) : (
                            <>
                              <div
                                className='btn btn-light-primary w-100'
                                id='kt_toolbar_primary_button'
                                onClick={() => setLoginModel(true)}
                              >
                                <i className='fonticon-mobile-payment fs-4 me-2' />
                                Confirm Order
                              </div>
                              <LoginModel
                                show={showLoginModel}
                                handleClose={() => setLoginModel(false)}
                              />
                            </>
                          )}

                          {/*end::Actions*/}
                        </div>
                        {/*end::Payment Method*/}
                      </div>
                      {/*end: Card Body*/}
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>

                  {/*end::Layout*/}
                </div>
                {/*end::Content container*/}
              </div>
              {/*end::Content*/}
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
