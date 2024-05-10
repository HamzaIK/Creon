'use client'
import {useEffect} from 'react'
import Header from '@/components/Header'
import Pass from '@/components/Pass'
import Profiting from '@/components/Profiting'
import Vision from '@/components/Vision'
import Cards from '@/components/Cards'
import RoadMap from '@/components/RoadMap'


const Home = () => {

  useEffect(() => {

    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()

  }, []);

  return (
    <div>
      
     
      
      
      <Header />
      <Pass />
      <Profiting />
      <Vision />
      <Cards />
      <RoadMap />
      
    </div>
  )
}

export default Home