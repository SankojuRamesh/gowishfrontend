import React from 'react'

export default function QuickOrderContent() {
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
                    Quick Confirm Order
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
                    <li className='breadcrumb-item text-muted'>Confirm product in cart </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                <div className='d-flex align-items-center gap-2 gap-lg-3'>
                  {/*begin::Filter menu*/}
                  <a
                    href='../../demo1/dist/GOWISH/01.Front end/Page 04_view.html'
                    className='btn btn-sm fw-bold btn-light-dark'
                  >
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
                    <div className='card pt-0 mb-5 mb-xl-9'>
                      {/*begin::Option*/}
                      <div className='card-body pt-5'>
                        {/*begin::Title*/}
                        <div className='d-flex flex-stack py-2'>
                          {/*begin::Label*/}
                          <div className='btn-chips'>
                            <a
                              href='#'
                              className='btn btn-sm fw-bold btn-light-dark'
                              data-bs-toggle='modal'
                              data-bs-target='#kt_modal_select_users'
                            >
                              <span className='svg-icon svg-icon-2x svg-icon-primary mb-2'>
                                <svg
                                  width={18}
                                  height={18}
                                  viewBox='0 0 18 18'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    opacity='0.3'
                                    d='M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z'
                                    fill='currentColor'
                                  />
                                  <path
                                    d='M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z'
                                    fill='currentColor'
                                  />
                                  <rect
                                    x={7}
                                    y={6}
                                    width={4}
                                    height={4}
                                    rx={2}
                                    fill='currentColor'
                                  />
                                </svg>
                              </span>{' '}
                              Select User
                            </a>
                          </div>
                          <a
                            href='#'
                            className='btn btn-sm fw-bold btn-primary'
                            data-bs-toggle='modal'
                            data-bs-target='#kt_modal_add_user'
                          >
                            <span className='svg-icon svg-icon-2x svg-icon-primary mb-2'>
                              <svg
                                width={18}
                                height={18}
                                viewBox='0 0 18 18'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  opacity='0.3'
                                  d='M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z'
                                  fill='currentColor'
                                />
                                <path
                                  d='M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z'
                                  fill='currentColor'
                                />
                                <rect x={7} y={6} width={4} height={4} rx={2} fill='currentColor' />
                              </svg>
                            </span>{' '}
                            Add New User
                          </a>
                        </div>
                        <div className='separator separator-dashed my-2' />
                      </div>
                      <div className='card-body pt-5'>
                        {/*begin::Header*/}
                        <div className='py-3 d-flex flex-stack flex-wrap'>
                          {/*begin::Toggle*/}
                          <div className='d-flex align-items-center'>
                            <div className='symbol symbol-circle symbol-50px overflow-hidden me-3'>
                              <div className='symbol-label fs-3 bg-primary text-light-darrk'>O</div>
                            </div>
                            {/*begin::Summary*/}
                            <div className='me-3 p-2'>
                              <div className='d-flex align-items-center'>
                                <div className='text-gray-800 fw-bold'>Order User Name</div>
                                <div className='badge badge-light-primary ms-5'>Family</div>
                              </div>
                              <div className='fs-6 text-gray-600 fw-bold'>
                                ID000000001,+91 9000000000,Ordername@gmail.com , 500037
                              </div>
                            </div>
                            {/*end::Summary*/}
                          </div>
                          {/*end::Toggle*/}
                          {/*begin::Toolbar*/}
                          <div className='d-flex my-3 ms-9'>
                            {/*begin::Edit*/}
                            <a
                              href='#'
                              className='btn btn-icon btn-active-light-primary w-30px h-30px me-3'
                              data-bs-toggle='modal'
                              data-bs-target='#kt_modal_edit_user'
                            >
                              <span
                                data-bs-toggle='tooltip'
                                data-bs-trigger='hover'
                                data-kt-initialized={1}
                              >
                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                <span className='svg-icon svg-icon-3'>
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    />
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </a>
                            {/*end::Edit*/}
                            {/*begin::Delete*/}
                            <a
                              href='#'
                              className='btn btn-icon btn-active-light-primary w-30px h-30px me-3'
                              data-bs-toggle='tooltip'
                              data-kt-customer-payment-method='delete'
                              data-kt-initialized={1}
                            >
                              {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                              <span className='svg-icon svg-icon-3'>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z'
                                    fill='currentColor'
                                  />
                                  <path
                                    opacity='0.5'
                                    d='M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z'
                                    fill='currentColor'
                                  />
                                  <path
                                    opacity='0.5'
                                    d='M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </a>
                            {/*end::Delete*/}
                            {/*end::More*/}
                          </div>
                          {/*end::Toolbar*/}
                        </div>
                        {/*end::Header*/}
                      </div>
                      {/*end::Option*/}
                    </div>
                    <div className='row g-6 g-xl-9'>
                      {/*begin::Media Card Col*/}
                      <div className='col-sm-6 mb-6 mb-sm-0'>
                        {/*begin::Player card*/}
                        <div className='card'>
                          {/*begin::User pic*/}
                          <div className='card-rounded position-relative mb-2'>
                            {/*begin::Img*/}
                            <div
                              className='bgi-position-center bgi-no-repeat bgi-size-cover h-350px card-rounded'
                              style={{
                                backgroundImage: 'url("/media/stock/600x600/img-52.jpg")',
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
                          {/*end::User pic*/}
                          {/*begin::Info*/}
                          <div className='m-0 mb-2 p-2'>
                            {/*begin::Title*/}
                            <div className='p-2'>
                              {/*begin::Title*/}
                              <a
                                href='GOWISH/01.Front end/Page 04_View.html'
                                className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                              >
                                {' '}
                                Engagement invitations 12
                              </a>
                              <div className='d-flex flex-stack mb-2'>
                                {/*begin::Label*/}
                                <span className='fs-8 text-gray-600'>promo00001</span>
                                {/*begin::Action*/}
                                <div className='btn-chips'>
                                  <span className='badge badge-light fw-bold'>horizontal</span>
                                  <span className='badge badge-light fw-bold'>Hindus</span>
                                  <span className='badge badge-light fw-bold'>Standred</span>
                                </div>
                                {/*end::Action*/}
                              </div>
                              <div className='d-flex flex-stack fw-bold'>
                                <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                                  <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                                  450.00
                                </span>
                                <span className='fs-6 text-gray-600 fw-bold'>
                                  <s>$ 500.00</s>
                                </span>
                                <span className='fs-8 text-danger'>Save 20% off</span>
                              </div>
                              <div className='separator separator-dashed my-2' />
                              <div className='d-flex flex-stack'>
                                <span className='fs-6 text-gray-600 fw-bold'>
                                  Select Type Of Video Delivery
                                </span>
                                <span className='fs-6 text-gray-800 fw-bold'>Rapid</span>
                              </div>
                              <div className='d-flex flex-stack fw-bold'>
                                <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                                  <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                                  250.00
                                </span>
                                <span className='fs-6 text-gray-600 fw-bold'>
                                  <s>$ 500.00</s>
                                </span>
                                <span className='fs-8 text-danger'>Save 50% off</span>
                              </div>
                            </div>
                            <div className='d-flex flex-stack fw-bold mb-5'>
                              <span className='fs-6 text-gray-600 fw-bold' />
                              {/*begin::Action*/}
                              <div className='btn-chips'>
                                <span
                                  className='btn btn-icon btn-light-primary me-3'
                                  data-bs-toggle='tooltip'
                                  data-bs-placement='top'
                                  aria-label='Add Favourites'
                                  data-bs-original-title='Add Favourites'
                                  data-kt-initialized={1}
                                >
                                  <i className='fonticon-like fs-2x' />
                                </span>
                                <a
                                  href='../../demo1/dist/front end/Page 04_View.html'
                                  className='btn btn-icon btn-light-primary me-3'
                                  data-bs-toggle='tooltip'
                                  data-bs-placement='top'
                                  aria-label='Edit'
                                  data-bs-original-title='Edit'
                                  data-kt-initialized={1}
                                >
                                  <i className=' fonticon-content-marketing fs-2x' />
                                </a>
                                <span
                                  className='btn btn-icon btn-light-danger me-3'
                                  data-bs-toggle='tooltip'
                                  data-bs-placement='top'
                                  aria-label='Delete'
                                  data-bs-original-title='Delete'
                                  data-kt-initialized={1}
                                >
                                  <i className='fonticon-trash-bin fs-2x' />
                                </span>
                              </div>
                              {/*end::Action*/}
                            </div>
                          </div>
                          {/*end::Info*/}
                        </div>
                        {/*end::Player card*/}
                      </div>
                    </div>
                  </div>
                  {/*end::Content*/}
                  <div className='flex-column flex-lg-row-auto w-100 w-xl-425px mb-5 ms-lg-10'>
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        <div className='d-flex flex-stack'>
                          <span className='text-gray-800  fs-6  fw-bolder'>Reseller Coupan</span>
                        </div>
                        <div className='d-flex flex-stack my-2'>
                          <input
                            className='form-control form-control-solid'
                            placeholder='Welcome 20'
                            disabled
                          />
                        </div>
                        <span className='text-success fw-bold  fs-8'>
                          Coupan Success <span className='text-dark fw-bold  fs-8'> /</span>
                          <span className='text-danger fw-bold  fs-8'>
                            {' '}
                            Not Valid Coupan Code
                          </span>{' '}
                        </span>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        {/*begin::Title*/}
                        <div className='m-0'>
                          <div className='d-flex flex-stack bg-success rounded-3 p-6 mb-5'>
                            {/*begin::Content*/}
                            <div className='fs-6 fw-bold text-white'>
                              <span className='d-block lh-1 mb-2'>Subtotal</span>
                              <span className='d-block mb-2'>Discounts</span>
                              <span className='d-block mb-9'>Tax(18%)</span>
                              <span className='d-block fs-2qx lh-1'>Total</span>
                            </div>
                            {/*end::Content*/}
                            {/*begin::Content*/}
                            <div className='fs-6 fw-bold text-white text-end'>
                              <span className='d-block lh-1 mb-2' data-kt-pos-element='total'>
                                $4500.00
                              </span>
                              <span className='d-block mb-2' data-kt-pos-element='discount'>
                                -$2750.00
                              </span>
                              <span className='d-block mb-9' data-kt-pos-element='tax'>
                                $315.00
                              </span>
                              <span
                                className='d-block fs-2qx lh-1'
                                data-kt-pos-element='grant-total'
                              >
                                $2065.00
                              </span>
                            </div>
                            {/*end::Content*/}
                          </div>
                        </div>
                        {/*end::Payment Method*/}
                      </div>
                      {/*end: Card Body*/}
                      {/*end::Card body*/}
                    </div>
                    {/*begin::Card*/}
                    <div className='card mb-5 mb-xl-1'>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className='card-body pt-5'>
                        {/*begin::Title*/}
                        <div className='m-0'>
                          <div className='d-flex flex-stack my-2 mb-5'>
                            {/*begin::Label*/}
                            <span className='text-gray-800  fs-4 fw-bolder'>Payment Method</span>
                          </div>
                          {/*begin::Radio group*/}
                          <div
                            className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12'
                            data-kt-buttons='true'
                            data-kt-buttons-target='[data-kt-button]'
                            data-kt-initialized={1}
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
                              <i className='fonticon-mobile-payment fs-2hx mb-2 pe-0' />
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className='fs-7 fw-bold d-block'>PAYTM</span>
                              <span className='text-gray-400 fw-semibold d-block fs-8'>
                                UPI Payment
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
                              <i className='fonticon-card fs-2hx mb-2 pe-0' />
                              {/*end::Icon*/}
                              {/*begin::Title*/}
                              <span className='fs-7 fw-bold d-block'>Credit zone</span>
                              <span className='text-gray-400 fw-semibold d-block fs-8'>
                                Truest Partners
                              </span>
                              {/*end::Title*/}
                            </label>
                            {/*end::Radio*/}
                          </div>
                          {/*end::Radio group*/}
                        </div>
                        <div className='m-0'>
                          <a
                            href='../../demo1/dist/front end/Page 05_cart.html'
                            className='btn btn-light-success w-100'
                          >
                            <i className='fonticon-mobile-payment fs-4 me-2' />
                            Proceed to Payment{' '}
                          </a>
                          {/*end::Actions*/}
                        </div>
                        {/*end::Payment Method*/}
                      </div>
                      {/*end: Card Body*/}
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                </div>
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
    </>
  )
}
