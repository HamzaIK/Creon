"use client"
import { useRef, useState } from 'react'
import Image from 'next/image'


//assests:
import one from '@/public/assets/images/1.svg'
import two from '@/public/assets/images/2.svg'
import three from '@/public/assets/images/3.svg'
import four from '@/public/assets/images/4.svg'

import rectangle1 from '@/public/assets/images/Rectangle 36.svg'
import rectangle3 from '@/public/assets/images/Rectangle 34.png'

import creon from '@/public/assets/images/CREON 1.png'

const Vision = () => {


    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowMore1, setIsShowMore1] = useState(false);
    const [isShowMore2, setIsShowMore2] = useState(false);
    const [isShowMore3, setIsShowMore3] = useState(false);

    const conRef = useRef<HTMLInputElement>(null);
    const conRef1 = useRef<HTMLInputElement>(null);
    const conRef2 = useRef<HTMLInputElement>(null);
    const conRef3 = useRef<HTMLInputElement>(null);





    return (
        <div className=' mt-28 xl:mx-0 mx-5  '>
            <div className=' mt-28 text-white '>
                <div className='xl:flex justify-evenly  w-full '>
                    <div className='xl:w-1/3  relative' >
                        <h3 className="text-white font-monumentExtended uppercase leading-[32px] xl:text-[1.9vw] text-3xl">Our vision is to support the innovation of AI blockchain projects <br /><span className=' bg-clip-text text-transparent  bg-gradient-to-r font-bold from-[#3D8BFF] to-[#AB23FF] font-monumentExtended text-3xl xl:text-[1.979vw]' >while prioritizing communities and democratizing profits</span></h3>
                        <Image src={creon}  className=' translate-x-36 object-contain' alt='creon' />
                    </div>







                    <div className='xl:w-1/3 xl:mx-10 cursor-pointer'>
                        <div onClick={() => setIsShowMore(!isShowMore)} className='flex    border-b-[1px] border-t-[1px] border-[#13171D] py-3 items-center'>

                            <div className='relative  w-full  '>

                                <Image src={rectangle3} className='  xl:w-[100px] w-full xl:h-[114px] object-contain ' alt='rectangle3' ></Image>
                                <svg  className="absolute xl:w-[68px] xl:h-[76px] w-[52px] h-[64px]  top-1/2 left-1/2 transform -translate-x-1/2 		  -translate-y-1/2 " fill="none" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${!isShowMore ? "fill-[#13171D] " : "fill-white"} transition-all duration-300`} d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z" fill="#13171D" />
                                </svg>



                                <Image src={rectangle1} className='xl:w-[56px] xl:h-[62px]  absolute top-1/2 w-[48px] h-[52px] left-1/2 transform -translate-x-1/2   -translate-y-1/2 ' alt='rectangle1' />
                                <Image src={one} className='w-[26px] h-[26px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='one' />

                            </div>

                            <div className='ml-4'>
                                <div className='flex justify-between'>
                                    <h3 className={` ${isShowMore ? "text-[#3D8BFF] " : "text-white hover:text-[#3D8BFF]"} transform-all duration-300 font-satoshi font-bold leading-[50px]    `}>Profitability and
                                        Growth</h3>
                                    <svg className={` w-10 h-10 p-2  `} viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={`${isShowMore ? "arrow-flip show" : "arrow-flip"}`} d="M1.00001 1C5 5 6 6 11 11C14.5 7.5 17.5 4.5 21 1" stroke="#fff" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>

                                <div ref={conRef} style={isShowMore ? {
                                    height: conRef.current?.scrollHeight + 'px'
                                } : { height: '0px' }} className={`${isShowMore ? 'con-height show ' : 'con-height'}   text-white font-satoshi`} >
                                    At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                                </div>
                            </div>

                        </div>

                        <div onClick={() => setIsShowMore1(!isShowMore1)} className='flex  border-b-[1px] border-t-[1px] border-[#13171D] py-3 items-center'>

                            <div className='relative  w-full  '>

                                <Image src={rectangle3} className='xl:w-[100px] w-full xl:h-[114px] object-contain  ' alt='rectangle3' ></Image>
                                <svg width="68" height="76" className="absolute xl:w-[68px] xl:h-[76px] w-[52px] h-[64px]  top-1/2 left-1/2 transform -translate-x-1/2 		  -translate-y-1/2  " fill="none" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${!isShowMore1 ? "fill-[#13171D] " : "fill-white"} transition-all duration-300`} d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z" fill="#13171D" />
                                </svg>



                                <Image src={rectangle1} className='xl:w-[56px] xl:h-[62px]  absolute top-1/2 w-[48px] h-[52px] left-1/2 transform -translate-x-1/2   -translate-y-1/2 ' alt='rectangle1' />
                                <Image src={two} className='w-[26px] h-[26px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='two' />

                            </div>

                            <div className='ml-4'>

                                <div className='flex justify-between'>
                                    <h3 className={` ${isShowMore1 ? "text-[#3D8BFF] " : "text-white hover:text-[#3D8BFF]"} transform-all duration-300 font-satoshi font-bold xl:leading-[50px]    `}>Transparent & Fair Decentralized Earnings</h3>
                                    <svg className={` w-10 h-10 p-2  `} viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={`${isShowMore1 ? "arrow-flip show" : "arrow-flip"}`} d="M1.00001 1C5 5 6 6 11 11C14.5 7.5 17.5 4.5 21 1" stroke="#fff" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div ref={conRef} style={isShowMore1 ? {
                                    height: conRef.current?.scrollHeight + 'px'
                                } : { height: '0px' }} className={`${isShowMore1 ? 'con-height show ' : 'con-height'}   text-white font-satoshi`} >
                                    At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                                </div>
                            </div>

                        </div>


                        <div onClick={() => setIsShowMore2(!isShowMore2)} className='flex    border-b-[1px] border-t-[1px] border-[#13171D] py-3 items-center'>

                            <div className='relative  w-full  '>

                                <Image src={rectangle3} className='xl:w-[100px] w-full xl:h-[114px] object-contain ' alt='rectangle3' ></Image>
                                <svg width="68" height="76" className="absolute xl:w-[68px] xl:h-[76px] w-[52px] h-[64px]  top-1/2 left-1/2 transform -translate-x-1/2 		  -translate-y-1/2  " fill="none" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${!isShowMore2 ? "fill-[#13171D] " : "fill-white"} transition-all duration-300`} d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z" fill="#13171D" />
                                </svg>



                                <Image src={rectangle1} className='xl:w-[56px] xl:h-[62px]  absolute top-1/2 w-[48px] h-[52px] left-1/2 transform -translate-x-1/2   -translate-y-1/2' alt='rectangle1' />
                                <Image src={three} className='w-[26px] h-[26px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='tree' />

                            </div>

                            <div className='ml-4'>

                                <div className='flex justify-between'>
                                    <h3 className={` ${isShowMore2 ? "text-[#3D8BFF] " : "text-white hover:text-[#3D8BFF]"} transform-all duration-300 font-satoshi font-bold leading-[50px]    `}>Launching the
                                        future</h3>
                                    <svg className={` w-10 h-10 p-2  `} viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={`${isShowMore2 ? "arrow-flip show" : "arrow-flip"}`} d="M1.00001 1C5 5 6 6 11 11C14.5 7.5 17.5 4.5 21 1" stroke="#fff" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div ref={conRef} style={isShowMore2 ? {
                                    height: conRef.current?.scrollHeight + 'px'
                                } : { height: '0px' }} className={`${isShowMore2 ? 'con-height show ' : 'con-height'}   text-white font-satoshi`} >
                                    At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                                </div>
                            </div>

                        </div>

                        <div onClick={() => setIsShowMore3(!isShowMore3)} className='flex    border-b-[1px] border-t-[1px] border-[#13171D] py-3 items-center'>

                            <div className='relative  w-full  '>

                                <Image src={rectangle3} className='xl:w-[100px] w-full xl:h-[114px] object-contain  ' alt='rectangle3' ></Image>
                                <svg width="68" height="76" className="absolute xl:w-[68px] xl:h-[76px] w-[52px] h-[64px]  top-1/2 left-1/2 transform -translate-x-1/2 		  -translate-y-1/2  " fill="none" viewBox="0 0 68 76" xmlns="http://www.w3.org/2000/svg">
                                    <path className={`${!isShowMore3 ? "fill-[#13171D] " : "fill-white"} transition-all duration-300`} d="M0 22.5204C0 20.3467 1.1756 18.343 3.07307 17.2827L31.0731 1.63563C32.892 0.619181 35.108 0.619184 36.9269 1.63564L64.9269 17.2827C66.8244 18.343 68 20.3467 68 22.5204V53.4796C68 55.6533 66.8244 57.657 64.9269 58.7173L36.9269 74.3644C35.108 75.3808 32.892 75.3808 31.0731 74.3644L3.07307 58.7173C1.1756 57.657 0 55.6533 0 53.4796V22.5204Z" fill="#13171D" />
                                </svg>



                                <Image src={rectangle1} className='xl:w-[56px] xl:h-[62px]  absolute top-1/2 w-[48px] h-[52px] left-1/2 transform -translate-x-1/2   -translate-y-1/2 ' alt='rectangle1' />
                                <Image src={four} className='w-[26px] h-[26px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='four' />

                            </div>

                            <div className='ml-4'>

                                <div className='flex justify-between'>
                                    <h3 className={` ${isShowMore3 ? "text-[#3D8BFF] " : "text-white hover:text-[#3D8BFF]"} transform-all duration-300 font-satoshi font-bold leading-[50px]    `}>Limitless Possibilities of AI & Crypto</h3>
                                    <svg className={` w-10 h-10 p-2  `} viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className={`${isShowMore3 ? "arrow-flip show" : "arrow-flip"}`} d="M1.00001 1C5 5 6 6 11 11C14.5 7.5 17.5 4.5 21 1" stroke="#fff" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div ref={conRef} style={isShowMore3 ? {
                                    height: conRef.current?.scrollHeight + 'px'
                                } : { height: '0px' }} className={`${isShowMore3 ? 'con-height show ' : 'con-height'}   text-white font-satoshi`} >
                                    At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                                </div>
                            </div>

                        </div>










                    </div>







                </div>
            </div>
        </div>
    )
}

export default Vision