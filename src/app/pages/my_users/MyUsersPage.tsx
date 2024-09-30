import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import MyUsersContent from './MyUsersContent'

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

const MyUsersPage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <MyUsersContent />
    </>
  )
}

export {MyUsersPage}
