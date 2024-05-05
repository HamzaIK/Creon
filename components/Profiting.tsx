import React from 'react'


const Profiting = () => {
  return (
    <div className='px-[5vw] xl:px-[12.5vw]'>
        <h2 className='text-white uppercase font-monumentExtended xl:text-[3rem]  text-4xl'>
        Profiting Through
        </h2>
        <h3 className='text-[#3D8BFF] uppercase font-monumentExtended xl:text-[2rem] text-2xl text-right '>
        AI Innovation & Decentralization
  </h3>
  <div className='xl:flex items-center '>
    
    <video src={require("../public/assets/videos/creon-logo.mp4")} height={200} loop muted autoPlay preload="metadata" className=' -z-40 top-0 my-5 xl:my-0 rounded-lg object-cover xl:w-[49.323vw] w-full xl:h-[25.26vw] mr-8   ' />
    <div className='relative '>
    <div className="absolute  left-0 h-full w-px bg-[#13171D] "></div>
    <div className="absolute  right-0 h-full w-px bg-[#13171D] "></div>
    <h4 className='text-white  xl:mx-8 text-2xl xl:text-[1.146vw] font-satoshi font-bold leading-[130%] '>The dynamic community driven business model of the future.</h4>
    <p className=' text-white xl:mx-8 xl:my-6  font-satoshi '> At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
    </div>
  
  </div>
    </div>
  )
}

export default Profiting