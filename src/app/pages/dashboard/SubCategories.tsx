import { faArrowRightFromBracket, faCartShopping, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "react-multi-carousel";
import { Responsive } from "../../../_metronic/sliders/responsive";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../modules/auth";
import { Button, OverlayTrigger, Toast, ToastContainer, Tooltip } from "react-bootstrap";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import { ToasterPage } from "../../modules/shared/Toaster/toaster";
import { useState } from "react";

const SubCategories = ({subCategories, reload}: any) => {
  const {updateWishlistCount, updateCartCount} = useAuth()
    const navigate = useNavigate()
    let msg = ''
    const responsive = Responsive
    const [show, setShow] = useState(false)
    const {auth} = useAuth()
    console.log('authhhh', auth)
    const handleFav = (item: any) => {
      let payload = {
        "user": auth?.id,
        "template": item.id
      }
      ApiAxios.post('mywishlist/', payload).then((resp: any) => {
        msg = 'Wishlisted successfully'
        setShow(true)
        updateWishlistCount()
        reload()
      }, (error) => {
        console.log(error)
      })
    }
    const handleCart = (item: any) => {
      let payload = {
        "user": auth?.id,
        "template": item.id
      }
      ApiAxios.post('cart/', payload).then((resp: any) => {
        msg = 'Added successfully'
        setShow(true)
        updateCartCount()
        reload()
      }, (error) => {
        console.log(error)
      })
    }
    const renderTooltip = (props: any) => (
      <Tooltip id="button-tooltip" {...props}>
        Login to make the changes
      </Tooltip>
    );
    return (
        <div className='row gx-5 gx-xl-8 mb-5 mb-xl-8'>
        <div className='col-xl-12'>
          <div className='card card-flush h-xl-100'>
            <div className='card-header pt-7'>
              <h3 className='card-title align-items-start flex-row'>
                <span className='card-label fw-bold text-dark fs-5'>{subCategories?.[0]?.subcategory_name}</span>
              </h3>
            </div>
            <div className='card-body pt-7'>
              <div className='row flex g-5 g-xl-9 mb-5 mb-xl-0'>
              <Carousel
                  responsive={responsive}
                  swipeable={true}
                  showDots={true}
                  autoPlay={true}
                  infinite={true}
                  autoPlaySpeed={3000}
                  removeArrowOnDeviceType={['tablet', 'mobile']}
                >
                  {subCategories?.map((category: any, i:number) => {
                    return (
                        <div className='col-sm-3 mb-3 mb-sm-0 pb-5 ps-2 pe-3 w-100' key={i}>
                        <div className="position-relative ">
                            <div>
                                <img src={category?.template_small_thumb} alt="" className="bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded" width={'100%'} />
                                <button className="btn btn-icon position-absolute center-play-button" data-kt-element="list-play-button">
                                  <FontAwesomeIcon icon={faPlay} className="text-white" size="2x" />
                                </button>
                            </div>
                            <div className="m-2">
                                <a className="text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2" href="#" onClick={(e) => {
                                    e.preventDefault()
                                    navigate(`/templates/${category.subcategory}`)}
                                  }>{category?.template_name}</a>
                            </div>
                            <div className="btn-chips d-flex justify-content-between mt-1">
                              <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">{category.prifix_id}</span>
                              <div>
                                <span className="badge badge-light fw-bold mx-2">Hindus</span>
                                <span className="badge badge-light fw-bold">Standard</span>
                              </div>
                          </div>
                            <div className="align-items-center btn-chips d-flex justify-content-between mt-1">
                              <span className="badge border border-dashed fs-6 fw-bold text-dark p-2"> <span className="fs-6 fw-semibold text-gray-600  ">Rs.</span>450.00</span>
                              <div>
                              {auth ? <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => handleFav(category)}>
                                <span className={`svg-icon ${category?.wishlist_state ? 'svg-icon-primary' : 'svg-icon-muted'} svg-icon-1hx`}>
                                  <FontAwesomeIcon icon={faHeart} size={'2x'} />
                                </span>
                              </span> : 
                              <OverlayTrigger
                                  placement="bottom"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderTooltip}
                                >
                                  <span className="btn btn-icon opacity-50 w-35px h-35px w-md-40px h-md-40px">
                                <span className="svg-icon svg-icon-muted svg-icon-1hx">
                                  <FontAwesomeIcon icon={faHeart} size={'2x'} />
                                </span>
                              </span>
                                </OverlayTrigger>}
                              {auth ? 
                              <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => handleCart(category)}>
                                <span className="svg-icon svg-icon-muted svg-icon-1hx">
                                  <FontAwesomeIcon icon={faCartShopping} size={'2x'} />
                                </span>
                              </span> : 
                              <OverlayTrigger
                                  placement="bottom"
                                  delay={{ show: 250, hide: 400 }}
                                  overlay={renderTooltip}
                                >
                                  <span className="btn btn-icon opacity-50 w-35px h-35px w-md-40px h-md-40px">
                                  <span className="svg-icon svg-icon-muted svg-icon-1hx">
                                  <FontAwesomeIcon icon={faCartShopping} size={'2x'} />
                                </span>
                              </span>
                                </OverlayTrigger>}
                              <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => navigate(`/templates/${category.subcategory}`)}>
                                <span className="svg-icon svg-icon-muted svg-icon-1hx">
                                  <FontAwesomeIcon icon={faArrowRightFromBracket} size={'2x'} />
                                </span>
                              </span>
                              </div>
                          </div>
                        </div>
                        </div>
                    )
                  })}
                  </Carousel>
              </div>
            </div>
          </div>
        </div>
        <ToasterPage show={show} setShow={setShow} />
      </div>
    )
}

export default SubCategories;