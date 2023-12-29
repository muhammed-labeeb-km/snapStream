import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addVideoApi } from '../apiService/allApis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Add.css'
function Add(props) {

  const {setAddUpdate} = props

  const [inputData,setInputData] = useState({
    title:'',
    coverImg:'',
    videoURL:'',
    id:''
  })

  const handleAdd = async(e) =>{

    // prevent the event to one time working
    e.preventDefault()

    const {title,coverImg,videoURL} = inputData
    if(!title || !coverImg || !videoURL){

      toast.error('Please fill all data', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });


    }
    else{
      const result = await addVideoApi(inputData)
      console.log(result);
      if(result.status >=200 && result.status<300){

        setAddUpdate(result.data)

        toast.success('video added successfully!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        
        handleClose()
      }
    }
    
  }


    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setInputData({...inputData,title:'',coverImg:'',videoURL:'',id:''})
    }
    const handleShow = () => setShow(true);


    const setData = (e) =>{
      // let value = e.target.value;
      // let name = e.target.name;
      let {name,value} = e.target
      setInputData({
        ...inputData,
        [name]:value})
    }


    const extractUrl = (e) => {
      const {value,name} = e.target
      console.log(value);
      let urlCode = value.slice(-11,)

      // "https://www.youtube.com/embed/QhIg--Qear4?autoplay=1"
      const finalURL = `https://www.youtube.com/embed/${urlCode}?autoplay=1`

      setInputData({
        ...inputData,
        [name]:finalURL})

    }

    

  return (
    <div>
    <i className="fa-solid fa-upload" style={{color:'goldenrod',fontSize:'60px'}} onClick={handleShow}></i>

    <Modal  show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Videos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control className='mb-4'
            name='title'
            onChange={(e)=>setData(e)}
              type="text"
              placeholder="Video Caption"
            />
            <Form.Control className='mb-4'
            name='coverImg'
            onChange={(e)=>setData(e)}
              type="text"
              placeholder="Cover Image URL"
            />
            <Form.Control
            name='videoURL'
            onChange={(e)=>extractUrl(e)}
              type="text"
              placeholder="Utube Video URL"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button onClick={(e)=>{handleAdd(e)}} variant="secondary">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
    


    <ToastContainer />
    </div>
  )
}

export default Add
