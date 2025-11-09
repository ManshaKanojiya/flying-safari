'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 relative z-50">
      <div className='hidden lg:block'>
        <img src="/logo.png" alt="logo" className="w-[180px] " />
      </div>
      <div className='lg:hidden block'>
        <img src="/logoForMobile.png" alt="logo" className="w-[100px] text-white " />

      </div>

      <ul className="hidden lg:flex gap-6 bg-white/20 backdrop-blur-sm border border-white w-fit rounded-xl h-fit p-2">
        <li className='text-white text-[17px] font-semibold'>
          <Link href="/#about">About</Link>
        </li>
        <li className='text-white text-[17px] font-semibold'>
          <Link href="/#destination">Destination</Link>
        </li>
        <li className='text-white text-[17px] font-semibold'>
          <Link href="/#itineraries">Itineraries</Link>
        </li>
        <li className='text-white text-[17px] font-semibold'>
          <Link href="/#gallery">Gallery</Link>
        </li>
        <li className='text-white text-[17px] font-semibold'>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => setIsOpen(true)}
        className="text-white text-3xl lg:hidden focus:outline-none"
      >
        <FiMenu />
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-[70%] sm:w-[50%] bg-[#48503B] text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-8">
          <img src="/logo.png" alt="logo" className="w-[150px]" />
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl focus:outline-none"
          >
            <FiX />
          </button>
        </div>

        <ul className="flex flex-col gap-6 text-lg font-medium">
          <li>
            <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/#destination" onClick={() => setIsOpen(false)}>Destination</Link>
          </li>
          <li>
            <Link href="/#itineraries" onClick={() => setIsOpen(false)}>Itineraries</Link>
          </li>
          <li>
            <Link href="/#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
          </li>
          <li>
            <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  )
}

export default Navbar
