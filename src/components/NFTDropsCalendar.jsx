import { NFT_DROPS } from "../constants/nftDrops";
import React, { useState } from "react";

function NFTDropsCalendar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return NFT_DROPS.length - 1;
      }
      return newIndex;
    });
  };

  const onNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= NFT_DROPS.length) {
        return 0;
      }
      return newIndex;
    });
  };

  return (
    <section className="flex flex-col w-full gap-[8px] max-w-[600px] mb-[40px] mx-auto sm:h-[301px] sm:mb-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[48px] uppercase">
          NFT Drops Calendar
        </h3>
        <div className="flex gap-[8px]">
          <button
            onClick={onPrevClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]"
          >
            <img src="/images/arrowleft.svg" alt="Previous" />
          </button>
          <button
            onClick={onNextClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]"
          >
            <img src="/images/arrowright.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div className="h-[171px] rounded-[12px] w-full max-w-[600px] sm:h-[240px]">
        <img
          className="h-full rounded-[12px] w-full object-cover transition-opacity duration-300"
          src={NFT_DROPS[currentIndex]}
          alt={`NFT Drop ${currentIndex + 1}`}
        />
      </div>
    </section>
  );
}

export default NFTDropsCalendar;
