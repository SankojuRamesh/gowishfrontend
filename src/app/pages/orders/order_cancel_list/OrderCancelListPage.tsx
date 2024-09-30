import React from 'react'
import {PageTitle, PageLink} from '../../../../_metronic/layout/core'
import OrderCancelListContent from './OrderCancelListContent'

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

const OrderCancelListPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <OrderCancelListContent />
    </>
  )
}

export {OrderCancelListPage}
