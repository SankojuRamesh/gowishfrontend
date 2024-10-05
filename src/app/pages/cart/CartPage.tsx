import {
    faArrowRightFromBracket,
      faCartShopping,
      faChevronLeft,
      faChevronRight,
      faHeart,
      faPlay,
      faTrash,
    } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import React, { useEffect, useState } from "react";
    import ApiAxios from "../../modules/auth/core/ApiAxios";
    import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
  import { useParams } from "react-router-dom";
    
    export const CartPage = () => {
      const { id } = useParams();
      const [templates, setTemplates] = useState([]);
      const [extraPage, setExtraPage] = useState<any>({})
      const [page, setPage] = useState(1)
      const [show, setShow] = useState(false)
      const [delId, setDelId] = useState(null)
  
      useEffect(() => {
        getTemplates();
      }, [page]);
    
      const getTemplates = () => {
  
        ApiAxios.get(`cart/`).then(
          (resp) => {
            console.log("resppp", resp);
            setTemplates(resp.data.results)
            handleClose()
          },
          (error) => {
            console.log("error", error);
          }
        );
      };
  
      const handleDeleteFav = (item: any) => {
          setDelId(item.template)
          setShow(true)
      }
  
      const deleteFav = () => {
          ApiAxios.delete(`cart/${delId}/`).then(
              (resp) => {
                console.log("resppp", resp);
                getTemplates();
              },
              (error) => {
                console.log("error", error);
              }
            );
      }
  
      const handleClose = () => {
          setShow(false)
          setDelId(null)
      }
  
      return (
        <div className="container">
          <h2 className="fs-4">My Cart</h2>
          <div className="d-flex flex-wrap">
            {templates.map((template: any) => (
              <div className="col-sm-3 mb-3 mb-sm-0 pb-5 ps-2 pe-3" key={1}>
                <div className="position-relative ">
                  <div>
                    <img
                      src={`http://74.208.123.31:5001/media/${template?.template_data[0].template_small_thumb}`}
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
                      href="index.html"
                    >
                      {template?.template_data[0].template_name}
                    </a>
                  </div>
                  <div className="btn-chips d-flex justify-content-between mt-1">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      {template?.template_data[0]?.prifix_id}
                    </span>
                    <div>
                      <span className="badge badge-light fw-bold mx-2">Hindus</span>
                      <span className="badge badge-light fw-bold">Standard</span>
                    </div>
                  </div>
                  <div className="align-items-center btn-chips d-flex justify-content-between mt-1">
                    <span className="badge border border-dashed fs-6 fw-bold text-dark p-2">
                      {" "}
                      <span className="fs-6 fw-semibold text-gray-600  ">Rs.</span>
                      450.00
                    </span>
                    <div>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px">
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          <FontAwesomeIcon icon={faHeart} size={"2x"} />
                        </span>
                      </span>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px" onClick={() => handleDeleteFav(template)}>
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          <FontAwesomeIcon icon={faTrash} size={"2x"} />
                        </span>
                      </span>
                      <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px">
                        <span className="svg-icon svg-icon-muted svg-icon-1hx">
                          <FontAwesomeIcon icon={faArrowRightFromBracket} size={"2x"} />
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
      );
    };
    