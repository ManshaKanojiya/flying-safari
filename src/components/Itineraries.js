'use client'
import React, { useRef } from 'react'
import Card from './Card'

const Itineraries = () => {
  const scrollRef = useRef(null)

  const metaData = [
    {
      countOfDay: "3",
      countOfLocation: "4",
      src: "/bull.png",
      alt: "Bulls",
      Locations: "Arusha, Ngorongoro Crater & Serengeti: Migration Safari"
    },
    {
      countOfDay: "8",
      countOfLocation: "4",
      src: "/safari.png",
      alt: "Safari",
      Locations: "Arusha, Tarangire, Ngorongoro & Serengeti: SkySafari"
    },
    {
      countOfDay: "7",
      countOfLocation: "4",
      src: "/zebra.png",
      alt: "Zebra",
      Locations: "Arusha, Ngorongoro, Serengeti & Zanzibar: Bush to Beach Safari"
    },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section
      className="w-full bg-[url('/bg.jpg')] bg-cover bg-center py-10 lg:py-[40px] px-4 lg:pl-[30px]"
      style={{ fontFamily: 'Optima' }}
    >
      <div className="flex flex-col gap-3 mb-6">
        <h4 className="text-[14px] sm:text-[16px] text-[#ddae63] tracking-wide">
          POPULAR ITINERARIES
        </h4>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-baseline gap-4 lg:gap-0">
          <h1 className="text-[24px] sm:text-[32px] lg:text-[48px] text-white leading-snug lg:w-[35%]">
            Safari Itineraries Curated Just for You
          </h1>

          <div className="hidden lg:flex gap-[20px]">
            <button onClick={() => scroll('left')}>
              <img
                src="/left.png"
                alt="Left arrow"
                className="w-[60px] h-[30px] xl:w-[82px] xl:h-[40px] cursor-pointer hover:opacity-80 transition"
              />
            </button>
            <button onClick={() => scroll('right')}>
              <img
                src="/right.png"
                alt="Right arrow"
                className="w-[60px] h-[30px] xl:w-[82px] xl:h-[40px] cursor-pointer hover:opacity-80 transition"
              />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex items-center gap-[20px] sm:gap-[30px] lg:gap-[40px] overflow-x-auto scroll-smooth scrollbar-hide pb-6"
      >
        {metaData.map((data, index) => (
          <Card
            key={index}
            countOfDay={data.countOfDay}
            countOfLocation={data.countOfLocation}
            src={data.src}
            alt={data.alt}
            Locations={data.Locations}
          />
        ))}
      </div>

      <div className="flex gap-[20px] justify-center items-center lg:hidden">
        <button onClick={() => scroll('left')}>
          <img
            src="/left.png"
            alt="Left arrow"
            className="w-[60px] h-[30px] sm:w-[70px] sm:h-[35px] cursor-pointer hover:opacity-80 transition"
          />
        </button>
        <button onClick={() => scroll('right')}>
          <img
            src="/right.png"
            alt="Right arrow"
            className="w-[60px] h-[30px] sm:w-[70px] sm:h-[35px] cursor-pointer hover:opacity-80 transition"
          />
        </button>
      </div>
    </section>
  )
}

export default Itineraries
