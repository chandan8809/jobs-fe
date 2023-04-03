import { taskServiceObj } from '../services/taskServices'
import React, { useEffect, useState } from 'react'

const Task = () => {
  const [tasks,setTasks]=useState([])
  const [taskval,setTaskVal]=useState("")

   const getAllTasks=async()=>{
      const response =await taskServiceObj.getAllTasks()
    
      setTasks(response.data?.tasks)
    }

   const createTasks=async(query)=>{
      const response =await taskServiceObj.createTasks(query)
      getAllTasks()
    }

    const deleteTask = async(query)=>{
      console.log("dlel",query)
       const response =await taskServiceObj.deleteTasks(query)
       getAllTasks()
    }

    const updateTask = async(query)=>{
      console.log("dlel",query)
       const response =await taskServiceObj.updateTasks(query)
       getAllTasks()
    }

useEffect(()=>{
    getAllTasks()
},[])


  return (
    <div>
       <input 
        placeholder='enter task' 
        value={taskval}
        onChange={(e)=>setTaskVal(e.target.value)}
        />
       <button onClick={()=>createTasks({name:taskval})}>save task</button>
        <div >
          {tasks?.map((task,index)=>(
            <div key={index} style={{display:"flex",gap:"10px"}}>

              <p >{task.name}</p>
              <p>{task.status}</p>
              <button onClick={()=>updateTask({id:task._id})}>complete task</button>
              <button onClick={()=>deleteTask({id:task._id})}>delete task</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Task