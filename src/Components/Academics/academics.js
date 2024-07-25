import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './academics.css';

const Academics = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Academics</h1>
        <h3>Primary (Grades 1-5):</h3>
        <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
        <h3>Secondary (Grades 6-10):</h3>
        <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
        <h3>Senior Secondary (Grades 11-12):</h3>
        <p>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</p>
        <p>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</p>
        <p>Teaching Methodologies: "We use a blend of traditional and modern teaching techniques to cater to different learning styles."</p>
        <p>Educational Resources: "Digital classrooms, interactive learning modules, and access to online educational platforms."</p>
      </Col>
    </Row>
  </Container>
);

export default Academics;
