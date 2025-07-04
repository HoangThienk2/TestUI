import { HOT_NFT } from "../constants/hotNft";
import React from "react";

function HotNFT() {
  return (
    <section className="flex flex-col w-full gap-[8px] max-w-[240px] mx-auto md:h-[280px] lg:h-[301px]">
      <div className="flex justify-between w-full">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[28px] lg:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[40px] lg:leading-[48px] uppercase">
          HOT NFT
        </h3>
      </div>
      <ul className="flex gap-[16px]">
        {HOT_NFT.map((img, idx) => (
          <li
            key={img}
            className="h-[167px] rounded-[12px] w-[167px] sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] lg:h-[240px] lg:w-[240px]"
          >
            <img
              className="h-full rounded-[12px] w-full object-cover"
              src={img}
              alt={"Hot NFT " + (idx + 1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HotNFT;
