import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md flex w-full px-6">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">Taskify</div>
      </div>


      <div className=" flex gap-4">
        <NavLink to="/signup">
        <button className='border-2 my-3 px-4  py-1 bg-amber-700 text-1xl rounded-2xl'>Signup</button>
        </NavLink>
        <NavLink to="/login">
          <button  className='border-2  py-1 my-3 px-4 bg-amber-700 text-1xl rounded-2xl'>Loginp</button>
        </NavLink>
        </div>

      
      </nav>
  )
}

export default Header