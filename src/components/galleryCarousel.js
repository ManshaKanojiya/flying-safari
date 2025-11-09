"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
  "/bull.png",
  "/safari.png",
  "/zebra.png",
  "/lion.png",
  "/LAKE MANYARA NATIONAL PARK.jpg",
  "/KILIMANAJARO NATIONAL PARK.jpg",
  "/KATAVI NATIONAL PARK.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(2);
  const [offsetX, setOffsetX] = useState(250);

  useEffect(() => {
    const updateOffset = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) setOffsetX(180);
        else if (window.innerWidth < 1024) setOffsetX(220);
        else setOffsetX(250);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[600px] flex flex-col items-center justify-center overflow-hidden">
      <div className="flex justify-center items-center relative w-full max-w-[90vw] lg:max-w-[1200px]">
        {images.map((src, index) => {
          const offset = index - current;

          return (
            <motion.div
              key={src}
              animate={{
                scale: offset === 0 ? 1 : 0.8,
                opacity: Math.abs(offset) > 1 ? 0 : 1,
                x: offset * offsetX,
                zIndex: offset === 0 ? 10 : 5,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute"
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                className={`shadow-lg rounded-lg object-cover mx-auto
                w-[230px] h-[300px]
                sm:w-[300px] sm:h-[380px]
                lg:w-[380px] lg:h-[450px]
                ${offset === 0 ? "opacity-100" : "opacity-90"}`}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="absolute bottom-6 flex justify-center items-center gap-8">
        <button
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/40 p-3 sm:p-4 rounded-full transition"
        >
          <img src="/left.png" alt="left" className="w-6 sm:w-8 h-6 sm:h-8" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/40 p-3 sm:p-4 rounded-full transition"
        >
          <img src="/image.png" alt="right" className="w-6 sm:w-8 h-6 sm:h-8" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
