import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideoApi } from '../apiService/allApis'
import { Row,Col } from 'react-bootstrap'


function Videos(props) {

  const {addUpdate} = props

  const [updateDelete,setUpdateDelete]=useState('')
  const [allVideos,setAllVideos] = useState([])

  const accessAllVideos = async() =>{
    const result = await getVideoApi()
    console.log(result.data)
    setAllVideos(result.data);
  }

  useEffect(()=>{
    accessAllVideos()
  },[addUpdate,updateDelete])

  return (
    <Row>
    {
      allVideos.length>0?
      allVideos.map((i,index)=>(
        <Col className='my-4' key={index} lg={6} md={6} sm={6}>
        <VideoCard video={i} setUpdateDelete={setUpdateDelete} />
        </Col> 
      ))
      :<h1>No videos added yet!</h1>
    }
    </Row>
  )
}

export default Videos
