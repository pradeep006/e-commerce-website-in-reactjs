import React from 'react';
import Caro1 from '../asserts/carousel-1.jpg';
import Caro2 from '../asserts/carousel-2.jpg';
import Caro3 from '../asserts/carousel-3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Caro1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: '#003', fontWeight: '700' }}>Offer upto 60%</h3>
            <p style={{ color: '#003', fontWeight:'600' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight:'700'}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Caro2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: '#003', fontWeight: '700' }}>Offer upto 60%</h3>
            <p style={{ color: '#003', fontWeight:'600' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight:'700'}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Caro3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 style={{ color: '#003', fontWeight: '700' }}>Offer upto 60%</h3>
            <p style={{ color: '#003', fontWeight:'600' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight:'700'}}>Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
