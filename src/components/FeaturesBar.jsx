import { FEATURES } from "../constants/features";
import React from "react";

function FeaturesBar() {
  return (
    <section className="flex bg-[#1F2023] h-[92px] justify-center w-full items-center sm:h-[121.88px]">
      <div className="flex h-full justify-between w-full items-center max-w-[1128px] mx-auto">
        <ul className="flex justify-between w-full items-center">
          {FEATURES.map((item) => (
            <li
              key={item.text}
              className="flex flex-col h-[60px] justify-center w-full cursor-pointer items-center max-w-[105px] sm:h-[74px] sm:justify-between"
            >
              <img
                className="h-[27.87px] w-[35.63px] mb-[8px] sm:h-[42px] sm:mb-[12px] sm:w-[53.44px]"
                src={item.img}
                alt=""
              />
              <p className="text-[#FFFFFF] text-[10px] text-center w-full font-body font-normal leading-[12px] sm:text-[14px] tracking-[0%] uppercase">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturesBar;
