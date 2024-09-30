import React from 'react'
import {Link} from 'react-router-dom'

export default function FavoriteContent() {
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
                    My Favourites @ Quick Ordrer
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
                    <li className='breadcrumb-item text-muted'>My Favourites @ Quick Ordrer</li>
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
                        <div className='fs-5 text-dark fw-bold'>Filter Options</div>
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
                          <label className='form-label fw-semibold'>Select Category</label>
                          {/*end::Label*/}
                          {/*begin::Category optons*/}
                          <div>
                            <select
                              className='form-select form-select-solid'
                              data-kt-select2='true'
                              data-placeholder='Select option'
                              data-dropdown-parent='#kt_menu_62cfa2e304dd3'
                              data-allow-clear='true'
                            >
                              <option value='SEL1'> Select All</option>
                              <option value='CAT2'> Category 01</option>
                              <option value='CAT3'> Category 02</option>
                              <option value='CAT4'> Category 03</option>
                              <option value='CAT5'> Category 04</option>
                            </select>
                          </div>
                          {/*End::Category optons*/}
                        </div>
                        {/*end::Input group*/}
                        {/*begin::sub Category optons*/}
                        <div className='mb-10'>
                          {/*begin::Label*/}
                          <label className='form-label fw-semibold'>Select Sub Category</label>
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
                              <option value='SEL0'> Select All</option>
                              <option value='SUB01'> Sub Category 01</option>
                              <option value='SUB02'> Sub Category 02</option>
                              <option value='SUB03'> Sub Category 03</option>
                              <option value='SUB04'> Sub Category 04</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*End::sub Category optons*/}
                        {/*begin:: Category optons tags*/}
                        <div className='mb-10'>
                          {/*begin::Label*/}
                          <label className='form-label fw-semibold'>Select options Tag</label>
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
                              <option value='SEL0'> Select All</option>
                              <option value='HIN1'> Hindus </option>
                              <option value='CHI2'> Chiristions </option>
                              <option value='MUS3'> Musilms </option>
                              <option value='UNI4'> Universal</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*begin:: Category optons tags*/}
                        {/*begin:: Category optons Varations*/}
                        <div className='mb-10'>
                          {/*begin::Label*/}
                          <label className='form-label fw-semibold'>Select options Varations</label>
                          {/*end::Label*/}
                          {/*begin::Input*/}
                          <div>
                            <select
                              className='form-select form-select-solid'
                              data-kt-select2='true'
                              data-placeholder='Select option Varations'
                              data-dropdown-parent='#kt_menu_62cfa2e304dd3'
                              data-allow-clear='true'
                            >
                              <option value='SEL0'> Select All</option>
                              <option value='STA1'> Standred </option>
                              <option value='PRI2'> Primium</option>
                              <option value='TRA3'> Tradationals</option>
                            </select>
                          </div>
                          {/*end::Input*/}
                        </div>
                        {/*End:: Category optons Varations*/}
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
                {/*begin::Toolbar*/}
                <div className='d-flex flex-wrap flex-stack pb-7'>
                  {/*begin::Title*/}
                  <div className='d-flex flex-wrap align-items-center my-1'>{/*end::Search*/}</div>
                  {/*end::Title*/}
                </div>
                {/*end::Toolbar*/}
                {/*begin::Tab card Content*/}
                {/*begin::Tab card box pane*/}
                {/*begin::Row*/}
                <div className='row g-6 g-xl-9'>
                  {/*begin::Media Card Col*/}
                  <div className='col-md-6 col-xxl-4'>
                    {/*begin::Card*/}
                    <div className='card'>
                      {/*begin::Card body*/}
                      <div className='card-rounded position-relative mb-2'>
                        {/*begin::Img*/}
                        <Link
                          to={'/product_details'}
                          className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                        >
                          <div
                            className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                            style={{
                              backgroundImage: 'url("/media/stock/600x600/img-3.jpg")',
                            }}
                          />
                        </Link>
                        {/*end::Img*/}
                        {/*begin::Play*/}
                        <a href='#'>
                          <button className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'>
                            <i className='fa-solid fa-image text-white fs-2x' />
                          </button>
                        </a>
                        {/*end::Play*/}
                      </div>
                      <div className='m-0 mb-2 p-2'>
                        {/*begin::Title*/}
                        <Link
                          to={'/product_details'}
                          className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                        >
                          {' '}
                          Engagement invitations 45
                        </Link>
                        {/*end::Title*/}
                        <div className='d-flex flex-stack mb-2'>
                          {/*begin::Label*/}
                          <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                            WEDINV00002
                          </span>
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            <span className='badge badge-light fw-bold'>Vertical</span>
                            <span className='badge badge-light fw-bold'>hindus</span>
                            <span className='badge badge-light fw-bold'>Standred</span>
                          </div>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack fw-bold'>
                          {/*begin::Label*/}
                          <span className='fs-4 fw-bold text-dark p-2'>
                            <span className='fs-9 fw-semibold text-gray-600 p-2'>$</span>
                            450.00
                          </span>
                          <span>
                            <s>$ 500</s>
                          </span>
                          <span className='fs-9 text-danger'>Save 10% off</span>
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            {/*begin::add favourate*/}
                            <span
                              className='btn btn-icon btn-light-primary me-3 active'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Removed Favourites'
                            >
                              <i className='fonticon-heart fs-2x' />
                            </span>
                            {/*End::add favourate*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-primary me-3'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Add to Cart'
                            >
                              <i className='fonticon-app-store fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*begin::quick to order*/}
                            <a
                              href='../../demo1/dist/GOWISH/01.Front end/Page 06.html'
                              className='btn btn-icon btn-light-primary me-3'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Quick to Cart'
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
                            </a>
                            {/*End::quick to order*/}
                          </div>
                          {/*end::Action*/}
                        </div>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                  {/*End::Media Card Col*/}
                  <div className='col-md-6 col-xxl-4'>
                    {/*begin::Card*/}
                    <div className='card'>
                      {/*begin::Card body*/}
                      <div className='card-rounded position-relative mb-2'>
                        {/*begin::Img*/}
                        <Link
                          to={'/product_details'}
                          className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'
                        >
                          <div
                            className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                            style={{
                              backgroundImage: 'url("/media/stock/600x600/img-6.jpg")',
                            }}
                          />
                        </Link>
                        {/*end::Img*/}
                        {/*begin::Play*/}
                        <a href='#'>
                          <button className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'>
                            <i className='fa-solid fa-image text-white fs-2x' />
                          </button>
                        </a>
                        {/*end::Play*/}
                      </div>
                      <div className='m-0 mb-2 p-2'>
                        <Link
                          to={'/product_details'}
                          className='text-gray-600 text-hover-primary fs-6 fw-bold d-block mb-2'
                        >
                          Engagement invitations 60
                        </Link>{' '}
                        {/*begin::Title*/}
                        {/*end::Title*/}
                        <div className='d-flex flex-stack   mb-2'>
                          {/*begin::Label*/}
                          <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                            WEDINV00002
                          </span>
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            <span className='badge badge-light fw-bold'>Vertical</span>
                            <span className='badge badge-light fw-bold'>hindus</span>
                            <span className='badge badge-light fw-bold'>Standred</span>
                          </div>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack fw-bold'>
                          {/*begin::Label*/}
                          <span className='fs-4 fw-bold text-dark p-2'>
                            <span className='fs-9 fw-semibold text-gray-600 p-2'>$</span>
                            450.00
                          </span>
                          <span>
                            <s>$ 500</s>
                          </span>
                          <span className='fs-9 text-danger'>Save 10% off</span>
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            {/*begin::add favourate*/}
                            <span
                              className='btn btn-icon btn-light-primary me-3 active'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Removed Favourites'
                            >
                              <i className='fonticon-heart fs-2x' />
                            </span>
                            {/*End::add favourate*/}
                            {/*begin::add to cart*/}
                            <span
                              className='btn btn-icon btn-light-primary me-3'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Add to Cart'
                            >
                              <i className='fonticon-app-store fs-2x' />
                            </span>
                            {/*end::add to cart*/}
                            {/*begin::quick to order*/}
                            <a
                              href='../../demo1/dist/GOWISH/01.Front end/Page 06.html'
                              className='btn btn-icon btn-light-primary me-3'
                              data-bs-toggle='tooltip'
                              data-bs-placement='top'
                              title='Quick to Cart'
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
                            </a>
                            {/*End::quick to order*/}
                          </div>
                          {/*end::Action*/}
                        </div>
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}
                  </div>
                </div>
                {/*end::Row*/}
                {/*begin::Pagination*/}
                <div className='d-flex flex-stack flex-wrap pt-10'>
                  <div className='fs-6 fw-semibold text-gray-700'>
                    Showing 1 to 10 of 50 entries
                  </div>
                  {/*begin::Pages*/}
                  <ul className='pagination'>
                    <li className='page-item previous'>
                      <a href='#' className='page-link'>
                        <i className='previous' />
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a href='#' className='page-link'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        4
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        5
                      </a>
                    </li>
                    <li className='page-item'>
                      <a href='#' className='page-link'>
                        6
                      </a>
                    </li>
                    <li className='page-item next'>
                      <a href='#' className='page-link'>
                        <i className='next' />
                      </a>
                    </li>
                  </ul>
                  {/*end::Pages*/}
                </div>
                {/*end::Pagination*/}
                {/*end::Tab card box pane*/}
                {/*end::Tab card table pane*/}
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
    </>
  )
}
