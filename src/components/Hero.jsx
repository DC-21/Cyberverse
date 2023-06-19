import React from 'react'
import c from '../images/c.png'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-wrap py-6 bg-[#1f2123] px-8'>
      <div className='w-1/2 flex flex-col mt-20'>
        <p className='text-white'>What is Cyber Security ?</p>
        <h1 className='text-white text-5xl'>The Future Of Cyber Security Is Here</h1>
      </div>
      <div className='w-1/2 flex '>
        <img src={c} className='rounded-full' alt='cyber'/>
      </div>
    </div>
  )
}

export default Hero
