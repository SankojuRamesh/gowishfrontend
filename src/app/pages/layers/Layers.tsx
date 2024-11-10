import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Button, Col, Container, Form, Modal, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLink, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToasterPage } from '../../modules/shared/Toaster/toaster';
import GridMui  from '@mui/material/Grid';

const Layers = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [extraPage, setExtraPage] = useState<any>({})
    const [layers, setLayers] = useState([])
    const [page, setPage] = useState(1)
    const [checkedItems, setCheckedItems] = useState<any>({});
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)
    const [selectedLayer, setSelectedLayer] = useState<any>({})
    const [showModal, setShowModal] = useState(false)
    const [selectedFile, setSelectedFile] = useState<any>('')
    const [selectedText, setSelectedText] = useState<any>('')
    useEffect(() => {
        getLayers()
    }, [id, page])
    const getLayers = () => {
        ApiAxios.get(`/layers/?compositid=${id}&page=${page}`).then((resp: any) => {
            let lrs = resp?.data?.results
            setLayers(lrs)
            setExtraPage(resp?.data?.links)
            const initialCheckedState = resp.data.results.reduce((acc: any, item: any) => {
                acc[item.id] = item.show === 'true'; // Assuming isLocked is a string
                return acc;
            }, {});
            setCheckedItems(initialCheckedState);
        }, (error) => console.log(error))
    }

    const handleShowMore = (data: any) => {
        console.log('kjhgfdfhg', data)
        setSelectedLayer(data)
        setSelectedFile(data?.mainsrc)
        setSelectedText(data?.text)
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleLayerText = (e: any) => {
        setSelectedText(e.target.value)
    }

    const handleSave = () => {
        const obj: any = {
            "name": selectedLayer.name,
            "mainsrc": selectedFile,
            "width": selectedLayer.width,
            "height": selectedLayer.height,
            "scalX": selectedLayer.scalX,
            "scalY": selectedLayer.scalY,
            "position": selectedLayer.position,
            "opacity": selectedLayer.opacity,
            "rotation": selectedLayer.rotation,
            "anchorPoint": selectedLayer.anchorPoint,
            "isLocked": selectedLayer.isLocked,
            "show": selectedLayer.show,
            "type": selectedLayer.type,
            "text": selectedText,
            "size": selectedLayer.size,
            "color": selectedLayer.color,
            "font": selectedLayer.font,
            "inPoin": selectedLayer.inPoin,
            "outPoint": selectedLayer.outPoint,
            "projectid": selectedLayer.projectid,
            "compositid": selectedLayer.compositid
          }
          ApiAxios.put(`layers/${selectedLayer.id}/`, obj).then((resp) => {
            setShow(true)
            setMsg('Layer updated successfully')
            getLayers()
          }, (error) => console.log(error))
          handleClose()
          getLayers()
    }

    const handleIsLocked = (e: any, row: any) => {
        const checked = e.target.checked;
        setCheckedItems((prev: any) => ({
            ...prev,
            [row.id]: checked // Update only the specific item's checked state
        }));
        const obj: any = {
            "name": row.name,
            "mainsrc": row.mainsrc,
            "width": row.width,
            "height": row.height,
            "scalX": row.scalX,
            "scalY": row.scalY,
            "position": row.position,
            "opacity": row.opacity,
            "rotation": row.rotation,
            "anchorPoint": row.anchorPoint,
            "isLocked": row.isLocked,
            "show": e.target.checked.toString(),
            "type": row.type,
            "text": row.text,
            "size": row.size,
            "color": row.color,
            "font": row.font,
            "inPoin": row.inPoin,
            "outPoint": row.outPoint,
            "projectid": row.projectid,
            "compositid": row.compositid
          }
          ApiAxios.put(`layers/${row.id}/`, obj).then((resp) => {
            setShow(true)
            setMsg('Layer updated successfully')
            getLayers()
          }, (error) => console.log(error))
    }

    const handleUploadClick = (event: any) => {
        var file = event.target.files[0];
        const reader = new FileReader();
        var url = reader.readAsDataURL(file);
    
        reader.onloadend = function(e: any) {
          
            setSelectedFile(reader.result)
        
        };
        console.log(url);
        
          setSelectedFile(event.target.files[0])
      };
    return (
        <div className='container'>
             <h1 className='fs-4'>Layers</h1>
            <Table striped hover  className="table-center w-100">
            <thead>
              <tr className='bg-dark text-muted'>
                <th>#</th>
                <th>Layer Name</th>
                <th>Type</th>
                <th>Show</th>
                <th>Locked</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    layers.map((item: any, i: number) => 
                    <tr>
                        <td>{i+1}</td>
                        <td>{item?.name}</td>
                        <td>{item.type}</td>
                        <td><Form.Check
                                    type="switch"
                                    id={`custom-switch-${item.id}`}
                                    className='custom-switch d-inline-block'
                                    label=""
                                    disabled
                                    onChange={(e) => handleIsLocked(e, item)}
                                    checked={item.show === 'true'}
                                /></td>
                        <td><Form.Check
                                    type="switch"
                                    id={`custom-switch-${item.id}`}
                                    className='custom-switch d-inline-block'
                                    label=""
                                    disabled
                                    onChange={(e) => handleIsLocked(e, item)}
                                    checked={item.isLocked === 'true'}
                                /></td>
                        <td>
                        <div className='d-flex gap-4 justify-content-center'>
                        <Button variant="secondary" onClick={() => handleShowMore(item)}>
                                    Show More
                                </Button>
                                </div>
                        </td>
                    </tr>)
                }
            </tbody>
            </Table>
            {layers?.length === 0 && <p className='text-center'><i>No layers available</i></p>}
        {layers?.length > 10 && 
            <div className="d-flex gap-5 justify-content-end my-10">
                <Button disabled={!extraPage?.previous} variant="link" onClick={() => setPage(page - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} size="1x" /> Previous
                </Button>
                <Button disabled={!extraPage?.next} variant="link" onClick={() => setPage(page + 1)}>
                    Next <FontAwesomeIcon icon={faChevronRight} size="1x" />
                </Button>
            </div>
        }
        <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
        <Modal show={showModal} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{selectedLayer.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
            <Row>
                <Col>
                    <p>
                        {selectedLayer.type}
                    </p>
                    <p>
                        {selectedLayer.type === 'image' ?
                             <GridMui container direction="column" alignItems="center">
                             <GridMui item>
                               <img
                                 width="100%"
                                //  className={classes.img}
                                 src={selectedFile}
                               />
                             </GridMui>
                             <label htmlFor="contained-button-file">
                               <Button variant="contained" onClick={handleUploadClick}>
                                 Select Image
                                 <input
                                   accept="image/*"
                                   className={'img-upload-input'}
                                   id="contained-button-file"
                                   multiple
                                   type="file"
                                   onChange={handleUploadClick}
                                 />
                               </Button>
                             </label>
                           </GridMui>
                           : <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           {/* <Form.Label></Form.Label> */}
                           <Form.Control type="text" placeholder="name@example.com" value={selectedText} onChange={handleLayerText} />
                         </Form.Group>
                        }
                    </p>
                </Col>
                <Col>
                {selectedLayer.type === 'image' ?
                <>
                        <p>Width/Height</p>
                        <p>{selectedLayer.width}/{selectedLayer.height}</p>
                        </> :
                <>
                        <p>Font Size</p>
                        <p>{selectedLayer.size}</p>
                        </>}
                </Col>
                <Col>
                {selectedLayer.type === 'image' ?
                <>
                        <p>Image</p>
                        <p>{selectedLayer.image || '--'}</p>
                        </> :
                        <>
                        <p>Color</p>
                        <p>{selectedLayer.color || '--'}</p>
                        </>}
                </Col> 
            </Row>
            <Row>
                <Col>
                {selectedLayer.type === 'image' ? <>
                        <p>ScaleX</p>
                        <p>{selectedLayer.scalX}</p>
                        </> : 
                        <>
                        <p>Font Type</p>
                        <p>{selectedLayer.font}</p>
                        </>}
                </Col>
                {selectedLayer.type === 'image' && <Col>
                        <p>ScaleY</p>
                        <p>{selectedLayer.scalY}</p>
                </Col>}
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="link" onClick={handleSave}>
                    Save
                </Button>
            </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Layers;