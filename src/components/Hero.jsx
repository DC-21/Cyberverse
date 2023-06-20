import React from 'react'
import image from '../images/c.png'

const Hero = () => {
  return (
    <div className='h-screen w-full' style={{ backgroundImage:`url(${image})` }}>
      <div className='w-full h-full items-center justify-center'>
        <h1 className='text-4xl text-white text-center pt-20'>Hello world</h1>
      </div>
    </div>
  )
}

export default Hero
