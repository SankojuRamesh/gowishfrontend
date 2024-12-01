/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-2.jpg')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bold d-flex align-items-center fs-5'>
              {currentUser?.first_name} {currentUser?.last_name}
              <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
            <a href='#' className='fw-semibold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>My Projects</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bold fs-7'>3</span>
          </span>
        </a>
      </div>

      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='left-start'
        data-kt-menu-flip='bottom'
      >
        <a href='#' className='menu-link px-5'>
          <span className='menu-title'>My Subscription</span>
          <span className='menu-arrow'></span>
        </a>

        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Referrals
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Billing
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Payments
            </a>
          </div>

          <div className='menu-item px-3'>
            <a href='#' className='menu-link d-flex flex-stack px-5'>
              Statements
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='View your statements'
              ></i>
            </a>
          </div>

          <div className='separator my-2'></div>

          <div className='menu-item px-3'>
            <div className='menu-content px-3'>
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input w-30px h-20px'
                  type='checkbox'
                  value='1'
                  defaultChecked={true}
                  name='notifications'
                />
                <span className='form-check-label text-muted fs-7'>Notifications</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          My Statements
        </a>
      </div>

      <div className='separator my-2'></div>

      <Languages />

      <div className='menu-item px-5 my-1'>
        <Link to='/crafted/account/settings' className='menu-link px-5'>
          Account Settings
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}



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


