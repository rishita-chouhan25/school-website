import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './gallery.css';

const Gallery = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Gallery</h1>
        <p>Photos and videos of school events and activities...</p>
        <Row>
          <Col md={4}>
            <Image src="https://springdalepublicschool.com/uploads/deaadb4f42404929b66650346e0d4494.JPG" thumbnail />
          </Col>
          {/* Repeat for other gallery items */}
          <Col md={4}>
            <Image src="https://lh3.googleusercontent.com/proxy/_RAMNGMZXGHzwX8mxFC2F2CoKcC9dk6GlOmvOymccx3PnukDMYGQEUoVSMzLXurOBOXGxkJZQq8ANvKWS7wByEWRjvb1k-EbYszuNAjhuSJ344-4hwoKd3GjsTNdBsDPRkXa" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://springdaleschool.co/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-25-at-7.24.11-PM.jpeg" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://springdalesjagadhri.com/Photogallery/1683960303.jpg" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://springdales.org.in/uploads/gallery/media/1-1646418600.jpg" thumbnail />
          </Col>
          <Col md={4}>
            <Image src="https://springdaleschool.co/wp-content/uploads/2021/08/WhatsApp-Image-2021-01-26-at-9.37.02-AM-1024x768.jpeg" thumbnail />
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Gallery;
