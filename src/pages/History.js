import { Trash2 } from 'feather-icons-react/build/IconComponents';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getHistoryApi } from '../apiService/allApis';
import { deleteHistoryApi } from '../apiService/allApis';

function History() {


  const [updating,setUpdating] = useState({})


  const [myHistory,setMyHistory] = useState([])


  const accessHistory = async() =>{
    const result =await getHistoryApi()
    setMyHistory(result.data);
  }
  // console.log(myHistory);

  useEffect(()=>{accessHistory()},[updating])


  const deleteHistory = async(e,id)=>{
    e.preventDefault()
    const deletedresult = await deleteHistoryApi(id)

    setUpdating(deletedresult);

    //if using this for automatic updation instead of refresing
    //then i can use it only by single use state.. that is can completely avaoild const [updating,setUpdating] = useState({})
    // setMyHistory((i)=>i.filter((item)=>item.id !==id))
  }



  return (
    <div className='bg-black ' >
      <h1 className='text-center hidde'> Watch History</h1>
      <Table className='container' striped bordered hover variant="dark">
      <thead className='text-center'>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Time</th>
          <th>Video Url</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        myHistory.length>0?
        (myHistory.map((i,indx)=>
          
          <tr key={indx}>
          <td>{indx+1}</td>
          <td>{i.title}</td>
          <td>{i.time}</td>
          <td>{i.videoURL}</td>
          <td onClick={(e)=>deleteHistory(e,i.id)}><Trash2  className='text-danger text-center btn' size='48' ></Trash2></td>
        </tr>)):
        <h1>No History</h1>

          
      }
        

      </tbody>
    </Table>
    </div>
  )
}

export default History
