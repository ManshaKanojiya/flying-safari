import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className='bg-[url("/bg.jpg")] bg-cover bg-center w-full h-fit px-6 sm:px-10 lg:px-[40px] py-[40px] lg:py-[60px] flex flex-col justify-between gap-[40px]'
      style={{ fontFamily: "Optima" }}
    >
      <div className='flex flex-col sm:flex-wrap sm:flex-row justify-between gap-[40px]'>

        <div className='flex flex-col w-full sm:w-[45%] lg:w-[20%] gap-[20px] items-start'>
          <img
            src='/logo.png'
            alt='logo'
            className='w-[160px] sm:w-[180px] lg:w-[200px] h-auto'
          />
          <ul className='flex justify-start items-center gap-[15px]'>
            <li className='text-white text-[22px] cursor-pointer hover:text-[#D9A551] transition'><FaInstagramSquare /></li>
            <li className='text-white text-[22px] cursor-pointer hover:text-[#D9A551] transition'><FaFacebook /></li>
            <li className='text-white text-[22px] cursor-pointer hover:text-[#D9A551] transition'><FaLinkedin /></li>
            <li className='text-white text-[22px] cursor-pointer hover:text-[#D9A551] transition'><FaSquareXTwitter /></li>
          </ul>
        </div>
        <div className='flex lg:gap-[200px]'>
          <div className='flex flex-col justify-start items-start w-full sm:w-[45%] lg:w-auto'>
            <h1 className='text-[#D9A551] pb-[10px] text-[16px] font-semibold'>Destination</h1>
            <ul className='text-white text-[13px] gap-[6px] flex flex-col'>
              <li>Arusha</li>
              <li>Serengeti</li>
              <li>Kilimanjaro</li>
              <li>Ngorongoro Crater</li>
              <li>Lake Manyara</li>
              <li>Tarangire</li>
              <li>Mahale Mountains</li>
            </ul>
          </div>
          <div className='flex flex-col justify-start items-start w-full sm:w-[45%] lg:w-auto'>
            <h1 className='text-[#D9A551] pb-[10px] text-[16px] font-semibold'>Resources</h1>
            <ul className='text-white text-[13px] gap-[6px] flex flex-col'>
              <li>About Us</li>
              <li>Itineraries</li>
              <li>Destination</li>
              <li>Gallery</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full sm:w-[45%] lg:w-auto'>
          <h1 className='text-[#D9A551] pb-[10px] text-[16px] font-semibold'>Contact Us</h1>
          <ul className='text-white text-[13px] gap-[6px] flex flex-col'>
            <li>+255 58954 58945</li>
            <li>info@flyingsafari.ae</li>
            <li>contact@flyingsafari.ae</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/20 pt-[20px]'>
        <ul className='flex flex-col lg:flex-row gap-[20px] justify-center lg:justify-between items-center text-white text-[12px] text-center'>
          <li>© 2025 Flying Safari Limited. All rights reserved.</li>
          <li>
            Designed & Developed by{" "}
            <span className='text-[#D9A551] font-semibold cursor-pointer hover:underline'>
              DotSyndicate
            </span>
          </li>
          <li>
            <ul className='flex justify-center items-center gap-[15px]'>
              <li className='cursor-pointer hover:text-[#D9A551] transition'>
                Privacy Policy
              </li>
              <li className='cursor-pointer hover:text-[#D9A551] transition'>
                Terms & Conditions
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
