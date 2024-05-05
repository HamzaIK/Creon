import React from 'react'
import Image from 'next/image'


//assetes

import image1 from '../public/assets/images/image1.png'
import image2 from '../public/assets/images/Image2.png'
import image3 from '../public/assets/images/image3.png'

const Cards = () => {
    return (
        <div className='mt-24 px-[12.5vw] text-white'>

            
                <div className="xl:grid  xl:grid-cols-3 xl:grid-rows-1 xl:gap-12">
                    <div className=' bg-[#13171D] relative rounded-md'>
                        <span className=' absolute -top-2 right-0 bg-white text-xs text-[#13171D] px-1 rounded-full uppercase font-satoshi  '>coming soon</span>
                        <h2 className='uppercase font-monumentExtended xl:text-[1.979vw] text-4xl ml-2 mt-3 xl:ml-7 xl:mt-5 '>token</h2>
                        <p className=' font-satoshi ml-2 xl:ml-7 bg-clip-text text-transparent   bg-gradient-to-r   font-bold from-[#3D8BFF]  to-[#AB23FF] mb-5 xl:mb-10 '>The Gateway token to the world of AI</p>
                        <div className='h-fit overflow-hidden mt-5 w-[95%] '>
                            <Image className='hover:scale-125 transition-all duration-300    '   src={image1} alt='image1' />
                        </div>
                        <p className=' xl:text-[.938vw] my-5 xl:mt-5 xl:mx-7 mx-4 font-satoshi'>Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.</p>

                    </div>
                    <div className=' bg-[#13171D] relative  rounded-md'>
                    <span className=' absolute -top-2 right-0 bg-white text-xs text-[#13171D] px-1 rounded-full uppercase font-satoshi  '>coming soon</span>
                        <h2 className='uppercase font-monumentExtended xl:text-[1.979vw] text-4xl ml-2 mt-3 xl:ml-7 xl:mt-5 '>revenue</h2>
                        <p className='  font-satoshi ml-2 xl:ml-7 bg-clip-text text-transparent   bg-gradient-to-r   font-bold from-[#3D8BFF]  to-[#AB23FF] mb-5 xl:mb-10 '>Driving income and growth through decentralization</p>
                        <div className='h-fit overflow-hidden mt-5 w-[95%] '>
                            <Image className='hover:scale-125 transition-all duration-300    '   src={image2} alt='image2' />
                        </div>
                        <p className=' xl:text-[.938vw] my-5 xl:mt-5 xl:mx-7 mx-4 font-satoshi'>CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support.</p>

                    </div>
                    <div className=' bg-[#13171D] relative rounded-md'>
                    <span className=' absolute -top-2 right-0 bg-white text-xs text-[#13171D] px-1 rounded-full uppercase font-satoshi  '>coming soon</span>
                        <h2 className='uppercase font-monumentExtended xl:text-[1.979vw] text-4xl ml-2 mt-3 xl:ml-7 xl:mt-5 '>launchpad</h2>
                        <p className=' font-satoshi ml-2 xl:ml-7 bg-clip-text text-transparent   bg-gradient-to-r   font-bold from-[#3D8BFF]  to-[#AB23FF] mb-5 xl:mb-10   '>Driving the future of AI Innovation</p>
                        <div className='h-fit overflow-hidden mt-5 w-[95%] '>
                            <Image className='hover:scale-125 transition-all duration-300   '   src={image3} alt='image3' />
                        </div>
                        <p className=' xl:text-[.938vw] my-5 xl:mt-5 xl:mx-7 mx-4 font-satoshi'>The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.</p>

                    </div>
                </div>
            

        </div>
    )
}

export default Cards