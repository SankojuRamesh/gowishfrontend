/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {KTIcon, KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
  show: boolean
  handleClose: () => void
  productId: any
}

const modalsRoot = document.getElementById('root-modals') || document.body

const ProductDetailsModel = ({show, handleClose, productId}: Props) => {
  console.log(productId)

  return createPortal(
    <Modal
      id='kt_modal_product_details'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-1000px'
      show={show}
      onHide={handleClose}
    >
      <div className='modal-header pb-0 border-0 justify-content-end'>
        {/* <h2>Login Page</h2> */}
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTIcon className='fs-1' iconName='cross' />
        </div>
        {/* end::Close */}
      </div>

      <div className='modal-body py-lg-10 px-lg-10'>
        <div
          id='kt_app_toolbar_container'
          className='app-container container-xxl d-flex flex-stack'
        >
          {/*begin::Page title*/}
          <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3 mb-3'>
            {/*begin::Title*/}
            <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
              Media View
            </h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
              {/*begin::Item*/}
              <li className='breadcrumb-item text-muted'>
                <a href='#' className='text-muted text-hover-primary'>
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
        </div>
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
                <div className='card mb-12 mb-xl-9'>
                  {/*begin::Card header*/}
                  <iframe
                    className='embed-responsive-item card-rounded h-450px w-100'
                    src='https://www.youtube.com/embed/TWdDZYNqlg4'
                    allowFullScreen
                  />
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}
              </div>
              {/*end::Content*/}
              {/*begin::Sidebar*/}
              <div className='flex-column flex-lg-row-auto w-100 w-xl-425px mb-5 ms-lg-10'>
                {/*begin::Card*/}
                <div className='card mb-5 mb-xl-1'>
                  {/*begin::Body*/}
                  <div className='card-body pt-5'>
                    <div className='d-flex flex-stack'>
                      {/*begin::Label*/}
                      <span className='text-gray-800  fs-6  fw-bolder'>
                        WEDDING INVATATIONS 00001
                      </span>
                      {/*begin::Action*/}
                      <span className='text-success text-end fw-bold fs-4'>$ 1000.00</span>
                      {/*end::Action*/}
                    </div>
                    <div className='d-flex flex-stack'>
                      {/*begin::Label*/}
                      <span className='text-gray-400 fw-semibold d-block fs-6'>WDI000000001</span>
                      <span className='fs-6 fw-bolder text-gray-600'>
                        <s>MRP $ 2000.00</s>
                        <span className='fs-6 fw-bolder text-danger'> [ 50% Off ] </span>
                      </span>
                      {/*end::Action*/}
                    </div>
                    <div className='d-flex flex-stack'>
                      {/*begin::Label*/}
                      <span className='text-gray-400 fw-semibold d-block fs-6'>
                        Duratation 45 Sec
                      </span>
                      <span className='badge badge-light-dark my-2'>Hindus</span>
                      <span className='badge badge-light-dark my-2'>Modren</span>
                      {/*end::Action*/}
                    </div>
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::Card*/}

                <div className='card mb-5 mb-xl-1'>
                  {/*begin::Body*/}
                  <div className='card-body pt-5 d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                      <div className='me-5'>
                        {/*begin::Label*/}
                        <label className='fs-5 fw-semibold'>Share</label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Label*/}
                      <KTIcon className='fs-1 text-primary' iconName='facebook' />
                      <KTIcon className='fs-1 text-success' iconName='whatsapp' />
                      <KTIcon className='fs-1 text-danger' iconName='instagram' />
                      {/*End::what's App*/}
                    </div>
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
                  {/*end::Body*/}
                </div>
                {/*end::Card*/}
                {/*begin::Card*/}
                {/*begin::Card*/}
                <div className='card mb-5 mb-xl-1'>
                  {/*begin::Body*/}
                  <div className='card-body pt-5'>
                    <div className='m-0'>
                      <div className='flex-equal gap-5 gap-xxl-9 px-0 mb-5 text-center'>
                        <a href='#' className='btn btn-light-primary w-50'>
                          {/* <i className='fonticon-app-store fs-4 me-2' /> */}
                          Use this Template
                        </a>
                        {/*end::Radio*/}
                      </div>
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
    </Modal>,
    modalsRoot
  )
}

export {ProductDetailsModel}
