import React, {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const ToggleHelpDrawer: FC = () => (
  <button
    id='kt_help_toggle'
    className='engage-help-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm px-5 rounded-top-0'
    title='Learn & Get Inspired'
    data-bs-toggle='tooltip'
    data-bs-placement='left'
    data-bs-dismiss='click'
    data-bs-trigger='hover'
  >
    <KTSVG
      className='svg-icon-2x svg-icon-success'
      path={toAbsoluteUrl('/media/icons/duotune/communication/com012.svg')}
    />
    Filters Options
  </button>
)

export {ToggleHelpDrawer}
