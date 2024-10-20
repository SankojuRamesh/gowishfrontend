import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import { Stage, Layer, Circle, Rect, Text, Image as KonvaImage } from 'react-konva';
import './Editpage.scss'
import { useAuth } from "../../modules/auth";
import { error } from "console";
import { ToasterPage } from "../../modules/shared/Toaster/toaster";

interface CircleShape {
  id: number;
  x: number;
  y: number;
  radius: number;
  stroke: string;
  strokeWidth: number;
}

interface RectShape {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  // fill: string;
  stroke: string;
  strokeWidth: number;
}

interface TextShape {
  id: number;
  x: number;
  y: number;
  text: string;
  fontSize: number;
}

type Shape = CircleShape | RectShape | TextShape;

export const EditPage = () => {
  const { id } = useParams();
  const {auth} = useAuth()
  const [loading, setIsLoading] = useState(false);
  const [details, setDetails] = useState<any>({});
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [text, setText] = useState<string>("Editable Text");
  const [show, setShow] = useState(false)
  const [msg, setMsg] = useState('')
  const [imageUrl, setImageUrl] = useState<string | null>('');
  const imageRef: any = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    getTemplateDetails()
  }, [id]);
  const getTemplateDetails = () => {
    setIsLoading(true);
    ApiAxios.get(`tempalts/${id}/`).then(
      (resp) => {
        setDetails(resp?.data);
        setImageUrl(resp?.data.template_video)
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log("error", error);
      }
    );
  };
  useEffect(() => {
    // Load the default image into the ref
    const img = new window.Image();
    img.src = details?.template_video;
    img.onload = () => {
      imageRef.current = img;
    };
  }, [details]);

  const handleAddCircle = () => {
    const newCircle: CircleShape = {
      id: Date.now(),
      x: 100,
      y: 100,
      radius: 30,
      stroke: 'white',
      strokeWidth: 2
    };
    setShapes(prevShapes => [...prevShapes, newCircle]);
  };

  const handleAddRectangle = () => {
    const newRect: RectShape = {
      id: Date.now(),
      x: 150,
      y: 150,
      width: 100,
      height: 100,
      stroke: 'white',
      strokeWidth: 2
    };
    setShapes(prevShapes => [...prevShapes, newRect]);
  };

  const handleAddText = () => {
    const newText: TextShape = {
      id: Date.now(),
      x: 200,
      y: 50,
      text: text,
      fontSize: 30,
    };
    setShapes(prevShapes => [...prevShapes, newText]);
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSave = () => {
    const obj = {
      "templaate_state": "Edited",
      "order_id": id,
      "user": auth?.id,
      "main_template": 2
    }
    ApiAxios.post('/mytemplates/', obj).then((resp) => {
      setShow(true);
      setMsg('Saved successfully');
    }, (error) => console.log(error))
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs={8}>
      <div className="icon-container">
                <img src="/media/images/text.png" onClick={handleAddText} />
                <img src="/media/images/image (2).png" />
                <img src="/media/images/rectangle.png" onClick={handleAddRectangle} />
                <img src="/media/images/circle.png" onClick={handleAddCircle} />
            </div>
            {imageRef.current ? 
      <Stage width={900} height={500}>
        <Layer>
          {imageUrl && (
            <KonvaImage
              image={imageRef.current}
              x={0}
              y={0}
              width={900}
              height={500}
              // draggable // Optionally make the image draggable
            />
          )}
          {shapes.map(shape => {
            if ('radius' in shape) {
              return (
                <Circle
                  key={shape.id} // Key for React
                  x={shape.x}
                  y={shape.y}
                  radius={shape.radius}
                  stroke={shape.stroke}
                  strokeWidth={shape.strokeWidth}
                  fill="transparent" // No fill
                  draggable // Make the circle draggable
                  onDragEnd={(e) => {
                    const { x, y } = e.target.position();
                    setShapes(prevShapes =>
                      prevShapes.map(s =>
                        s.id === shape.id ? { ...s, x, y } : s
                      )
                    );
                  }}
                />
              );
            }
            if ('width' in shape) {
              return (
                <Rect
                  key={shape.id} // Key for React
                  x={shape.x}
                  y={shape.y}
                  width={shape.width}
                  height={shape.height}
                  stroke={shape.stroke}
                  strokeWidth={shape.strokeWidth}
                  fill="transparent" // No fill
                  draggable // Make the rectangle draggable
                  onDragEnd={(e) => {
                    const { x, y } = e.target.position();
                    setShapes(prevShapes =>
                      prevShapes.map(s =>
                        s.id === shape.id ? { ...s, x, y } : s
                      )
                    );
                  }}
                />
              );
            }
            if ('text' in shape) {
              return (
                <Text
                  key={shape.id} // Key for React
                  text={shape.text}
                  fontSize={shape.fontSize}
                  x={shape.x}
                  y={shape.y}
                  draggable
                  onDragEnd={(e) => {
                    const { x, y } = e.target.position();
                    setShapes(prevShapes =>
                      prevShapes.map(s =>
                        s.id === shape.id ? { ...s, x, y } : s
                      )
                    );
                  }}
                  onDblClick={() => {
                    const newText = prompt("Edit text:", shape.text);
                    if (newText) {
                      setShapes(prevShapes =>
                        prevShapes.map(s =>
                          s.id === shape.id ? { ...s, text: newText } : s
                        )
                      );
                    }
                  }}
                />
              );
            }
            return null;
          })}
        </Layer>
      </Stage> : 
      <img
      src={details?.template_video}
      width={"900px"}
      height={"500px"}
    /> }
            {/* <div className="icon-container">
                <img src="/media/images/text.png" />
                <img src="/media/images/image (2).png" />
                <img src="/media/images/rectangle.png" />
                <img src="/media/images/circle.png" />
            </div>
            <img
              src={details?.template_video}
              width={"900px"}
              height={"500px"}
            /> */}
          </Col>
          <Col xs={4}>
            <div className="d-flex justify-content-between">
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
      </Container>
      <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
    </div>
  );
};
