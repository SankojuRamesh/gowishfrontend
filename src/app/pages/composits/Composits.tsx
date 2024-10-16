import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Button, Form, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faLink, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ToasterPage } from '../../modules/shared/Toaster/toaster';

const Composits = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [extraPage, setExtraPage] = useState<any>({})
    const [composits, setComposits] = useState([])
    const [page, setPage] = useState(1)
    const [msg, setMsg] = useState('')
    const [show, setShow] = useState(false)
    const [checkedItems, setCheckedItems] = useState<any>({});
    useEffect(() => {
        getComposits()
    }, [id, page])
    const getComposits = () => {
        ApiAxios.get(`/composits/?page=${page}`).then((resp: any) => {
            console.log('ressss', resp)
            setComposits(resp?.data?.results)
            setExtraPage(resp?.data?.links)
            const initialCheckedState = resp.data.results.reduce((acc: any, item: any) => {
                acc[item.id] = item.isLocked === 'true'; // Assuming isLocked is a string
                return acc;
            }, {});
            setCheckedItems(initialCheckedState);
        }, (error) => console.log(error))
    }
    const handleIsLocked = (e: any, row: any) => {
        console.log('eeeee', e.target.checked, row)
        const checked = e.target.checked;
        setCheckedItems((prev: any) => ({
            ...prev,
            [row.id]: checked // Update only the specific item's checked state
        }));
        const obj: any = {
            "composit_name": row.composit_name,
            "duration": row.duration,
            "startTime": row.startTime,
            "frameRate": row.frameRate,
            "width": row.width,
            "height": row.height,
            "workAreaStartTime": row.workAreaStartTime,
            "workAreaEndTime": row.workAreaEndTime,
            "opacity": row.opacity,
            "isLocked": e.target.checked.toString(),
            "project_id": row.project_id
          }
          ApiAxios.put(`composits/${row.id}/`, obj).then((resp) => {
            setShow(true)
            setMsg('Composit updated successfully')
            getComposits()
          }, (error) => console.log(error))
    }
    return (
        <div className='container'>
             <h1 className='fs-4'>Composits</h1>
            <Table striped hover  className="table-center w-100">
            <thead>
              <tr className='bg-dark text-muted'>
                <th>#</th>
                <th>Composit</th>
                <th>Duration</th>
                <th>Start Time</th>
                <th>Work Area Start time</th>
                <th>Work Area End time</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {
                    composits.map((item: any, i: number) => 
                    <tr>
                        <td>{i+1}</td>
                        <td>{item?.composit_name}</td>
                        <td>{item?.duration}</td>
                        <td>{item?.startTime}</td>
                        <td>{item?.workAreaStartTime}</td>
                        <td>{item?.workAreaEndTime}</td>
                        <td>
                        <div className='d-flex gap-4 justify-content-center align-items-center'>
                                <Button variant="secondary" onClick={() => navigate(`/layers/`)}>
                                    <FontAwesomeIcon icon={faLink} size='1x' color='#fff' />
                                </Button>
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
                                        checked={checkedItems[item.id] || false} // Access the specific item's checked state
                                    />
                                </div>
                        </td>
                    </tr>)
                }
            </tbody>
            </Table>
            
        {composits?.length > 10 && 
            <div className="d-flex gap-5 justify-content-end my-10">
                <Button disabled={!extraPage?.previous} onClick={() => setPage(page - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} size="1x" />
                </Button>
                <Button disabled={!extraPage?.next} onClick={() => setPage(page + 1)}>
                    <FontAwesomeIcon icon={faChevronRight} size="1x" />
                </Button>
            </div>
        }
        <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
        </div>
    )
}

export default Composits;