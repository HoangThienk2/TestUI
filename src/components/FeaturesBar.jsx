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
              className="flex flex-col h-[60px] justify-start w-full cursor-pointer items-center max-w-[105px] sm:h-[74px]"
            >
              <div className="relative">
                <img
                  className="h-[27.87px] w-[35.63px] mb-[8px] mx-auto sm:h-[42px] sm:mb-[12px] sm:w-[53.44px]"
                  src={item.img}
                  alt=""
                />
                {item.img === "/images/new.svg" && (
                  <>
                    {/* Mobile version */}
                    <div
                      className="absolute flex sm:hidden flex-col justify-center items-center bg-[#FF0000] z-[1] rounded-[2.67px] w-[18.33px] h-[10.67px] -right-[6.73px] -top-[5.36px] p-[1.33px_2.67px]"
                    >
                      <span
                        className="text-white text-center uppercase flex-none w-[13px] h-[8px] text-[5.33333px] leading-[8px] font-medium"
                        style={{
                          fontFamily: 'Neue Haas Grotesk Text Pro VN'
                        }}
                      >
                        NEW
                      </span>
                    </div>
                    {/* Desktop version */}
                    <div
                      className="absolute hidden sm:flex flex-col justify-center items-center bg-[#FF0000] z-[1] rounded-[4px] w-[41px] h-[20px] -right-[13.1px] -top-[8.04px] p-[2px_6px]"
                    >
                      <span
                        className="text-white text-center uppercase flex-none text-[12px] leading-[16px] font-medium"
                        style={{
                          fontFamily: 'Neue Haas Grotesk Text Pro VN'
                        }}
                      >
                        NEW
                      </span>
                    </div>
                  </>
                )}
              </div>
              <p className="text-[#FFFFFF] text-[10px] text-center  font-medium leading-[12px] sm:leading-[20px] sm:text-[14px] sm:font-normal tracking-[0%] uppercase flex-none order-1 self-stretch flex-grow-0" style={{ fontFamily: 'Neue Haas Grotesk Text Pro VN' }}>
                {item.text === "VIdeo-NFT" ? (
                  <>
                    <span className="sm:hidden">VIDEO<br />NFT</span>
                    <span className="hidden sm:inline">VIDEO-NFT</span>
                  </>
                ) : item.text === "New NFTS" ? (
                  <>
                    <span className="sm:hidden">NEW<br />NFTS</span>
                    <span className="hidden sm:inline">NEW NFTS</span>
                  </>
                ) : (
                  item.text
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default FeaturesBar;
