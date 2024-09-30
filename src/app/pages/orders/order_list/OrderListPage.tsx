import React from 'react'
import {PageTitle, PageLink} from '../../../../_metronic/layout/core'
import OrderListContent from './OrderListContent'

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

const OrderListPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <OrderListContent />
    </>
  )
}

export {OrderListPage}
