import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Collapse, IconButton
} from '@mui/material';
import { ExpandMore, ExpandLess, Save, Edit, Delete } from '@mui/icons-material';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Badge } from 'react-bootstrap';
import { useAuth } from '../../modules/auth';
import { ToasterPage } from '../../modules/shared/Toaster/toaster';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

interface RowData {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface EditableRowData {
  id: number;
  text: string;
  quantity: number;
}

export const EditPage = () => {
  // Data for the outer static table (main table)
  const [rows, setRows] = useState<RowData[]>([
    { id: 1, name: 'John Doe', age: 25, email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane.smith@example.com' },
  ]);
  // Data for the editable inner table (collapsible content)
  const [nestedRows, setNestedRows] = useState<{ [key: number]: EditableRowData[] }>({
    // 1: [{ id: 1, product: 'Laptop', quantity: 2 }, { id: 2, product: 'Phone', quantity: 1 }],
    // 2: [{ id: 1, product: 'Tablet', quantity: 3 }, { id: 2, product: 'Monitor', quantity: 1 }],
  });

  const socket = io('http://3.88.186.149:5000/'); // Point to your server's URL
  // State for expanded row and editing row
  const { auth } = useAuth();
  const { id } = useParams();
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [editingNestedRow, setEditingNestedRow] = useState<number | null>(null);
  const [composits, setComposits] = useState<any>(null)
  const [layers, setLayers] = useState<any>(null)
  const [newValue, setNewValue] = useState<any>('')
  const [show, setShow] = useState(false)

    useEffect(() => {
      getComposits()
    }, [])

  const getComposits = () => {
    ApiAxios.get('/composits/').then((resp: any) => {
      setComposits(resp.data.results)
    }, (error) => {
      console.log(error)
    })
  }


const getLayers = (row: any) => {
  ApiAxios.get(`/layers/?compositid=${row.id}`).then((resp: any) => {
    setLayers(resp.data.results)
    resp.data.results.map((t: any) => {
    })
    
  }, (error) => {console.log(error)})
}

  // Toggle expand/collapse for the outer table row
  const handleToggleExpand = (row: any) => {
    ApiAxios.get(`/layers/?compositid=${row.id}`).then((resp: any) => {
      setLayers(resp.data.results)
      setExpandedRow(expandedRow === row?.id ? null : row?.id); // Toggle expand/collapse
      resp.data.results.map((t: any) => {
        // if(t.type === 'image') {
        //   addImage(t)
        // } else if(t.type === 'text') {
        //   addText(t, '#fff')
        // }
      })
      
    }, (error) => {console.log(error)})
  };

  // Handle "Save" button click for the nested rows inside collapsible table
  const handleSaveNestedRow = (parentId: number, row: any) => {
    let obj = {
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
      "show": row.show,
      "type": row.type,
      "text": newValue,
      "size": row.size,
      "color": row.color,
      "font": row.font,
      "inPoin": row.inPoin,
      "outPoint": row.outPoint,
      "projectid": row.projectid,
      "compositid": row.compositid
    }
    ApiAxios.put(`layers/${row.id}/`, obj).then((resp: any) => {
      let row = {id: parentId}
      getLayers(row)
    }, (error) => console.log(error))
    setEditingNestedRow(null); // Exit nested edit mode
  };

  const handleDeleteLayer = (parentid: any, layerId: any) => {
    ApiAxios.delete(`layers/${layerId}/`).then((resp: any) => {
      setShow(true)
      getLayers({id: parentid})
    }, (error: any) => {
      console.log(error)
    })
  }

  // Handle input changes for the nested row editable fields
  const handleInputChangeNestedRow = (parentId: number, nestedRowId: number, field: keyof EditableRowData, value: string | number) => {
    setNewValue(value)
    // setNestedRows((prevNestedRows) => ({
    //   ...prevNestedRows,
    //   [parentId]: prevNestedRows[parentId].map((nestedRow) =>
    //     nestedRow.id === nestedRowId ? { ...nestedRow, [field]: value } : nestedRow
    //   ),
    // }));
  };

  const handleRender = (type: any, cid: any) => {
    let message = "";
    if(type === 'template') {
      message = `templete_${id}@user_${auth?.id}`
    } else {
      message = `templete_${id}@composit_${cid}@user_${auth?.id}`
    }
    socket.emit('message', message);
  }

  return (
    <div className='edit-table-page'>
      <h3 className='m-5'>Composits
        <span style={{float: 'right', display: 'flex', gap: 10}}>
        <Button variant="contained"
          color="primary"
          size="small">
            Save
        </Button>
        <Button variant="contained"
          color="primary"
          onClick={() => handleRender('template', '')}
          size="small">
            Render
        </Button>
        </span>
      </h3>
      <TableContainer style={{padding: 40}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Compost Name</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Width</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Is Locked</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {composits?.map((row: any) => (
            <React.Fragment key={row.id}>
              {/* Static Row */}
              <TableRow>
                <TableCell>{row.composit_name}</TableCell>
                <TableCell>{Math.round(row.duration)}</TableCell>
                <TableCell>{row.width}</TableCell>
                <TableCell>{row.height}</TableCell>
                <TableCell>
                <Badge bg={row.isLocked === 'false' ? 'danger' : "success"}>{row.isLocked === 'false' ? 'No' : 'Yes'}</Badge>
                  {/* {row.isLocked} */}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleToggleExpand(row)}>
                    {expandedRow === row.id ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                  <Button variant="contained"
                                    color="primary"
                                    onClick={() => handleRender('composit', row.id)}
                                    size="small">Render</Button>
                </TableCell>
              </TableRow>

              {/* Collapsible Section (Editable Table) */}
              <TableRow>
                <TableCell colSpan={6} style={{ padding: 0 }}>
                  <Collapse in={expandedRow === row.id}>
                    <div style={{ padding: 30, marginTop: '10px' }}> {/* Added margin to create space */}
                      <h3>Layers</h3>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>Layer Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell style={{width: '250px'}}>Text/Image</TableCell>
                            <TableCell>Style</TableCell>
                            <TableCell>Size</TableCell>
                            <TableCell>Actions</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {layers?.map((layer: any) => (
                            <TableRow key={layer.id}>
                              <TableCell>{layer.name}</TableCell>
                              <TableCell>{layer.type}</TableCell>
                              <TableCell>
                                {layer.type === 'text' ? <>
                                  {editingNestedRow === layer.id && layer.type === 'text' ? (
                                  <TextField
                                    value={newValue || layer.text || ''}
                                    onChange={(e) => handleInputChangeNestedRow(row.id, layer.id, 'text', e.target.value)}
                                    size="small"
                                    fullWidth
                                    variant="outlined"
                                  />
                                ) : (
                                  layer.text
                                )}
                                </> : <img src={layer.mainsrc} alt="" width={'30%'} />}
                              </TableCell>

                              <TableCell>
                                <span style={{fontFamily: layer.font, fontSize: '16px'}}>
                                  {layer.font || '-'}
                                </span>
                              </TableCell>
                              <TableCell>{layer.size || layer.width + ' / ' + layer.height}</TableCell>
                              <TableCell>
                                {editingNestedRow === layer.id ? (
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<Save />}
                                    onClick={() => handleSaveNestedRow(row.id, layer)}
                                  >
                                    Save
                                  </Button>
                                ) : (
                                  <>
                                    {auth?.roles === 1  ? 
                                    <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<Delete />}
                                    onClick={() => handleDeleteLayer(row.id, layer.id)}
                                  >
                                    Delete
                                  </Button>
                                  : 
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<Edit />}
                                    onClick={() => setEditingNestedRow(layer.id)}
                                  >
                                    Edit
                                  </Button>
                                  }
                                  </>
                                  
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ToasterPage show={show} setShow={setShow} toastMsg={'Layer deleted successfully'} />
    </div>
  );
};

