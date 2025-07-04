import { NFT_COLLECTIONS } from "../constants/nftCollections";
import React from "react";

function NFTCollections() {
  return (
    <div className="flex flex-col w-full gap-[8px] max-w-[1128px] mb-[40px] pl-[20px] sm:mx-auto sm:pl-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[48px] uppercase">
          New NFT Collections
        </h3>
        <div className="flex gap-[8px] mr-[20px] sm:mr-0">
          <button className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]">
            <img src="/images/arrowleft.svg" alt="" />
          </button>
          <button className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]">
            <img src="/images/arrowright.svg" alt="" />
          </button>
        </div>
      </div>

      {/* Main image container */}
      <div className="flex flex-row items-center gap-[8px] w-full h-[140px] overflow-x-auto sm:gap-[16px] sm:w-[1356px] sm:h-[245px]">
        {NFT_COLLECTIONS.map((img, idx) => (
          <div
            key={img}
            className="flex-none w-[102px] h-[140px] rounded-[12px] overflow-hidden sm:w-[180px] sm:h-[245px]"
          >
            <img
              className="w-full h-full object-cover rounded-[12px]"
              src={img}
              alt={`NFT Collection ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NFTCollections;
