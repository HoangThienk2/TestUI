import { NFT_COLLECTIONS } from "../constants/nftCollections";
import React from "react";

function NFTCollections() {
  return (
    <div className="flex flex-col w-full gap-[8px] max-w-[1128px] mb-[40px] pl-[20px] sm:h-[301px] sm:mx-auto sm:pl-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[16px] barlow-semi-condensed-black-italic leading-[32px] sm:leading-[48px] sm:text-[24px] tracking-[0%] uppercase">
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
      <div className="w-full overflow-x-auto scrollbar-hide">
        <ul className="flex w-full gap-[16px]">
          {NFT_COLLECTIONS.map((img, idx) => (
            <li
              key={img}
              className="flex-shrink-0 h-[140px] rounded-[12px] w-[102px] sm:h-[245px] sm:w-[180px]"
            >
              <img
                className="h-full rounded-[12px] w-full object-cover"
                src={img}
                alt={"NFT Collection " + (idx + 1)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NFTCollections;
