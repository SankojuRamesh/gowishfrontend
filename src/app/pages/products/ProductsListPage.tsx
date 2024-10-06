import React, {useEffect, useState} from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import ProductListContent from './ProductListContent'
import {RightToolbar} from '../../../_metronic/partials'
import {useParams} from 'react-router-dom'
import ApiAxios from '../../modules/auth/core/ApiAxios'
import { PageLoader } from '../../modules/shared/loader/PageLoader'

// const accountBreadCrumbs: Array<PageLink> = [
//   {
//     title: 'Home',
//     path: '/',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: true,
//   },
// ]

const ProductsListPage = () => {
  const {subCategoryId} = useParams()

  const [getProductsList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getProductsListData()
  }, [])

  const getProductsListData = async () => {
    setIsLoading(true)
    try {
      const getData = await ApiAxios.get(`products/sub_category_products/${subCategoryId}`)
      setProductList(getData.data)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }
  console.log(getProductsList)
  return (
    <>
      {isLoading && <PageLoader />}
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <ProductListContent />
      <RightToolbar />
    </>
  )
}

export {ProductsListPage}
