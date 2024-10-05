import React, {FC, useEffect, useState} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle, PageLink} from '../../../_metronic/layout/core'
import ReactPlayer from 'react-player'
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
// import {dispatch, useDispatch, useSelector} from '../../../redux/store'

const DashboardPage = () => {
  const responsive = Responsive
  const [playing, setPlaying] = useState(false)
  const [getCategories, setCategories] = useState<any>([])
  const [subCategories1, setSubCategories1] = useState<any>([])
  const [subCategories2, setSubCategories2] = useState<any>([])
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setPlaying(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPlaying(false);
  };
  useEffect(() => {
    getCategoriesData()
  }, [])

  const getCategoriesData = async () => {
    try {
      const getData = await ApiAxios.get('categories/')
      setCategories(getData?.data?.results)
      const subData1 = await ApiAxios.get('tempalts/?subcategory=1')
      setSubCategories1(subData1?.data?.results)
      const subData2 = await ApiAxios.get('tempalts/?subcategory=2')
      setSubCategories2(subData2?.data?.results)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='row g-4'>
        <div className='col-xl-12 position-relative mt-0'>
        <img src='https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=2880,fit=crop/meP0L7x9QGubkjV4/dammann-1-13-YD0yNzRgB2fbxj2e.jpg' width={'100%'} height={500} style={{objectFit: 'cover'}} />
        <div className='abs-banner position-absolute text-center'>
          <h2 className='text-uppercase'>Gowish Studio</h2>
          <h5>Categories | Products | Greetings & Events</h5>
        </div>
        </div>
      </div>
      {getCategories?.length > 0 && <MainCategories mainCategories={getCategories} />}

      <div className='row g-7 g-xl-5 mb-0 mb-xl-5'>
        <SubCategories subCategories={subCategories1} reload={getCategoriesData} />
      </div>
      <div className='row g-7 g-xl-5 mb-0 mb-xl-5'>
        <SubCategories subCategories={subCategories2} reload={getCategoriesData} />
      </div>
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
