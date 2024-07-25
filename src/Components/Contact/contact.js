import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contact.css';

const Contact = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Contact Us</h1>
        <p>Address: Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Email: "info@springdale.edu"</p>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter the subject" />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
