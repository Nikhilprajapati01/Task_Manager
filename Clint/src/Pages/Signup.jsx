import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./App.css";
import { ToastContainer, toast } from "react-toastify";
// import axios from "axios";

function App() {
 
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    // compassword: "",
  });
  const [error, seterror] = useState("");
  const [apidata, setapidata] = useState("")
  console.log(formdata);
   
  // }
  // console.log(apidata);
  


  function changehandler(e) {

    const {name,value} = e.target;
    setFormdata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
   
  }

  const submitHandler = async(e) => {
    e.preventDefault();
    
    if (formdata.password.length < 3) {
      seterror("password must be 8 characters long");
      return;
    }

    try {
        await axios.post(" http://localhost:8000/api/v1/register",formdata)
        .then( result =>{
            console.log("User Registered:", result);
            setFormdata({
                name: "",
              email: "",
              password: "",
        
             })
             console.log("submitted");
        })
        toast.success("🦄 submit succesfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    } catch (error) {
        console.error("Registration Failed:", error.response?.data || error.message);
      alert("already registering user");
      setFormdata({
          name: "",
        email: "",
        password: "",
  
       })
    }
      
    

   
    



     seterror("");
    
    
 
  };
  return (
    <>
      <ToastContainer />

      <div className="h-screen w-screen flex justify-center items-center bg-blue-100">
        <div className="flex  gap-4 items-center bg-white p-10 rounded-lg shadow-lg ">
          <div className="shadow-lg px-4 py-9  rounded-lg flex flex-col gap-4  bg-white">
            <div>
              <h1 className="text-2xl text-center ">Create an account</h1>
            </div>

            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="w-96 p-4  rounded-lg flex flex-col gap-3"
            >
              <input
                className="border-2 border-black px-3 py-2 "
                type="text"
                placeholder="enter your name"
                required
                name="name"
                value={formdata.name}
                onChange={changehandler}
              />
              <input
                className="border-2 border-black rounded-md px-3 py-2 "
                type="email"
                placeholder="enter your email"
                required
                name="email"
                value={formdata.email}
                onChange={changehandler}
              />
              <input
                className="border-2 border-black px-3 py-2 "
                type="password"
                placeholder="enter your password"
                required
                name="password"
                value={formdata.password}
                onChange={changehandler}
              />
              {/* <input
                className="border-2 border-black px-3 py-2 "
                type="password"
                placeholder="comform password"
                required
                name="compassword"
                value={formdata.compassword}
                onChange={changehandler}
              /> */}

              {error && <p className="text-red-500 text-sm">{error}</p>}
            

              <button className="border-2 border-black rounded-xl mt-8 bg-emerald-400 py-3 text-2xl">
                Submit
              </button>
              {apidata && <pre>{JSON.stringify(apidata, null, 2)}</pre>}
              <p>Already have acount <NavLink to="/login">Login</NavLink></p>
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;