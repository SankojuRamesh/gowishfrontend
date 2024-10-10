import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import ReactPlayer from 'react-player/lazy'
import ApiAxios, {baseUrl2} from '../../../app/modules/auth/core/ApiAxios'
import MainCategories from './MainCategories'
import {Responsive} from '../../../_metronic/sliders/responsive'
import Carousel from 'react-multi-carousel'
import CategoryTopProducts1 from './CategoryTopProducts1'
import CategoryTopProducts2 from './CategoryTopProducts2'
import './dashboard.scss'
import {Modal} from 'react-bootstrap'
import axios from 'axios'
import SubCategories from './SubCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { PageLoader } from '../../modules/shared/loader/PageLoader'
import { useAuth } from '../../modules/auth'
import { useNavigate } from 'react-router-dom'
// import {dispatch, useDispatch, useSelector} from '../../../redux/store'

const DashboardPage = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const [playing, setPlaying] = useState(false)
  const [getCategories, setCategories] = useState<any>([])
  const [subCategories1, setSubCategories1] = useState<any>([])
  const [subCategories2, setSubCategories2] = useState<any>([])
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPlayModal, setShowPlayModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    setIsLoading(true)
    try {
      const getData = await ApiAxios.get('categories/')
      setCategories(getData?.data?.results)
      const subData1 = await ApiAxios.get('tempalts/?subcategory=1')
      setSubCategories1(subData1?.data?.results?.filter((t: any) => t.status))
      const subData2 = await ApiAxios.get('tempalts/?subcategory=2')
      setSubCategories2(subData2?.data?.results?.filter((t: any) => t.status))
      setIsLoading(false)
    } catch (error:any) {
      setIsLoading(false)
      if(error?.response?.status === 401) {
        logout()
        localStorage.removeItem('access_token')
        // navigate('')
        document.location.reload();
      }
      console.log('errr', error?.response)
    }
  }

  const handlePlayVideo = () => {
    setShowPlayModal(true)
  }

  const handleClose = () => {
    setShowPlayModal(false)
  }
  return (
    <>
    {isLoading && <PageLoader />}
      <div className='row g-4'>
        {/* <div className='col-xl-12 position-relative mt-0'>
        <img src='/media/images/video_thumbnail.jpeg' width={'100%'} height={500} style={{objectFit: 'cover'}} />
        <div className='abs-banner position-absolute text-center'>
          <h5 onClick={handlePlayVideo}>
            <FontAwesomeIcon icon={faPlayCircle} size='3x' color='#000' />
          </h5>
        </div>
        </div> */}
        <ReactPlayer
          url="http://gowish.studio/video/intro_blue.mp4"
          playing={true}
          muted
          width={'100%'}
          height={'100%'}
        />
      </div>
      {getCategories?.length > 0 && <MainCategories mainCategories={getCategories} />}

      <div className='row g-7 g-xl-5 mb-0 mb-xl-5'>
        <SubCategories subCategories={subCategories1} reload={getCategoriesData} />
      </div>
      <div className='row g-7 g-xl-5 mb-0 mb-xl-5'>
        <SubCategories subCategories={subCategories2} reload={getCategoriesData} />
      </div>

      <Modal show={showPlayModal} onHide={handleClose} centered size="xl">
        {/* <Modal.Header closeButton>
          <Modal.Title>Add Sub Category</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className='p-0'>
           <ReactPlayer
          url="http://gowish.studio/video/intro_blue.mp4"
          playing={true}
          controls
          thumbnail=""
          width={'100%'}
          height={'100%'}
        />
        </Modal.Body>
      </Modal>
    </>
  )
}

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
    isActive: false,
  },
]

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      {/* <PageTitle breadcrumbs={accountBreadCrumbs}>{intl.formatMessage({id: 'Home'})}</PageTitle> */}
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
