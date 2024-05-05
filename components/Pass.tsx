import React from 'react'


const Pass = () => {
    return (

        <div className="xl:grid px-[12.5vw] xl:grid-cols-2 xl:py-[8.219vw] xl:grid-rows-1 xl:gap-4">
            <div className="relative">
         
                <h2 className='text-white text-3xl  xl:text-[3.542vw] xl:leading-[60px] font-monumentExtended '>
                    CREON PASS NFT
                </h2>
                <hr className='bg-[#13171D] border-0 h-px  xl:my-[38px]' />
                <h4 className='font-satoshi w-fit xl:text-[1.146vw]   bg-clip-text text-transparent  bg-gradient-to-r font-bold from-[#3D8BFF] to-[#AB23FF]'>The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools.</h4>
                <div className='border xl:my-5 px-[1.5vw] rounded-md py-[0.5vw] w-fit border-[#13171D]'>
                    <p className="text-white font-satoshi xl:text-[.938vw] ">Pre-launch investment opportunities for upcoming AI projects
                    </p>
                </div>
                <div className='border xl:my-5 px-[1.5vw] rounded-md py-[0.5vw] w-fit border-[#13171D]'>
                    <p className="text-white font-satoshi xl:text-[.938vw] ">Free and early access to Creon built AI projects
                    </p>
                </div>
                <div className='border xl:my-5 px-[1.5vw] rounded-md py-[0.5vw] w-fit border-[#13171D]'>
                    <p className="text-white font-satoshi xl:text-[.938vw] ">Higher allocation limits on the Creon AI Launchpad
                    </p>
                </div>
                <div className='border xl:my-5 px-[1.5vw] rounded-md py-[0.5vw] w-fit border-[#13171D]'>
                    <p className="text-white font-satoshi xl:text-[.938vw] ">Revenue share distribution from Creon built AI projects
                    </p>
                </div>
                
                    <button className='my-6'>
                        <span className="font-satoshi font-bold text-lg xl:text-[.938vw] text-white bg-[#3D8BFF]  border border-[#3D8BFF] rounded-lg py-[4vw] xl:py-[.625vw] px-[20vw] xl:px-[10vw]">Buy Creon Pass</span>
                    </button>
                
            </div>
            <div className='relative' >
            <div className="absolute top-0 w-full h-10 bg-gradient-to-b from-black "></div>
            <video src={require("../public/nft-video.mp4")} loop muted autoPlay preload="metadata" className='xl:h-full h-[110vw]  object-cover w-full  ' />
            <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-black "></div>
            </div>
        </div>

    )
}

export default Pass