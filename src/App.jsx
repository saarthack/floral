import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import phool from './assets/phool.png'
import LocomotiveScroll from 'locomotive-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import CenterText from './components/CenterText'
import ParagraphDiv from './components/ParagraphDiv'
import BottomDiv from './components/BottomDiv'
import Footer from './components/Footer'


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  const imageRef = useRef(null)
  const mainRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () { 
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:mainRef.current,
        // markers:true,
        start:"top 0",
        end:"top -220%",
        scrub:1
      }
    })
    tl.to(imageRef.current, {
      transform: 'translateY(-20%)',
      duration: 1,
    })
    tl.to(imageRef.current,{
      transform: 'translateY(-20%) scale(0.6)',
      duration: 1,
    })
  })

  return (
    <div ref={mainRef} className='bg-[#FF8676] min-h-screen text-white w-full'>
      <Navbar />
      <div id="center" className='relative pb-[15vw] pt-[15vw] px-[8vw] font-[ogg]'>
        <CenterText />
        <ParagraphDiv />
        <BottomDiv />
        <img ref={imageRef} src={phool} className='fixed left-[6.5%] top-0 h-[86vw]' alt="" />
      </div>
      <Footer />
    </div>
  )
}

export default App