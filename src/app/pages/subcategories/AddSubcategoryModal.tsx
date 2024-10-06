import React, { FC, useEffect, useRef, useState } from "react";
import { DropdownButton, Form, Image, Toast, ToastContainer } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import Dropdown from 'react-bootstrap/Dropdown';
import { PageLoader } from "../../modules/shared/loader/PageLoader";

type categoryProps = {
  show: boolean;
  handleClose: () => void;
  isEdit: boolean;
  selectedRow?: any;
  reload?: any;
};

export const AddSubcategoryModal: FC<categoryProps> = ({ show, handleClose, isEdit, selectedRow, reload }) => {
  const fileInputRef: any = useRef(null);
  const [categories, setCategories] = useState([])
  const fileInputRef1: any = useRef(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<any>(null);
  const [validated, setValidated] = useState(false);
  const [cat_name, setCat_name] = useState<any>("");
  const [sub_name, setSub_name] = useState("");
  const [price, setPrice] = useState<any>(null)
  const [status_checked, setStatus_checked] = useState<any>(true);
  const [showToaster, setShowToaster] = useState(false);
  const [imageFile, setImageFile] = useState<any>(null);
  const [thumbnailFile, setThumbnailFile] = useState<any>(null);
  const [toastMsg, setToastMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      getCategories();
    }, [])

    useEffect(() => {
        if(selectedRow?.id) {
            setCat_name(selectedRow?.category_name)
            setSub_name(selectedRow?.subcategory_name)
            setPrice(selectedRow?.price)
            setStatus_checked(selectedRow?.subcategory_state)
            setSelectedImage(selectedRow?.small_thumbnail)
            setSelectedThumbnail(selectedRow?.image_thumbnail)
            handleSelectCategory(selectedRow?.category)
        } else {
          setCat_name('')
            setSub_name('')
            setPrice(null)
            setStatus_checked(true)
            setSelectedImage(null)
            setSelectedThumbnail(null)
        }
    }, [selectedRow])

    const getCategories = () => {
      setIsLoading(true)
      ApiAxios.get('categories/').then((resp) => {
        setCategories(resp?.data?.results)
        setIsLoading(false)
      },(error) => {
        setIsLoading(false)
        console.log('error', error)
      })
  }

  const handleSubmit = async(event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (cat_name) {
      const formData = new FormData();
        formData.append('category', cat_name.id);
        formData.append('subcategory_name', sub_name);
        formData.append('price', price);
        formData.append('subcategory_state', status_checked);
        
        if (imageFile) {
            formData.append('thumbnail', imageFile); // Pass the actual file object
        }
        
        if (thumbnailFile) {
            formData.append('image_thumbnail', thumbnailFile); // Pass the actual file object
        }
        if(isEdit) {
          setIsLoading(true)
            formData.append('id', selectedRow.id);
            try {
                const response = await ApiAxios.put(`subcategories/${selectedRow?.id}/`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });
                if(response.status === 200) {
                    setShowToaster(true)
                    setToastMsg('Sub Category updated successfully')
                    setCat_name('');
                    setStatus_checked(false)
                    setSelectedImage(null)
                    setSelectedThumbnail(null)
                    reload()
                    handleClose()
                }
                setIsLoading(false)
                }catch (error) {
                  setIsLoading(false)
                  console.error('Upload failed:', error);
                }
        } else {
          setIsLoading(true)
            try {
                const response = await ApiAxios.post('subcategories/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                });
                if(response.status === 201) {
                    setShowToaster(true)
                    setToastMsg('Sub Category created successfully')
                    setCat_name('');
                    setStatus_checked(false)
                    setSelectedImage(null)
                    setSelectedThumbnail(null)
                    reload()
                    handleClose()
                }
                setIsLoading(false)
                }catch (error) {
                  setIsLoading(false)
                  console.error('Upload failed:', error);
                }
        }
        
    }
    setValidated(true);
  };

  const handleClick = () => {
    fileInputRef.current.click(); 
  };
  const handleClick1 = () => {
    fileInputRef1.current.click();
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };
  const handleThumbnailUpload = (e: any) => {
    const file = e.target.files[0];
    setThumbnailFile(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedThumbnail(imageUrl);
    }
  };

  const handleSelectCategory = (categoryId: any) => {
    const selected = categories.find((item: any) => item.id === categoryId);
    setCat_name(selected);
  };
  return (
    <>
    {isLoading && <PageLoader />}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Category Name</Form.Label>
                  <DropdownButton
                    variant="secondary"
                    title={cat_name ? cat_name.category_name : 'Select Category'}
                    id="dropdown-basic"
                  >
                    <Dropdown.Menu>
                      {categories.map((item: any) => (
                        <Dropdown.Item
                          key={item.id}
                          onClick={() => handleSelectCategory(item.id)} // Set category on click
                        >
                          {item.category_name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </DropdownButton>
                  <Form.Control.Feedback type="invalid">
                    Please provide category name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Sub Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter sub category name"
                    value={sub_name}
                    onChange={(e) => setSub_name(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide sub category name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide price.
                  </Form.Control.Feedback>
                </Form.Group>
                {isEdit && 
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Category Status</Form.Label>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="checkbox-status"
                    label=""
                    checked={status_checked}
                    onChange={(e) => setStatus_checked(e.target.checked)}
                  />
                </Form.Group>}
              </Form>
            </div>
            <div>
              <div className="d-flex  align-items-center">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Upload Image</Form.Label>
                  <Form.Floating>
                    <div className="image-uploader">
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        style={{ display: "none" }} // Hide the default file input
                        accept="image/*"
                      />
                      <div className="upload-button" onClick={handleClick}>
                        Upload Image
                      </div>
                    </div>
                  </Form.Floating>
                </Form.Group>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    thumbnail
                    className="w-100px h-100px mx-10"
                  />
                )}
              </div>
              <div className="d-flex  align-items-center">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="fs-3">Upload Thumbnail</Form.Label>
                  <Form.Floating>
                    <div className="image-uploader">
                      <input
                        type="file"
                        ref={fileInputRef1}
                        onChange={handleThumbnailUpload}
                        style={{ display: "none" }} // Hide the default file input
                        accept="image/*"
                      />
                      <div className="upload-button" onClick={handleClick1}>
                        Upload Image
                      </div>
                    </div>
                  </Form.Floating>
                </Form.Group>
                {selectedThumbnail && (
                  <Image
                    src={selectedThumbnail}
                    thumbnail
                    className="w-100px h-100px mx-2"
                  />
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      {showToaster && (
        <ToastContainer position={'middle-center'}>
        <Toast onClose={() => setShowToaster(false)} show={showToaster} className="d-inline-block m-1" bg={"success"} delay={3000} autohide key={1}>
          <Toast.Body className="text-white">
            {toastMsg}
          </Toast.Body>
        </Toast>
        </ToastContainer>
      )}
    </>
  );
};
