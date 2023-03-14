import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCheck } from 'react-icons/fa';
import { FaShippingFast } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';


const Quality = () => {
  return (
    <div>
      <Container fluid>
        <Row className='quality-row'>
          <Col style={{ backgroundColor: '#fff', margin: '0.5rem', padding: '2rem', fontSize: '1.3rem' }}><FaCheck style={{ marginRight: 20, color: '#FFD333'}} />Quality Products</Col>
          <Col style={{ backgroundColor: '#fff', margin: '0.5rem', padding: '2rem', fontSize: '1.3rem' }}><FaShippingFast style={{ marginRight: 20, color: '#FFD333' }} />Free Shipping</Col>
          <Col style={{ backgroundColor: '#fff', margin: '0.5rem', padding: '2rem', fontSize: '1.3rem' }}><FaExchangeAlt style={{ marginRight: 20, color: '#FFD333' }} />14-Days Return</Col>
          <Col style={{ backgroundColor: '#fff', margin: '0.5rem', padding: '2rem', fontSize: '1.3rem' }}><FaPhoneAlt style={{ marginRight: 20, color: '#FFD333' }} />24/7 Support</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quality;
