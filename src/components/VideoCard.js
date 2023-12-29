import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi } from '../apiService/allApis';
import { format } from 'date-fns';
import { addHistoruApi } from '../apiService/allApis';
import './Add.css'


function VideoCard(props) {

  const {video}=props
  const {setUpdateDelete}=props
   const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true)

      // history store

      // body data -title,time,videoUrl,id
      const {title,videoURL}=video 

      //time
      let time=format(new Date(),"dd-MM-yyyy hh:mm:ss a");
      console.log(time);

      const reqBody={
        id:"",
        title,
        time,
        videoURL
        
      }
      await addHistoruApi(reqBody);
      
    };



    const deleteVideo = async(e,id) => {
      e.preventDefault()
      const result = await deleteVideoApi(id)
      setUpdateDelete(result)
      // alert("a video is deleted")
    }
    
    const dragStart=(e,id)=>{
      // e.preventDefault()
      console.log("draggable id is"+id);
      e.dataTransfer.setData("cardId",id)
    } 




    
  

  return (
    <div>
        <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='border border-warning' bg='dark' style={{ width: '18rem' }}>
            <Card.Img onClick={handleShow} style={{height:'160px'}} variant="top" src={video.coverImg} />
            <Card.Body>
                <Card.Title className='text-white '>
                    <h5 className='text-center hidde'>{video.title}</h5>
                </Card.Title>
                <div className='text-end '>
                <i onClick={(e)=>{deleteVideo(e,video.id)}} class="fa-solid fa-trash fa-shake" style={{color:'#d52020'}}></i>
                </div>
            </Card.Body>
        </Card>

        <Modal centered size='lg' show={show} onHide={handleClose}>
            <Modal.Header className='bg-dark text-white' closeButton>
              <Modal.Title>Luminar</Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
            <iframe width="100%" height="300px" src={video.videoURL} title="LUMINARONAM - 2K23 - COCHIN BRANCH STUDENTS" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            </Modal.Body>
          </Modal>
    </div>
  )
}

export default VideoCard
 