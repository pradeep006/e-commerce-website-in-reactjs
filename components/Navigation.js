import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from 'react-icons/fa';

function Navigation() {
  return (
    <div>
      <div style={{ backgroundColor: '#F5F5F5' , fontWeight: 700 }} className="mb-1">
        <Navbar collapseOnSelect expand="lg" fixed="top" bg='dark' variant="dark" className='logo'>
          <Container fluid>
            <Row>
              <Col className='Logo'>
                <Navbar.Brand href="#home"><span className='Logo-Multi'>Shop</span><span className='Logo-Shop'>Hut</span></Navbar.Brand>
              </Col>
            </Row>
            <Row>
              <Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='ms-auto'>
                  <Nav className="me-auto">
                    <Nav.Link className='text-white' style={{ marginLeft: '1.5rem' }} href="#home">Home</Nav.Link>
                    <Nav.Link className='text-white' style={{ marginLeft: '1.5rem' }} href="#about">About</Nav.Link>
                    <Nav.Link className='text-white' style={{ marginLeft: '1.5rem' }} href="#contactus">Contact Us</Nav.Link>
                    <Button style={{ padding: '0', marginLeft: '1.5rem', backgroundColor: '#FFD333', border: 'none', fontWeight: 700 }}><Nav.Link href="#products" style={{ color: '#3D464D' }}>Shop</Nav.Link></Button>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
            <Row className='cart-icon'>
              <Col>
                <p className='text-white ms-5 cart' style={{lineHeight: 1}}><FaHeart  className='cart-heart'/><FaShoppingCart className='cart-add' /><FaUser className='cart-profile'/></p>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navigation;
