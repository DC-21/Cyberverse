import React from 'react'
import c from '../images/c.png'

const Hero = () => {
  return (
    <div className='w-full h-screen flex flex-wrap py-6 bg-[#1f2123] px-8'>
      <div className='w-1/2 flex flex-col mt-20'>
        <p className='text-white'>What is Cyber Security ?</p>
        <h1 className='text-white text-5xl'>The Future Of Cyber Security Is Here</h1>
        <p className='text-white pl-14 mt-8'>Looking forward to the most advanced modes of <br/>security of massive and confidential information<br/> of all stake  holders accross the globe. Securing <br/>the web is our top priority... See you soon ?</p>
        <div className='text-white pl-14 mt-8 gap-6 flex'>
            <button className='bg-[#fdbe0e] py-2 px-3 rounded'>See More</button>
            <button className='bg-[#44423d] py-2 border-b-[2px] border-slate-500 px-3 rounded'>Download Resource</button>
        </div>
      </div>
      <div className='w-1/2 flex '>
        <img src={c} className='rounded-full' alt='cyber'/>
      </div>
    </div>
  )
}

export default Hero
