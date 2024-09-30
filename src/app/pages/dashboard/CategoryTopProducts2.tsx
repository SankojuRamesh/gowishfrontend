import React from 'react'
import {baseUrl2} from '../../modules/auth/core/ApiAxios'
import Carousel from 'react-multi-carousel'
import {Responsive} from '../../../_metronic/sliders/responsive'

export default function CategoryTopProducts2() {
  const responsive = Responsive

  return (
    <>
      <div className='card-body pt-0'>
        {/*begin::Row*/}
        <div className='row g-3 g-xl-9 mb-2 mb-xl-9'>
          {/*begin::Col*/}
          <Carousel
            responsive={responsive}
            swipeable={true}
            showDots={true}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            <div className='col-sm-3 mb-3 mb-sm-0 w-100 pe-3 ps-2 pb-5'>
              {/*begin::Player card*/}
              <div className='m-0'>
                {/*begin::User pic*/}
                <div className='card-rounded position-relative mb-2'>
                  {/*begin::Img*/}
                  <div
                    className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
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
                  <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'>
                    {' '}
                    Engagement invitations 12
                  </a>
                  {/*end::Title*/}
                  <div className='d-flex flex-stack   mb-2'>
                    {/*begin::Label*/}
                    <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>WEDINV00045</span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      <span className='badge badge-light fw-bold'>Hindus</span>
                      <span className='badge badge-light fw-bold'>Standred</span>
                    </div>
                    {/*end::Action*/}
                  </div>
                  <div className='d-flex flex-stack fw-bold'>
                    {/*begin::Label*/}
                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                      450.00
                    </span>
                    <span className='text-danger'>
                      <s>$ 500</s>
                    </span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      {/*begin::add favourate*/}
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
                      {/*End::add favourate*/}
                      {/*begin::add to cart*/}
                      <span
                        className='btn btn-icon btn-light-primary me-3'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        aria-label='Add to Cart'
                        data-bs-original-title='Add to Cart'
                        data-kt-initialized={1}
                      >
                        <i className='fonticon-app-store fs-2x' />
                      </span>
                      {/*end::add to cart*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Player card*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className='col-sm-3 mb-3 mb-sm-0 w-100 pe-3 ps-2 mb-5'>
              {/*begin::Player card*/}
              <div className='m-0'>
                {/*begin::User pic*/}
                <div className='card-rounded position-relative mb-2'>
                  {/*begin::Img*/}
                  <div
                    className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                    style={{
                      backgroundImage: 'url("/media/stock/600x600/img-51.jpg")',
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
                  <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'>
                    {' '}
                    Engagement invitations 12
                  </a>
                  {/*end::Title*/}
                  <div className='d-flex flex-stack   mb-2'>
                    {/*begin::Label*/}
                    <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>WEDINV00045</span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      <span className='badge badge-light fw-bold'>Hindus</span>
                      <span className='badge badge-light fw-bold'>Standred</span>
                    </div>
                    {/*end::Action*/}
                  </div>
                  <div className='d-flex flex-stack fw-bold'>
                    {/*begin::Label*/}
                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                      450.00
                    </span>
                    <span className='text-danger'>
                      <s>$ 500</s>
                    </span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      {/*begin::add favourate*/}
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
                      {/*End::add favourate*/}
                      {/*begin::add to cart*/}
                      <span
                        className='btn btn-icon btn-light-primary me-3'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        aria-label='Add to Cart'
                        data-bs-original-title='Add to Cart'
                        data-kt-initialized={1}
                      >
                        <i className='fonticon-app-store fs-2x' />
                      </span>
                      {/*end::add to cart*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Player card*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className='col-sm-3 mb-3 mb-sm-0 w-100 pe-3 ps-2 mb-5'>
              {/*begin::Player card*/}
              <div className='m-0'>
                {/*begin::User pic*/}
                <div className='card-rounded position-relative mb-2'>
                  {/*begin::Img*/}
                  <div
                    className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                    style={{
                      backgroundImage: 'url("/media/stock/600x600/img-50.jpg")',
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
                  <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'>
                    {' '}
                    Engagement invitations 12
                  </a>
                  {/*end::Title*/}
                  <div className='d-flex flex-stack   mb-2'>
                    {/*begin::Label*/}
                    <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>WEDINV00045</span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      <span className='badge badge-light fw-bold'>Hindus</span>
                      <span className='badge badge-light fw-bold'>Standred</span>
                    </div>
                    {/*end::Action*/}
                  </div>
                  <div className='d-flex flex-stack fw-bold'>
                    {/*begin::Label*/}
                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                      450.00
                    </span>
                    <span className='text-danger'>
                      <s>$ 500</s>
                    </span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      {/*begin::add favourate*/}
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
                      {/*End::add favourate*/}
                      {/*begin::add to cart*/}
                      <span
                        className='btn btn-icon btn-light-primary me-3'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        aria-label='Add to Cart'
                        data-bs-original-title='Add to Cart'
                        data-kt-initialized={1}
                      >
                        <i className='fonticon-app-store fs-2x' />
                      </span>
                      {/*end::add to cart*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Player card*/}
            </div>
            {/*end::Col*/}
            {/*begin::Col*/}
            <div className='col-sm-3 mb-3 mb-sm-0 w-100 pe-3 ps-2 mb-5'>
              {/*begin::Player card*/}
              <div className='m-0'>
                {/*begin::User pic*/}
                <div className='card-rounded position-relative mb-2'>
                  {/*begin::Img*/}
                  <div
                    className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                    style={{
                      backgroundImage: 'url("/media/stock/600x600/img-54.jpg")',
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
                  <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'>
                    {' '}
                    Engagement invitations 12
                  </a>
                  {/*end::Title*/}
                  <div className='d-flex flex-stack   mb-2'>
                    {/*begin::Label*/}
                    <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>WEDINV00045</span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      <span className='badge badge-light fw-bold'>Hindus</span>
                      <span className='badge badge-light fw-bold'>Standred</span>
                    </div>
                    {/*end::Action*/}
                  </div>
                  <div className='d-flex flex-stack fw-bold'>
                    {/*begin::Label*/}
                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                      450.00
                    </span>
                    <span className='text-danger'>
                      <s>$ 500</s>
                    </span>
                    {/*begin::Action*/}
                    <div className='btn-chips'>
                      {/*begin::add favourate*/}
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
                      {/*End::add favourate*/}
                      {/*begin::add to cart*/}
                      <span
                        className='btn btn-icon btn-light-primary me-3'
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        aria-label='Add to Cart'
                        data-bs-original-title='Add to Cart'
                        data-kt-initialized={1}
                      >
                        <i className='fonticon-app-store fs-2x' />
                      </span>
                      {/*end::add to cart*/}
                    </div>
                    {/*end::Action*/}
                  </div>
                </div>
                {/*end::Info*/}
              </div>
              {/*end::Player card*/}
            </div>
            {/*end::Col*/}
          </Carousel>
        </div>
        {/*end::Row*/}
      </div>
    </>
  )
}
