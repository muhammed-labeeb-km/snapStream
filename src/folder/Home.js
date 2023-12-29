import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Add from '../components/Add';
import Videos from '../components/Videos';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

function Home() {

  const [addUpdate,setAddUpdate] = useState('')

  return (
    <div className='bg-black'>
    <div>
    <Row className='p-5'>
    
    <Col className='text-white' lg={6}>
    <span className='fs-2 '> <span className='text-danger'>S</span>tart <span className='text-danger'>U</span>ploading <span className='text-danger'>V</span>ideos <span className='text-danger'>F</span>or <span className='text-danger'>F</span>ree</span>
    <br />
    <div>
    <i className='fa-brands fa-instagram' style={{ color: '#ffffff' }}></i>
    
    
    
    <Link to={'/history'} style={{textDecoration:'none'}}>
    <a className='text-warning fs-5 ps-4' style={{textDecoration:'none'}}> <i> View Watch History</i></a>
    </Link>
    
    
    
    </div>
    <br />
    <div>
    <span className=''> <i>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolor quibusdam. Iste, obcaecati exercitationem? Accusantium voluptatem eaque enim, nisi, eveniet delectus sunt, obcaecati deleniti numquam in porro. Mollitia, iste corporis. amet consectetur adipisicing elit. Quae quis voluptatum corporis? Et voluptatum optio quae itaque, quas iste, quaerat ducimus accusantium debitis id </i> 
    </span></div>

    </Col>
    <Col lg={6} className='text-center'>
    <img src="https://i.postimg.cc/W4M5x5dg/giffy-unscreen.gif" width={'250px'} alt="" />
    </Col>
    </Row>

    <div className='p-5 text-center'>
    
    <Add setAddUpdate={setAddUpdate}/>
    
    </div>
    <Row className='p-5'>
    <Col lg={6} className='text-white'>
    <Videos addUpdate={addUpdate}/>
    </Col>

    <Col lg={6} className='p-5'>
      <Categories/>
    </Col>
    

    </Row>
    

    </div>
    </div>
  )
}

export default Home
