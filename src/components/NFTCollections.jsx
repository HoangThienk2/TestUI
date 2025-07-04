import { NFT_COLLECTIONS } from "../constants/nftCollections";
import React, { useState, useEffect, useRef } from "react";

function NFTCollections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const mouseStartX = useRef(0);
  const mouseEndX = useRef(0);
  const isDragging = useRef(false);
  const minSwipeDistance = 50;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(7);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(5);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Tạo mảng ảnh lặp lại để tạo hiệu ứng cuộn vòng
  const duplicatedImages = [...NFT_COLLECTIONS, ...NFT_COLLECTIONS];

  const onPrevClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      // Nếu đã về đầu mảng gốc, nhảy đến vị trí tương ứng ở mảng duplicate
      if (newIndex < 0) {
        return NFT_COLLECTIONS.length - 1;
      }
      return newIndex;
    });
  };

  const onNextClick = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= NFT_COLLECTIONS.length) {
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

  const visibleImages = duplicatedImages.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="flex flex-col w-full gap-[8px] max-w-[1128px] mb-[40px] pl-[20px] md:mx-auto md:px-[40px] lg:px-[40px] xl:px-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[28px] lg:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[40px] lg:leading-[48px] uppercase">
          New NFT Collections
        </h3>
        <div className="flex gap-[8px] mr-[20px] md:mr-0">
          <button
            onClick={onPrevClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] items-center sm:h-[36px] sm:w-[36px] lg:h-[40px] lg:w-[40px] cursor-pointer hover:opacity-80"
          >
            <img src="/images/arrowleft.svg" alt="Previous" />
          </button>
          <button
            onClick={onNextClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] items-center sm:h-[36px] sm:w-[36px] lg:h-[40px] lg:w-[40px] cursor-pointer hover:opacity-80"
          >
            <img src="/images/arrowright.svg" alt="Next" />
          </button>
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-row items-center gap-[8px] h-[140px] sm:gap-[12px] sm:h-[180px] md:gap-[16px] lg:h-[245px] transition-transform duration-300">
          {visibleImages.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="flex-none w-[102px] h-[140px] rounded-[12px] overflow-hidden sm:w-[140px] sm:h-[180px] lg:w-[180px] lg:h-[245px]"
            >
              <img
                className="w-full h-full object-cover rounded-[12px] pointer-events-none"
                src={img}
                alt={`NFT Collection ${(currentIndex + idx) % NFT_COLLECTIONS.length + 1}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NFTCollections;
