import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ApiAxios from "../../modules/auth/core/ApiAxios";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMoneyBill,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../modules/auth";
import { ToasterPage } from "../../modules/shared/Toaster/toaster";
import VideoScrub from "../../modules/shared/VideoScrub/VideoScrub";

export const TemplatesDetailsPage = () => {
  const { id } = useParams();
  const { auth, updateCartCount, updateWishlistCount } = useAuth();
  const navigate = useNavigate();
  const [details, setDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  useEffect(() => {
    getTemplateDetails();
  }, [id]);

  const getTemplateDetails = () => {
    setIsLoading(true);
    ApiAxios.get(`tempalts/${id}/`).then(
      (resp) => {
        setDetails(resp?.data);
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log("error", error);
      }
    );
  };

  const handleCart = () => {
    setIsLoading(true);
    let payload = {
      user: auth?.id,
      template: details.id,
    };
    ApiAxios.post("cart/", payload).then(
      (resp: any) => {
        setMsg("Added successfully");
        setShow(true);
        updateCartCount();
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
      }
    );
  };

  const handleFav = () => {
    setIsLoading(true);
    let payload = {
      user: auth?.id,
      template: details.id,
    };
    ApiAxios.post("mywishlist/", payload).then(
      (resp: any) => {
        setMsg("Wishlisted successfully");
        setShow(true);
        updateWishlistCount();
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        console.log(error);
      }
    );
  };
  return (
    <div>
      <h2 className="px-10">{details?.subcategory_name}</h2>
      <Container className="mt-18">
        <Row>
          <Col xs={8} className="react-player-template">
            <ReactPlayer url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'} controls />
            {/* <ReactPlayer url={details?.template_video} /> */}
            {/* <Image
              src={details?.template_video}
              width={"900px"}
              height={"400px"}
            /> */}
            {/* <VideoScrub src={details?.template_video} width={"100%"} height={"400px"} /> */}
          </Col>
          <Col xs={4}>
            <Card>
              {/* <Card.Header>Featured</Card.Header> */}
              <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                  <h2>{details?.template_name}</h2>
                  <div className="btn-chips d-flex justify-content-between align-items-center mt-1">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      {details?.prifix_id}
                    </span>
                    {/* <div> */}
                    <div className="d-flex flex-stack fw-bold">
                      {/*begin::Label*/}
                      <span className="badge border border-dashed fs-2 fw-bold text-dark p-2">
                        <span className="fs-6 fw-semibold text-gray-600 p-2">
                          $
                        </span>
                        450.00
                      </span>
                      <span className="text-danger">
                        <s>$ 500</s>
                      </span>
                    </div>
                  </div>
                  <div className="btn-chips d-flex justify-content-between mt-6">
                    <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">
                      Duration 45 sec
                    </span>
                    {/* <div> */}
                    <div className="d-flex gap-12 flex-stack fw-bold">
                      {/*begin::Label*/}
                      <span className="badge badge-light fw-bold">Hindus</span>
                      <span className="badge badge-light fw-bold">
                        Standred
                      </span>
                      <span className="badge badge-light fw-bold">Modern</span>
                    </div>
                  </div>
                </Card.Text>
                <div className="d-flex gap-10 justify-content-center my-12">
                  <Button variant="secondary" onClick={() => handleFav()}>
                    <FontAwesomeIcon icon={faHeart} /> Add
                  </Button>
                  <Button variant="secondary" onClick={() => handleCart()}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Add
                  </Button> 
                  <Button variant="secondary" onClick={() => navigate(`/cart-order/${details?.id}`)}>
                    <FontAwesomeIcon icon={faMoneyBill} /> Buy
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <ToasterPage show={show} setShow={setShow} toastMsg={msg} />
    </div>
  );
};
