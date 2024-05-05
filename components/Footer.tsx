import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//assists :
import logo from '@/public/assets/images/NIFTABLES.svg'

import twitter from '@/public/assets/images/Twitter.svg'
import telegram from '@/public/assets/images/Telegram.svg'
import discord from '@/public/assets/images/Discord.svg'

const Footer = () => {
    return (
        <div className='z-10  px-[12.5vw]'>
            <div className='xl:flex  flex-col xl:flex-row xl:justify-between'>
                <h4 className=' font-satoshi text-center xl:text-left xl:text-[.867vw] text-white'>© Creon 2023. All rights reserved.</h4>
                <div  >
                    <ul className='flex xl:justify-normal justify-center space-x-3  '>
                        <li>
                            <Image className='w-[2rem] hover:border-[#3D8BFF] hover:bg-[#3D8BFF] transition-all duration-500 border-2 rounded-full p-1' src={twitter} alt="twitter" />
                        </li>
                        <li>
                            <Image className='w-[2rem] hover:border-[#3D8BFF] hover:bg-[#3D8BFF] transition-all duration-500 border-2 rounded-full p-1' src={telegram} alt="telegram" />
                        </li>
                        <li>
                            <Image className='w-[2rem] hover:border-[#3D8BFF] hover:bg-[#3D8BFF] transition-all duration-500 border-2 rounded-full p-1' src={discord} alt="discord" />
                        </li>
                    </ul>
                </div>
                <div >
                 <Link className='flex xl:justify-normal  justify-center space-x-2  text-white ' href='https://www.niftables.com/'><span>Powered by </span> <Image  src={logo} alt='logo' ></Image> </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer