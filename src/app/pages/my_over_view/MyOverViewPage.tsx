import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import MyOverViewContent from './MyOverViewContent'

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

const MyOverViewPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <MyOverViewContent />
    </>
  )
}

export {MyOverViewPage}
