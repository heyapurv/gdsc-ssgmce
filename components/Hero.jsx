import Gallery from './Gallery'
import CarouselCustomNavigation from './MainCarousel'


import React from 'react'

function Hero() {
  return (
    <>
    
    <div className='sm:mx-10 h-56 sm:h-[500px] sm:my-10 mx-2 my-5'>
        <CarouselCustomNavigation/>
    </div>

    <div className='sm:mx-10 sm:mt-10'>
        <Gallery/>
    </div>
   
    </>
  )
}

export default Hero
