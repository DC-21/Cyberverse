import { Player } from '@lottiefiles/react-lottie-player';

const Hero = () => {
  return (
    <div className='md:h-screen h-auto w-full px-8 relative' id='home'>
      <div className=''
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#1f2123',
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
      <div className='w-full h-[550px] flex py-20 justify-start'>
        <div className='md:w-1/2 w-full md:py-6 py-0 z-50'>
          <h1 className='text-5xl text-indigo-300 md:text-left text-center pt-0 mb-10 opacity-1000'>The Future Of Cyber Security Is Here!!</h1>
          <p className='text-2xl text-gray-400 text-left md:flex hidden'>Empowering businesses with robust cybersecurity solutions and cutting-edge web development<br/>
           services. We safeguard digital assets, while<br/> crafting exceptional websites that captivate<br/> 
           audiences and drive success in the<br/> ever-evolving online landscape.</p>
           <div className='flex gap-6 md:justify-start justify-center'>
            <button className='bg-indigo-300 md:text-left text-center mt-8 py-2 px-3 mt-8 cursor-pointer rounded text-black hover:bg-[#381495]'>Get in Touch</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
