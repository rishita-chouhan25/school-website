import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './faculty.css';

const Faculty = () => (
  <Container>
    <Row className="my-4">
      <Col>
        <h1>Our Faculty</h1>
        <p>Profiles of our teaching and administrative staff...</p>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/happy-middle-aged-handsome-businessman-260nw-1301145475.jpg" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Principal, M.Ed, 20 years of experience in educational administration.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* Repeat for other faculty members */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-male-entrepreneur-making-eye-contact-against-blue-background_662251-739.jpg" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text> Vice Principal, M.Sc. in Physics, 15 years of teaching experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://st3.depositphotos.com/2208684/15199/i/450/depositphotos_151990758-stock-photo-businesswoman-looking-at-camera.jpg" />
              <Card.Body>
                <Card.Title>Emily Johnson</Card.Title>
                <Card.Text>English Teacher, M.A. in English, 10 years of teaching experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" />
              <Card.Body>
                <Card.Title>Michael Brown</Card.Title>
                <Card.Text>Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg" />
              <Card.Body>
                <Card.Title>Sophia Davis</Card.Title>
                <Card.Text>Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/02/69/98/98/360_F_269989865_mMfRFRN4mtDOtnHA0RFXcURX4n761zwd.jpg" />
              <Card.Body>
                <Card.Title>David Wilson</Card.Title>
                <Card.Text>Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Col>
    </Row>
  </Container>
);

export default Faculty;
