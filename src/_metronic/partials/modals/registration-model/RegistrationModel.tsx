/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {createPortal} from 'react-dom'
import {Modal} from 'react-bootstrap'
import {KTIcon, KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {PasswordMeterComponent} from '../../../assets/ts/components'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {useAuth} from '../../../../app/modules/auth'
import {getUserByToken, register} from '../../../../app/modules/auth/core/_requests'
import ApiAxios from '../../../../app/modules/auth/core/ApiAxios'
import { ToasterPage } from '../../../../app/modules/shared/Toaster/toaster'

type Props = {
  show: boolean
  handleClose: () => void
}

const initialValues = {
  fullname: '',
  email: '',
  phonenumber: '',
  password: '',
  confirmpassword: '',
  // address: '',
  // pincode: '',
  // city: '',
  // state: '',
  // country: '',
}

const registrationSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  phonenumber: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phone Number is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  confirmpassword: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password confirmation is required')
    .oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
  address: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Address is required'),
  pincode: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Pincode is required'),
  city: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('City is required'),
  state: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('State is required'),
  country: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Country is required'),
})

const modalsRoot = document.getElementById('root-modals') || document.body

const RegistrationModel = ({show, handleClose}: Props) => {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const [errorText, setErrorText] = useState<any>('')
  const [showToaster, setShowToaster] = useState(false)
  const formik = useFormik({
    initialValues,
    // validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        // const {data: auth} = await register(
        //   values.fullname,
        //   values.email,
        //   values.phonenumber,
        //   values.password,
        //   // values.confirmpassword,
        //   // values.address,
        //   // values.pincode,
        //   // values.city,
        //   // values.state,
        //   // values.country
        // )
        const obj = {
          name: values.fullname,
          phone: values.phonenumber,
          email: values.email,
          password: values.password
        }
        ApiAxios.post('/signup/', obj).then((resp) => {
          console.log('resppp', resp)
        }, (error) => {
          console.log('errorrrrr', error)
        })
        // saveAuth(auth)
        // console.log(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
        setLoading(false)
        // handleClose()
        document.location.reload()
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('Email Already Existed Please Login')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

  // Access form elements using their name or id
  const formData = new FormData(form);
  const values: Record<string, string> = {};

  formData.forEach((value, key) => {
    values[key] = value as string;
  });

  const obj = {
    name: values.fullname,
    phone: values.phonenumber,
    email: values.email,
    password: values.password
  }
  const formData1 = new FormData();
        formData1.append('name', values.fullname);
        formData1.append('phone', values.phonenumber);
        formData1.append('email', values.email);
        formData1.append('password', values.password);
        
  console.log(formData1, 'valllllll');
  ApiAxios.post('/signup/', formData1, {
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((resp) => {
    console.log('resppp', resp)
    setShowToaster(true)
    handleClose()
  }, (error) => {
    console.log('errorrrrr', error, error.response)
    {Object.keys(error.response.data).map((key) => setErrorText(error.response.data[key]))}
  })
  }

  console.log('errorText', errorText)
  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])
  return createPortal(
    <Modal
      id='kt_modal_registration'
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
      
      <div className='modal-body py-lg-10 px-lg-10'>
        <div
          id='kt_app_toolbar_container'
          className='app-container container-xxl d-flex flex-stack'
        >
          <form
            className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
            noValidate
            id='kt_login_signup_form'
            onSubmit={handleSubmit}
          >
            <div className='text-center mb-11'>
              <h1 className='text-dark fw-bolder mb-3'>Sign Up</h1>
            </div>
            {/* end::Heading */}

            {/* <div className='row g-3 mb-9'>
              <div className='col-md-6'>
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
              </div>
              <div className='col-md-6'>
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
              </div>
            </div>

            <div className='separator separator-content my-14'>
              <span className='w-125px text-gray-500 fw-semibold fs-7'>Or with email</span>
            </div> */}

            {/* {errorText?.length && (
              <div className='mb-lg-15 alert alert-danger'>
                <div className='alert-text font-weight-bold'>{errorText.toString()}</div>
              </div>
            )} */}

            {/* begin::Form group Firstname */}
            
            <div className='fv-row mb-8'>
              <label className='form-label fw-bolder text-dark fs-6'>First name</label>
              <input
                placeholder='Full Name'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('fullname')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.fullname && formik.errors.fullname,
                  },
                  {
                    'is-valid': formik.touched.fullname && !formik.errors.fullname,
                  }
                )}
                name='fullname'
              />
              {formik.touched.fullname && formik.errors.fullname && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.fullname}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group Email */}
            <div className='fv-row mb-8'>
              <label className='form-label fw-bolder text-dark fs-6'>Email</label>
              <input
                placeholder='Email'
                type='email'
                autoComplete='off'
                {...formik.getFieldProps('email')}
                className={clsx(
                  'form-control bg-transparent',
                  {'is-invalid': formik.touched.email && formik.errors.email},
                  {
                    'is-valid': formik.touched.email && !formik.errors.email,
                  }
                )}
                name='email'
              />
              {formik.touched.email && formik.errors.email && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group Phone */}
            <div className='fv-row mb-8'>
              <label className='form-label fw-bolder text-dark fs-6'>Phone Number</label>
              <input
                placeholder='Phone Number'
                type='text'
                autoComplete='off'
                {...formik.getFieldProps('phonenumber')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.phonenumber && formik.errors.phonenumber,
                  },
                  {
                    'is-valid': formik.touched.phonenumber && !formik.errors.phonenumber,
                  }
                )}
                name='phonenumber'
              />
              {formik.touched.phonenumber && formik.errors.phonenumber && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.phonenumber}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}

            {/* begin::Form group Password */}
            <div className='fv-row mb-8' data-kt-password-meter='true'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>Password</label>
                <div className='position-relative mb-3'>
                  <input
                    type='password'
                    placeholder='Password'
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
                    name='password'
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.password}</span>
                      </div>
                    </div>
                  )}
                </div>
                {/* begin::Meter */}
                <div
                  className='d-flex align-items-center mb-3'
                  data-kt-password-meter-control='highlight'
                >
                  <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                  <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                  <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
                  <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
                </div>
                {/* end::Meter */}
              </div>
              <div className='text-muted'>
                Use 8 or more characters with a mix of letters, numbers & symbols.
              </div>
            </div>
            {/* end::Form group */}

            {/* begin::Form group Confirm password */}
            <div className='fv-row mb-5'>
              <label className='form-label fw-bolder text-dark fs-6'>Confirm Password</label>
              <input
                type='password'
                placeholder='Password confirmation'
                autoComplete='off'
                {...formik.getFieldProps('confirmpassword')}
                className={clsx(
                  'form-control bg-transparent',
                  {
                    'is-invalid': formik.touched.confirmpassword && formik.errors.confirmpassword,
                  },
                  {
                    'is-valid': formik.touched.confirmpassword && !formik.errors.confirmpassword,
                  }
                )}
                name='confirmpassword'
              />
              {formik.touched.confirmpassword && formik.errors.confirmpassword && (
                <div className='fv-plugins-message-container'>
                  <div className='fv-help-block'>
                    <span role='alert'>{formik.errors.confirmpassword}</span>
                  </div>
                </div>
              )}
            </div>
            {/* end::Form group */}
            {/* begin::Form group address */}
            {/* <div className='fv-row mb-8'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>Address</label>
                <div className='position-relative mb-3'>
                  <input
                    type='text'
                    placeholder='Address'
                    autoComplete='off'
                    {...formik.getFieldProps('address')}
                    className={clsx(
                      'form-control bg-transparent',
                      {
                        'is-invalid': formik.touched.address && formik.errors.address,
                      },
                      {
                        'is-valid': formik.touched.address && !formik.errors.address,
                      }
                    )}
                    name='address'
                  />
                  {formik.touched.address && formik.errors.address && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.address}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='fv-row mb-8'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>Pincode</label>
                <div className='position-relative mb-3'>
                  <input
                    type='text'
                    placeholder='Pincode'
                    autoComplete='off'
                    {...formik.getFieldProps('pincode')}
                    className={clsx(
                      'form-control bg-transparent',
                      {
                        'is-invalid': formik.touched.pincode && formik.errors.pincode,
                      },
                      {
                        'is-valid': formik.touched.pincode && !formik.errors.pincode,
                      }
                    )}
                    name='pincode'
                  />
                  {formik.touched.pincode && formik.errors.pincode && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.pincode}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='fv-row mb-8'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>City</label>
                <div className='position-relative mb-3'>
                  <input
                    type='text'
                    placeholder='city'
                    autoComplete='off'
                    {...formik.getFieldProps('city')}
                    className={clsx(
                      'form-control bg-transparent',
                      {
                        'is-invalid': formik.touched.city && formik.errors.city,
                      },
                      {
                        'is-valid': formik.touched.city && !formik.errors.city,
                      }
                    )}
                    name='city'
                  />
                  {formik.touched.city && formik.errors.city && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.password}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='fv-row mb-8'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>State</label>
                <div className='position-relative mb-3'>
                  <input
                    type='text'
                    placeholder='State'
                    autoComplete='off'
                    {...formik.getFieldProps('state')}
                    className={clsx(
                      'form-control bg-transparent',
                      {
                        'is-invalid': formik.touched.state && formik.errors.state,
                      },
                      {
                        'is-valid': formik.touched.state && !formik.errors.state,
                      }
                    )}
                    name='state'
                  />
                  {formik.touched.state && formik.errors.state && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.state}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='fv-row mb-8'>
              <div className='mb-1'>
                <label className='form-label fw-bolder text-dark fs-6'>Country</label>
                <div className='position-relative mb-3'>
                  <input
                    type='text'
                    placeholder='Country'
                    autoComplete='off'
                    {...formik.getFieldProps('country')}
                    className={clsx(
                      'form-control bg-transparent',
                      {
                        'is-invalid': formik.touched.country && formik.errors.country,
                      },
                      {
                        'is-valid': formik.touched.country && !formik.errors.country,
                      }
                    )}
                    name='country'
                  />
                  {formik.touched.country && formik.errors.country && (
                    <div className='fv-plugins-message-container'>
                      <div className='fv-help-block'>
                        <span role='alert'>{formik.errors.country}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div> */}
            
            <div className='text-center'>
            {errorText && <div className='mb-lg-15 mt-15 alert alert-danger'>
              <div className='alert-text font-weight-bold'>{errorText.toString()}</div>
            </div>}
              <button
                type='submit'
                id='kt_sign_up_submit'
                className='btn btn-lg btn-primary w-100 mb-5'
                // disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
              >
                {!loading && <span className='indicator-label'>Submit</span>}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    Please wait...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
              <Link to='/home'>
                <button
                  type='button'
                  id='kt_login_signup_form_cancel_button'
                  className='btn btn-lg btn-light-primary w-100 mb-5'
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <ToasterPage show={showToaster} setShow={setShowToaster} toastMsg={`User registered successfully`} />
    </Modal>,
    modalsRoot
  )
}

export {RegistrationModel}
