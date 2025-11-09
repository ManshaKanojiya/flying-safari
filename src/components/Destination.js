import React from 'react'
import Button from './Button'

const Destination = () => {
  const images = [
    { id: 1, text: "SERENGETI NATIONAL PARK", src: "/SERENGETI NATIONAL PARK.jpg" },
    { id: 2, text: "MAASAI MARA NATIONAL RESERVE", src: "/MAASAI MARA NATIONAL RESERVE.png" },
    { id: 3, text: "NGORONGORO CRATER", src: "/NGORONGORO CRATER.jpg" },
    { id: 4, text: "LAKE MANYARA NATIONAL PARK", src: "/LAKE MANYARA NATIONAL PARK.jpg" },
    { id: 5, text: "TARANGIRE NATIONAL PARK", src: "/TARANGIRE NATIONAL PARK.jpg" },
    { id: 6, text: "KILIMANJARO NATIONAL PARK", src: "/KILIMANAJARO NATIONAL PARK.jpg" },
    { id: 7, text: "RUAHA NATIONAL PARK", src: "/RUAHA NATIONAL PARK.jpg" },
    { id: 8, text: "MIKUMI NATIONAL PARK", src: "/MIKUMI NATIONAL PARK.jpg" },
    { id: 9, text: "KATAVI NATIONAL PARK", src: "/KATAVI NATIONAL PARK.jpg" },
  ];

  return (
    <section className="bg-[#FDFBF7] min-h-screen w-full pt-90 lg:pt-20">
      <div className=" mx-auto lg:px-4 lg:pt-[130px] gap-[20px] flex lg:flex-row flex-col-reverse w-[90%] items-center text-center gap-[40px]">
        <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-6 lg:w-[800px] mt-10">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.text}
                className="lg:w-full lg:h-[150px] w-[140px] h-[140px] object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <p style={{ fontFamily: 'Optima' }} className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-[16px] lg:text-lg lg:font-semibold tracking-wide text-center px-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className=' lg:w-[500px]'>
          <p style={{ fontFamily: 'OptimaM' }} className="text-[#D9A551] text-[18px]  font-medium mb-2 text-left">
            POPULAR DESTINATION
          </p>
          <h1 className="text-3xl lg:text-[48px] lg:block  hidden text-left text-[#48503B] mb-6" style={{ fontFamily: 'Optima' }}>
            East Africa Iconic Safari Destinations
          </h1>
          <h1 className="text-3xl lg:hidden block  text-left text-[#48503B] mb-6" style={{ fontFamily: 'Optima' }}>
            Tanzania’s Iconic Safari Destinations
          </h1>
          <Button
            value="Explore Destinations"
            className="bg-[#48503B] text-white flex justify-start px-6 text-[16px] py-3 rounded-md hover:bg-[#3a4231] transition"
            style={{ fontFamily: 'OptimaMB' }}
          />
        </div>

      </div>
      <div className='lg:mt-[100px] pt-20 lg:pt-0'>
        <p className="bg-[#FDFBF7]/95 lg:-mb-5 blur-sm inline-block w-full h-[20px]"></p>
        <div className='bg-[url("/destinationbg.jpg")]  h-fit lg:pb-[100px] lg:pt-[100px] '>
          <p className='text-[#ddae63] lg:w-[900px] m-auto text-[18px] text-center' style={{ fontFamily: 'OptimaM' }}>In Tanzania, the rhythm of the wild is untouched by time. From the roar of lions to the whispers of the savannah winds, the land invites you to wander beyond the ordinary and embrace.</p>
          <h1 className="lg:text-[48px] text-[28px] text-center pt-[20px]" style={{ fontFamily: 'Pacifico' }}>
            Flying Safari
          </h1>
          <div className='flex justify-center items-center realtive lg:pt-[150px] pt-[100px]'>
            <div className='-rotate-12 z-0'>
              <img src="/jet.png" alt="images" className='lg:w-[340px] lg:h-[460px] w-[90px] h-[127px]  ' />
            </div>
            <div className='z-20 lg:-mt-[130px] -mt-[50px]'>
              <img src="/lion.png" alt="images" className='lg:w-[340px] lg:h-[460px] w-[90px] h-[127px] ' />
            </div>
            <div className='rotate-12 z-0 '>
              <img src="/night.png" alt="images" className='lg:w-[340px] lg:h-[460px] w-[90px] h-[127px] ' />
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Button value="About us" style={{ fontFamily: 'OptimaMB' }} className="bg-[#48503b] text-white text-[16px] w-[72px]  h-fit p-1" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Destination;
