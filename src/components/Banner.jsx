import React, { useState, useEffect } from "react";
import { BANNER_IMAGES } from "../constants/bannerImages";

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === BANNER_IMAGES.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="h-[180px] w-full lg:h-[450px] relative">
      <img
        className="h-full w-full banner-img-desktop object-bottom object-cover transition-opacity duration-500"
        src={BANNER_IMAGES[currentSlide]}
        alt={`Banner ${currentSlide + 1}`}
      />
      <ul className="flex justify-center absolute bottom-[8px] gap-[4px] left-0 right-0 sm:bottom-[20px] sm:gap-[12px]">
        {BANNER_IMAGES.map((_, idx) => (
          <li
            key={idx}
            className={`h-[4px] rounded-[20px] w-[16px] cursor-pointer hover:bg-[#FFC700] sm:h-[4px] sm:w-[28px] transition-all ${currentSlide === idx ? "bg-[#FFC700]" : "bg-white"
              }`}
            onClick={() => goToSlide(idx)}
          ></li>
        ))}
      </ul>
    </section>
  );
}

export default Banner;
