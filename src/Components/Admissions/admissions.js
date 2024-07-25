import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './admissions.css';

const Admissions = () => (
  <Container>
    <Row >
      {/* className="my-4" */}
      <Col>
        <h1>Admissions</h1>
        <p>Information about the admission process and criteria...</p>
        <h3>Process: </h3>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <Button variant="primary" href="/path/to/admission_form.pdf" download>Download Admission Form</Button>
       
        <h3>Criteria:</h3>
         <p> Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
          <h2>Important Dates</h2>
        <p>Details about important dates and deadlines...</p>
        <p>Admission Form Availability: March 1st</p>
        <p>Last Date for Submission: March 31st</p>
        <p>Entrance Test: April 15th</p>
        <p>Announcement of Results: April 30th</p>
      </Col>
    </Row>
  </Container>
);

export default Admissions;
