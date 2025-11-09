import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <section className='bg-white w-screen min-h-screen pt-[40px] ' style={{ fontFamily: "Optima" }} >
      <div className='flex flex-col gap-[100px]'>
        <div className='px-[30px]'>
          <p className='text-[#D9A551] text-16px'>BLOGS & JOURNALS</p>
          <div className='flex justify-between items-center'>
            <h1 className='lg:text-[48px] text-[28px] lg:w-[30%]'>Safari Stories & Travel Insights</h1>
            <div className='lg:flex hidden gap-[20px] '>
              <button >
                <img src="/left.png" alt="Left arrow" className='w-[70px] h-[40px] cursor-pointer' />
              </button>
              <button>
                <img src="/image.png" alt="Right arrow" className='w-[70px] h-[40px] cursor-pointer' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex lg:justify-around justify-center lg:flex-row flex-col items-center gap-20 lg:gap-0'>
          <img src='/01.png' alt="img" className='lg:w-[350px] w-[300px] h-[350px] lg:h-[400px]' />
          <img src='/02.png' alt='img' className='lg:w-[350px] w-[300px] h-[350px] lg:h-[400px]' />
          <img src='/3.png' alt='img' className='lg:w-[350px] w-[300px] h-[350px] lg:h-[400px]' />
        </div>
        <div className='flex lg:hidden justify-center items-center gap-[20px] '>
          <button >
            <img src="/left.png" alt="Left arrow" className='lg:w-[70px] w-[40px] h-[20px] lg:h-[40px] cursor-pointer' />
          </button>
          <button>
            <img src="/image.png" alt="Right arrow" className='lg:w-[70px] w-[40px] h-[20px] lg:h-[40px] cursor-pointer' />
          </button>
        </div>
      </div>
      <div className='lg:w-screen h-[150px] bg-white   blur-sm'></div>
      <div className='bg-[url("/contact.jpg")] w-screen h-[400px] lg:h-screen mt-[-30px] lg:mt-[-90px] bg-cover'>
        <h1 className='lg:text-[170px] text-[48px] text-center text-white'>FLYING SAFARI</h1>
        <div className='lg:mx-[25%] mx-[10%]  mt-[7%]'>
          <h3 className='text-2xl text-white'>Subscribe for latest update & offers</h3>
          <div className='flex border border-white bg-white/70  gap-10 rounded-full w-fit p-2'>
            <input
              type="email"
              placeholder="Your email address"
              className="lg:w-[400px] w-[130px] placeholder:text-black  h-fit p-2 rounded-2xl outline-none focus:outline-none focus:ring-0 focus:border-transparent"
            />
            <Button value="Subscribe" className="lg:w-[150px] h-fit rounded-full text-white p-2 bg-[#48503B] " />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
