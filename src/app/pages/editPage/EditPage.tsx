// import React, { useEffect, useRef } from "react";
// import {
//   Button,
//   Card,
//   Col,
//   Container,
//   Dropdown,
//   DropdownButton,
//   Row,
// } from "react-bootstrap";
// import { useParams } from "react-router-dom";
// import ApiAxios from "../../modules/auth/core/ApiAxios";
// import "./Editpage.scss";
// import { useAuth } from "../../modules/auth";
// import { ToasterPage } from "../../modules/shared/Toaster/toaster";
// import Accordion from 'react-bootstrap/Accordion';
// import { fabric } from "fabric";
// import ListGroup from 'react-bootstrap/ListGroup';


// export const EditPage = () => {
//   const { id } = useParams();
//   const { auth } = useAuth();
//   const colRef: any = useRef(null);
//   const [loading, setIsLoading] = React.useState(false);
//   const [composits, setComposits] = React.useState<any>([]);
//   const [layers, setLayers] = React.useState<any>([]);
//   const [show, setShow] = React.useState(false);
//   const [msg, setMsg] = React.useState("");
//   const [selectedLayer, setSelectedLayer] = React.useState<any>({})
//   const canvasRef = useRef(null);
//   const fabricCanvasRef: any = useRef(null);
//   const [selectedColor, setSelectedColor] = React.useState('#fff')

//   // Initialize Fabric.js Canvas
//   useEffect(() => {
//     getComposits()
//     fabricCanvasRef.current = new fabric.Canvas(canvasRef.current);
    
//     // Optionally set some properties for the canvas
//     fabricCanvasRef.current.setWidth(800);
//     fabricCanvasRef.current.setHeight(600);
    
//     // Clear the canvas on component unmount
//     return () => {
//       fabricCanvasRef.current.dispose();
//     };
//   }, [colRef]);

//   const getComposits = () => {
//     ApiAxios.get('/composits/').then((resp: any) => {
//       setComposits(resp.data.results)
//     }, (error) => {
//       console.log(error)
//     })
//   }

//   // Add Circle
//   const addCircle = () => {
//     const circle = new fabric.Circle({
//       radius: 50,
//       fill: "red",
//       left: 100,
//       top: 100,
//     });
//     fabricCanvasRef.current.add(circle);
//   };

//   // Add Rectangle
//   const addRectangle = () => {
//     const rect = new fabric.Rect({
//       width: 100,
//       height: 60,
//       fill: "blue",
//       left: 150,
//       top: 150,
//     });
//     fabricCanvasRef.current.add(rect);
//   };

//   // Add Text
//   const addText = (layer?: any, color?: any) => {
//     const text = new fabric.Textbox(layer.text, {
//       left: 10,
//       top: 10,
//       fontSize: 24,
//       fill: color,
//     });
//     fabricCanvasRef.current.add(text);
//   };

//   // Add Image
//   const addImage = (layer?: any) => {
//     const imageUrl = layer?.mainsrc;
//     if (imageUrl) {
//       fabric.Image.fromURL(imageUrl, (img) => {
//         // Set image properties (position, scale, etc.)
//         img.set({
//           left: 50,
//           top: 50,
//           scaleX: 1.2,
//           scaleY: 1.5,
//           width: 800,
//           height: 650,
//           selectable: false,
//         });

//         // Add the image to the fabric canvas
//         fabricCanvasRef.current.add(img);
//         fabricCanvasRef.current.renderAll(); // Re-render the canvas
//       });
//     } else {
//       alert('No image selected');
//     }
//   };

//   const handleSave = () => {
//     const obj = {
//       templaate_state: "Edited",
//       order_id: id,
//       user: auth?.id,
//       main_template: 2,
//     };
//     ApiAxios.post("/mytemplates/", obj).then(
//       (resp: any) => {
//         setShow(true);
//         setMsg("Saved successfully");
//       },
//       (error: any) => console.log(error)
//     );
//   };

//   // Handle image upload
//   const handleImageUpload = (event: any) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         setSelectedLayer({ mainsrc: e.target.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleItem = (layer: any) => {
//     setSelectedLayer(layer)
//     if(layer.type === 'text') {
//       addText(layer, '#000')
//     } else if(layer.type === 'image') {
//       addImage(layer)
//     }
//   }

