import React from 'react';
import Button from 'react-bootstrap/Button';

const Offer = () => {
    return (
        <div className='off'>
            <div className='offer'>
                <div><p className='fs-4'>save 20%</p>
                    <h6 className='pb-3 fs-2'>special offer</h6>
                    <Button style={{ backgroundColor: '#FFD333', border: 'none', color: '#3D464D', fontWeight: 500 }}>Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Offer;
