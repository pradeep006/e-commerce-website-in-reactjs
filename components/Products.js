import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Product_1 from '../asserts/product-1.jpg';
import Product_2 from '../asserts/product-2.jpg';
import Product_3 from '../asserts/product-3.jpg';
import Product_4 from '../asserts/product-4.jpg';
import Product_5 from '../asserts/product-5.jpg';
import Product_6 from '../asserts/product-6.jpg';
import Product_7 from '../asserts/product-7.jpg';
import Product_8 from '../asserts/product-8.jpg';

const Products = () => {
  return (
    <div>
      <Container fluid style={{ fontWeight: 500 }}>
        <h3 style={{ margin: '4rem 3rem 3rem 3rem', fontWeight: 700 }}>Featured Products</h3>
        <Row className='card-row' >
          <Card className='Card'>
            <Card.Img variant="top" src={Product_1} />
            <Card.Body>
              <Card.Title>Addidas New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_2} />
            <Card.Body>
              <Card.Title>Nike Brand New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_3} />
            <Card.Body>
              <Card.Title>Addidas New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_4} />
            <Card.Body>
              <Card.Title>Addidas New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
        </Row>
        <Row className='card-row-down' >
          <Card className='Card'>
            <Card.Img variant="top" src={Product_5} />
            <Card.Body>
              <Card.Title>Nike Brand New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_6} />
            <Card.Body>
              <Card.Title>Addidas New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_7} />
            <Card.Body>
              <Card.Title>Nike Brand New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
          <Card className='Card'>
            <Card.Img variant="top" src={Product_8} />
            <Card.Body>
              <Card.Title>Nike Brand New Shoe</Card.Title>
              <Card.Text>$ 41.00</Card.Text>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D' }}>Buy Now</Button>
              <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500, marginLeft: 5 }}>Add Cart</Button>
            </Card.Body>
          </Card>
        </Row>
        <Button className='load-button'>Load More</Button>
      </Container>
    </div>
  );
}

export default Products;
