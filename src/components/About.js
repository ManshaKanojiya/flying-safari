import React from 'react'
import Form from './Form'
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { TbClipboardList } from "react-icons/tb";
import { BsBuildingCheck } from "react-icons/bs";

const About = () => {
  return (
    <section className='relative lg:w-screen w-[90%] m-auto lg:m-0 h-fit  '>
      <div className='absolute -top-[140px] lg:left-[30px] h-[300px] w-[95%] '>
        <div className='bg-[#f3f3f3] lg:w-fit w-[80%] h-[50px]  rounded-t-xl'>
          <ul className='flex lg:justify-evenly justify-between items-center lg:gap-[50px]  h-[50px] '>
            <li className='bg-white flex justify-center items-center p-6 lg:p-2 text-[#48503B] h-full   rounded-tl-sm '><MdOutlineFlightTakeoff /><span className='lg:block hidden'>Book flights</span></li>
            <li className=''><TbClipboardList /><span className='lg:block hidden'>Find Reservation</span></li>
            <li className='p-2'><BsBuildingCheck /><span className='lg:block hidden'>check-in</span></li>
          </ul>
        </div>
        <Form />

      </div>
    </section>
  )
}

export default About
