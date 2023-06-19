import React from 'react'
import c from '../images/c.png'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-wrap py-6 bg-[#2d2628] px-8'>
      <div className='w-1/2 mt-16 flex flex-col'>
        <p className='text-white'>What is Cyber Security ?</p>
        <h1 className='text-white text-5xl'>The Future Of Cyber Security Is Here</h1>
      </div>
      <div className='w-1/2 mt-16 flex'>
        <img src={c} alt='cyber'/>
      </div>
    </div>
  )
}

export default Hero
