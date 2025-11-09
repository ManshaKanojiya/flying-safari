import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import About from '../../components/About'
import Destination from '@/components/Destination'
import Itineraries from '@/components/Itineraries'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Travel from '@/components/travel'
import Footer from '@/components/Footer'

const HomePage = () => {
  return (
    <>
      <section
        id="home"
        className="relative h-screen bg-[url('/home.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className='relative z-20'>
          <Navbar />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-fit lg:h-[400px] lg:px-5 text-white text-center lg:text-left gap-8">
          <p className="text-[24px] lg:text-[48px] lg:w-[650px]" style={{ fontFamily: 'Optima' }}>
            Embark on <span style={{ fontFamily: 'Pacifico' }}>experiences</span> not just destinations with <span  style={{ fontFamily: 'Pacifico' }}>our trips</span>
          </p>

          <p className="text-[14px] lg:text-4xl -mr-45 lg:-mr-0" style={{ fontFamily: 'OptimaB' }}>
            Next <span className="inline-block border  border-white w-[100px] lg:mb-2 mb-1"></span>
          </p>
        </div>
      </section>
      <div className='relative'>
        <section id='about' className=''>
          <About />
        </section>
        <section id='destination'>
          <Destination />
        </section>
      </div>
      <section id='itineraries'>
        <Itineraries />
      </section>
      <section>
        <Travel/>
      </section>
      <section id='gallery'>
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer/>
      </section>
    </>
  )
}

export default HomePage
