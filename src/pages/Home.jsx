
import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { MDBBtn } from 'mdb-react-ui-kit'
import { addTask, editTask } from '../redux/task';
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../redux/task';


function Home() {
  
  const [task,setTask]=useState('')
  const [edit,setEdit]=useState(false)
  const [editingTask,setEditingTask]=useState("")
   const dispatch = useDispatch();
   const taskList = useSelector((state) => state.taskReducers)
   const handleSubmit = () => {
    if(task.length>0){
       dispatch(addTask(task))
       setTask('')
       }else{
        alert('please enter a task')
       }
       }
       const handledelete=(item)=>{
        dispatch(deleteTask(item))
       }
       const handleUpdate = (task) => {
        setTask(task);
        setEdit(true)
        setEditingTask(task)
      }
      const handleEdit = () => {
        dispatch(editTask({ editingTask, task }))
        setEdit(false);
        setTask("")
      }
       
       const allTaskList = taskList.map((item, key) => {
           return (
             <div className='d-flex'>
               <h4 className='font-bold text-md mb-3 mt-3'>{item}</h4>
               <i class="fa-solid fa-pen ms-auto mb-3 mt-3" onClick={()=>handleUpdate(item)}></i>
               <i class="fa-solid fa-trash ms-auto mb-3 mt-3" onClick={()=>handledelete(item)}></i>
             </div>
             
           )
         })
         console.log(editTask);
         console.log(taskList);
    
  return (
    <>
        <Row >
        <Col>
        <div className="container m-3 p-5 border shadow mt-5 ms-3 " style={{width:'500px'}}>
            <h3 className='text-center text-dark'>Add Task</h3>
           
            <label className='mt-3'>Enter Task : </label>
            <input onChange={(e) => setTask(e.target.value)} value={task} type="text" className='form-control' />
            
            <div className='text-center'>

              
                {  edit?
                <MDBBtn className='m-3 btn-success text-center' onClick={handleEdit}>Update</MDBBtn>:
                <MDBBtn className='m-3 btn-success text-center' onClick={handleSubmit}>Add</MDBBtn>
                }
            
            </div>
        </div>
        </Col>
        <Col>
        <div className="container m-3 p-3 border shadow rounded mt-5" style={{width:'500px'}}>
        <h3 className='text-center text-dark'>All Task</h3>
        {
            allTaskList.length>0?allTaskList :
            <h5>no task to done</h5>
        }
      </div>
        </Col>
        </Row>
    </>
  )
}

export default Home