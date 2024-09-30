import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import {Responsive} from '../../../_metronic/sliders/responsive'
import ApiAxios, {baseUrl2} from '../../modules/auth/core/ApiAxios'

export default function SubCategoryTopProducts(subCateTopProducts: any) {
  const responsive = Responsive
  return (
    <>
      <div className='card-body pt-5'>
        <div className='row g-5 g-xl-9 mb-5 mb-xl-9'>
          <Carousel
            responsive={responsive}
            swipeable={true}
            showDots={true}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={3000}
            removeArrowOnDeviceType={['tablet', 'mobile']}
          >
            {subCateTopProducts.subCateProducts?.map((subCategoryProducts: any) => {
              const mrp = subCategoryProducts?.mrp
              const product_price = subCategoryProducts?.product_price
              const percentage = ((mrp - product_price) / mrp) * 100
              return (
                <>
                  {/*begin::Col*/}
                  <div className='col-sm-4 mb-3 mb-sm-0 w-100 pe-3 ps-2'>
                    {/*begin::Player card*/}
                    <div className='m-0'>
                      {/*begin::User pic*/}
                      <div className='card-rounded position-relative mb-5'>
                        {/*begin::Img*/}
                        <div
                          className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                          style={{
                            backgroundImage: `url("${baseUrl2}${subCategoryProducts?.image}")`,
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
                      <div className='m-0'>
                        {/*begin::Title*/}
                        <a
                          href='../../demo1/dist/front end/Page 04_View.html'
                          className='text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2'
                        >
                          {subCategoryProducts?.product_name}
                        </a>
                        {/*end::Title*/}
                        <div className='d-flex flex-stack mb-2'>
                          {/*begin::Label*/}
                          <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                            {subCategoryProducts?.short_description}
                          </span>
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            <span className='badge badge-light fw-bold'>Girls</span>
                            <span className='badge badge-light fw-bold'>Universal</span>
                          </div>
                          {/*end::Action*/}
                        </div>
                        <div className='d-flex flex-stack fw-bold'>
                          {/*begin::Label*/}
                          <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                            <span className='fs-6 fw-semibold text-gray-400'>$</span>
                            {subCategoryProducts.product_price}
                          </span>
                          <span>
                            <s>${subCategoryProducts.mrp}</s>
                          </span>
                          {/* <span className='text-danger'>Save {percentage}% off</span> */}
                          {/*begin::Action*/}
                          <div className='btn-chips'>
                            <a href='' className='btn btn-icon btn-light-primary me-3'>
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                              <i className='fonticon-like fs-2x' />
                            </a>
                            <a href='' className='btn btn-icon btn-light-primary me-3'>
                              {/*begin::Svg Icon | path: icons/duotune/arrows/arr078.svg*/}
                              <i className='fonticon-app-store fs-2x' />
                            </a>
                          </div>
                          {/*end::Action*/}
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Player card*/}
                  </div>
                  {/*end::Col*/}
                </>
              )
            })}
          </Carousel>
        </div>
      </div>
    </>
  )
}
