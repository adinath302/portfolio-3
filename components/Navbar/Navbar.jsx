import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className=' '>
      <div className=' container h-12  text-white  flex justify-between items-center'>
        <h1 className='font-bold text-1xl'>Adinath ⚡</h1>
        <div>
          <a href='#' className=''>
            <FaGithub className='text-1xl' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
