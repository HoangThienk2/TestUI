import { NFT_COLLECTIONS } from "../constants/nftCollections";
import React, { useState, useEffect } from "react";

function NFTCollections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 640 ? 7 : 4);
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
      // Nếu đã đến cuối mảng gốc, quay lại đầu
      if (newIndex >= NFT_COLLECTIONS.length) {
        return 0;
      }
      return newIndex;
    });
  };

  // Lấy các ảnh hiển thị, bao gồm cả phần overlap để tạo hiệu ứng liên tục
  const visibleImages = duplicatedImages.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="flex flex-col w-full gap-[8px] max-w-[1128px] mb-[40px] pl-[20px] sm:mx-auto sm:pl-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[48px] uppercase">
          New NFT Collections
        </h3>
        <div className="flex gap-[8px] mr-[20px] sm:mr-0">
          <button
            onClick={onPrevClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] items-center sm:h-[40px] sm:w-[40px] cursor-pointer hover:opacity-80"
          >
            <img src="/images/arrowleft.svg" alt="Previous" />
          </button>
          <button
            onClick={onNextClick}
            className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] items-center sm:h-[40px] sm:w-[40px] cursor-pointer hover:opacity-80"
          >
            <img src="/images/arrowright.svg" alt="Next" />
          </button>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex flex-row items-center gap-[8px] h-[140px] sm:gap-[16px] sm:h-[245px] transition-transform duration-300">
          {visibleImages.map((img, idx) => (
            <div
              key={`${img}-${idx}`}
              className="flex-none w-[102px] h-[140px] rounded-[12px] overflow-hidden sm:w-[180px] sm:h-[245px]"
            >
              <img
                className="w-full h-full object-cover rounded-[12px]"
                src={img}
                alt={`NFT Collection ${(currentIndex + idx) % NFT_COLLECTIONS.length + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NFTCollections;
