import {
    faArrowRightFromBracket,
      faCartShopping,
      faChevronLeft,
      faChevronRight,
      faHeart,
      faIndianRupeeSign,
      faPlay,
      faTrash,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import React, { useEffect, useState } from "react";
    import ApiAxios from "../../modules/auth/core/ApiAxios";
    import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
  import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../modules/auth";
import { PageLoader } from "../../modules/shared/loader/PageLoader";
    
    export const CartPage = () => {
      const { id } = useParams();
      const navigate = useNavigate()
      const {updateCartCount} = useAuth()
      const [templates, setTemplates] = useState([]);
      const [extraPage, setExtraPage] = useState<any>({})
      const [page, setPage] = useState(1)
      const [show, setShow] = useState(false)
      const [delId, setDelId] = useState(null)
      const [isLoading, setIsLoading] = useState(false)
  
      useEffect(() => {
        getTemplates();
      }, [page]);
    
      const getTemplates = () => {
        setIsLoading(true)
        ApiAxios.get(`cart/`).then(
          (resp) => {
            setTemplates(resp.data.results)
            handleClose()
            setIsLoading(false)
          },
          (error) => {
            setIsLoading(false)
            console.log("error", error);
          }
        );
      };
  
      const handleDeleteFav = (item: any) => {
          setDelId(item.template)
          setShow(true)
      }
  
      const deleteFav = () => {
        setIsLoading(true)
          ApiAxios.delete(`cart/${delId}/`).then(
              (resp) => {
                getTemplates();
                updateCartCount()
                setIsLoading(false)
              },
              (error) => {
                setIsLoading(false)
                console.log("error", error);
              }
            );
      }
  
      const handleClose = () => {
          setShow(false)
          setDelId(null)
      }
  
      return (
        <>
        {isLoading && <PageLoader />}
        <div className="container">
          <h2 className="fs-4">My Cart</h2>
          <div className="d-flex flex-wrap">
            {templates.map((template: any) => (
              <>
              {template?.template_data?.length > 0 && 
              <div className="col-sm-3 mb-3 mb-sm-0 pb-5 ps-2 pe-3" key={1}>
                <div className="position-relative ">
                  <div>
                    <img
                      src={`${template?.template_data?.[0]?.template_small_thumb}`}
                      alt=""
                      className="bgi-position-center bgi-no-repeat bgi-size-cover h-200px card-rounded"
                      width={"100%"}
                    />
                    <button
                      className="btn btn-icon position-absolute center-play-button"
                      data-kt-element="list-play-button"
                    >
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="text-white"
                        size="2x"
                      />
                    </button>
                  </div>
                  <div className="m-2">
                    <a
                      className="text-gray-800 text-hover-primary fs-3 fw-bold d-block mb-2"
                      href="#"
                      onClick={(e: any) => {
                        e.preventDefault()
                        navigate(`/templates/details/${template?.id}`)
                      }}
                    >
                      {template?.template_data?.[0]?.template_name}
                    </a>
                  </div>
                  <div className="btn-chips d-flex justify-content-between mt-1">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      {template?.template_data?.[0]?.prifix_id}
                    </span>
                    <div>
                      <span className="badge badge-light fw-bold mx-2">Hindus</span>
                      <span className="badge badge-light fw-bold">Standard</span>
                    </div>
                  </div>
                  <div className="align-items-center btn-chips d-flex justify-content-between mt-1">
                    <span className="badge border border-dashed fs-6 fw-bold text-dark p-2">
                      {" "}
                      <span className="fs-6 fw-semibold text-gray-600  ">
                        <FontAwesomeIcon icon={faIndianRupeeSign} size="1x" />
                      </span>
                      450.00
                    </span>
                    <div>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => navigate(`/cart-order/${template.template}`)}>
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          {/* <FontAwesomeIcon icon={faHeart} size={"2x"} /> */}
                          Buy
                        </span>
                      </span>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => handleDeleteFav(template)}>
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          <FontAwesomeIcon icon={faTrash} size={"2x"} />
                        </span>
                      </span>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => navigate(`/templates/details/${template?.id}`)}>
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          <FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"} />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              }
              </>
            ))}
            {templates?.length === 0 && 
                <p className="fs-2 text-center w-100"><i>No templates found.</i></p>
            }
          </div>
          {templates.length > 10 && 
          <div className="d-flex gap-5 justify-content-end my-10">
            <Button disabled={!extraPage?.previous} onClick={() => setPage(page - 1)}>
                <FontAwesomeIcon icon={faChevronLeft} size="1x" />
            </Button>
            <Button disabled={!extraPage?.next} onClick={() => setPage(page + 1)}>
                <FontAwesomeIcon icon={faChevronRight} size="1x" />
            </Button>
          </div>}
          <Modal show={show} onHide={handleClose} centered size="sm">
          <Modal.Header closeButton>
            <Modal.Title>Delete Template</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              Are you sure you want to delete the template from Cart?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" onClick={deleteFav}>
              Yes
            </Button>
          </Modal.Footer>
          </Modal>
        </div>
        </>
      );
    };
    