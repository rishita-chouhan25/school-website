import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './home.css';

const Home = () => (
  <Container>
    <Row >
      <Col >
        <h1>Welcome to Our School</h1>
        <p>
        Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://springdalesjagadhri.com/Photogallery/1683960011.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Annual Sports Day</h3>
              <p>Celebrating Excellence in Sportsl</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://stanthonysft.edu.pk/wp-content/uploads/2024/03/20231122_132414-scaled.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Science Exhibition</h3>
              <p>Showcasing Student Innovations</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.thestatesman.com/wp-content/uploads/2024/05/Untitled-design-2024-05-10T175216.132.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Cultural Fest</h3>
              <p>Embracing Diversity and Creativity</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default Home;
