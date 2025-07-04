import { NFT_DROPS } from "../constants/nftDrops";
import React from "react";

function NFTDropsCalendar() {
  return (
    <section className="flex flex-col w-full gap-[8px] max-w-[600px] mb-[40px] mx-auto sm:h-[301px] sm:mb-0">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[48px] uppercase">
          NFT Drops Calendar
        </h3>
        <div className="flex gap-[8px]">
          <button className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]">
            <img src="/images/arrowleft.svg" alt="" />
          </button>
          <button className="flex bg-[#383A42] h-[32px] justify-center rounded-[12px] w-[32px] cursor-pointer hover:opacity-80 items-center sm:h-[40px] sm:w-[40px]">
            <img src="/images/arrowright.svg" alt="" />
          </button>
        </div>
      </div>
      <ul className="flex gap-[16px]">
        {NFT_DROPS.map((img, idx) => (
          <li
            key={img}
            className="h-[171px] rounded-[12px] w-full max-w-[600px] sm:h-[240px]"
          >
            <img
              className="h-full rounded-[12px] w-full object-cover"
              src={img}
              alt={"NFT Drop " + (idx + 1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default NFTDropsCalendar;
