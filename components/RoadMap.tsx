import React from 'react'
import Image from 'next/image'

//assetes
import image4 from '../public/assets/images/image4.png'
import image5 from '../public/assets/images/image5.png'
import image6 from '../public/assets/images/image6.png'

import video3 from '@/public/assets/videos/roadmap-video.mp4'

const RoadMap = () => {
  return (
    <div className='mt-24 relative  '>
        <div className="xl:flex   gap-5 mb-10 xl:mb-5 mx-2 xl:mx-[12.5vw] bg-[#13171D] ">
            <div className='xl:w-2/3'>
                <h2 className='text-white font-monumentExtended uppercase text-2xl xl:text-[1.979vw] m-[15px] '>
                AI Prospects, Market Size, and Development Pace
                </h2>
                <p className=' text-lg xl:text-lg xl:text-[.938vw] text-white font-satoshi m-[15px]  '>
                The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation.
                </p>
            </div>
            <div className='xl:w-1/3'>
                <Image src={image4} alt='image4' />
            </div>
        </div>

        <div className="xl:flex   gap-5 mb-10 xl:mb-5 xl:mx-[12.5vw] bg-[#13171D]  ">
            <div className='xl:w-2/3'>
                <h2 className='text-white font-monumentExtended uppercase text-2xl xl:text-[1.979vw] m-[15px] '>
                AI Tools and Market
                </h2>
                <p className=' text-lg xl:text-[.938vw] text-white font-satoshi m-[15px]  '>
                AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others.
                </p>
            </div>
            <div className='xl:w-1/3'>
                <Image src={image5} alt='image5' />
            </div>
        </div>

        <div className="xl:flex  gap-5 mb-10 xl:mb-5 mx-2 xl:mx-[12.5vw] bg-[#13171D]  ">
            <div className='xl:w-2/3'>
                <h2 className='text-white font-monumentExtended uppercase text-2xl xl:text-[1.979vw] m-[15px] '>
                AI, Crypto, and NFT Market
                </h2>
                <p className=' text-lg xl:text-[.938vw] text-white font-satoshi m-[15px]  '>
                Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities.
                </p>
            </div>
            <div className='xl:w-1/3'>
                <Image src={image6} alt='image6' />
            </div>
            
        </div>
        <div className="absolute top-0 w-full  h-full bg-gradient-to-b -z-10 from-black via-transparent " />

        <video className='absolute -z-20 opacity-30 object-cover bottom-0 h-full  xl:top-0' src={video3} loop muted autoPlay preload="metadata" ></video>
        
    </div>
  )
}

export default RoadMap