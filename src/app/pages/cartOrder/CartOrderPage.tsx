import {
  faIndianRupeeSign,
  faPencil,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import { useAuth } from "../../modules/auth";
import { ToasterPage } from "../../modules/shared/Toaster/toaster";

export const CartOrderPage = () => {
  const {auth} = useAuth()
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState<any>({});
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUsermodal] = useState(false);
  const [relations, setRelations] = useState([])
  const [user, setUser] = useState('')
  const [template, setTemplate] = useState<any>({})
  const [selectedRelation, setSelectedRelation] = useState<any>({})
  const [userName, setUserName] = useState<any>(null)
  const [validated, setValidated] = useState(false);
  const [number, setNumber] = useState<any>(null)
  const [email, setEmail] = useState<any>(null)
  const [showToaster, setShowToaster] = useState(false)
  const [famOptions, setFamOptions] = useState<any>([])
  const length = famOptions?.length || 0; 
  const subTotal = 450 * length; 
  const tenPercent = subTotal * 0.10; 
  const discount = subTotal - tenPercent; 

  const tax = Math.round(discount * 0.18); 
  const afterTax = discount + tax;
  let msg = ''
  useEffect(() => {
    getAllRelations()
    getTempData()
  }, [])

  const getTempData = () => {
    ApiAxios.get(`tempalts/${id}/`).then((resp: any) => {
      setTemplate(resp?.data)
    }, (error: any) => console.log(error))
  }

  const getAllRelations = () => {
    ApiAxios.get('all_relations/').then(resp => {
      setRelations(resp.data?.results)
      setSelectedRelation(resp.data?.results[0])
      setSelectedUser(resp.data.results[0])
    },(error) => console.log(error))
  }

  const handleAddUser = () => {
    const formData = new FormData();
    formData.append('type', user);
    formData.append('user', auth?.id);
    ApiAxios.post('all_relations/', formData).then((resp) => {
      getAllRelations()
      setShowUsermodal(false)
    }, (error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getFamilyById()
  }, [selectedUser])

  const getFamilyById = () => {
    ApiAxios.get(`my_famaly/?famaly_type=${selectedUser?.type}`).then(resp => {
      setFamOptions(resp?.data?.results)
    }, (error) => console.log(error))
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();
      const formData = new FormData();
      formData.append('famaly', selectedRelation.type);
      formData.append('name', userName);
      formData.append('email', email);
      formData.append('phone', number);
      ApiAxios.post('add_famaly/', formData).then(resp => {
        setShowToaster(true)
        msg = `User added to ${selectedRelation.type}`
      }, (error) => console.log(error))
    }

    setValidated(true);
  };
  const handleSelectCategory = (item: any) => {
    setSelectedUser(item);
  };
  const handleSelectRelationCategory = (item: any) => {
    setSelectedRelation(item);
  };

  const getType = (type: any) => {
    const matchedObject: any= relations.find((t: any) => t.id === type);
    return matchedObject ? matchedObject.type : null;
  }
  
  return (
    <div>
      <div
        className="app-wrapper flex-column flex-row-fluid"
        id="kt_app_wrapper"
      >
        <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
          <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_toolbar" className="app-toolbar py-3 py-lg-6">
              <div
                id="kt_app_toolbar_container"
                className="app-container container-xxl d-flex flex-stack"
              >
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3">
                  <h1 className="page-heading d-flex text-dark fw-bold fs-3 flex-column justify-content-center my-0">
                    {" "}
                    Cart Confirm Order
                  </h1>

                  <ul className="breadcrumb breadcrumb-separatorless fw-semibold fs-7 my-0 pt-1">
                    <li className="breadcrumb-item text-muted">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate("/");
                        }}
                        className="text-muted text-hover-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <span className="bullet bg-gray-400 w-5px h-2px"></span>
                    </li>

                    <li className="breadcrumb-item text-muted">
                      Confirm Media Templetes in cart.{" "}
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center gap-2 gap-lg-3"></div>
              </div>
            </div>
            <div id="kt_app_content" className="app-content flex-column-fluid">
              <div
                id="kt_app_content_container"
                className="app-container container-xxl"
              >
                <div className="d-flex flex-column flex-xl-row">
                  <div className="flex-lg-row-fluid">
                    <div className="card pt-0 mb-5 mb-xl-9">
                      <div className="card-body pt-5">
                        <div className="d-flex flex-stack flex-wrap">
                          <div className="d-flex align-items-center ">
                            <div className="symbol symbol-45px w-45px bg-light me-5">
                              <img
                                src={template?.template_small_thumb}
                                alt="user"
                              />
                            </div>
                            <div className="flex-grow-1">
                              <span className="fs-6 text-gray-800 fw-bold mb-0">
                                {template?.template_name}
                              </span>

                              <div className="d-flex align-items-center flex-wrap mb-0 mt-auto fs-0">
                                <span className="badge badge-light fw-bold me-2 ">
                                  Video
                                </span>
                                <span className="badge badge-light fw-bold me-2 ">
                                  Vertical
                                </span>
                                <span className="badge badge-light fw-bold me-2 ">
                                  Hindus
                                </span>
                                <span className="badge badge-light fw-bold me-2 ">
                                  Standred
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex">
                            <div className="d-flex align-items-center me-5 ms-20 me-xl-10">
                              <div className="m-0">
                                <span className="fw-semibold text-gray-400 d-block fs-4">
                                  {" "}
                                  <span className="fw-semibold text-success text-end fw-bold fs-4">
                                    <FontAwesomeIcon
                                      icon={faIndianRupeeSign}
                                      size="1x"
                                    />{" "}
                                    450.00
                                  </span>{" "}
                                </span>
                                <span className="text-gray-800 me-2  fw-bold">
                                  <span className="fs-8 fw-bolder text-gray-600">
                                    <s>
                                      MRP{" "}
                                      <FontAwesomeIcon
                                        icon={faIndianRupeeSign}
                                        size="1x"
                                      />{" "}
                                      1000.00
                                    </s>
                                    <span className="fs-8 fw-bolder text-danger">
                                      {" "}
                                      [ 55% Off ]{" "}
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="d-flex align-items-center me-5 me-xl-0">
                              <div className="ms-0">
                                <span className="btn btn-icon btn-active-light-danger w-35px h-35px me-3 w-md-40px h-md-40px">
                                  <span className="svg-icon svg-icon-muted svg-icon-2hx">
                                    <FontAwesomeIcon icon={faTrash} size="1x" />
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="separator separator-dashed my-2"></div>
                      <div className="card-body pt-5">
                        <div className="d-flex flex-stack flex-wrap gap-5">
                          <div className="me-5 fw-semibold">
                            <label className="fs-6">
                              {" "}
                              Media Templates for Shared user list{" "}
                            </label>
                            <div className="fs-7 text-muted">
                              Media Templetes Editiable for shared users.{" "}
                            </div>
                          </div>
                          <div className="d-flex gap-3">
                            <DropdownButton
                              variant="secondary"
                              title={
                                selectedUser?.type || "Select Type of User"
                              }
                              // id="dropdown-basic"
                            >
                                {relations.map((item: any) => (
                                  <Dropdown.Item
                                    key={item.id}
                                    onClick={() => handleSelectCategory(item)} // Set category on click
                                  >
                                    {item.type}
                                  </Dropdown.Item>
                                ))}
                            </DropdownButton>
                            <div>
                        <Button onClick={() => setShowUsermodal(true)}>New</Button>
                      </div>
                          </div>
                          <div className="d-flex align-items-center gap-2 gap-lg-3">
                            <a
                              href="#"
                              className="btn btn-sm fw-bold btn-primary"
                              onClick={(e) => {
                                e.preventDefault();
                                setShowModal(true);
                              }}
                            >
                              <FontAwesomeIcon icon={faPlusSquare} size="1x" />{" "}
                              Add Users{" "}
                            </a>{" "}
                          </div>
                        </div>

                        <div className="mb-10">
                          <div className="mh-600px scroll-y me-n7 pe-7">
                            <div className="table-responsive">
                              <table
                                id="kt_project_users_table"
                                className="table table-row-bordered table-row-dashed gy-4 align-middle fw-bold"
                              >
                                <thead className="fs-7 text-gray-400 text-uppercase">
                                  <tr>
                                    <th className="min-w-250px">Shared Name</th>
                                    <th className="min-w-150px">Contact</th>
                                    <th className="min-w-150px">Date</th>
                                    <th className="min-w-90px">Status</th>
                                  </tr>
                                </thead>
                                <tbody className="fs-6">
                                  {famOptions.length > 0 && famOptions.map((item: any) => 
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center ">
                                        <div className="symbol symbol-45px w-45px bg-light me-5">
                                          <span className="symbol-label fs-1x fw-semibold text-light-dark bg-dark text-capitalize">
                                            {item?.relative_data[0]?.name?.charAt(0)}
                                          </span>
                                        </div>
                                        <div className="flex-grow-1">
                                          <span className="fs-4 text-gray-800 fw-bold mb-0 text-capitalize">
                                            {item?.relative_data[0]?.name}
                                          </span>

                                          <div className="d-flex align-items-center flex-wrap mb-0 mt-auto fs-0">
                                            <span className="badge badge-light fw-bold me-2 ">
                                              {getType(item.relation_type)}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="mb-1 text-gray-800">
                                            +91 {item?.relative_data[0]?.phone}
                                          </span>
                                          <div className="fw-semibold fs-6 text-gray-400">
                                            {item?.relative_data[0]?.email}
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="text-gray-800 fw-bold">
                                            Nov 26, 2020{" "}
                                          </span>
                                          <span className="fw-semibold text-gray-400 d-block fs-8">
                                            {" "}
                                            7:25 AM
                                          </span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex my-3 ms-9">
                                        {/* <span
                                          className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_edit_user"
                                        >
                                          <span
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-kt-initialized="1"
                                          >
                                            <span className="svg-icon svg-icon-3">
                                              <FontAwesomeIcon
                                                icon={faPencil}
                                                size="1x"
                                              />
                                            </span>
                                          </span>
                                        </span> */}
                                        <span
                                          className="btn btn-icon btn-active-light-danger w-30px h-30px me-3"
                                          data-bs-toggle="tooltip"
                                          data-kt-customer-payment-method="delete"
                                          data-kt-initialized="1"
                                        >
                                          <span className="svg-icon svg-icon-3">
                                            <FontAwesomeIcon
                                              icon={faTrash}
                                              size="1x"
                                            />
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                  </tr>)}
                                  {/* <tr>
                                    <td>
                                      <div className="d-flex align-items-center ">
                                        <div className="symbol symbol-45px w-45px bg-light me-5">
                                          <span className="symbol-label fs-1x fw-semibold text-light-dark bg-dark">
                                            O
                                          </span>
                                        </div>
                                        <div className="flex-grow-1">
                                          <span className="fs-4 text-gray-800 fw-bold mb-0">
                                            Order User Name01
                                          </span>

                                          <div className="d-flex align-items-center flex-wrap mb-0 mt-auto fs-0">
                                            <span className="badge badge-light fw-bold me-2 ">
                                              Family
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="mb-1 text-gray-800 ">
                                            {" "}
                                            +91 987654321
                                          </span>
                                          <div className="fw-semibold fs-6 text-gray-400">
                                            uswer mail@mail.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="text-gray-800 fw-bold">
                                            Nov 26, 2020{" "}
                                          </span>
                                          <span className="fw-semibold text-gray-400 d-block fs-8">
                                            {" "}
                                            7:25 AM
                                          </span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex my-3 ms-9">
                                        <span
                                          className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_edit_user"
                                        >
                                          <span
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-kt-initialized="1"
                                          >
                                            <span className="svg-icon svg-icon-3">
                                              <FontAwesomeIcon
                                                icon={faPencil}
                                                size="1x"
                                              />
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="btn btn-icon btn-active-light-danger w-30px h-30px me-3"
                                          data-bs-toggle="tooltip"
                                          data-kt-customer-payment-method="delete"
                                          data-kt-initialized="1"
                                        >
                                          <span className="svg-icon svg-icon-3">
                                            <FontAwesomeIcon
                                              icon={faTrash}
                                              size="1x"
                                            />
                                          </span>
                                        </span>
                                      </div>{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center ">
                                        <div className="symbol symbol-45px w-45px bg-light me-5">
                                          <span className="symbol-label fs-1x fw-semibold text-light-dark bg-dark">
                                            O
                                          </span>
                                        </div>
                                        <div className="flex-grow-1">
                                          <span className="fs-4 text-gray-800 fw-bold mb-0">
                                            Order User Name01
                                          </span>

                                          <div className="d-flex align-items-center flex-wrap mb-0 mt-auto fs-0">
                                            <span className="badge badge-light fw-bold me-2 ">
                                              Family
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="mb-1 text-gray-800">
                                            + 9000000000
                                          </span>
                                          <div className="fw-semibold fs-6 text-gray-400">
                                            melody@altbox.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="text-gray-800 fw-bold">
                                            Nov 26, 2020{" "}
                                          </span>
                                          <span className="fw-semibold text-gray-400 d-block fs-8">
                                            {" "}
                                            7:25 AM
                                          </span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex my-3 ms-9">
                                        <span
                                          className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_edit_user"
                                        >
                                          <span
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-kt-initialized="1"
                                          >
                                            <span className="svg-icon svg-icon-3">
                                              <FontAwesomeIcon
                                                icon={faPencil}
                                                size="1x"
                                              />
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="btn btn-icon btn-active-light-danger w-30px h-30px me-3"
                                          data-bs-toggle="tooltip"
                                          data-kt-customer-payment-method="delete"
                                          data-kt-initialized="1"
                                        >
                                          <span className="svg-icon svg-icon-3">
                                            <FontAwesomeIcon
                                              icon={faTrash}
                                              size="1x"
                                            />
                                          </span>
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center ">
                                        <div className="symbol symbol-45px w-45px bg-light me-5">
                                          <span className="symbol-label fs-1x fw-semibold text-light-dark bg-dark">
                                            O
                                          </span>
                                        </div>
                                        <div className="flex-grow-1">
                                          <span className="fs-4 text-gray-800 fw-bold mb-0">
                                            Order User Name01
                                          </span>

                                          <div className="d-flex align-items-center flex-wrap mb-0 mt-auto fs-0">
                                            <span className="badge badge-light fw-bold me-2 ">
                                              Family
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="mb-1 text-gray-800">
                                            {" "}
                                            +91 987654321
                                          </span>
                                          <div className="fw-semibold fs-6 text-gray-400">
                                            uswer mail@mail.com
                                          </div>
                                        </div>
                                      </div>
                                    </td>

                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="d-flex flex-column justify-content-center">
                                          <span className="text-gray-800 fw-bold">
                                            Nov 26, 2020{" "}
                                          </span>
                                          <span className="fw-semibold text-gray-400 d-block fs-8">
                                            {" "}
                                            7:25 AM
                                          </span>
                                        </div>
                                      </div>
                                    </td>

                                    <td className="text-end">
                                      <div className="d-flex my-3 ms-9">
                                        <span
                                          className="btn btn-icon btn-active-light-primary w-30px h-30px me-3"
                                          data-bs-toggle="modal"
                                          data-bs-target="#kt_modal_edit_user"
                                        >
                                          <span
                                            data-bs-toggle="tooltip"
                                            data-bs-trigger="hover"
                                            data-kt-initialized="1"
                                          >
                                            <span className="svg-icon svg-icon-3">
                                              <FontAwesomeIcon
                                                icon={faPencil}
                                                size="1x"
                                              />
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="btn btn-icon btn-active-light-danger w-30px h-30px me-3"
                                          data-bs-toggle="tooltip"
                                          data-kt-customer-payment-method="delete"
                                          data-kt-initialized="1"
                                        >
                                          <span className="svg-icon svg-icon-3">
                                            <FontAwesomeIcon
                                              icon={faTrash}
                                              size="1x"
                                            />
                                          </span>
                                        </span>
                                      </div>{" "}
                                    </td>
                                  </tr> */}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-stack">
                          <div className="me-5 fw-semibold">
                            <label className="fs-6">
                              {" "}
                              Media Templates for Shared user ( {famOptions?.length} ){" "}
                            </label>
                            <div className="fs-7 text-muted">
                              {" "}
                              Notifications Sent Mail & Mobile to Selected users{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-column flex-lg-row-auto w-100 w-xl-425px mb-5 ms-lg-10">
                    <div className="card mb-5 mb-xl-1">
                      <div className="card-body pt-5">
                        <div className="d-flex flex-stack">
                          <span className="text-gray-800  fs-6  fw-bolder">
                            {" "}
                            Reseller Discount
                          </span>
                        </div>
                        <div className="d-flex flex-stack my-2">
                          <input
                            className="form-control form-control-solid"
                            placeholder="Discount 10"
                          />
                        </div>
                        <span className="text-success fw-bold  fs-8">
                          Reseller Coupan Success{" "}
                          <span className="text-dark fw-bold  fs-8"> /</span>
                          <span className="text-danger fw-bold  fs-8">
                            {" "}
                            Not Valid Coupan Code
                          </span>{" "}
                        </span>
                      </div>
                    </div>

                    <div className="card mb-5 mb-xl-1">
                      <div className="card-body pt-5">
                        <div className="m-0">
                          <div className="d-flex flex-stack bg-success rounded-3 p-6 mb-5">
                            <div className="fs-6 fw-bold text-white">
                              <span className="d-block lh-1 mb-2">MRP </span>

                              <span className="d-block lh-1 mb-2">
                                No Of Shared Users{" "}
                              </span>
                              <span className="d-block lh-1 mb-2">
                                Subtotal{" "}
                              </span>
                              <span className="d-block mb-2">
                                Reseller Discounts - 10 %{" "}
                              </span>
                              <span className="d-block mb-9"> Tax (18%)</span>
                              <span className="d-block fs-2qx lh-1">Total</span>
                            </div>
                            <div className="fs-6 fw-bold text-white text-end">
                              <span
                                className="d-block lh-1 mb-2"
                                data-kt-pos-element="total"
                              >
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  size="1x"
                                />{" "}
                                450.00
                              </span>
                              <span
                                className="d-block lh-1 mb-2"
                                data-kt-pos-element="total"
                              >
                                X {famOptions.length}{" "}
                              </span>
                              <span
                                className="d-block lh-1 mb-2"
                                data-kt-pos-element="total"
                              >
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  size="1x"
                                />{" "}
                                {subTotal}
                              </span>
                              <span
                                className="d-block mb-2"
                                data-kt-pos-element="discount"
                              >
                                {" "}
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  size="1x"
                                />{" "}
                                - {tenPercent}
                              </span>
                              <span
                                className="d-block mb-9"
                                data-kt-pos-element="tax"
                              >
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  size="1x"
                                />{" "}
                                {tax}
                              </span>
                              <span
                                className="d-block fs-2qx lh-1"
                                data-kt-pos-element="grant-total"
                              >
                                <FontAwesomeIcon
                                  icon={faIndianRupeeSign}
                                  size="1x"
                                />
                                { afterTax}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card mb-5 mb-xl-1">
                      <div className="card-body pt-5">
                        <div className="m-0">
                          <div className="d-flex flex-stack my-2 mb-5">
                            <span className="text-gray-800  fs-4 fw-bolder">
                              Payment Method
                            </span>
                          </div>

                          <div
                            className="d-flex flex-equal gap-5 gap-xxl-9 px-0 mb-12"
                            data-kt-buttons="true"
                            data-kt-buttons-target="[data-kt-button]"
                            data-kt-initialized="1"
                          >
                            <label
                              className="btn bg-light btn-color-gray-600 btn-active-text-gray-800 btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-success w-100 px-4"
                              data-kt-button="true"
                            >
                              <input
                                className="btn-check"
                                type="radio"
                                name="method"
                                value="0"
                              />

                              <i className="fonticon-mobile-payment fs-2hx mb-2 pe-0"></i>

                              <span className="fs-7 fw-bold d-block">
                                PAYTM
                              </span>
                              <span className="text-gray-400 fw-semibold d-block fs-8">
                                UPI Payment
                              </span>
                            </label>
                            <label
                              className="btn bg-light btn-color-gray-600 btn-active-text-gray-800  btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-success w-100 px-4"
                              data-kt-button="true"
                            >
                              <input
                                className="btn-check"
                                type="radio"
                                name="method"
                                value="1"
                              />

                              <i className="fonticon-card fs-2hx mb-2 pe-0"></i>
                              <span className="fs-7 fw-bold d-block">
                                Credit zone
                              </span>
                              <span className="text-gray-400 fw-semibold d-block fs-8">
                                Truest Partners
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="m-0">
                          <a
                            href="../../demo1/dist/front end/Page 05_cart.html"
                            className="btn btn-light-success w-100"
                          >
                            <i className="fonticon-mobile-payment fs-4 me-2"></i>
                            Proceed to Payment{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center mb-2">
              <h1 className="d-flex mb-3"> Shared Users for Media Templete </h1>
              <div className="text-muted fw-semibold fs-5">
                Select Registed User Order View Send,please check out
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card card-flush h-xl-100">
            <div className="card-body pt-6">
              {/* <ul className="nav nav-pills nav-pills-custom mb-3">
                <li className="nav-item mb-3 me-3 me-lg-6">
                  <a
                    className="btn bg-light btn-color-gray-600 btn-active-text-gray-800  btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-primary w-100 px-4"
                    id="kt_stats_widget_16_tab_link_1"
                    data-bs-toggle="pill"
                    href="#kt_stats_widget_16_tab_1"
                  >
                    <input
                      className="btn-check"
                      type="radio"
                      name="method"
                      value="1"
                    />
                    <i className="fonticon-user fs-2hx mb-2 pe-0"></i>
                    <span className="fs-7 fw-bold d-block">Single User</span>
                    <span className="text-gray-400 fw-semibold d-block fs-8">
                      Media SIngle User share
                    </span>
                  </a>
                </li>

                <li className="nav-item mb-3 me-3 me-lg-6">
                  <a
                    className="btn bg-light btn-color-gray-600 btn-active-text-gray-800  btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-primary w-100 px-4"
                    id="kt_stats_widget_16_tab_link_3"
                    data-bs-toggle="pill"
                    href="#kt_stats_widget_16_tab_2"
                  >
                    <input
                      className="btn-check"
                      type="radio"
                      name="method"
                      value="1"
                    />

                    <i className="fonticon-user-2 fs-2hx mb-2 pe-0"></i>

                    <span className="fs-7 fw-bold d-block">Bluk zone</span>
                    <span className="text-gray-400 fw-semibold d-block fs-8">
                      {" "}
                      Media Bulk users share{" "}
                    </span>
                  </a>
                </li>
                <li className="nav-item mb-3 me-3 me-lg-6">
                  <a
                    className="btn bg-light btn-color-gray-600 btn-active-text-gray-800  btn-active-text-gray-800 btn btn-outline btn-outline-dashed  border-active-primary btn-active-light-primary w-100 px-4"
                    id="kt_stats_widget_16_tab_link_3"
                    data-bs-toggle="pill"
                    href="#kt_stats_widget_16_tab_3"
                  >
                    <input
                      className="btn-check"
                      type="radio"
                      name="method"
                      value="1"
                    />

                    <i className="fonticon-pin fs-2hx mb-2 pe-0"></i>

                    <span className="fs-7 fw-bold d-block">Selected Users</span>
                    <span className="text-gray-400 fw-semibold d-block fs-8">
                      Media Select User Shared
                    </span>
                  </a>
                </li>
              </ul> */}

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="kt_stats_widget_16_tab_1"
                >
                  <div className="mb-10">
                    {/* <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bold fs-5 text-gray-800">
                        Adding Single User Media Templete Order Access
                      </span>
                      <div className="text-muted fw-semibold fs-5">
                        Media Templetes share User editable access
                      </div>
                    </h3> */}

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="d-flex flex-column mb-7 fv-row">
                      <div>
                      <DropdownButton
                              variant="secondary"
                              title={
                                selectedRelation?.type || "Select Type of User"
                              }
                              className="relation-dd"
                              id="dropdown-basic"
                            >
                              <Dropdown.Menu>
                                {relations.map((item: any) => (
                                  <Dropdown.Item
                                    key={item.id}
                                    onClick={() => handleSelectRelationCategory(item)} // Set category on click
                                  >
                                    {item.type}
                                  </Dropdown.Item>
                                ))}
                              </Dropdown.Menu>
                            </DropdownButton>
                            {/* </div> */}
                      </div>
                      
                    </div>
                    <div className="mb-10">
                      <div className="fv-row mb-7">
                      <Form.Group controlId="validationCustom01">
                      <Form.Label>User Name</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          value={userName}
                          required
                          onChange={(e: any) => setUserName(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid user name.
                        </Form.Control.Feedback>
                        </Form.Group>
                        <div className="fv-plugins-message-container invalid-feedback"></div>
                      </div>

                      <div className="row mb-5">
                        <div className="col-md-6 fv-row fv-plugins-icon-container">
                        <Form.Group controlId="validationCustom02">
                        <Form.Label aria-required>User Phone Number</Form.Label>
                        <Form.Control
                          type="number"
                          required
                          aria-describedby="passwordHelpBlock"
                          value={number}
                          onChange={(e: any) => setNumber(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid phone number.
                        </Form.Control.Feedback>
                        </Form.Group>
                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>

                        <div className="col-md-6 fv-row fv-plugins-icon-container">
                        <Form.Group controlId="validationCustom03">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control
                          type="text"
                          aria-describedby="passwordHelpBlock"
                          value={email}
                          required
                          onChange={(e: any) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email id.
                        </Form.Control.Feedback>
                        </Form.Group>
                          <div className="fv-plugins-message-container invalid-feedback"></div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-stack">
                      <div className="me-5 fw-semibold">
                        <label className="fs-6">
                          Notification Templates for user
                        </label>
                        <div className="fs-7 text-muted">
                          Sent to Notifications mail & Mobile{" "}
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-2 gap-lg-3">
                      <Button type="submit">
                          <i className="bi bi-plus-square-dotted"></i> Add
                          Shared User</Button>
                      </div>
                    </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={showUserModal}
        onHide={() => setShowUsermodal(false)}
        centered
        size="sm"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label htmlFor="inputPassword5">User Type</Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          value={user}
          onChange={(e: any) => setUser(e.target.value)}
        />
        <div className="my-8 text-end">
          <Button onClick={handleAddUser}>Add</Button>
        </div>
        </Modal.Body>
        </Modal>
        <ToasterPage show={showToaster} setShow={setShowToaster} toastMsg={`User added to ${selectedRelation?.type}`} />
    </div>
  );
};
