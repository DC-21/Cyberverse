import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <div className='h-screen w-full px-8 relative'>
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
          zIndex: -1,
        }}
      />
      <div className='w-full h-full flex items-center justify-center'>
        <h1 className='text-4xl py-20 text-blue-800 text-center pt-20'>The Future Of Cyber Security Is Here!!</h1>
      </div>
    </div>
  );
};

export default Hero;
