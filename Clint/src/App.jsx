import { useState } from 'react'
// import Register from "./component/Register"
// import { Navigate,  } from 'react-router-dom';
import { BrowserRouter, Route, Routes ,Navigate, } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import Home from './Pages/Home';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
         <Routes>
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
