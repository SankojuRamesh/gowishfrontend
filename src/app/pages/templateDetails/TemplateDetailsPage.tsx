import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ApiAxios from '../../modules/auth/core/ApiAxios';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const TemplatesDetailsPage = () => {
    const { id } = useParams();
    const [details, setDetails] = useState<any>(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getTemplateDetails()
    }, [id])

    const getTemplateDetails = () => {
      setIsLoading(true)
        ApiAxios.get(`tempalts/${id}/`).then(
            (resp) => {
              setDetails(resp?.data);
              setIsLoading(false)
            },
            (error) => {
              setIsLoading(false)
              console.log("error", error);
            }
          );
    }
    return (
        <div>
            <Container>
      <Row>
        <Col xs={7}>
            {/* <ReactPlayer url={details?.template_video} /> */}
            <Image src={details?.template_video} width={'700px'} height={'500px'} />
        </Col>
        <Col xs={5}>
        <Card>
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title> */}
        <Card.Text>
            <h2>{details?.template_name}</h2>
            <div className="btn-chips d-flex justify-content-between align-items-center mt-1">
                <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">{details?.prifix_id}</span>
            {/* <div> */}
            <div className='d-flex flex-stack fw-bold'>
                    {/*begin::Label*/}
                    <span className='badge border border-dashed fs-2 fw-bold text-dark p-2'>
                      <span className='fs-6 fw-semibold text-gray-600 p-2'>$</span>
                      450.00
                    </span>
                    <span className='text-danger'>
                      <s>$ 500</s>
                    </span>
            </div>
            </div>
            <div className="btn-chips d-flex justify-content-between mt-6">
                <span className="fw-bold fs-8 text-gray-400 d-block lh-1 mx-2">Duration 45 sec</span>
            {/* <div> */}
            <div className='d-flex gap-12 flex-stack fw-bold'>
                    {/*begin::Label*/}
                      <span className='badge badge-light fw-bold'>Hindus</span>
                      <span className='badge badge-light fw-bold'>Standred</span>
                      <span className='badge badge-light fw-bold'>Modern</span>
            </div>
            </div>
            
        </Card.Text>
        <div className='d-flex gap-10 justify-content-center my-12'>
        <Button variant="secondary">
            <FontAwesomeIcon icon={faHeart} /> Add to Favorite
        </Button>
        <Button variant="secondary">
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Favorite
        </Button>
        </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container>
        </div>
    )
}