//   const handleChangeColor = (e: any) => {
//     const newColor = e.target.value;
//     setSelectedColor(newColor); // Update the state with the new color

//     // Optionally update all text objects if you want to change the color of all text at once
//     const activeObject = fabricCanvasRef.current.getActiveObject();
//     if (activeObject && activeObject.type === "textbox") {
//       activeObject.set({ fill: newColor });
//       fabricCanvasRef.current.renderAll(); // Re-render to apply the new color
//     }
//   }

//   const handleComposit = (composit: any) => {
//     ApiAxios.get(`/layers/?compositid=${composit.id}`).then((resp: any) => {
//       setLayers(resp.data.results)
//       resp.data.results.map((t: any) => {
//         if(t.type === 'image') {
//           addImage(t)
//         } else if(t.type === 'text') {
//           addText(t, '#fff')
//         }
//       })
      
//     }, (error) => {console.log(error)})
//   }
//   console.log('layersss', layers)
//   return (
//     <div>
//       <Row>
//         <Col lg={8} md={12} ref={colRef}>
//           <div className="icon-container">
//             <img src="/media/images/text.png" onClick={addText} />
//             <img src="/media/images/image (2).png" />
//             <img src="/media/images/rectangle.png" onClick={addRectangle} />
//             <img src="/media/images/circle.png" onClick={addCircle} />
//             <input type="color" onChange={handleChangeColor} />
//           </div>
//           <canvas ref={canvasRef} id="fabricCanvas" />
//         </Col>
//         <Col lg={4} md={12}>
//           <Card>
//             <Card.Body>
//               <Card.Text>
//                 <div className="d-flex justify-content-between mt-10">
//                   <div>
//                     <DropdownButton
//                       variant="secondary"
//                       title={"Select Composit"}
//                       id="dropdown-basic"
//                     >
//                       <Dropdown.Menu>
//                         <Dropdown.Item
//                         // key={item.id}
//                         // onClick={() => handleSelectCategory(item.id)} // Set category on click
//                         >
//                           Composite 1
//                         </Dropdown.Item>
//                       </Dropdown.Menu>
//                     </DropdownButton>
//                   </div>
//                   <div className="d-flex gap-4">
//                     <Button variant="secondary" onClick={() => alert("")}>
//                       Render
//                     </Button>
//                     <Button variant="secondary" onClick={handleSave}>
//                       Save
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="my-12">
//                   <Accordion defaultActiveKey="0">
//                     {composits.map((item: any, ind: any) => 
//                       <Accordion.Item eventKey={ind}>
//                       <Accordion.Header onClick={() => handleComposit(item)}>{item.composit_name}</Accordion.Header>
//                       <Accordion.Body>
//                       <ListGroup>
//                         {layers.map((item: any, ind: any) => 
//                           <ListGroup.Item className="text-white cursor-pointer my-1 bg-body-secondary"  onClick={() => handleItem(item)}>
//                             <img src={`/media/images/${item.type === 'text' ? 'text' : item.type === 'image' ? 'image (2)' : ''}.png`} width={15} /> {item.name}
//                           </ListGroup.Item>
//                         )}
//                         </ListGroup>
//                       </Accordion.Body>
//                     </Accordion.Item>
//                     )}
//                   </Accordion>
//                   </div>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
//     </div>
//   );
// };



import React, { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, Collapse, IconButton
} from '@mui/material';
import { ExpandMore, ExpandLess, Save, Edit } from '@mui/icons-material';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import { Badge } from 'react-bootstrap';

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

  // State for expanded row and editing row
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [editingNestedRow, setEditingNestedRow] = useState<number | null>(null);
  const [composits, setComposits] = useState<any>(null)
  const [layers, setLayers] = useState<any>(null)
  const [newValue, setNewValue] = useState<any>('')

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

console.log('composiiii', layers)

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

  return (
    <div className='edit-table-page'>
      <h3>Composits</h3>
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
                                  <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    startIcon={<Edit />}
                                    onClick={() => setEditingNestedRow(layer.id)}
                                  >
                                    Edit
                                  </Button>
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
    </div>
  );
};

