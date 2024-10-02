import {
    faCartShopping,
    faChevronLeft,
    faChevronRight,
    faHeart,
    faPaperPlane,
    faPlay,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import React, { useEffect, useState } from "react";
  import ApiAxios from "../../modules/auth/core/ApiAxios";
  import { Button, Dropdown, DropdownButton, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
  
  export const Templates = () => {
    const { id } = useParams();
    const [templates, setTemplates] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState<any>(null);
    const [selectedSub, setSelectedSub] = useState<any>(null);
    const [selectedStatus, setSelectedStatus] = useState<any>(null);
    const [extraPage, setExtraPage] = useState<any>({})
    const [page, setPage] = useState(1)
    const statusList = [
      { name: "Published", id: 1 },
      { name: "Un Published", id: 0 },
    ];
    useEffect(() => {
      getTemplates();
    }, [page]);
  
    const getTemplates = () => {

      ApiAxios.get(`tempalts/?subcategory=${id}&page=${page}`).then(
        (resp) => {
          console.log("resppp", resp);
          setExtraPage(resp?.data?.links)
          setTemplates(resp?.data?.results);
        },
        (error) => {
          console.log("error", error);
        }
      );
    };
    const handleClear = () => {
      setSelectedCat(null)
      setSelectedSub(null)
      setSelectedStatus(null)
    }
    return (
      <div className="container">
        <h2 className="fs-4">Templates page</h2>
        <div className="d-flex flex-wrap">
          {templates.map((template: any) => (
            <div className="col-sm-3 mb-3 mb-sm-0 pb-5 ps-2 pe-3" key={1}>
              <div className="position-relative ">
                <div>
                  <img
                    src={template?.template_small_thumb}
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
                    {template?.template_name}
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
                    <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-muted svg-icon-1hx">
                        <FontAwesomeIcon icon={faCartShopping} size={"2x"} />
                      </span>
                    </span>
                    <span className="btn btn-icon btn-active-light-primary w-35px h-35px w-md-40px h-md-40px">
                      <span className="svg-icon svg-icon-muted svg-icon-1hx">
                        <FontAwesomeIcon icon={faPaperPlane} size={"2x"} />
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
          <Button disabled={!extraPage?.previous} onClick={() => setPage(page - 1)}>
              <FontAwesomeIcon icon={faChevronLeft} size="1x" />
          </Button>
          <Button disabled={!extraPage?.next} onClick={() => setPage(page + 1)}>
              <FontAwesomeIcon icon={faChevronRight} size="1x" />
          </Button>
        </div>
      </div>
    );
  };
  