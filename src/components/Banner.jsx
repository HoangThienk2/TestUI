import React from "react";

function Banner() {
  return (
    <section className="h-[180px] w-full lg:h-[450px] relative">
      <img
        className="h-full w-full banner-img-desktop object-bottom object-cover"
        src="/images/banner1.png"
        alt=""
      />
      <ul className="flex justify-center absolute bottom-[8px] gap-[4px] left-0 right-0 sm:bottom-[20px] sm:gap-[12px]">
        {[...Array(9)].map((_, idx) => (
          <li
            key={idx}
            className="bg-white h-[3px] rounded-[20px] w-[12px] cursor-pointer hover:bg-[#FFC700] sm:h-[4px] sm:w-[28px] transition-all"
          ></li>
        ))}
      </ul>
    </section>
  );
}

export default Banner;
