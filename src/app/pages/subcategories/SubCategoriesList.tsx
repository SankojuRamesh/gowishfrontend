import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Button, Form, InputGroup, Modal, Toast, ToastContainer } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './SubCategories.scss'
import { AddSubcategoryModal } from './AddSubcategoryModal';

export const SubCategoriesList = () => {
    const [categories, setCategories] = useState<any>([])
    const [show, setShow] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [selectedRow, setSelectedRow] = useState(null)
    const [showDelete, setShowDelete] = useState(false)
    const [delId, setDelId] = useState(null)
    const [showToaster, setShowToaster] = useState(false);
    const [toastMsg, setToastMsg] = useState('')
    useEffect(() => {
        getCategories()
    }, [])
    const getCategories = () => {
        ApiAxios.get('subcategories/').then((resp) => {
            setCategories(resp?.data?.results)
        },(error) => {
            console.log('error', error)
        })
    }

    const handleAdd = () => {
        setShow(true);
        setIsEdit(false)
    }

    const handleClose = () => {
        setShow(false)
        setShowDelete(false)
        setSelectedRow(null)
        setDelId(null)
    }

    const handleEdit = (row: any) => {
        setSelectedRow(row)
        setIsEdit(true)
        setShow(true);
    }

    const handleDelete = (id: any) => {
        setDelId(id);
        setShowDelete(true)
    }

    const deleteCategory = async () => {
        try {
            const response = await ApiAxios.delete(`subcategories/${delId}/`);
            setShowToaster(true);
            setToastMsg('category deleted successfully.')
            handleClose()
            getCategories()
        }catch (error) {
                console.error('Upload failed:', error);
            }
    }

    return (
        <div className='container'>
            <h1>Categories List</h1>
            <div>
                <div className='d-flex justify-content-between'>
                    <InputGroup className="mb-3 w-400px">
                        <InputGroup.Text id="basic-addon1">
                            <FontAwesomeIcon icon={faSearch} size='1x' />
                        </InputGroup.Text>
                        <Form.Control
                        placeholder="Search"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                    <Button variant='primary' onClick={handleAdd}>New</Button>
                </div>
                <div>
                <Table responsive="sm" striped hover  className="table-center mt-10">
                    <thead>
                    <tr className='bg-dark text-muted'>
                        <th>#</th>
                        <th>Category Image</th>
                        <th>Category Name</th>
                        <th>SubCategory Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories?.map((item: any, i: number) =>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td style={{width: '300px'}}><img src={item?.small_thumbnail} alt={item?.subcategory_name} width={'20%'} /></td>
                        <td>{item?.category_name}</td>
                        <td>{item?.subcategory_name}</td>
                        <td>{item?.price}</td>
                        <td>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            className='custom-switch d-inline-block'
                            label=""
                            checked={item?.subcategory_state}
                        />
                        </td>
                        <td>
                            <div className='d-flex gap-4 justify-content-center'>
                            <Button variant="secondary" onClick={() => handleEdit(item)}>
                                <FontAwesomeIcon icon={faPencil} size='1x' color='#fff' />
                            </Button>
                            <Button variant="secondary" onClick={() => handleDelete(item.id)}>
                                <FontAwesomeIcon icon={faTrashCan} size='1x' />
                            </Button>
                            </div>
                        </td>
                    </tr>)}
                    </tbody>
                </Table>
                </div>
            </div>
            <Modal show={showDelete} onHide={handleClose} centered size="sm">
        <Modal.Header closeButton>
          <Modal.Title>Delete Sub Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to delete the Sub Category?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" onClick={deleteCategory}>
            Yes
          </Button>
        </Modal.Footer>
        </Modal>
            <AddSubcategoryModal show={show} handleClose={handleClose} isEdit={isEdit} selectedRow={selectedRow} reload={getCategories} />
            {showToaster && (
                <ToastContainer position={'middle-center'}>
                <Toast onClose={() => setShowToaster(false)} show={showToaster} className="d-inline-block m-1" bg={"danger"} delay={3000} autohide key={1}>
                <Toast.Body className="text-white">
                    {toastMsg}
                </Toast.Body>
                </Toast>
                </ToastContainer>
            )}
        </div>
    )
}