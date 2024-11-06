import {
    faArrowRightFromBracket,
      faCartShopping,
      faChevronLeft,
      faChevronRight,
      faHeart,
      faIndianRupeeSign,
      faMoneyBill,
      faPencil,
      faPlay,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import React, { useEffect, useState } from "react";
    import ApiAxios from "../../modules/auth/core/ApiAxios";
    import { Button, Card, Col, Dropdown, DropdownButton, Form, Modal, Row } from "react-bootstrap";
  import { useNavigate, useParams } from "react-router-dom";
  import { useAuth } from "../../modules/auth";
  import { ToasterPage } from "../../modules/shared/Toaster/toaster";
  import { PageLoader } from "../../modules/shared/loader/PageLoader";
  import ReactPlayer from "react-player";
import VideoScrub from "../../modules/shared/VideoScrub/VideoScrub";
    
    export const MyTemplates = () => {
      const { id } = useParams();
      const navigate = useNavigate()
      const {auth, updateWishlistCount, updateCartCount} = useAuth()
      const [templates, setTemplates] = useState<any>([]);
      const [extraPage, setExtraPage] = useState<any>({})
      const [page, setPage] = useState(1)
      const [show, setShow] = useState(false);
      const [showPlayModal, setShowPlayModal] = useState(false)
      const [isLoading, setIsLoading] = useState(false)
      const [videourl, setVideoUrl] = useState('')
      const [selected, setSelected] = useState<any>(null)
      useEffect(() => {
        getTemplates();
      }, [page]);
      let msg: any = ''
  
      const getTemplates = () => {
        setIsLoading(true)
        ApiAxios.get(`mytemplates?page=${page}`).then(
          (resp) => {
            setExtraPage(resp?.data?.links)
            setTemplates(resp?.data?.results);
            setIsLoading(false)
          },
          (error) => {
            setIsLoading(false)
            console.log("error", error);
          }
        );
      };
      const handleCart = (item: any) => {
        setIsLoading(true)
        let payload = {
          "user": auth?.id,
          "template": item.id
        }
        ApiAxios.post('cart/', payload).then((resp: any) => {
          msg = 'Added successfully'
          setShow(true)
          getTemplates()
          updateCartCount()
          setIsLoading(false)
        }, (error) => {
          setIsLoading(false)
          console.log(error)
        })
      }
      const handleFav = (item: any) => {
        setIsLoading(true)
        let payload = {
          "user": auth?.id,
          "template": item.id
        }
        ApiAxios.post('mywishlist/', payload).then((resp: any) => {
          msg = 'Wishlisted successfully'
          setShow(true)
          getTemplates()
          updateWishlistCount()
          setIsLoading(false)
        }, (error) => {
          setIsLoading(false)
          console.log(error)
        })
      }
      const handlePlay = (item: any) => {
        setSelected(item)
        setShowPlayModal(true)
        setVideoUrl(item.template_video)
      }
      return (
        <>
          {isLoading && <PageLoader />}
          <div className="container">
            <h2 className="fs-4">My Templates</h2>
            <div className="d-flex flex-wrap">
              {templates.map((template: any) => (
                <div className="col-sm-3 mb-3 mb-sm-0 pb-5 ps-2 pe-3" key={1}>
                  <div className="position-relative ">
                    <div>
                    <VideoScrub src={template?.template_data[0]?.template_video} handleDoubleClick={() => handlePlay(template?.template_data[0])} />
                      {/* <img
                        src={template?.template_data[0]?.template_small_thumb}
                        alt=""
                        className="bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded"
                        width={"100%"}
                      />
                      <button
                        className="btn btn-icon position-absolute center-play-button"
                        data-kt-element="list-play-button"
                        onClick={() => handlePlay(template?.template_data[0])}
                      >
                        <FontAwesomeIcon
                          icon={faPlay}
                          className="text-white"
                          size="2x"
                        />
                      </button> */}
                    </div>
                    <div className="m-2">
                      <a
                        className="text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2"
                        href="#"
                        onClick={(e: any) => {
                          e.preventDefault()
                          navigate(`/templates/details/${template?.template_data[0]?.id}`)
                        }}
                      >
                        {template?.template_data[0]?.template_name}
                      </a>
                    </div>
                    <div className="btn-chips d-flex justify-content-between mt-1">
                      <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                        WEDINV00045
                      </span>
                      <div>
                        <span className="badge badge-light fw-bold mx-2">Hindus</span>
                        <span className="badge badge-light fw-bold">Standard</span>
                      </div>
                    </div>
                    <div className="align-items-center btn-chips d-flex justify-content-between mt-1">
                      {/* <span className="badge border border-dashed fs-6 fw-bold text-dark p-2">
                        {" "}
                        <span className="fs-6 fw-semibold text-gray-600  ">
                          <FontAwesomeIcon icon={faIndianRupeeSign} size="1x" />
                        </span>
                        450.00
                      </span> */}
                      <div>
                        {/* <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => handleFav(template)}>
                          <span className="svg-icon svg-icon-muted svg-icon-1hx">
                            <FontAwesomeIcon icon={faHeart} size={"2x"} />
                          </span>
                        </span>
                        <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px"  onClick={() => handleCart(template)}>
                          <span className="svg-icon svg-icon-muted svg-icon-1hx">
                            <FontAwesomeIcon icon={faCartShopping} size={"2x"} />
                          </span>
                        </span> */}
                        <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => navigate(`/templates/details/${template?.id}`)}>
                          <span className="svg-icon svg-icon-muted svg-icon-1hx">
                            <FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"} />
                          </span>
                        </span>
                        <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => navigate(`/edit-template/${template?.id}`)}>
                          <span className="svg-icon svg-icon-muted svg-icon-1hx">
                            <FontAwesomeIcon icon={faPencil} size={'2x'} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {templates?.length === 0 && 
                  <p className="fs-2 text-center w-100"><i>No templates found.</i></p>
              }
            </div>
            <div className="d-flex gap-5 justify-content-end my-10">
              <Button disabled={!extraPage?.previous} variant="link" onClick={() => setPage(page - 1)}>
                  <FontAwesomeIcon icon={faChevronLeft} size="1x" /> Previous
              </Button>
              <Button disabled={!extraPage?.next} variant="link" onClick={() => setPage(page + 1)}>
                  Next <FontAwesomeIcon icon={faChevronRight} size="1x" />
              </Button>
            </div>
            <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
          </div>
          <Modal show={showPlayModal} onHide={() => setShowPlayModal(false)} centered size="lg">
        <Modal.Header closeButton>
          {selected?.template_name}
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col xs={8}>
        <ReactPlayer
          url={videourl}
          playing={true}
          controls
          thumbnail=""
          width={'100%'}
          height={'100%'}
        />
        </Col>
        <Col xs={4}>
            <Card>
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body className="p-2">
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                  <h2>{selected?.template_name}</h2>
                  <div className="btn-chips d-flex justify-content-between align-items-center mt-1">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      {selected?.prifix_id}
                    </span>
                    {/* <div> */}
                    <div className="d-flex flex-stack fw-bold">
                      {/*begin::Label*/}
                      <span className="badge border border-dashed fs-2 fw-bold text-dark p-2">
                        <span className="fs-6 fw-semibold text-gray-600 p-2">
                          $
                        </span>
                        450.00
                      </span>
                      <span className="text-danger">
                        <s>$ 500</s>
                      </span>
                    </div>
                  </div>
                  <div className="btn-chips d-flex justify-content-between mt-6">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      Duration 45 sec
                    </span>
                    {/* <div> */}
                    <div className="d-flex gap-12 flex-stack fw-bold">
                      {/*begin::Label*/}
                      <span className="badge badge-light fw-bold">Hindus</span>
                      <span className="badge badge-light fw-bold">
                        Standred
                      </span>
                      <span className="badge badge-light fw-bold">Modern</span>
                    </div>
                  </div>
                </Card.Text>
                <div className="d-flex gap-10 justify-content-center my-12">
                  <Button variant="secondary" onClick={() => handleFav(selected)}>
                    <FontAwesomeIcon icon={faHeart} />
                  </Button>
                  <Button variant="secondary" onClick={() => handleCart(selected)}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Button> 
                  <Button variant="secondary" onClick={() => navigate(`/cart-order/${selected?.id}`)}>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
          </Modal.Body>
          </Modal>
        </>
      );
    };
    