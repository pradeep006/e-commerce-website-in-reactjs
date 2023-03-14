import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Payments from '../asserts/payments.png';


const Footer = () => {
  return (
    <div>
      <Container fluid className='foot' style={{color:'#FFD333'}}>
          <Row style={{margin:'2rem'}}>
            <Col sm={3} style={{marginRight:'8rem'}}>
              <h5>Get in Touch</h5>
              <p style={{padding:'0.3rem'}}>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
              <p>123 Street, New York, USA</p>
              <p>info@example.com</p>
              <p>+012 345 67890</p>
            </Col>
            <Col sm={3}>
              <h5>Quick Shop</h5>
              <ul className='footer-list'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contactus'>Contact Us</a></li>
                <li><a href='#shop'>Shop</a></li>
              </ul>
            </Col>
            <Col sm={3}>
              <h5>NEWSLETTER</h5>
              <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
              <div style={{width:'100%', marginBottom: '20px'}}>
                <input type="email" class="form-control" placeholder="Your Email Address" style={{ width: '70%', borderRadius:'0' }} />
              </div>
              <div className='mb-3'><FaInstagram  className='m-2'/><FaWhatsapp   className='m-1'/></div>

              <img src={Payments} alt='img'></img>
            </Col>
          </Row><hr></hr>
          <p className='text-center'>© Domain. All Rights Reserved. Designed by HTML Codex</p>
        </Container>

    </div>
  );
}

export default Footer;
