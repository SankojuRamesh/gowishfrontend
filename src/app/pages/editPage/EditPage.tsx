import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import './Editpage.scss'
import { useAuth } from "../../modules/auth";
import { ToasterPage } from "../../modules/shared/Toaster/toaster";
import { fabric } from 'fabric';

export const EditPage = () => {

  const { id } = useParams();
  const {auth} = useAuth()
  const colRef: any = useRef(null);  
  const [loading, setIsLoading] = React.useState(false);
  const [details, setDetails] = React.useState<any>({});
  const [text, setText] = React.useState<string>("Editable Text");
  const [show, setShow] = React.useState(false)
  const [msg, setMsg] = React.useState('')
  const canvasRef = useRef(null); 
  const fabricCanvasRef: any = useRef(null); 

  // Initialize Fabric.js Canvas
  useEffect(() => {
    fabricCanvasRef.current = new fabric.Canvas(canvasRef.current, {
      width: colRef.current.getBoundingClientRect().width - 20,
      height: 600,
      backgroundColor: '#f0f0f0',
    });

    // Load the default image when the canvas is initialized
    const defaultImageUrl = 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'; // Replace with your desired default image URL
    fabric.Image.fromURL(defaultImageUrl, (img: any) => {
      // Calculate scaling to fit the image into the canvas while maintaining the aspect ratio
      const canvasWidth = fabricCanvasRef.current.width;
      const canvasHeight = fabricCanvasRef.current.height;

      const scaleFactor = Math.min(canvasWidth / img.width, canvasHeight / img.height);

      img.set({
        left: 0,
        top: 0,
        scaleX: scaleFactor,
        scaleY: scaleFactor,
        lockScalingFlip: true,  // Prevent the image from flipping when resizing
        lockRotation: false,    // Allow rotation
        cornerControls: true,   // Enable resizing from corners
      });

      // Add image to canvas
      fabricCanvasRef.current.add(img);

      // Make the image selectable and resizable
      img.setControlsVisibility({
        mt: true, // middle top
        mb: true, // middle bottom
        ml: true, // middle left
        mr: true, // middle right
        bl: true, // bottom left corner
        br: true, // bottom right corner
        tl: true, // top left corner
        tr: true, // top right corner
      });
      
      img.set({
        selectable: true,
        evented: true,
      });

      // Render the canvas to display the changes
      fabricCanvasRef.current.renderAll();
    });

    // Clean up fabric canvas on component unmount
    return () => {
      fabricCanvasRef.current.dispose();
    };
  }, [colRef]);

  // Add Circle
  const addCircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      fill: 'red',
      left: 100,
      top: 100,
    });
    fabricCanvasRef.current.add(circle);
  };

  // Add Rectangle
  const addRectangle = () => {
    const rect = new fabric.Rect({
      width: 100,
      height: 60,
      fill: 'blue',
      left: 150,
      top: 150,
    });
    fabricCanvasRef.current.add(rect);
  };

  // Add Text
  const addText = () => {
    const text = new fabric.Textbox('Hello, Fabric.js!', {
      left: 200,
      top: 200,
      fontSize: 24,
      fill: 'black',
    });
    fabricCanvasRef.current.add(text);
  };

  // Add Image
  const addImage = () => {
    const imageUrl = 'https://via.placeholder.com/150'; // Sample image
    fabric.Image.fromURL(imageUrl, (img) => {
      img.set({
        left: 250,
        top: 250,
        scaleX: 0.5,
        scaleY: 0.5,
      });
      fabricCanvasRef.current.add(img);
    });
  };

  const handleSave = () => {
    const obj = {
      "templaate_state": "Edited",
      "order_id": id,
      "user": auth?.id,
      "main_template": 2
    }
    ApiAxios.post('/mytemplates/', obj).then((resp: any) => {
      setShow(true);
      setMsg('Saved successfully');
    }, (error: any) => console.log(error))
  }
  return (
    <div>
      <Row>
      <Col lg={8} md={12} ref={colRef}>
      <div className="icon-container">
          <img src="/media/images/text.png" onClick={addText} />
          <img src="/media/images/image (2).png" />
          <img src="/media/images/rectangle.png" onClick={addRectangle} />
          <img src="/media/images/circle.png" onClick={addCircle} />
      </div>
      <canvas ref={canvasRef} id="fabricCanvas" />
        
      </Col>
      <Col lg={4} md={12}>
            <div className="d-flex justify-content-between mt-10">
            <div>
            <DropdownButton
              variant="secondary"
              title={"Select Composit"}
              id="dropdown-basic"
            >
              <Dropdown.Menu>
                  <Dropdown.Item
                    // key={item.id}
                    // onClick={() => handleSelectCategory(item.id)} // Set category on click
                  >
                    Composite 1
                  </Dropdown.Item>
              </Dropdown.Menu>
            </DropdownButton>
            </div>
            <div className="d-flex gap-4">
              <Button variant="secondary" onClick={() => alert('')}>Render</Button>
              <Button variant="secondary" onClick={handleSave}>Save</Button>
            </div>
            </div>
          </Col>
      </Row>
      <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
    </div>
  );
};
