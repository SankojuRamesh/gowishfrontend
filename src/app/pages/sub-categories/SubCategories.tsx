import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import SubCategoryContent from './SubCategoryContent'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Home',
    path: '/',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: true,
  },
]

const SubCategoryPage = () => {
  return (
    <>
      <PageTitle breadcrumbs={accountBreadCrumbs}>Sub Categories</PageTitle>
      <SubCategoryContent />
    </>
  )
}

export {SubCategoryPage}
