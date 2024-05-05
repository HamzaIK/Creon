"use client"
import { useRef, useState } from 'react'
import Image from 'next/image'


//assests:
import one from '@/public/assets/images/1.svg'
import two from '@/public/assets/images/2.svg'
import three from '@/public/assets/images/3.svg'
import four from '@/public/assets/images/4.svg'

import rectangle1 from '@/public/assets/images/Rectangle 36.svg'
import rectangle2 from '@/public/assets/images/Rectangle 35.svg'
import rectangle3 from '@/public/assets/images/Rectangle 34.png'


const Vision = () => {


    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowMore1, setIsShowMore1] = useState(false);
    const [isShowMore2, setIsShowMore2] = useState(false);
    const [isShowMore3, setIsShowMore3] = useState(false);
    const [isShowMore4, setIsShowMore4] = useState(false);
    const conRef = useRef<HTMLInputElement>(null);
    const conRef1 = useRef(null);
    const conRef2 = useRef(null);
    const conRef3 = useRef(null);
    const conRef4 = useRef(null);




    return (
        <div className=' mt-28 text-white '>
            <div className='flex justify-evenly w-full '>
                <div className='w-1/3' >
                    <h3 className="text-white font-monumentExtended uppercase leading-[32px] text-[1.9vw]">Our vision is to support the innovation of AI blockchain projects <br /><span className='text-[#3D8BFF] font-monumentExtended text-[1.979vw]' >while prioritizing communities and democratizing profits</span></h3>
                </div>











                <div onClick={() => setIsShowMore(!isShowMore)} className='flex w-1/3 m-10 h-full   items-center'>
                    <div className='relative  w-full  '>
                        <Image src={rectangle3} className='w-[100px] h-[114px] object-contain '  alt='rectangle3' ></Image>
                        <Image src={rectangle2} className='w-[68px] h-[76px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ' alt='rectangle2' />
                                    <Image src={rectangle1} className='w-[56px] h-[62px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='rectangle1' />
                                    <Image src={one} className='w-[26px] h-[26px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' alt='one' />

                    </div>
                    <div className='h-full flex-col origin-top '>
                        <h3 className='text-white  '>Transparent & Fair Decentralized Earnings</h3>
                        <div ref={conRef} style={isShowMore ? {
                            height: conRef.current?.scrollHeight + 'px'
                        } : { height: '0px' }} className={`${isShowMore ? 'con-height show ' : 'con-height'}   text-white font-satoshi`} >
                            At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.
                        </div>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default Vision