"use client";
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assists :
import logo from '@/public/assets/images/logo.svg'

import twitter from '@/public/assets/images/Twitter.svg'
import telegram from '@/public/assets/images/Telegram.svg'
import discord from '@/public/assets/images/Discord.svg'
//styles:
import styles from '@/styles/nav.module.css'
const Nav = () => {

    const [isClick, setisClick] = useState(true)


    const toggleMenu = () => {
        setisClick(!isClick);
    }


    return (
        <div className=' absolute w-full z-10 ' >

            <div className='  flex justify-between items-center py-[1.5rem] px-[2.604vw] '>
                
                    <Image className='mr-[12px]   xl:w-[7.292vw] '  src={logo} alt="logo" />


                
                <nav className='xl:block hidden'>
                    <ul className='flex  text-white items-center  font-satoshi font-bold text-[.938vw]  '>
                        <li className='mr-[2rem]'>
                            <Link href='/'>
                                Creon Pass
                            </Link>
                        </li>
                        <li className='mr-[2rem]'>

                            Token
                            <sup className=" text-[#AB23FF] text-[.521vw] uppercase ml-[4px] d bg-black rounded-full px-1">
                                soon
                            </sup>
                        </li>
                        <li className='mr-[2rem]'>

                            AI Revenue
                            <sup className=" text-[#AB23FF] text-[.521vw] uppercase ml-[4px]   bg-black rounded-full px-1">
                                soon
                            </sup>
                        </li>
                        <li className='mr-[2rem]'>

                            AI Launchpad
                            <sup className=" text-[#AB23FF] text-[.521vw] uppercase ml-[4px]   bg-black rounded-full px-1">
                                soon
                            </sup>
                        </li>
                        <li>
                            <button className={` ${styles.button} ${styles.connect}   min-w-[6.875vw] h-[2.292vw]  border-white rounded-[6px] border-[2px]`}  >

                            </button>


                        </li>
                    </ul>
                </nav>









                <div className='xl:hidden   flex justify-between '>
                    
                    
                    <button className= 'text-white mr-4     border-white text-lg font-satoshi font-bold rounded-[6px] py-1 px-[1rem] border-[2px] ' >
                        Connect
                    </button>
                    <button onClick={toggleMenu} className="text-white z-50">
                        {!isClick ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>


                        )}
                    </button>

                
                    <nav className={` ${isClick ? "-right-[100vw] " : "right-0"}  transition-all duration-200 absolute w-[18rem] top-0 -z-10 bg-black h-[100vh] `}>
                        <ul className=" text-white items-center  font-satoshi font-bold   mt-[120px] ">
                            <li className='mx-[2vw] p-[9px] border-t-2 border-[#13171D] '>

                                <Link href='/'>
                                    Creon Pass
                                </Link>
                            </li>
                            <li className='mx-[2vw] p-[9px] border-t-2 border-[#13171D] '>

                                Token
                                <sup className=" text-[#AB23FF] text-[.7 rem] uppercase ml-[4px]  bg-black rounded-full px-1">
                                    soon
                                </sup>
                            </li>
                            <li className='mx-[2vw] border-t-2 p-[9px] border-[#13171D] '>

                                AI Revenue
                                <sup className=" text-[#AB23FF] text-[.7 rem] uppercase ml-[4px]   bg-black rounded-full px-1">
                                    soon
                                </sup>
                            </li>
                            <li className='mx-[2vw] border-b-2 p-[9px] border-t-2 border-[#13171D] '>

                                AI Launchpad
                                <sup className=" text-[#AB23FF] text-[.7 rem] uppercase ml-[4px]   bg-black rounded-full px-1">
                                    soon
                                </sup>
                            </li>

                        </ul>
                        <div className='absolute bottom-10 left-10' >
                            <ul className='flex space-x-5 '>
                                <li>
                                    <Image className='w-[2rem] border-2 rounded-full p-1' src={twitter} alt="twitter"   />
                                </li>
                                <li>
                                    <Image className='w-[2rem] border-2 rounded-full p-1' src={telegram} alt="telegram"   />
                                </li>
                                <li>
                                    <Image className='w-[2rem] border-2 rounded-full p-1' src={discord} alt="discord"   />
                                </li>
                            </ul>
                        </div>
                    </nav>

                </div>

            </div>
        </div>
    )
}

export default Nav