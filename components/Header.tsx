import React from 'react'




const Header = () => {
  return (
    <div >

      <div className='h-[100vh]   '>
        <div className='flex flex-col justify-start gap-[2.083vw] px-[5vw] xl:px-[12.5vw] pb-[5.313vw] '>
          <h2 className=' text-white z-[5] text-left  xl:leading-[60px] xl:mt-[28.906vw] mt-[70vh] font-monumentExtended uppercase text-2xl leading-6 xl:text-[54px]'>THE WORLD&apos;S FIRST PLATFORM FOR TOKENIZING AI BLOCKCHAIN PROJECTS</h2>





    <div className='z-[5]  relative py-1 w-fit'>
    <span className=" 
      font-satoshi w-fit text-lg   bg-clip-text text-transparent  bg-gradient-to-r font-bold from-[#3D8BFF] to-[#AB23FF] ">Hold the Creon Pass NFT and earn passive income from AI Tools
          </span>


          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></div>
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></div>

    </div>
          
        </div>



        <video src={require("@/public/assets/videos/main-background-video.mp4")} loop muted autoPlay preload="metadata" className='h-full -z-40 top-0 absolute object-cover w-full  ' />
        <div className="absolute top-0 w-full  h-full bg-gradient-to-t from-black via-transparent " />





      </div>
    </div>
  )
}

export default Header