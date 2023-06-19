import React from 'react'
import cyber from '../images/cyber.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen flex py-6 bg-[#2d2628] px-8'>
      <div className='w-1/2 mt-16'>
        <p className='text-white'>What is Cyber Security ?</p>
        <h1 className='text-white text-5xl'>The Future Of Cyber Security Is Here</h1>
      </div>
      <div className='w-1/2'>
        <img src={cyber} alt='cyber'/>
      </div>
    </div>
  )
}

export default Hero
