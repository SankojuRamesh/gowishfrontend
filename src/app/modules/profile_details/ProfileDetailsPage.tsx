import React from 'react'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import ProfileDetailsContent from './ProfileDetailsContent'
import {Navigate, Route, Routes} from 'react-router-dom'

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

const ProfileDetailsPage = () => {
  return (
    <>
      {/* <ProfileDetailsContent /> */}
      <Routes>
        <Route
          element={
            <>
              <ProfileDetailsContent />
            </>
          }
        >
          <Route index element={<Navigate to='/profile' />} />
        </Route>
        {/* <PageTitle breadcrumbs={accountBreadCrumbs}>Product List</PageTitle> */}
      </Routes>
    </>
  )
}

export {ProfileDetailsPage}
