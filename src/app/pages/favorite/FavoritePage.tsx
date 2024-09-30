import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import FavoriteContent from './FavoriteContent'

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

const FavoritePage = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      <FavoriteContent />
    </>
  )
}

export {FavoritePage}
