import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <div className='h-screen w-full px-8 relative'>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#1f2123', // Change the background color here
          zIndex: -1,
        }}
      />
      <Player
        autoplay
        loop
        src='https://assets1.lottiefiles.com/packages/lf20_jdeqicuf.json'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <div className='w-full h-full flex justify-start pt-6'>
        <h1 className='text-5xl text-indigo-300 text-left pt-10'>The Future Of Cyber Security Is Here!!</h1>
      </div>
    </div>
  );
};

export default Hero;
