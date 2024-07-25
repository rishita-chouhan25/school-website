import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

const About = () => (
  <Container>
    <Row >
      <Col>
        <h1>About Our School</h1>
        <h3>History</h3>
        <p>"Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."</p>
        <h3>vision</h3>
        <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values</p>
        <h3>mission</h3>
        <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        
        <h2>Message from the Principal</h2>
        <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future</p>
        <h2>Infrastructure and Facilities</h2>
        <p>* State-of-the-art science and computer labs</p>
        <p>* Spacious and well-equipped classrooms</p>
        <p>* Library with a vast collection of books and digital resources</p>
        <p>* Sports facilities including a playground, gymnasium, and swimming pool</p>
      </Col>
    </Row>
  </Container>
);

export default About;
