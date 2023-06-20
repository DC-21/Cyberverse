import React from 'react'

const About = () => {
  return (
    <div className='flex flex-wrap w-full h-screen px-8 py-6 bg-[#381495] gap-6'>
      <h1 className='text-white text-4xl py-10 w-full text-center'>Our Services</h1>
      <div className='w-full h-[450px] flex flex-row gap-4'>
      <div className='w-1/3 h-full rounded border border-blue-50'></div>
      <div className='w-1/3 h-full rounded border border-blue-50'></div>
      <div className='w-1/3 h-full rounded border border-blue-50'></div>
      </div>
    </div>
  )
}

export default About
