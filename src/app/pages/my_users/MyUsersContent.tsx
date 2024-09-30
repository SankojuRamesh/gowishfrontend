import React, {useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../../redux/hooks'
import {getMyUserByUserId, getMyUsers} from '../../../redux/slices/myUsers'
import {useAuth} from '../../modules/auth'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {baseUrl2} from '../../modules/auth/core/ApiAxios'
import {AddUserModel} from '../../../_metronic/partials'

export default function MyUsersContent() {
  const [showAddUserModel, setAddUserModel] = useState<boolean>(false)
  const [showEditUserModel, setEditUserModel] = useState<boolean>(false)
  const {myUsers, isLoading} = useAppSelector((state) => state.myUsers)
  const dispatch = useAppDispatch()
  const {currentUser} = useAuth()
  const user_id = currentUser?.id

  const [getUserId, setUserId] = useState(0)
  const [getEdit, setEdit] = useState(false)

  useEffect(() => {
    dispatch(getMyUsers(user_id))
  }, [dispatch, user_id])

  const handelEditUserModel = (userId: any) => {
    setUserId(userId)
    setEdit(true)
    setAddUserModel(true)
  }

  const handelAddUserModel = () => {
    setAddUserModel(true)
    setUserId(0)
    setEdit(false)
  }

  return (
    <>
      {/*begin::Wrapper*/}
      <div className='app-wrapper flex-column flex-row-fluid' id='kt_app_wrapper'>
        {/*begin::Main*/}
        <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
          {/*begin::Content wrapper*/}
          <div className='d-flex flex-column flex-column-fluid'>
            {/*begin::Toolbar*/}
            <div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
              {/*begin::Toolbar container*/}
              <div
                id='kt_app_toolbar_container'
                className='app-container container-xxl d-flex flex-stack'
              >
                {/*begin::Page title*/}
                <div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
                  {/*begin::Title*/}
                  <h1 className='page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0'>
                    My Users list
                  </h1>
                  {/*end::Title*/}
                  {/*begin::Breadcrumb*/}
                  <ul className='breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1'>
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>
                      <a
                        href='../../demo1/dist/index.html'
                        className='text-muted text-hover-primary'
                      >
                        Home
                      </a>
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-400 w-5px h-2px' />
                    </li>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <li className='breadcrumb-item text-muted'>My Users</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className='d-flex align-items-center gap-2 gap-lg-3'>
                  {/*begin::Filter menu*/}
                  <div className='m-0'>
                    {/*begin::Actions*/}
                    <div className='d-flex my-0'>
                      {/*begin::Select*/}
                      <select
                        name='status'
                        data-control='select2'
                        data-hide-search='true'
                        data-placeholder='Filter'
                        className='form-select form-select-sm border-body bg-body w-150px me-5'
                      >
                        <option value={1}>All</option>
                        <option value={2}>My Family</option>
                        <option value={3}>Coustmer</option>
                        <option value={4}>Friends</option>
                        <option value={4}>My Employess</option>
                      </select>
                      {/*end::Select*/}
                    </div>
                    {/*end::Actions*/}
                  </div>
                  {/*end::Filter menu*/}
                  <span
                    className='btn btn-sm fw-bold btn-primary'
                    onClick={() => handelAddUserModel()}
                  >
                    Add User
                  </span>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content flex-column-fluid'>
              {/*begin::Content container*/}
              <div id='kt_app_content_container' className='app-container container-xxl'>
                {/*begin::Toolbar*/}
                <div className='d-flex flex-wrap flex-stack pb-7'>
                  {/*begin::Title*/}
                  <div className='d-flex flex-wrap align-items-center my-1'>
                    <h3 className='fw-bold me-5 my-1'>Search</h3>
                    {/*begin::Search*/}
                    <div className='d-flex align-items-center position-relative my-1'>
                      {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                      <span className='svg-icon svg-icon-3 position-absolute ms-3'>
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <rect
                            opacity='0.5'
                            x='17.0365'
                            y='15.1223'
                            width='8.15546'
                            height={2}
                            rx={1}
                            transform='rotate(45 17.0365 15.1223)'
                            fill='currentColor'
                          />
                          <path
                            d='M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z'
                            fill='currentColor'
                          />
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                      <input
                        type='text'
                        id='kt_filter_search'
                        className='form-control form-control-sm border-body bg-body w-150px ps-10'
                        placeholder='Search'
                      />
                    </div>
                    {/*end::Search*/}
                  </div>
                  {/*end::Title*/}
                </div>
                {/*end::Toolbar*/}
                {/*begin::Tab card Content*/}
                {/*begin::Row*/}
                <div className='row g-6 g-xl-9'>
                  {/*begin Col box::user*/}
                  {myUsers?.map((my_users: any, i = 0) => {
                    const user_profile_name = my_users?.user.user_name
                    const name_first_two_letters = user_profile_name.substring(0, 2)

                    return (
                      <div className='col-md-6 col-xxl-4' key={i}>
                        {/*begin::Card*/}
                        <div className='card'>
                          {/*begin::Card body*/}
                          <div className='card-body d-flex flex-center flex-column pt-5 p-5'>
                            {/*begin::Avatar*/}
                            <div className='symbol symbol-65px symbol-circle mb-5'>
                              {my_users?.user.user_image === null ? (
                                <span className='symbol-label fs-2x fw-semibold text-dark bg-light-dark'>
                                  {name_first_two_letters.toUpperCase()}
                                </span>
                              ) : (
                                <img
                                  className='h-65px w-65px rounded-circle'
                                  src={`${baseUrl2}${my_users?.user.user_image}`}
                                  alt='metronic'
                                />
                              )}
                            </div>
                            {/*end::Avatar*/}
                            {/*begin::Name*/}
                            <span className='fs-4 text-gray-800 fw-bold mb-0'>
                              {my_users?.user.user_name}
                            </span>
                            {/*end::Name*/}
                            {/*begin::Position*/}
                            <div className='fw-semibold text-gray-400 mb-1'>
                              {my_users?.user.user_relation === null
                                ? my_users?.user.user_relation
                                : 'None'}
                            </div>
                            {/*end::Position*/}
                            {/*begin::Position*/}
                            {my_users?.user.user_dob === null ? (
                              <div className='fw-semibold text-gray-400 mb-3'>
                                Date of Birth : Not given
                              </div>
                            ) : (
                              <div className='fw-semibold text-gray-400 mb-3'>
                                Date of Birth: &nbsp;{my_users?.user.user_dob}
                              </div>
                            )}

                            {/*end::Position*/}
                            {/*begin::Info*/}
                            <div className='d-flex flex-center flex-wrap'>
                              {/*begin::Stats*/}
                              <div className='mute p-2'>
                                <div className='fs-6 fw-bold text-gray-700'>
                                  +91
                                  {my_users?.user.phone}
                                </div>
                                <div className='fw-semibold text-gray-400'>
                                  {my_users?.user.user_email}
                                </div>
                              </div>
                              {/*end::Stats*/}
                              {/*begin::Stats*/}
                              <div className='mute p-2'>
                                <div className='fs-6 fw-bold text-gray-700'>
                                  {' '}
                                  {my_users?.user.city}
                                </div>
                                <div className='fw-semibold text-gray-400'>
                                  {my_users?.user.pincode}
                                </div>
                              </div>
                              {/*end::Stats*/}
                              {/*begin::Stats*/}
                              <div className='mute p-2'>
                                <div className='fs-6 fw-bold text-gray-700'>
                                  {my_users?.user.state}
                                </div>
                                <div className='fw-semibold text-gray-400'>
                                  {' '}
                                  {my_users?.user.country}
                                </div>
                              </div>
                              {/*end::Stats*/}
                              {/*end::Stats*/}
                            </div>
                            {/*end::Info*/}
                          </div>
                          {/*end::Card body*/}
                          <div className='d-flex my-3 ms-9 align=center'>
                            {/*begin::Edit*/}
                            <button
                              className='btn btn-icon btn-active-light-primary w-30px h-30px me-3'
                              // onClick={() => handelEditUserModel(my_users?.user?.id)}
                            >
                              <span
                                data-bs-toggle='tooltip'
                                data-bs-trigger='hover'
                                data-kt-initialized={1}
                              >
                                {/*begin::Svg Icon | path: icons/duotune/art/art005.svg*/}
                                <span className='svg-icon svg-icon-3'>
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox='0 0 24 24'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      opacity='0.3'
                                      d='M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z'
                                      fill='currentColor'
                                    />
                                    <path
                                      d='M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z'
                                      fill='currentColor'
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}
                              </span>
                            </button>

                            {/*end::Edit*/}
                            {/*begin::Delete*/}
                            <span
                              className='btn btn-icon btn-active-light-primary w-30px h-30px me-3'
                              data-bs-toggle='tooltip'
                              data-kt-customer-payment-method='delete'
                              data-kt-initialized={1}
                            >
                              {/*begin::Svg Icon | path: icons/duotune/general/gen027.svg*/}
                              <span className='svg-icon svg-icon-3'>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox='0 0 24 24'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z'
                                    fill='currentColor'
                                  />
                                  <path
                                    opacity='0.5'
                                    d='M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z'
                                    fill='currentColor'
                                  />
                                  <path
                                    opacity='0.5'
                                    d='M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z'
                                    fill='currentColor'
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}
                            </span>
                            {/*end::Delete*/}
                            {/*end::More*/}
                          </div>
                        </div>
                        {/*end::Ca
                        rd*/}
                      </div>
                    )
                  })}
                  {/*end Col box::user*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
        </div>
        {/*end:::Main*/}
      </div>
      <AddUserModel
        show={showAddUserModel}
        isEdit={getEdit}
        currentUserId={getUserId}
        handleClose={() => setAddUserModel(false)}
      />
      {/*end::Wrapper*/}
    </>
  )
}
