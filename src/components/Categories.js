import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addCatApi } from '../apiService/allApis';
import Catss from './Catss';


function Categories() {


  const [categories,setCategories] = useState({
    id:'',
    name:'',
    videos:[]
  })
  const fetchingFrom = (e)=>{
    const {value,name} = e.target
    setCategories({...categories,
      [name]:value}
      )
  }

  const selectingCat = async(e) =>{
    // console.log(useCategories);
    e.preventDefault()

    const name = categories.name
    if(!name){
      alert("input is empty")
    }
    else{
      const result = await addCatApi(categories)
      setCategories(result)
      // console.log(result);
      if(result.status>=200 && result.status<300){
        alert('success')
      }
      handleCloseModal()
    }

  }
 
  

  const [isModalVisible, setModalVisibility] = useState(false);


  
    const handleCloseModal = () => {
      setModalVisibility(false);
      setCategories({
        id:'',
        name:'',
        videos:[]
      })
      
    };
    const handleOpenModal = () => setModalVisibility(true);

  return (
    <div>
    <Button  variant="light" className='w-75' onClick={handleOpenModal}>
    <b> Add Category</b>
  </Button>

  <div className='text-white fs-3 mt-4'>
  <Catss categories={categories} setCategories={setCategories}/>
  </div>


  <Modal show={isModalVisible} onHide={handleCloseModal}>
    <Modal.Header closeButton>
      <Modal.Title>Add New Category</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control name='name' onChange={(e)=>{fetchingFrom(e)}} type="text" placeholder="Category Name" autoFocus />
        </Form.Group>
       
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={handleCloseModal}>
        Close
      </Button>
      <Button onClick={(e)=>{selectingCat(e)}}  variant="secondary">
        Add
      </Button>
    </Modal.Footer>
  </Modal>
  <br />
  <br />
  
    </div>
  )
}

export default Categories
