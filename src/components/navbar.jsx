import React from 'react'
import { Link } from 'react-router-dom' 

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='links flex justify-center items-center gap-4 p-3 bg-blue-700 text-white '>
        <Link to="/" > Home</Link>
        <Link to="/signup"> signup</Link>
        <Link to="/login">  login</Link>

        
        

      </div>
    </div>
  )
}
