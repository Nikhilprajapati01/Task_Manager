import React from 'react'
import CreateTask from './CreateTask';
import { useState } from 'react';

function  Task() {
    const [show, setShow] = useState(false);

    const showcom = ()=>{
        if(show == true){
            setShow(false)
        }
        else{
            setShow(true)
        }
    }
  return (
    <>
    <div className='w-36 border-2 h-12 text-center bg-amber-500 rounded-2xl ml-3 mt-3'>
    <button className='p-2.5'     onClick={() => setShow(showcom)}>Add Task</button>

        {show && <CreateTask set={setShow}/>}
    </div>
    </>
  )
}

export default Task