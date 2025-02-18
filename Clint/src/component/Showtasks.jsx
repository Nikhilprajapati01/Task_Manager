
import axios from "axios";
import React, { useState, useEffect } from "react";

function ShowTasks() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/tasks");
        console.log("API Response:", res.data); // Debugging

        // Extract the `tasks` array from the response
        setTask(Array.isArray(res.data.tasks) ? res.data.tasks : []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
        setTask([]);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    fetchTasks();
  }, []);

  const  onDelete = async (id) => {
console.log(id);
try {
    await axios.delete(`http://localhost:8000/api/v1//task/${id}`,id);
   
} catch (error) {
    console.error("Error delete tasks:", error);
}

  }
  

  return (
    <>
   
      {task?.length > 0 ? (
        task.map((tasks, idx) => (
        

        //     <div className="bg-white shadow-lg rounded-lg p-5 border border-gray-200 w-full max-w-md mx-auto">
        //     <h2 className="text-xl font-semibold text-gray-800">{tasks.title}</h2>
        //     <p className="text-gray-600 mt-2">{tasks.description}</p>
        //     <button className="text-g">update</button>
        //     <button className="text-g">update</button>
        //   </div>


        <div key={idx} className="bg-white shadow-lg rounded-lg p-5 border flex flex-row justify-between items-end  border-gray-200 w-screen ">
            <div>

         <h2 className="text-xl font-semibold text-gray-800">{tasks.title}</h2>
        <p className="text-gray-600 mt-2">{tasks.description}</p>
            </div>

{/* Buttons Section */}
<div className="mt-4 flex space-x-3">
  <button
    onClick={() => onUpdate(tasks._id)}
    className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
  >
    Update
  </button>
  <button
    onClick={() => onDelete(tasks._id)}
    className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition duration-300"
  >
    Delete
  </button>
</div>
</div>
        ))
    ) : (
        <p>Loading tasks...</p>
    )}
    
    </>
  );
}

export default ShowTasks;




