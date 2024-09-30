import React from 'react'

export default function MyOverViewContent() {
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
                    Over View
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
                    <li className='breadcrumb-item text-muted'>Over View</li>
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
              <div className='app-container container-xxl'>
                <div className='card mb-5 mb-xxl-10'>
                  <div className='card-body pt-9 pb-0'>
                    {/*begin::Details*/}
                    <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                      {/*begin: Pic*/}
                      <div className='me-7 mb-4'>
                        <div className='symbol symbol-50px symbol-lg-50px symbol-fixed position-relative'>
                          <img src='/media/avatars/300-2.jpg' alt='image' />
                        </div>
                      </div>
                      {/*end::Pic*/}
                      {/*begin::Info*/}
                      <div className='flex-grow-1'>
                        {/*begin::Title*/}
                        <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                          {/*begin::User*/}
                          <div className='d-flex flex-column'>
                            {/*begin::Name*/}
                            <div className='d-flex align-items-center mb-2'>
                              <span className='text-gray-800 fs-2 fw-bolder me-1'>
                                User Name 01
                              </span>
                              <div className='d-flex my-4'>
                                <div className='d-flex flex-column flex-grow-1 pe-8'>
                                  {/*begin::Stats*/}
                                  <div className='d-flex flex-wrap'>
                                    {/*begin::Stat*/}
                                    <a
                                      href='account/User accounts/Mysetting.html'
                                      className='btn btn-sm fw-bold btn-primary'
                                    >
                                      Edit profile
                                    </a>
                                    {/*end::Stat*/}
                                  </div>
                                  {/*end::Stats*/}
                                </div>
                              </div>
                            </div>
                            {/*end::Name*/}
                            {/*begin::Info*/}
                            <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                              <span className='d-flex align-items-center text-gray-400 me-5 mb-2'>
                                {/*begin::Svg Icon | path: icons/duotone/General/User.svg*/}
                                <span className='svg-icon svg-icon-4 me-1'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                    width='24px'
                                    height='24px'
                                    viewBox='0 0 24 24'
                                    version='1.1'
                                  >
                                    <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                                      <polygon points='0 0 24 0 24 24 0 24' />
                                      <path
                                        d='M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z'
                                        fill='#000000'
                                        fillRule='nonzero'
                                        opacity='0.3'
                                      />
                                      <path
                                        d='M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z'
                                        fill='#000000'
                                        fillRule='nonzero'
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}IDUSR00000001
                              </span>
                              <span className='d-flex align-items-center text-gray-400  me-5 mb-2'>
                                {/*begin::Svg Icon | path: icons/duotone/Map/Marker1.svg*/}
                                <span className='svg-icon svg-icon-4 me-1'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    xmlnsXlink='http://www.w3.org/1999/xlink'
                                    width='24px'
                                    height='24px'
                                    viewBox='0 0 24 24'
                                    version='1.1'
                                  >
                                    <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                                      <rect x={0} y={0} width={24} height={24} />
                                      <path
                                        d='M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z'
                                        fill='#000000'
                                        fillRule='nonzero'
                                      />
                                    </g>
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}530041
                              </span>
                              <span className='d-flex align-items-center text-gray-400  mb-2'>
                                {/*begin::Svg Icon | path: icons/duotone/Communication/Mail-at.svg*/}
                                <span className='svg-icon svg-icon-4 me-1'>
                                  <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='24px'
                                    height='24px'
                                    viewBox='0 0 24 24'
                                    version='1.1'
                                  >
                                    <path
                                      d='M11.575,21.2 C6.175,21.2 2.85,17.4 2.85,12.575 C2.85,6.875 7.375,3.05 12.525,3.05 C17.45,3.05 21.125,6.075 21.125,10.85 C21.125,15.2 18.825,16.925 16.525,16.925 C15.4,16.925 14.475,16.4 14.075,15.65 C13.3,16.4 12.125,16.875 11,16.875 C8.25,16.875 6.85,14.925 6.85,12.575 C6.85,9.55 9.05,7.1 12.275,7.1 C13.2,7.1 13.95,7.35 14.525,7.775 L14.625,7.35 L17,7.35 L15.825,12.85 C15.6,13.95 15.85,14.825 16.925,14.825 C18.25,14.825 19.025,13.725 19.025,10.8 C19.025,6.9 15.95,5.075 12.5,5.075 C8.625,5.075 5.05,7.75 5.05,12.575 C5.05,16.525 7.575,19.1 11.575,19.1 C13.075,19.1 14.625,18.775 15.975,18.075 L16.8,20.1 C15.25,20.8 13.2,21.2 11.575,21.2 Z M11.4,14.525 C12.05,14.525 12.7,14.35 13.225,13.825 L14.025,10.125 C13.575,9.65 12.925,9.425 12.3,9.425 C10.65,9.425 9.45,10.7 9.45,12.375 C9.45,13.675 10.075,14.525 11.4,14.525 Z'
                                      fill='#000000'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/} surya123@gmail.com
                              </span>
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::User*/}
                        </div>
                        {/*end::Title*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Details*/}
                  </div>
                </div>
                {/*end::Navbar*/}
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-5'>
                  {/*begin::Title*/}
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    {' '}
                    Orders Overview
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'> Orders Status </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                <div className='row gy-5 g-xl-10'>
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/maps/map004.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-info'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z'
                                fill='currentColor'
                              />
                              <path
                                d='M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>07</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>No Of Orders</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-gray-600'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z'
                                fill='currentColor'
                              />
                              <path
                                d='M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>01</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Pending</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs048.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-primary'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                                fill='currentColor'
                              />
                              <path
                                d='M8.70001 6C8.10001 5.7 7.39999 5.40001 6.79999 5.10001C7.79999 4.00001 8.90001 3 10.1 2.2C10.7 2.1 11.4 2 12 2C12.7 2 13.3 2.1 13.9 2.2C12 3.2 10.2 4.5 8.70001 6ZM12 8.39999C13.9 6.59999 16.2 5.30001 18.7 4.60001C18.1 4.00001 17.4 3.6 16.7 3.2C14.4 4.1 12.2 5.40001 10.5 7.10001C11 7.50001 11.5 7.89999 12 8.39999ZM7 20C7 20.2 7 20.4 7 20.6C6.2 20.1 5.49999 19.6 4.89999 19C4.59999 18 4.00001 17.2 3.20001 16.6C2.80001 15.8 2.49999 15 2.29999 14.1C4.99999 14.7 7 17.1 7 20ZM10.6 9.89999C8.70001 8.09999 6.39999 6.9 3.79999 6.3C3.39999 6.9 2.99999 7.5 2.79999 8.2C5.39999 8.6 7.7 9.80001 9.5 11.6C9.8 10.9 10.2 10.4 10.6 9.89999ZM2.20001 10.1C2.10001 10.7 2 11.4 2 12C2 12 2 12 2 12.1C4.3 12.4 6.40001 13.7 7.60001 15.6C7.80001 14.8 8.09999 14.1 8.39999 13.4C6.89999 11.6 4.70001 10.4 2.20001 10.1ZM11 20C11 14 15.4 9.00001 21.2 8.10001C20.9 7.40001 20.6 6.8 20.2 6.2C13.8 7.5 9 13.1 9 19.9C9 20.4 9.00001 21 9.10001 21.5C9.80001 21.7 10.5 21.8 11.2 21.9C11.1 21.3 11 20.7 11 20ZM19.1 19C19.4 18 20 17.2 20.8 16.6C21.2 15.8 21.5 15 21.7 14.1C19 14.7 16.9 17.1 16.9 20C16.9 20.2 16.9 20.4 16.9 20.6C17.8 20.2 18.5 19.6 19.1 19ZM15 20C15 15.9 18.1 12.6 22 12.1C22 12.1 22 12.1 22 12C22 11.3 21.9 10.7 21.8 10.1C16.8 10.7 13 14.9 13 20C13 20.7 13.1 21.3 13.2 21.9C13.9 21.8 14.5 21.7 15.2 21.5C15.1 21 15 20.5 15 20Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>03 </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Active</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-5 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-danger'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                                fill='currentColor'
                              />
                              <path
                                d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>01</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Cancel</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-5 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs037.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-success'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z'
                                fill='currentColor'
                              />
                              <path
                                d='M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>02</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Approved</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*begin::Page title*/}
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-5'>
                  {/*begin::Title*/}
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    {' '}
                    Work Prograss Overview
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>
                      {' '}
                      Overview Work Prograss Review Status{' '}
                    </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                <div className='row gy-5 g-xl-10'>
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/maps/map002.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-primary'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z'
                                fill='currentColor'
                              />
                              <path
                                d='M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>01</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Processing</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/maps/map002.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-info'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z'
                                fill='currentColor'
                              />
                              <path
                                d='M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>01</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Review</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-5 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-warning'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                                fill='currentColor'
                              />
                              <path
                                d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-3x text-gray-800 lh-1 ls-n2'>01</span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Rejected</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*begin::Page title*/}
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-5'>
                  {/*begin::Title*/}
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    {' '}
                    Online Sales Overview
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'> Order Sales Status </li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                <div className='row gy-5 g-xl-10'>
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/graphs/gra001.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-primary'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z'
                                fill='currentColor'
                              />
                              <path
                                d='M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-2x text-gray-800 lh-1 ls-n2'>
                            $ 6600.00
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Total Amount </span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs048.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-success'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                                fill='currentColor'
                              />
                              <path
                                d='M8.70001 6C8.10001 5.7 7.39999 5.40001 6.79999 5.10001C7.79999 4.00001 8.90001 3 10.1 2.2C10.7 2.1 11.4 2 12 2C12.7 2 13.3 2.1 13.9 2.2C12 3.2 10.2 4.5 8.70001 6ZM12 8.39999C13.9 6.59999 16.2 5.30001 18.7 4.60001C18.1 4.00001 17.4 3.6 16.7 3.2C14.4 4.1 12.2 5.40001 10.5 7.10001C11 7.50001 11.5 7.89999 12 8.39999ZM7 20C7 20.2 7 20.4 7 20.6C6.2 20.1 5.49999 19.6 4.89999 19C4.59999 18 4.00001 17.2 3.20001 16.6C2.80001 15.8 2.49999 15 2.29999 14.1C4.99999 14.7 7 17.1 7 20ZM10.6 9.89999C8.70001 8.09999 6.39999 6.9 3.79999 6.3C3.39999 6.9 2.99999 7.5 2.79999 8.2C5.39999 8.6 7.7 9.80001 9.5 11.6C9.8 10.9 10.2 10.4 10.6 9.89999ZM2.20001 10.1C2.10001 10.7 2 11.4 2 12C2 12 2 12 2 12.1C4.3 12.4 6.40001 13.7 7.60001 15.6C7.80001 14.8 8.09999 14.1 8.39999 13.4C6.89999 11.6 4.70001 10.4 2.20001 10.1ZM11 20C11 14 15.4 9.00001 21.2 8.10001C20.9 7.40001 20.6 6.8 20.2 6.2C13.8 7.5 9 13.1 9 19.9C9 20.4 9.00001 21 9.10001 21.5C9.80001 21.7 10.5 21.8 11.2 21.9C11.1 21.3 11 20.7 11 20ZM19.1 19C19.4 18 20 17.2 20.8 16.6C21.2 15.8 21.5 15 21.7 14.1C19 14.7 16.9 17.1 16.9 20C16.9 20.2 16.9 20.4 16.9 20.6C17.8 20.2 18.5 19.6 19.1 19ZM15 20C15 15.9 18.1 12.6 22 12.1C22 12.1 22 12.1 22 12C22 11.3 21.9 10.7 21.8 10.1C16.8 10.7 13 14.9 13 20C13 20.7 13.1 21.3 13.2 21.9C13.9 21.8 14.5 21.7 15.2 21.5C15.1 21 15 20.5 15 20Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-2x text-gray-800 lh-1 ls-n2'>
                            $ 5600 .00
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Paid Amount</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/maps/map002.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-danger'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z'
                                fill='currentColor'
                              />
                              <path
                                d='M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z'
                                fill='currentColor'
                              />
                              <path
                                opacity='0.3'
                                d='M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-2x text-gray-800 lh-1 ls-n2'>
                            $ 1500.00
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Cancel</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-5 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs037.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-warning'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M2.10001 10C3.00001 5.6 6.69998 2.3 11.2 2L8.79999 4.39999L11.1 7C9.60001 7.3 8.30001 8.19999 7.60001 9.59999L4.5 12.4L2.10001 10ZM19.3 11.5L16.4 14C15.7 15.5 14.4 16.6 12.7 16.9L15 19.5L12.6 21.9C17.1 21.6 20.8 18.2 21.7 13.9L19.3 11.5Z'
                                fill='currentColor'
                              />
                              <path
                                d='M13.8 2.09998C18.2 2.99998 21.5 6.69998 21.8 11.2L19.4 8.79997L16.8 11C16.5 9.39998 15.5 8.09998 14 7.39998L11.4 4.39998L13.8 2.09998ZM12.3 19.4L9.69998 16.4C8.29998 15.7 7.3 14.4 7 12.8L4.39999 15.1L2 12.7C2.3 17.2 5.7 20.9 10 21.8L12.3 19.4Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-2x text-gray-800 lh-1 ls-n2'>
                            $ 750.00
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Cancel Charges</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-sm-6 col-xl-2 mb-5 mb-xl-10'>
                    {/*begin::Card widget 2*/}
                    <div className='card h-lg-100'>
                      {/*begin::Body*/}
                      <div className='card-body d-flex justify-content-between align-items-start flex-column'>
                        {/*begin::Icon*/}
                        <div className='m-0'>
                          {/*begin::Svg Icon | path: icons/duotune/abstract/abs027.svg*/}
                          <span className='svg-icon svg-icon-2hx svg-icon-success'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                opacity='0.3'
                                d='M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z'
                                fill='currentColor'
                              />
                              <path
                                d='M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className='d-flex flex-column my-7'>
                          {/*begin::Number*/}
                          <span className='fw-semibold fs-2x text-gray-800 lh-1 ls-n2'>
                            $ 750.00
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className='m-0'>
                            <span className='fw-semibold fs-6 text-gray-400'>Refund Amount</span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                </div>
                <div className='card'>
                  {/*begin::Card header*/}
                  <div
                    className='card-header border-0 cursor-pointer'
                    role='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#kt_account_deactivate'
                    aria-expanded='true'
                    aria-controls='kt_account_deactivate'
                  >
                    <div className='card-title m-0'>
                      <h3 className='fw-bold m-0'>Deactivate User Account</h3>
                    </div>
                  </div>
                  {/*end::Card header*/}
                  {/*begin::Content*/}
                  <div id='kt_account_settings_deactivate' className='collapse show'>
                    {/*begin::Form*/}
                    <form
                      id='kt_account_deactivate_form'
                      className='form fv-plugins-bootstrap5 fv-plugins-framework'
                      noValidate
                    >
                      {/*begin::Card body*/}
                      <div className='card-body border-top p-9'>
                        {/*begin::Notice*/}
                        <div className='notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6'>
                          {/*begin::Icon*/}
                          {/*begin::Svg Icon | path: icons/duotune/general/gen044.svg*/}
                          <span className='svg-icon svg-icon-2tx svg-icon-warning me-4'>
                            <svg
                              width={24}
                              height={24}
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <rect
                                opacity='0.3'
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={10}
                                fill='currentColor'
                              />
                              <rect
                                x={11}
                                y={14}
                                width={7}
                                height={2}
                                rx={1}
                                transform='rotate(-90 11 14)'
                                fill='currentColor'
                              />
                              <rect
                                x={11}
                                y={17}
                                width={2}
                                height={2}
                                rx={1}
                                transform='rotate(-90 11 17)'
                                fill='currentColor'
                              />
                            </svg>
                          </span>
                          {/*end::Svg Icon*/}
                          {/*end::Icon*/}
                          {/*begin::Wrapper*/}
                          <div className='d-flex flex-stack flex-grow-1'>
                            {/*begin::Content*/}
                            <div className='fw-semibold'>
                              <h4 className='text-gray-900 fw-bold'>
                                You Are Deactivating User Account
                              </h4>
                              <div className='fs-6 text-gray-700'>
                                For extra security, this requires you to confirm your email or phone
                                number when you reset yousignr password.
                                <br />
                                <a className='fw-bold' href='#'>
                                  Learn more
                                </a>
                              </div>
                            </div>
                            {/*end::Content*/}
                          </div>
                          {/*end::Wrapper*/}
                        </div>
                        {/*end::Notice*/}
                        {/*begin::Form input row*/}
                        <div className='form-check form-check-solid fv-row fv-plugins-icon-container'>
                          <input
                            name='deactivate'
                            className='form-check-input'
                            type='checkbox'
                            defaultValue=''
                            id='deactivate'
                          />
                          <label
                            className='form-check-label fw-semibold ps-2 fs-6'
                            htmlFor='deactivate'
                          >
                            I confirm my account deactivation
                          </label>
                          <div className='fv-plugins-message-container invalid-feedback' />
                        </div>
                        {/*end::Form input row*/}
                      </div>
                      {/*end::Card body*/}
                      {/*begin::Card footer*/}
                      <div className='card-footer d-flex justify-content-end py-6 px-9'>
                        <button
                          id='kt_account_deactivate_account_submit'
                          type='submit'
                          className='btn btn-danger fw-semibold'
                        >
                          Deactivate Account
                        </button>
                      </div>
                      {/*end::Card footer*/}
                      <input type='hidden' />
                    </form>
                    {/*end::Form*/}
                  </div>
                  {/*end::Content*/}
                </div>
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id='kt_app_footer' className='app-footer'>
            {/*begin::Footer container*/}
            <div className='app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack py-3'>
              {/*begin::Copyright*/}
              <div className='text-dark order-2 order-md-1'>
                <span className='text-muted fw-semibold me-1'>
                  © 2023 www.gowish.app | All rights reserved
                </span>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1'>
                <li className='menu-item'>
                  <a href='' target='_blank' className='menu-link px-2'>
                    {' '}
                    Terms and conditions |
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='' target='_blank' className='menu-link px-2'>
                    www.gowish.studio{' '}
                  </a>
                </li>
              </ul>
              {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </>
  )
}
