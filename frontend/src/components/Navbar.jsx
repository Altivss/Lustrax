import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-1 font-medium relative bg-black'>
      <nav className='flex-1 hidden sm:flex gap-3 text-sm text-white-500 justify-start'>
        <NavLink to='/' className='flex flex-col items-center gap-0.5 text-lg'>
          <p>Home</p>
          <hr className='w-2 border-none h-[4px] bg-white-500 hidden' />
        </NavLink>
        <NavLink to='/allproducts' className='flex flex-col items-center gap-0.5 text-lg'>
          <p>Products</p>
          <hr className='w-2 border-none h-[4px] bg-white-500 hidden' />
        </NavLink>
      </nav>
      <div className='flex-1 flex justify-center'>
        <Link to='/'>
          <img src={assets.logo} className='max-w-[500px] sm:max-w-[250px] h-auto' alt="Logo" />
        </Link>
      </div>
      <div className='flex-1'></div>
    </div>
  )
}

export default Navbar
