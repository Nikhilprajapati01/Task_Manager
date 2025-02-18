import React from 'react'
import Headers from "../component/Header"
import CreateTask from '../component/CreateTask'
import Task from '../component/task'
import Showtasks from '../component/Showtasks'


function Home() {
  return (
    <>
    
    <Headers/>
    <Task/>
<CreateTask/>
    <Showtasks/>
   
   
    
    </>
  )
}

export default Home