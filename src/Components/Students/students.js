import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './students.css';

const studentLifeItems = [

  {
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/1_8-one_one.jpg?VersionId=47hYi93QBjNgJ1TV9JpDkPFR2fI7YTar',
    description: 'John Smith - National Level Math Olympiad Winner.',
  },
  {
    image: 'https://greenwoodhigh.edu.in/wp-content/uploads/2021/07/naisa.jpg',
    description: 'Sarah Lee - Gold Medalist in State Swimming Championship.',
  },
  {
    image: 'https://citynewsforu.wordpress.com/wp-content/uploads/2015/01/img_1765.jpg',
    description: 'Tech Innovators Club - Winners of Inter-School Robotics Competition',
  },
  // Add more items as needed
];

const Students = () => (
  <Container className="student-life-container">
    <Row className="my-4">
      <Col>
        <h1 className="student-life-header">Student Life</h1>
        <p>Information about student life, extracurricular activities, and achievements...</p>
        <h3>Life at Springdale:</h3>
      </Col>
    </Row>
    {/* ************** */}
    <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.ptotoday.com/images/articles/body/0319-school-events-you-love-most-winter-body.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://evergreengroup.in/wp-content/uploads/2017/07/Arya-Gurukul-School-Annual-Day-14-1024x516.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />
     <h3>Extracurricular Activities:</h3>
      <p>Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club</p>






    <Row>
      <Col>
        <div className="student-life-content">
          {studentLifeItems.map((item, index) => (
            <div key={index} className="student-life-item">
              <img src={item.image} alt="Student activity" className="student-life-image" />
              <div className="student-life-description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
);

export default Students;
