import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import ProductDetailsContent from './ProductDetailsContent'

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

const ProductDetailsPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <ProductDetailsContent />
    </>
  )
}

export {ProductDetailsPage}
