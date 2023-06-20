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
      <div className='w-full h-full flex items-center justify-start'>
        <div className='w-1/2 pl-8'>
          <h1 className='text-5xl text-indigo-300 text-left mt-8'>The Future Of Cyber Security Is Here!!</h1>
          <p className='text-2xl text-indigo-300 text-left mt-8'>Empowering businesses with robust cybersecurity solutions and cutting-edge web development services. We safeguard digital assets, while crafting exceptional websites that captivate audiences and drive success in the ever-evolving online landscape.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
