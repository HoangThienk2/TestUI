import { NFT_DROPS } from "../constants/nftDrops";
import React, { useState, useRef } from "react";

function NFTDropsCalendar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const mouseEndX = useRef(0);
  const isDragging = useRef(false);
  const minSwipeDistance = 50;

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

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNextClick();
    }
    if (isRightSwipe) {
      onPrevClick();
    }
  };

  // Mouse event handlers for desktop drag
  const handleMouseDown = (e) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
    e.preventDefault(); // Prevent image drag
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;

    const distance = mouseStartX.current - mouseEndX.current;
    const isLeftDrag = distance > minSwipeDistance;
    const isRightDrag = distance < -minSwipeDistance;

    if (isLeftDrag) {
      onNextClick();
    }
    if (isRightDrag) {
      onPrevClick();
    }

    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  return (
    <section className="flex flex-col w-full gap-[8px] max-w-[690px] mb-[40px] mx-auto md:mb-0 md:h-[280px] lg:h-[296px]">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[28px] lg:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[40px] lg:leading-[48px] uppercase">
          NFT Drops Calendar
        </h3>
        <div className="flex gap-[8px]">
          <button
            onClick={onPrevClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[36px] sm:w-[36px] lg:h-[40px] lg:w-[40px]"
          >
            <img src="/images/arrowleft.svg" alt="Previous" />
          </button>
          <button
            onClick={onNextClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[36px] sm:w-[36px] lg:h-[40px] lg:w-[40px]"
          >
            <img src="/images/arrowright.svg" alt="Next" />
          </button>
        </div>
      </div>
      <div
        className="h-[171px] rounded-[12px] w-full max-w-[690px] sm:h-[200px] md:h-[220px] lg:h-[240px] cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img
          className="h-full rounded-[12px] w-full object-cover transition-opacity duration-300 pointer-events-none"
          src={NFT_DROPS[currentIndex]}
          alt={`NFT Drop ${currentIndex + 1}`}
          draggable={false}
        />
      </div>
    </section>
  );
}

export default NFTDropsCalendar;
