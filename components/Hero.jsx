import Connect from './Connect'

import Marquee from './Marquee'
import BentoGrid from './BentoGrid'

import React from 'react'
import TextCr from './TextCr'



function Hero() {
  return (
    <>
    
    <div className='sm:mx-10 h-56 sm:h-[500px] sm:my-10 mx-2 my-5 shadow-2xl rounded-xl shadow-gray-600'>
        <TextCr/>
        
    </div>
  
    <div className='sm:my-20 sm:mb-36'>
    <BentoGrid/>
    </div>
    <div className='sm:my-10 '>
    <Marquee/>
    </div>
    <Connect/>
   
    </>
  )
}

export default Hero
