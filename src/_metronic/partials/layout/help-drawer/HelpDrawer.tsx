/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../helpers'

const HelpDrawer = () => {
  return (
    <div
      id='kt_help'
      className='bg-body'
      data-kt-drawer='true'
      data-kt-drawer-name='help'
      data-kt-drawer-activate='true'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'350px', 'md': '525px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_help_toggle'
      data-kt-drawer-close='#kt_help_close'
    >
      {/*begin::Card*/}
      <div className='card shadow-none rounded-0 w-100'>
        {/*begin::Header*/}
        <div className='flex-column flex-lg-row-auto w-100 w-xl-450px mb-5 ms-lg-10'>
          <div className='card-header' id='kt_engage_demos_header'>
            <h3 className='card-title fw-bold text-gray-700'>Select Filters Options</h3>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6'
                id='kt_engage_demos_close'
              >
                {/*begin::Svg Icon | path: icons/duotune/arrows/arr061.svg*/}
                <span className='svg-icon svg-icon-2'>
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <rect
                      opacity='0.5'
                      x={6}
                      y='17.3137'
                      width={16}
                      height={2}
                      rx={1}
                      transform='rotate(-45 6 17.3137)'
                      fill='currentColor'
                    />
                    <rect
                      x='7.41422'
                      y={6}
                      width={16}
                      height={2}
                      rx={1}
                      transform='rotate(45 7.41422 6)'
                      fill='currentColor'
                    />
                  </svg>
                </span>
                {/*end::Svg Icon*/}
              </button>
            </div>
          </div>
          {/*begin::Card*/}
          <div className='card mb-2 mb-xl-1'>
            {/*begin::Body*/}
            <div className='card-body pt-2'>
              <div className='m-0 mb-5 '>
                <div className='d-flex flex-stack my-2'>
                  {/*begin::Label*/}
                  <div className='me-5'>
                    {/*begin::Label*/}
                    <label className='fs-6 fw-semibold'>Select Type Of Media </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <div className='fs-7 fw-semibold text-muted'>
                      {' '}
                      Do You Want Meida Video / Image{' '}
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Label*/}
                </div>
                {/*begin::Radio group*/}
                <div
                  className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-4'
                  data-kt-buttons='true'
                  data-kt-buttons-target='[data-kt-button]'
                  data-kt-initialized={1}
                >
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={2} />
                    <span className='fs-7 fw-bold d-block'>Videos</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Images</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                </div>
                {/*end::Radio group*/}
              </div>
              <div className='m-0 mb-5 '>
                <div className='d-flex flex-stack my-2'>
                  {/*begin::Label*/}
                  <div className='me-5'>
                    {/*begin::Label*/}
                    <label className='fs-6 fw-semibold'>Select Media Type Of Video </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <div className='fs-7 fw-semibold text-muted'>
                      {' '}
                      Do You Want Video Verical / horizontal
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Label*/}
                </div>
                {/*begin::Radio group*/}
                <div
                  className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-4'
                  data-kt-buttons='true'
                  data-kt-buttons-target='[data-kt-button]'
                  data-kt-initialized={1}
                >
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={2} />
                    <span className='fs-7 fw-bold d-block'>Verical</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>horizontal</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                </div>
                {/*end::Radio group*/}
              </div>
              <div className='m-0 mb-5 '>
                <div className='d-flex flex-stack my-2'>
                  {/*begin::Label*/}
                  <div className='me-5'>
                    {/*begin::Label*/}
                    <label className='fs-6 fw-semibold'>Select Media Type Of Tag </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <div className='fs-7 fw-semibold text-muted'>Select Media Tag Options</div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Label*/}
                </div>
                {/*begin::Radio group*/}
                <div
                  className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-4'
                  data-kt-buttons='true'
                  data-kt-buttons-target='[data-kt-button]'
                  data-kt-initialized={1}
                >
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={2} />
                    <span className='fs-7 fw-bold d-block'>All</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Hindus</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Musilms</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Christains</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Universal</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                </div>
                {/*end::Radio group*/}
              </div>
              <div className='m-0 mb-5 '>
                <div className='d-flex flex-stack my-2'>
                  {/*begin::Label*/}
                  <div className='me-5'>
                    {/*begin::Label*/}
                    <label className='fs-6 fw-semibold'>Select Media Type Varations Options </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <div className='fs-7 fw-semibold text-muted'>
                      Select Media Varations Options
                    </div>
                    {/*end::Input*/}
                  </div>
                  {/*end::Label*/}
                </div>
                {/*begin::Radio group*/}
                <div
                  className='d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-4'
                  data-kt-buttons='true'
                  data-kt-buttons-target='[data-kt-button]'
                  data-kt-initialized={1}
                >
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={2} />
                    <span className='fs-7 fw-bold d-block'>All</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Standred</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Modren</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Tradition</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                  {/*begin::Radio*/}
                  <label
                    className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed   border-active-primary btn-active-light-primary w-100 px-4'
                    data-kt-button='true'
                  >
                    {/*begin::Input*/}
                    <input className='btn-check' type='radio' name='method' defaultValue={3} />
                    <span className='fs-7 fw-bold d-block'>Universal</span>
                    {/*end::Title*/}
                  </label>
                  {/*end::Radio*/}
                </div>
                {/*end::Radio group*/}
              </div>
            </div>
            {/*end::Card*/}
          </div>
          <div className='card mb-5 mb-xl-1'>
            {/*begin::Body*/}
            {/*begin::Block*/}
            <div className='py-5'>
              <div className='d-flex flex-stack my-2'>
                {/*begin::Label*/}
                <div className='me-5'>
                  {/*begin::Label*/}
                  <label className='fs-6 fw-semibold'>Select Media Discounts Options </label>
                  {/*end::Label*/}
                  {/*begin::Input*/}
                  <div className='fs-7 fw-semibold text-muted'>Select Discounts Options</div>
                  {/*end::Input*/}
                </div>
                {/*end::Label*/}
              </div>
              <div className='tns tns-default'>
                {/*begin::Slider*/}
                <div
                  data-tns='true'
                  data-tns-loop='true'
                  data-tns-swipe-angle='false'
                  data-tns-speed={2000}
                  data-tns-autoplay='true'
                  data-tns-autoplay-timeout={18000}
                  data-tns-controls='true'
                  data-tns-nav='false'
                  data-tns-items={3}
                  data-tns-center='false'
                  data-tns-dots='false'
                  data-tns-prev-button='#kt_team_slider_prev1'
                  data-tns-next-button='#kt_team_slider_next1'
                >
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    {/*begin::Radio*/}
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>All</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    {/*begin::Radio*/}
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 10 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 20 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 25 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 30 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 40 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                  {/*begin::Item*/}
                  <div className='text-center px-5 py-5'>
                    <label
                      className='btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn btn-outline btn-outline-dashed border-active-primary btn-active-light-primary w-100 px-4 '
                      data-kt-button='true'
                    >
                      {/*begin::Input*/}
                      <input className='btn-check' type='radio' name='method' defaultValue={2} />
                      <span className='fs-7 fw-bold d-block'>Discount 50 %</span>
                      {/*end::Title*/}
                    </label>
                    {/*end::Radio*/}{' '}
                  </div>
                  {/*end::Item*/}
                </div>
                {/*end::Slider*/}
                {/*begin::Slider button*/}
                <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_prev1'>
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr074.svg*/}
                  <span className='svg-icon svg-icon-3x'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Slider button*/}
                {/*begin::Slider button*/}
                <button className='btn btn-icon btn-active-color-primary' id='kt_team_slider_next1'>
                  {/*begin::Svg Icon | path: icons/duotune/arrows/arr071.svg*/}
                  <span className='svg-icon svg-icon-3x'>
                    <svg
                      width={24}
                      height={24}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z'
                        fill='currentColor'
                      />
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </button>
                {/*end::Slider button*/}
              </div>
            </div>
            {/*end::Block*/}
          </div>
          {/*begin::Card*/}
          <div className='card mb-5 mb-xl-1'>
            {/*begin::Body*/}
            <div className='card-body pt-5'>
              <div className='m-0'>
                <a href='#' className='btn btn-light-primary w-100'>
                  Select View{' '}
                </a>
                {/*end::Actions*/}
              </div>
              {/*end::Payment Method*/}
            </div>
            {/*end: Card Body*/}
            {/*end::Card body*/}
          </div>
          {/*end::Card*/}
        </div>
        {/*end::Header*/}
        {/*begin::Body*/}
      </div>
      {/*end::Card*/}
    </div>
  )
}

export {HelpDrawer}
