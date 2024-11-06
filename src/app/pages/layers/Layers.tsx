import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLink, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToasterPage } from '../../modules/shared/Toaster/toaster';

const Layers = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [extraPage, setExtraPage] = useState<any>({})
    const [layers, setLayers] = useState([])
    const [page, setPage] = useState(1)
    const [checkedItems, setCheckedItems] = useState<any>({});
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)
    useEffect(() => {
        getLayers()
    }, [id, page])
    const getLayers = () => {
        ApiAxios.get(`/layers/?page=${page}`).then((resp: any) => {
            let lrs = resp?.data?.results?.filter((t: any) => t.compositid.toString() === id?.toString())
            setLayers(lrs)
            setExtraPage(resp?.data?.links)
            const initialCheckedState = resp.data.results.reduce((acc: any, item: any) => {
                acc[item.id] = item.show === 'true'; // Assuming isLocked is a string
                return acc;
            }, {});
            setCheckedItems(initialCheckedState);
        }, (error) => console.log(error))
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
    return (
        <div className='container'>
             <h1 className='fs-4'>Layers</h1>
            <Table striped hover  className="table-center w-100">
            <thead>
              <tr className='bg-dark text-muted'>
                <th>#</th>
                <th>Layer Name</th>
                <th>Image</th>
                <th>Font Type</th>
                <th>Font Size</th>
                <th>Color</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    layers.map((item: any, i: number) => 
                    <tr>
                        <td>{i+1}</td>
                        <td>{item?.name}</td>
                        <td><img src={item.mainsrc} alt="" width={50} height={50} /></td>
                        <td>{item?.font}</td>
                        <td>{item?.size}</td>
                        <td>{item?.color}</td>
                        <td>
                        <div className='d-flex gap-4 justify-content-center'>
                                {/* <Button variant="secondary" onClick={() => navigate(`/layers/`)}>
                                    <FontAwesomeIcon icon={faLink} size='1x' color='#fff' />
                                </Button> */}
                                {/* <Button variant="secondary" >
                                    <FontAwesomeIcon icon={faPencil} size='1x' color='#fff' />
                                </Button>
                                <Button variant="secondary" >
                                    <FontAwesomeIcon icon={faTrashCan} size='1x' />
                                </Button> */}
                                 <Form.Check
                                    type="switch"
                                    id={`custom-switch-${item.id}`}
                                    className='custom-switch d-inline-block'
                                    label=""
                                    onChange={(e) => handleIsLocked(e, item)}
                                    checked={checkedItems[item.id] || false}
                                />
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
        </div>
    )
}

export default Layers;