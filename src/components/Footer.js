import React from 'react';
import { Row, Col } from 'react-bootstrap';

function Footer() {



  return (
    <div >
      <div className='bg-dark ps-4 pt-5'>
        <Row className='pb-5'>
          <Col className='pt-2 ps-4' lg={3}>
            <img
              src="https://i.postimg.cc/KjjjtqkB/snap-Stream-removebg-preview.png"
              alt=""
              width={'100px'}
            />
            <p className='text-light mt-3' style={{ fontSize: '10px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>

          <Col lg={3}>
            <span className='text-white pt-2 fs-5'>Links</span>
            <div className='mt-3 '>
              <a className='text-danger' style={{ textDecoration: 'none' }} href="">
                Loading Page
              </a>
              <br />
              <a className='text-danger' style={{ textDecoration: 'none' }} href="">
                Home
              </a>
              <br />
              <a className='text-danger' style={{ textDecoration: 'none' }} href="">
                Watch History
              </a>
            </div>
          </Col>

          <Col lg={3}>
            <span className='text-white pt-2 fs-5'>Guides</span>
            <div className='mt-3 '>
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                React
              </a>
              <br />
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                React Bootstrap
              </a>
              <br />
              <a className='text-white' style={{ textDecoration: 'none' }} href="">
                Routing
              </a>
            </div>
          </Col>

          <Col lg={3}>
            <span className='text-danger fs-4'>
              <b>Contact Us</b>
            </span>
            <br />
            <input type='text' className='w-50 mt-2' placeholder='enter email' />
            <br />
            <button className='btn w-50 btn-danger mt-2'>
              <i>Send</i>
            </button>
            <br />
          
          </Col>
        </Row>

    
      </div>
    </div>
  );
}

export default Footer;
