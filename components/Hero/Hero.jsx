import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { IoLogoInstagram } from 'react-icons/io'
import { FaThreads } from 'react-icons/fa6'
import Profile from '../../assets/Profile.ico'

const Hero = () => {
  return (
    <div className='container mt-20 h-full lg:flex text-white items-center '>
      <div className='space-y-9  lg:w-3/5 flex-col justify-center items-center '>
        <h1 className='font-bold md:text-red-600 text-4xl md:text-6xl lg:w-3/4 '>
          Creative Front-end Developer
        </h1>
        <p className='my-5 '>
          I'm Adinath, a Front-End Developer passionate about crafting
          responsive, user-friendly, and accessible web experiences. I focus on
          blending creativity and performance to deliver solutions that solve
          real-world problems.
        </p>
        <p>
          Short, impactful, and professional! Let me know if you need more
          adjustments.
        </p>
        {/* Social media icons */}
        <div>
          <ul className='flex gap-3 justify-center lg:justify-start'>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <IoLogoInstagram />
            </li>
            <li>
              <FaThreads />
            </li>
          </ul>
        </div>
      </div>
      {/* logo section  */}
      <div className='items-center  flex justify-center lg:w-2/5 '>
        <img src={Profile} alt='' className='rounded-sm  mt-6 w-52 h-52' />
      </div>
    </div>
  )
}

export default Hero
