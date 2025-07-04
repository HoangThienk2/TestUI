import { MENU_ITEMS, MOBILE_MENU_ITEMS } from "../constants/menu";
import React from "react";

function Header({ menuOpen, setMenuOpen, activeMenu, setActiveMenu }) {
  return (
    <header className="flex bg-[#131415] h-[60px] justify-center w-full items-center px-[20px] sm:h-[80px] sm:px-[40px]">
      <div className="flex justify-between w-full max-w-[1600px] items-center">
        <nav className="flex gap-[24px]" aria-label="Main navigation">
          <div className="flex cursor-pointer gap-[16px] items-center">
            <img
              className="h-[19px] w-[24px] block sm:hidden"
              src={menuOpen ? "/images/close.svg" : "/images/menuicon.svg"}
              alt="menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            />
            <img
              className="h-[36px] w-[72px] sm:h-[39px] sm:w-[71px]"
              src="/images/logo.svg"
              alt="logo"
            />
          </div>
          {menuOpen && (
            <div className="bg-[#1F2023] p-[20px] bottom-0 fixed left-0 right-0 sm:hidden top-[60px] z-[9999]">
              <ul className="flex flex-col gap-[16px]">
                {MOBILE_MENU_ITEMS.map((item) => (
                  <li
                    key={item}
                    className={`w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-['Neue_Haas_Grotesk_Text_Pro_VN'] font-style-normal cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal uppercase ${activeMenu === item.toUpperCase()
                      ? "text-[#FFC700] bg-[#383A42]"
                      : "text-[#D2D2D2]"
                      }`}
                    onClick={() => setActiveMenu(item.toUpperCase())}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <ul className="text-[14px] font-[500] font-['Neue_Haas_Grotesk_Text_Pro_VN'] font-style-normal hidden leading-[20px] sm:flex tracking-[0%] uppercase">
            {MENU_ITEMS.map((item) => (
              <li
                key={item}
                className={`w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] flex justify-center items-center  ${activeMenu === item
                  ? "bg-[#383A42] text-[#FFC700]"
                  : "text-[#D2D2D2] hover:text-[#FFC700]"
                  }`}
                onClick={() => setActiveMenu(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-[8px]">
          <button className="align-middle bg-[#FFC700] h-[36px] rounded-full text-[#1F1F1F] text-[16px] text-center w-[98px] barlow-semi-condensed-black cursor-pointer font-extrabold font-title hover:bg-[#C79B12] italic leading-[24px] sm:h-[40px] sm:w-[114px] tracking-[0%] uppercase">
            SIGN UP
          </button>
          <button className="align-middle border-[#FFC700] border-[1px] h-[36px] rounded-full text-[#D2D2D2] text-[16px] text-center w-[90px] barlow-semi-condensed-black cursor-pointer font-extrabold font-title hover:border-[#FFE8AB] italic leading-[24px] sm:h-[40px] sm:w-[106px] tracking-[0%] uppercase">
            LOG IN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
