import axios from 'axios';
import React from 'react'
import { useState, useEffect , useTransition} from 'react';
// import { Form } from 'react-router-dom';


function CreateTask  ({setshow}) {
    const [create, setcreate] = useState([])
    const [createcom, setcreatecom] = useState(true)
    console.log(create);
    
  const handleFormSubmit = async (formData) => {
    setcreatecom(false)

    


    // const [isPending, startTransition] = useTransition();
    // console.log(create);
    
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
    


   try {
    const res = await axios.post(" http://localhost:8000/api/v1/task/create",formInputData)
    
    setcreate(res.data);
    
   } catch (error) {
    console.log("in create", error);
    
   }
  };

  return (
   <>
    {createcom && (

   
   <div className='flex mt-3 justify-center  w-screen z-10 '>
     <div className="p-6 bg-white shadow-lg rounded-2xl border-2 w-[60%]">
      <h2 className="text-xl font-semibold text-gray-800">Create a Task</h2>
   <form action={handleFormSubmit}> 
      <input
       type="text"
       placeholder="Title"
       name="title"
       required
       autoComplete="off"
        className="mt-3 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />


       <textarea
       type="textarea"
       placeholder="Description"
       name="description"
       required
       autoComplete="off"
        className="mt-3 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type='submit' value="send"
        className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Send
      </button>
    </form>
    </div>
    </div>
     )}
   </>
  );
};

export default CreateTask;