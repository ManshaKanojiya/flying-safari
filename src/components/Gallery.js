import React from 'react'
import Carousel, { EmblaCarousel } from './galleryCarousel'

const Gallery = () => {
  return (
    <section className='bg-white w-full min-h-screen pt-20 lg:pt-0' style={{fontFamily:"Optima"}}>
      <div className='mx-auto  pt-[30px]'>
        <p className='text-[#D9A551] text-[17px] text-center'>Gallery</p>
        <h1  className='text-[#2C2C2C] text-center lg:w-[70%] m-auto text-[28px] lg:text-[48px]'>A selection of Images of Our Beautiful Safari Experiences</h1>
      </div>
      <div>
        <Carousel/>
      </div>
    </section>
  )
}

export default Gallery
