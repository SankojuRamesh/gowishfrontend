/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {useRef, useState} from 'react'
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {defaultCreateAppData, ICreateAppData} from '../create-app-stepper/IAppModels'
import {StepperComponent} from '../../../assets/ts/components'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useAuth} from '../../../../app/modules/auth'
import {login} from '../../../../app/modules/auth/core/_requests'
import clsx from 'clsx'
import {Link, useNavigate} from 'react-router-dom'
import {RegistrationModel} from '../../../partials'

type Props = {
  show: boolean
  handleClose: () => void
}

const loginSchema = Yup.object().shape({
  user_email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  user_email: '',
  password: '',
}

const modalsRoot = document.getElementById('root-modals') || document.body

const LoginModel = ({show, handleClose}: Props) => {
  const navigate = useNavigate()
  const [showRegistrationModel, setRegistrationModel] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()

  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.user_email, values.password)
        saveAuth(auth)
        console.log(auth)
        // const {data: user} = await getUserByToken(auth.access)
        // setCurrentUser(user)
        setLoading(false)
        handleClose()
        if(auth?.roles === 1) {
          navigate('/dashboard')
        } else {
          navigate('/home')
        }
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('The login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  return createPortal(
    <Modal
      id='kt_modal_login'
      tabIndex={-1}
      aria-hidden='true'
      dialogClassName='modal-dialog modal-dialog-centered mw-650px'
      show={show}
      onHide={handleClose}
    >
      <div className='modal-header pb-0 border-0 justify-content-end'>
        {/* <h2>Login Page</h2> */}
        {/* begin::Close */}
        <div className='btn btn-sm btn-icon btn-active-color-primary' onClick={handleClose}>
          <KTIcon className='fs-1' iconName='cross' />
        </div>
        {/* end::Close */}
      </div>
      <div className='modal-body scroll-y px-10 px-lg-15 pt-0 pb-15'>
        <div className='text-center mb-5'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/logo-light-mode.png')}
            className='h-30px h-lg-50px app-sidebar-logo-default theme-light-show'
          />
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/logos/logo.png')}
            className='h-30px h-lg-50px app-sidebar-logo-default theme-dark-show'
          />
        </div>

        <form
          className='form w-100 p-5'
          onSubmit={formik.handleSubmit}
          noValidate
          id='kt_login_signin_form'
        >
          {/* begin::Heading */}
          <div className='text-center mb-11'>
            <h1 className='text-dark fw-bolder mb-3'>Sign In</h1>
            <div className='text-gray-500 fw-semibold fs-6'>Your Social Campaigns</div>
          </div>
          {/* begin::Heading */}

          {/* begin::Login options */}
          <div className='row g-3 mb-9'>
            {/* begin::Col */}
            <div className='col-md-6'>
              {/* begin::Google link */}
              <a
                href='#'
                className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
              >
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
                  className='h-15px me-3'
                />
                Sign in with Google
              </a>
              {/* end::Google link */}
            </div>
            {/* end::Col */}

            {/* begin::Col */}
            <div className='col-md-6'>
              {/* begin::Google link */}
              <a
                href='#'
                className='btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100'
              >
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
                  className='theme-light-show h-15px me-3'
                />
                <img
                  alt='Logo'
                  src={toAbsoluteUrl('/media/svg/brand-logos/apple-black-dark.svg')}
                  className='theme-dark-show h-15px me-3'
                />
                Sign in with Apple
              </a>
              {/* end::Google link */}
            </div>
            {/* end::Col */}
          </div>
          {/* end::Login options */}

          {/* begin::Separator */}
          <div className='separator separator-content my-14'>
            <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
          </div>
          {/* end::Separator */}

          {formik.status ? (
            <div className='mb-lg-15 alert alert-danger'>
              <div className='alert-text font-weight-bold'>{formik.status}</div>
            </div>
          ) : (
            <div className='mb-10 bg-light-info p-8 rounded d-none'></div>
          )}

          {/* begin::Form group */}
          <div className='fv-row mb-8'>
            <label className='form-label fs-6 fw-bolder text-dark'>Email</label>
            <input
              placeholder='Email'
              {...formik.getFieldProps('user_email')}
              className={clsx(
                'form-control bg-transparent',
                {'is-invalid': formik.touched.user_email && formik.errors.user_email},
                {
                  'is-valid': formik.touched.user_email && !formik.errors.user_email,
                }
              )}
              type='email'
              name='user_email'
              autoComplete='off'
            />
            {formik.touched.user_email && formik.errors.user_email && (
              <div className='fv-plugins-message-container'>
                <span role='alert'>{formik.errors.user_email}</span>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Form group */}
          <div className='fv-row mb-3'>
            <label className='form-label fw-bolder text-dark fs-6 mb-0'>Password</label>
            <input
              placeholder='Password'
              type='password'
              autoComplete='off'
              {...formik.getFieldProps('password')}
              className={clsx(
                'form-control bg-transparent',
                {
                  'is-invalid': formik.touched.password && formik.errors.password,
                },
                {
                  'is-valid': formik.touched.password && !formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Wrapper */}
          <div className='d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8'>
            <div />

            {/* begin::Link */}
            <Link to='/auth/forgot-password' className='link-primary'>
              Forgot Password ?
            </Link>
            {/* end::Link */}
          </div>
          {/* end::Wrapper */}

          {/* begin::Action */}
          <div className='d-grid mb-10'>
            <button
              type='submit'
              id='kt_sign_in_submit'
              className='btn btn-primary'
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && <span className='indicator-label'>Continue</span>}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
          {/* end::Action */}

          <div className='text-gray-500 text-center fw-semibold fs-6'>
            Not a Member yet?{' '}
            {/* <Link to='/auth/registration' className='link-primary'>
              Sign up
            </Link> */}
            <a
              className='btn link-primary ps-0'
              id='kt_toolbar_primary_button'
              style={{color: 'rgb(24, 28, 50)'}}
              onClick={() => setRegistrationModel(true)}
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
      <RegistrationModel
        show={showRegistrationModel}
        handleClose={() => setRegistrationModel(false)}
      />
    </Modal>,
    modalsRoot
  )
}

export {LoginModel}
