import React, {useState, useEffect} from 'react'
import SubCategoryList from './SubCategoryList'
import {useParams} from 'react-router-dom'
import ApiAxios, {baseUrl2} from '../../modules/auth/core/ApiAxios'
import SubCategoryTopProducts from './SubCategoryTopProducts'
import SubCategoryTopProducts2 from './SubCategoryTopProducts2'
import CategoryTopProducts2 from '../dashboard/CategoryTopProducts2'

export default function SubCategoryContent() {
  const {mainCategoryId} = useParams()

  const [getSubCategories, setSubCategories] = useState([])
  useEffect(() => {
    getSubCategoriesData()
  }, [])

  const getSubCategoriesData = async () => {
    try {
      const getData = await ApiAxios.get(`categories/subcategory/${mainCategoryId}`)
      setSubCategories(getData.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {/*begin::Content*/}
      <div id='kt_app_content' className='app-content flex-column-fluid'>
        <div className='app-container container-xxl'>
          <div className='row g-5 g-xl-0 mb-5 mb-xl-5'>
            <SubCategoryList />
          </div>
          {getSubCategories?.map((subCategory: any) => {
            return (
              <>
                <div className='row g-5 g-xl-0 mb-5 mb-xl-5'>
                  {/*begin::Col*/}
                  <div className='col-xl-12'>
                    {/*begin::Player widget 1*/}
                    <div className='card card-flush h-xl-100'>
                      <div className='card-header border-0 pt-6'>
                        <div className='card-title'>
                          <h4 className='card-title d-flex align-items-start flex-column'>
                            <span className='card-label fw-bold text-gray-800'>
                              {subCategory.category_name}
                            </span>
                            <span className='text-gray-400 mt-1 fw-bold fs-7'>
                              {subCategory.category_description}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className='row g-0 g-xl-9 mb-0 mb-xl-0'>
                        {/*begin::Col*/}
                        <div className='col-sm-12 mb-3 mb-sm-0'>
                          {/*begin::Player card*/}
                          <div className='m-0'>
                            {/*begin::User pic*/}
                            <div className='card-rounded position-relative mb-5'>
                              {/*begin::Img*/}
                              <div
                                className='bgi-position-center bgi-no-repeat bgi-size-cover h-300px card-rounded'
                                style={{
                                  backgroundImage: `url("${baseUrl2}${subCategory?.category_image}")`,
                                }}
                              />
                              {/*end::Img*/}
                            </div>
                            {/*end::User pic*/}
                          </div>
                          {/*end::Player card*/}
                        </div>
                        {/*end::Col*/}
                        {/*begin::Col*/}
                      </div>
                      <div className='card-header border-0 pt-6'>
                        <div className='card-title'>
                          <h4 className='card-title d-flex align-items-start flex-column'>
                            <span className='card-label fw-bold text-gray-800'>
                              {subCategory.category_name}
                            </span>
                            <span className='text-gray-400 mt-1 fw-bold fs-7'>
                              {subCategory.category_description}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <SubCategoryTopProducts subCateProducts={subCategory.subCategoryProduct} />
                      <div className='card-header border-0 pt-6'>
                        <div className='card-title'>
                          <h4 className='card-title d-flex align-items-start flex-column'>
                            <span className='card-label fw-bold text-gray-800'>
                              {subCategory.category_name}
                            </span>
                            <span className='text-gray-400 mt-1 fw-bold fs-7'>
                              {subCategory.category_description}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <CategoryTopProducts2 />
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        {/*end::Row*/}
      </div>
      {/*end::Content*/}
    </>
  )
}
