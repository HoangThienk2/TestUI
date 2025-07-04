import { PROMOTION } from "../constants/promotion";
import React from "react";

function Promotion() {
  return (
    <section className="flex flex-col w-full gap-[8px] max-w-[240px] mx-auto sm:h-[301px]">
      <div className="flex justify-between w-full">
        <h3 className="text-[#FFC700] text-[24px] sm:text-[32px] font-['Barlow_Semi_Condensed'] font-black italic leading-[32px] sm:leading-[48px] uppercase">
          PROMOTION
        </h3>
      </div>
      <ul className="flex gap-[16px]">
        {PROMOTION.map((img, idx) => (
          <li
            key={img}
            className="h-[167px] rounded-[12px] w-[167px] sm:h-[240px] sm:w-[240px]"
          >
            <img
              className="h-full rounded-[12px] w-full object-cover"
              src={img}
              alt={"Promotion " + (idx + 1)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Promotion;
