import Connect from './Connect'
import Gallery from './Gallery'
import CarouselCustomNavigation from './MainCarousel'


import React from 'react'
import TextCr from './TextCr'

function Hero() {
  return (
    <>
    
    <div className='sm:mx-10 h-56 sm:h-[500px] sm:my-10 mx-2 my-5'>
        <TextCr/>
        
    </div>
    <Connect/>
   
    </>
  )
}

export default Hero
