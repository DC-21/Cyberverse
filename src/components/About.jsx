import React from 'react'

const Technology = () => {
  return (
    <div className='w-full h-screen flex flex-col flex-wrap py-6 bg-[#1f2123] px-8'>
        <div>
            <h1 className='text-5xl text-white mt-12'>The Future Of Cyber Security Is Here.</h1>
        </div>
        <div className='mt-10 flex'>
            <div className='w-1/3 h-[450px] border border-blue-50 items-center justify-between'>
                <h1 className='text-left text-white mt-6 text-3xl px-4'>Secure Data Collection</h1>
            </div>
            <div className='w-1/3 h-[450px] border border-blue-50'>
                <h1 className='text-left text-white mt-6 text-3xl px-4'>Secure Data Transmission</h1>
            </div>
            <div className='w-1/3 h-[450px] border border-blue-50'>
                <h1 className='text-left text-white mt-6 text-3xl px-4'>Other Products & Integrations</h1>
            </div>
        </div>
    </div>
  )
}

export default Technology
