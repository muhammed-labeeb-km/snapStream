import React, { useEffect, useState } from 'react'
import { getCatApi, getVideo, updateCat } from '../apiService/allApis'
import { Row,Col } from 'react-bootstrap'
import { Trash2 } from 'feather-icons-react/build/IconComponents'
import { deleteCatApi } from '../apiService/allApis'

function Catss({categories,setCategories}) {

    const [allCategories,setAllCategories] = useState([])
    const acceessAllCategories = async() => {
        const result = await getCatApi()
        // console.log(result.data);
        setAllCategories(result.data)
    }
    // console.log(allCategories);

    useEffect(()=>{
        acceessAllCategories()
    },[categories])
    


    const handleDelete = async(e,id) =>{
        e.preventDefault()
        const res = await deleteCatApi(id)
        await setCategories(res)
    }

    const dropped=async(e,id)=>{
        console.log("droppped cqatss with id",id);
        const vidId = e.dataTransfer.getData("cardId")
        console.log("dropped card is ",vidId);


        //access video
        const result = await getVideo(vidId)
        const video = result.data
        
        //select cat
        let selectedCat=(allCategories.find(i=>i.id==id));
        selectedCat.videos.push(video)
        // console.log(selectedCat);


        //update Category
        updateCat(id,selectedCat)

        acceessAllCategories()

    }

    const draggingOver=(e)=>{
        e.preventDefault()
        console.log("----------------draging over catss--------------");
    
    }



  return (
    <Row>
    {
        allCategories.length>0?
        allCategories.map((i,index)=>(
            <Col lg={12}>
            <div droppable onDrop={(e)=>{dropped(e,i.id)}} onDragOver={e=>draggingOver(e)} className='p-5 rounded border-black border w-75 my-1 bg-dark'>
            <div >{index+1} Catedory is {i.name} and id is {i.id} </div>
            <div className='text-end'><Trash2 size="48" onClick={(e)=>{handleDelete(e,i.id)}} className='text-danger btn text-end'></Trash2></div>
            <div>
            <marquee>
                <div className='d-flex'>
                    {i.videos.length>0?
                        i.videos.map(j=>(
                            
                            <img src={j.coverImg} alt="" width={100} style={{padding:"4px"}} />
                        
                        ))
                        :
                        " "
                    }
                </div>
            </marquee>
            </div>
            </div>
            
            </Col>
        ))
        :
        <span>No Categories Added</span>
    }
    </Row>
  )
}

export default Catss
