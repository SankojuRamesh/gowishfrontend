import React, {useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import Carousel from 'react-multi-carousel'
import {Responsive} from '../../../_metronic/sliders/responsive'
import ApiAxios, {baseUrl2} from '../../modules/auth/core/ApiAxios'
import { PageLoader } from '../../modules/shared/loader/PageLoader'

export default function SubCategoryList() {
  const responsive = Responsive

  const {mainCategoryId} = useParams()

  const [getSubCategoriesList, setSubCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getSubCategoriesData()
  }, [])

  const getSubCategoriesData = async () => {
    setIsLoading(true)
    try {
      const getData = await ApiAxios.get(`categories/subcategory/${mainCategoryId}`)
      setSubCategories(getData.data)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  return (
    <>
      {isLoading && <PageLoader />}
      {/*begin::Col*/}
      <div className='col-xl-12'>
        {/*begin::Player widget 1*/}
        <div className='card card-flush h-xl-100'>
          {/*end::Header*/}
          <div
            id='kt_sliders_widget_2_slider'
            className='card card-flush carousel carousel-custom carousel-stretch slide h-xl-100'
            data-bs-ride='carousel'
            data-bs-interval={5500}
          >
            {/*begin::Header*/}
            <div className='card-header pt-5'>
              {/*begin::Title*/}
              <h4 className='card-title d-flex align-items-start flex-column'>
                <span className='card-label fw-bold text-gray-800'>Invitation Cateegory</span>
                <span className='text-gray-400 mt-1 fw-bold fs-7'>All Invitations category</span>
              </h4>
              {/*end::Title*/}
            </div>
            {/*end::Header*/}
            {/*begin::Body*/}
            <div className='card-body pt-6'>
              <div className='card card-flush h-xl-100'>
                <div className='row'>
                  <Carousel
                    responsive={responsive}
                    swipeable={true}
                    showDots={true}
                    autoPlay={true}
                    infinite={true}
                    autoPlaySpeed={3000}
                    removeArrowOnDeviceType={['tablet', 'mobile']}
                  >
                    {getSubCategoriesList?.map((subCategory: any) => {
                      return (
                        <>
                          <div className='col pe-3 ps-2 mb-5 pb-5'>
                            <div className='card-rounded position-relative'>
                              <div
                                className='bgi-position-center bgi-no-repeat bgi-size-cover h-125px card-rounded'
                                style={{
                                  backgroundImage: `url("${baseUrl2}${subCategory?.category_image}")`,
                                }}
                              />
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
                            </div>
                            <div className='m-2'>
                              <Link
                                to={`/products/${subCategory?.id}`}
                                className='text-gray-600 text-hover-primary fs-6 fw-bold d-block mb-2'
                              >
                                {subCategory?.category_name}
                              </Link>
                              <span className='fw-bold fs-8 text-gray-400 d-block lh-1'>
                                {subCategory?.category_description}
                              </span>
                            </div>
                          </div>
                        </>
                      )
                    })}
                  </Carousel>
                </div>
                {/*end::Card body*/}
                {/*end::Card header*/}
              </div>
            </div>
            {/*end::Body*/}
          </div>
          {/*begin::Header*/}
        </div>
        {/*end::Player widget 1*/}
      </div>
      {/*end::Col*/}
    </>
  )
}
