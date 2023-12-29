import React from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Main() {

    const [checked, setChecked] = useState(false);
  

  return (
    <div className='bg-black p-5'>
    <Container >
      <Row >
      <Col lg={4} className='text-white'>
      <b><span className='fs-2'><span style={{color:'red'}}>V</span>ideo <span style={{color:'red'}}>U</span>ploader</span></b>
      <br />
      <i style={{fontSize:'10px'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis perspiciatis quo itaque natus doloremque optio quaerat sunt, aut ea recusandae et repudiandae maiores molestias vel aspernatur voluptates, veniam autem laborum!</i>
      <br />
      <br />
      <Link to={'/second'}>
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-danger"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Get Started
      </ToggleButton>
      </Link>
      </Col>
      <Col lg={2}>
      
      </Col>
      <Col lg={6}>
      <img src="https://i.postimg.cc/W4M5x5dg/giffy-unscreen.gif" width={'300px'} alt="" />
      </Col>
      </Row>
      <hr style={{color:'white'}} />

      <div className='text-center fs-1' style={{color:'red'}}> <b>Features</b></div>

      <Row className='p-5'>
    
      <Col lg={4} className='mt-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/5NrrbGgC/yt.gif" style={{height:'250px'}}/>
      <Card.Body className='bg-black text-white'>
        <Card.Title > <b> Managing Videos</b></Card.Title>
        <Card.Text>
        <i>Some quick example text to build on the card title and make up the
        bulk of the card's content.</i>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      <Col lg={4} className='mt-3'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://i.postimg.cc/rppN7xZg/gif2.gif" style={{height:'250px'}}/>
      <Card.Body className='bg-black shadow-lg  text-white'>
        <Card.Title > <b> Category Videod</b></Card.Title>
        <Card.Text>
        <i>Some quick example text to build on the card title and make up the
        bulk of the card's content.</i>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>

      <Col lg={4} className='mt-3'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.postimg.cc/x1Fq6zwK/gif3.gif" style={{height:'250px'}}/>
      <Card.Body className='bg-black text-white'>
        <Card.Title > <b> Category Videod</b></Card.Title>
        <Card.Text>
        <i>Some quick example text to build on the card title and make up the
        bulk of the card's content.</i>
        </Card.Text>
        
      </Card.Body>
    </Card>
      </Col>
      
      </Row>
      </Container>
    </div>
  )
}

export default Main
