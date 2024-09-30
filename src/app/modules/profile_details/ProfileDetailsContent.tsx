import React from 'react'

export default function ProfileDetailsContent() {
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
                    Profile Details
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
                    <li className='breadcrumb-item text-muted'>My Profile Setting</li>
                    {/*end::Item*/}
                  </ul>
                  {/*end::Breadcrumb*/}
                </div>
                {/*end::Page title*/}
                <a href='#' className='btn btn-sm fw-bold btn-primary'>
                  Edit profile
                </a>
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div id='kt_app_content' className='app-content flex-column-fluid'>
              {/*begin::Content container*/}
              <div id='kt_app_content_container' className='app-container container-xxl'>
                {/*begin::active order List sessions*/}
                <div className='card mb-5 mb-xxl-10'>
                  {/*begin::Card body*/}
                  <div className='card-body p-0'>
                    {/*begin::Table wrapper*/}
                    {/*begin::Card header*/}
                    <div className='card-header'>
                      {/*begin::Heading*/}
                      <div className='card-title'>
                        <h3>Profile Details</h3>
                      </div>
                      {/*end::Heading*/}
                    </div>
                    {/*end::Card header*/}
                    {/*begin::my setting Content*/}
                    <div id='kt_account_profile_details' className='collapse show'>
                      {/*begin::Form*/}
                      <form id='kt_account_profile_details_form' className='form'>
                        {/*begin::Card body*/}
                        <div className='card-body border-top p-9'>
                          {/*begin::Input group*/}
                          <div className='row mb-6'>
                            {/*begin::Label*/}
                            <label className='col-lg-4 col-form-label fw-bold fs-6'>Photo</label>
                            {/*end::Label*/}
                            {/*begin::Col*/}
                            {/*begin::Col*/}
                            <div className='col-lg-8'>
                              {/*begin::Image input*/}
                              <div
                                className='image-input image-input-outline'
                                data-kt-image-input='true'
                                style={{
                                  backgroundImage: 'url(/media/avatars/blank.png)',
                                }}
                              >
                                {/*begin::Preview existing avatar*/}
                                <div
                                  className='image-input-wrapper w-125px h-125px'
                                  style={{
                                    backgroundImage: 'url(/media/avatars/300-2.jpg)',
                                  }}
                                />
                                {/*end::Preview existing avatar*/}
                                {/*begin::Label*/}
                                <label
                                  className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow'
                                  data-kt-image-input-action='change'
                                  data-bs-toggle='tooltip'
                                  title='Change avatar'
                                >
                                  <i className='bi bi-pencil-fill fs-7' />
                                  {/*begin::Inputs*/}
                                  <input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
                                  <input type='hidden' name='avatar_remove' />
                                  {/*end::Inputs*/}
                                </label>
                                {/*end::Label*/}
                                {/*begin::Cancel*/}
                                <span
                                  className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow'
                                  data-kt-image-input-action='cancel'
                                  data-bs-toggle='tooltip'
                                  title='Cancel avatar'
                                >
                                  <i className='bi bi-x fs-2' />
                                </span>
                                {/*end::Cancel*/}
                                {/*begin::Remove*/}
                                <span
                                  className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow'
                                  data-kt-image-input-action='remove'
                                  data-bs-toggle='tooltip'
                                  title='Remove avatar'
                                >
                                  <i className='bi bi-x fs-2' />
                                </span>
                                {/*end::Remove*/}
                              </div>
                              {/*end::Image input*/}
                              {/*begin::Hint*/}
                              <div className='form-text'>Allowed file types: png, jpg, jpeg.</div>
                              {/*end::Hint*/}
                            </div>
                            {/*end::Col*/}
                          </div>
                          {/*end::Input group*/}
                          {/*begin::Input group*/}
                          <div className='row g-9 mb-7'>
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>Full Name</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='state'
                                defaultValue='Frist Name'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>Last Name </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='postcode'
                                defaultValue='Last Name'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                          </div>
                          {/*begin::Input group*/}
                          {/*begin::Input group*/}
                          <div className='row g-9 mb-7'>
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'> Contact No </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='state'
                                defaultValue='xxxxxxxxxx'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'> Mail Id</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='postcode'
                                defaultValue='yourmail@Mail.com'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                          </div>
                          {/*begin::Input group*/}
                          <div className='d-flex flex-column mb-7 fv-row fv-plugins-icon-container'>
                            {/*begin::Label*/}
                            <label className='required fs-6 fw-semibold mb-2'>Address Line 1</label>
                            {/*end::Label*/}
                            {/*begin::Input*/}
                            <input
                              className='form-control form-control-solid'
                              placeholder=''
                              name='address1'
                              defaultValue='Enter Store Address'
                              disabled
                            />
                            {/*end::Input*/}
                            <div className='fv-plugins-message-container invalid-feedback' />
                          </div>
                          {/*begin::Input group*/}
                          <div className='row g-9 mb-7'>
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>
                                Store Place Area
                              </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='state'
                                defaultValue='Sangareddy'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>City</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='postcode'
                                defaultValue='HYDERABAD'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                          </div>
                          {/*begin::Input group*/}
                          {/*begin::Input group*/}
                          <div className='row g-9 mb-7'>
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>Pincode </label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='state'
                                defaultValue={502001}
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                            {/*end::Col*/}
                            {/*begin::Col*/}
                            <div className='col-md-6 fv-row fv-plugins-icon-container'>
                              {/*begin::Label*/}
                              <label className='required fs-6 fw-semibold mb-2'>State</label>
                              {/*end::Label*/}
                              {/*begin::Input*/}
                              <input
                                className='form-control form-control-solid'
                                placeholder=''
                                name='postcode'
                                defaultValue='Telangana'
                                disabled
                              />
                              {/*end::Input*/}
                              <div className='fv-plugins-message-container invalid-feedback' />
                            </div>
                          </div>
                          {/*begin::Input group*/}
                        </div>
                        {/*end::Card body*/}
                        {/*begin::Actions*/}
                        <div className='card-footer d-flex justify-content-end py-6 px-9'>
                          <button
                            type='reset'
                            className='btn btn-light-dark btn-active-light-primary me-2'
                          >
                            Cancel
                          </button>
                          <button
                            type='submit'
                            className='btn btn-primary'
                            id='kt_account_profile_details_submit'
                          >
                            Save Changes
                          </button>
                        </div>
                        {/*end::Actions*/}
                      </form>
                      {/*end::Form*/}
                    </div>
                    {/*end::my setting Content*/}
                    {/*end::Table wrapper*/}
                  </div>
                  {/*end::Card body*/}
                </div>
                {/*end::active order List sessions*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id='kt_app_footer' className='app-footer'>
            {/*begin::Footer container*/}
            <div className='app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack py-3'>
              {/*begin::Copyright*/}
              <div className='text-dark order-2 order-md-1'>
                <span className='text-muted fw-semibold me-1'>
                  © 2023 www.gowish.app | All rights reserved
                </span>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className='menu menu-gray-600 menu-hover-primary fw-semibold order-1'>
                <li className='menu-item'>
                  <a href='' target='_blank' className='menu-link px-2'>
                    {' '}
                    Terms and conditions |
                  </a>
                </li>
                <li className='menu-item'>
                  <a href='' target='_blank' className='menu-link px-2'>
                    www.gowish.studio{' '}
                  </a>
                </li>
              </ul>
              {/*end::Menu*/}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </>
  )
}
