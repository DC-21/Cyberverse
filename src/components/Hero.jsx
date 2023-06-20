import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from 'https://assets8.lottiefiles.com/packages/lf20_kx3p7bbx.json';

const Hero = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animationRef.current.destroy(); // Clean up the animation when the component unmounts
    };
  }, []);

  return (
    <div className='w-full h-screen relative'>
      <div ref={containerRef} className='absolute inset-0 z-0'></div>
      <div className='w-full h-screen flex flex-wrap py-6 bg-[#1f2123] px-8'>
        <div className='w-1/2 flex flex-col mt-20'>
          <p className='text-white'>What is Cyber Security ?</p>
          <h1 className='text-white text-5xl'>The Future Of Cyber Security Is Here</h1>
          <p className='text-white pl-14 mt-8'>Looking forward to the most advanced modes of <br/>security of massive and confidential information<br/> of all stakeholders across the globe. Securing <br/>the web is our top priority... See you soon?</p>
          <div className='text-white pl-14 mt-8 gap-6 flex'>
              <button className='bg-[#fdbe0e] py-2 px-3 rounded text-black'>See More</button>
              <button className='bg-[#44423d] py-2 border border-slate-500 px-3 rounded'>Download Resource</button>
          </div>
        </div>
        <div className='w-1/2 flex'>
        </div>
      </div>
    </div>
  );
};

export default Hero;
