import React from 'react'
import {PageTitle, PageLink} from '../../../../_metronic/layout/core'
import QuickOrderContent from './QuickOrderContent'

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

const QuickOrderPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <QuickOrderContent />
    </>
  )
}

export {QuickOrderPage}
