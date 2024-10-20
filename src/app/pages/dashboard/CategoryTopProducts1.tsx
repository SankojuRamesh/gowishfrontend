import React from 'react'
import {baseUrl2} from '../../modules/auth/core/ApiAxios'
import Carousel from 'react-multi-carousel'
import {Responsive} from '../../../_metronic/sliders/responsive'

export default function CategoryTopProducts1(cateTopProducts: any) {
  const responsive = Responsive
  return (
    <>
      <div className='card-body pt-0'>
        {/*begin::Row*/}
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
            {cateTopProducts.cateTopProducts?.map((products: any) => {
              return (
                <div key={products.id} className='col-md-2 col-xxl-4 w-100 pe-3 ps-2 mb-5'>
                  {/*begin::Card*/}
                  <div className='card'>
                    {/*begin::Card body*/}
                    <div className='card-rounded position-relative mb-2'>
                      {/*begin::Img*/}
                      <div
                        className='bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded'
                        style={{
                          backgroundImage: `url("https://www.kalkifashion.com/blogs/wp-content/uploads/2023/02/Groom_Wedding_Guide_Indian_Groom_Wear_Options_for_Different_Wedding.jpg")`,
                          // backgroundImage: `url("${baseUrl2}${products?.image}")`,
                        }}
                      />
                      {/*end::Img*/}
                      {/*begin::Play*/}
                      <a href=''>
                        <button className='btn btn-icon h-auto w-auto p-0 ms-4 mb-4 position-absolute bottom-0 right-0'>
                          <i className='fonticon-play text-white fs-2x' />
                        </button>
                      </a>
                      {/*end::Play*/}
                    </div>
                    <div className='m-0 mb-2 p-2'>
                      {/*begin::Title*/}
                      <a href='#' className='text-gray-800 text-hover-primary fs-6 fw-bold d-block'>
                        {products?.product_name}
                      </a>
                      {/*end::Title*/}
                      <div className='d-flex flex-stack mb-2'>
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
                          {products?.product_price}
                        </span>
                        <span className='text-danger'>
                          <s>$ {products?.mrp}</s>
                        </span>
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
                            title='Add to Cart'
                          >
                            <i className='fonticon-app-store fs-2x' />
                          </span>
                          {/*end::add to cart*/}
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
          </Carousel>
        </div>
        {/*end::Row*/}
      </div>
    </>
  )
}
