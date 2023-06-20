import image from '../images/c.png'

const Hero = () => {
  return (
    <div className='h-screen w-full  px-8' style={{ backgroundImage:`url(${image})` }}>
      <div className='w-full h-full items-center justify-center'>
        <h1 className='text-4xl py-20 text-white text-center pt-20'>The Future Of Cyber Security Is Here!!</h1>
      </div>
    </div>
  )
}

export default Hero
