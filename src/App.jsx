import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-[60px] bg-black sm:px-[40px] px-[20px] flex  justify-between items-center ">
          <div className="flex gap-[24px]">
            <div className="flex cursor-pointer items-center gap-[16px]">
              <img
                className="w-[24px] h-[19px] block sm:hidden"
                src={
                  menuOpen
                    ? "/public/images/close.svg"
                    : "/public/images/menuicon.svg"
                }
                alt="menu"
                onClick={() => setMenuOpen((prev) => !prev)}
              />
              <img
                className="sm:w-[71px] sm:h-[39px] w-[72px] h-[36px]"
                src="/public/images/logo.svg"
                alt="logo"
              />
            </div>
            {menuOpen && (
              <div className="fixed top-[60px] left-0 right-0 bottom-0 bg-[#1F2023] p-[20px] z-[9999] sm:hidden">
                <ul className="flex flex-col gap-[16px] ">
                  <li className="w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-body cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal text-[#D2D2D2] hover:text-[#FFC700] uppercase">
                    HOME
                  </li>
                  <li className="w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-body cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal text-[#D2D2D2] hover:text-[#FFC700] uppercase">
                    Item1
                  </li>
                  <li className="w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-body cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal text-[#D2D2D2] hover:text-[#FFC700] uppercase">
                    Item2
                  </li>
                  <li className="w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-body cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal text-[#D2D2D2] hover:text-[#FFC700] uppercase">
                    Item3
                  </li>
                  <li className="w-full h-[48px] hover:bg-[#383A42] rounded-[100px] flex justify-center items-center font-body cursor-pointer font-medium text-[14px] leading-[20px] tracking-normal text-[#D2D2D2] hover:text-[#FFC700] uppercase">
                    Item4
                  </li>
                </ul>
              </div>
            )}

            <ul className="hidden sm:flex  font-body font-[500] text-[14px] leading-[20px] tracking-[0%] uppercase ">
              <li className="w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] text-white flex justify-center items-center hover:text-[#FFC700]  ">
                HOME
              </li>
              <li className="w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] text-white flex justify-center items-center hover:text-[#FFC700]  ">
                ITEM1
              </li>
              <li className="w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] text-white flex justify-center items-center hover:text-[#FFC700]  ">
                ITEM2
              </li>
              <li className="w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] text-white flex justify-center items-center hover:text-[#FFC700]  ">
                ITEM3
              </li>
              <li className="w-[80px] uppercase cursor-pointer h-[40px] rounded-full hover:bg-[#383A42] text-white flex justify-center items-center hover:text-[#FFC700]  ">
                ITEM4
              </li>
            </ul>
          </div>
          <div className="flex gap-[8px]">
            <button className="font-title cursor-pointer text-[#1F1F1F] sm:w-[114px] sm:h-[40px] w-[98px] h-[36px] rounded-full bg-[#FFC700] hover:bg-[#C79B12]  font-extrabold italic text-[16px] leading-[24px] tracking-[0%] text-center align-middle uppercase">
              SIGN UP
            </button>
            <button className="font-title cursor-pointer text-[#D2D2D2] sm:w-[114px] sm:h-[40px] w-[98px] h-[36px] rounded-full border-[#FFC700] hover:border-[#FFE8AB] border-[1px]  font-extrabold italic text-[16px] leading-[24px] tracking-[0%] text-center align-middle uppercase">
              LOG IN
            </button>
          </div>
        </div>

        <div className=" bg-black ">
          <div className="w-full sm:h-[450px] h-[180px] relative  ">
            <img
              className=" w-full h-full object-cover "
              src="/public/images/banner1.png"
              alt=""
            />
            <ul className="absolute bottom-[12px] right-0 left-0 flex gap-[8px] justify-center">
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
              <li className="w-[28px] h-[4px] hover:bg-[#FFC700] rounded-[20px] cursor-pointer bg-white"></li>
            </ul>
          </div>

          <div className="w-full sm:h-[121.88px] h-[92px] bg-[#1F2023] flex justify-center items-center ">
            <div className="max-w-[1128px] w-full mx-auto flex items-center h-full justify-between ">
              <div className="max-w-[105px]  w-full cursor-pointer sm:h-[74px] h-[60px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/freetoearn.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  free to earn
                </p>
              </div>
              <div className="max-w-[105px]  w-full cursor-pointer h-[74px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/ranking.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  Ranking
                </p>
              </div>
              <div className="max-w-[105px]  w-full cursor-pointer h-[74px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/videonft.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  VIdeo-NFT
                </p>
              </div>
              <div className="max-w-[105px]  w-full cursor-pointer h-[74px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/buy.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  How to buy
                </p>
              </div>
              <div className="max-w-[105px]  w-full cursor-pointer h-[74px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/new.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  New NFTS
                </p>
              </div>
              <div className="max-w-[105px]  w-full cursor-pointer h-[74px] flex flex-col sm:justify-between justify-center items-center">
                <img
                  className="sm:w-[53.44px] sm:h-[42px] w-[35.63px] h-[27.87px] sm:mb-[12px] mb-[8px]"
                  src="/public/images/roadmap.svg"
                  alt=""
                />
                <p className="font-body w-full font-normal sm:text-[14px] text-[10px] leading-[20px] tracking-[0%] text-center text-[#FFFFFF] uppercase">
                  Roadmaps
                </p>
              </div>
            </div>
          </div>

          <div className="w-full sm:py-[80px] py-[40px]  ">
            <div className="max-w-[1128px] w-full sm:h-[301px] pl-[20px] sm:pl-0 mr-[-20px] flex flex-col gap-[8px] mb-[40px] sm:mx-auto">
              <div className="w-full flex justify-between items-center">
                <p className="font-title text-[#FFC700] font-[900] italic sm:text-[32px] text-[24px] sm:leading-[48px] leading-[32px] tracking-[0%] align-middle uppercase">
                  New NFT Collections
                </p>
                <div className="flex gap-[8px] mr-[20px] sm:mr-0">
                  <button className="sm:w-[40px] sm:h-[40px] w-[32px] h-[32px] cursor-pointer rounded-[12px] bg-[#383A42] hover:opacity-80 flex justify-center items-center">
                    <img src="/images/arrowleft.svg" alt="" />
                  </button>
                  <button className="sm:w-[40px] sm:h-[40px] w-[32px] h-[32px] cursor-pointer rounded-[12px] bg-[#383A42] hover:opacity-80 flex justify-center items-center">
                    <img src="/images/arrowright.svg" alt="" />
                  </button>
                </div>
              </div>
              <div className="w-full overflow-x-auto scrollbar-hide">
                <ul className="flex w-full gap-[16px]">
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img1.png"
                      alt=""
                    />
                  </li>
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img2.png"
                      alt=""
                    />
                  </li>
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img3.png"
                      alt=""
                    />
                  </li>
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img4.png"
                      alt=""
                    />
                  </li>
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img5.png"
                      alt=""
                    />
                  </li>
                  <li className="sm:w-[180px] sm:h-[245px] w-[102px] h-[140px] rounded-[12px] flex-shrink-0">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/images/img6.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="max-w-[1128px] w-full sm:px-0 px-[20px] flex flex-col sm:flex-row justify-between sm:gap-[24px] mx-auto">
              <div className="max-w-[600px] w-full sm:h-[301px] flex flex-col mb-[40px] sm:mb-0 gap-[8px] mx-auto">
                <div className="w-full flex justify-between items-center">
                  <p className="font-title text-[#FFC700] font-[900] italic sm:text-[32px]  text-[24px] sm:leading-[48px] leading-[32px] tracking-[0%] align-middle uppercase">
                    NFT Drops Calendar
                  </p>
                  <div className="flex gap-[8px]">
                    <button className="sm:w-[40px] sm:h-[40px] w-[32px] h-[32px] cursor-pointer rounded-[12px] bg-[#383A42]  hover:opacity-80 flex justify-center items-center">
                      <img src="/public/images/arrowleft.svg" alt="" />
                    </button>
                    <button className="sm:w-[40px] sm:h-[40px] w-[32px] h-[32px] cursor-pointer rounded-[12px] bg-[#383A42] hover:opacity-80 flex justify-center items-center ">
                      <img src="/public/images/arrowright.svg" alt="" />
                    </button>
                  </div>
                </div>
                <ul className="flex gap-[16px]">
                  <li className="max-w-[600px] w-full sm:h-[240px] h-[171px] rounded-[12px]">
                    <img
                      className="object-cover w-full h-full rounded-[12px]"
                      src="/public/images/img7.png"
                      alt=""
                    />
                  </li>
                </ul>
              </div>
              <div className="flex sm:gap-[24px] gap-[16px]">
                <div className="max-w-[240px] w-full sm:h-[301px] flex flex-col gap-[8px] mx-auto">
                  <div className="w-full flex justify-between">
                    <p className="font-title text-[#FFC700] font-[900] italic sm:text-[32px] text-[24px] sm:leading-[48px] leading-[32px] tracking-[0%] align-middle uppercase">
                      HOT NFT
                    </p>
                  </div>
                  <ul className="flex gap-[16px]">
                    <li className="sm:w-[240px] w-[167px] h-[167px]  sm:h-[240px] rounded-[12px]">
                      <img
                        className="object-cover w-full h-full rounded-[12px]"
                        src="/public/images/img8.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>

                <div className="max-w-[240px] w-full sm:h-[301px] flex flex-col gap-[8px] mx-auto">
                  <div className="w-full flex justify-between">
                    <p className="font-title text-[#FFC700] font-[900] italic sm:text-[32px] text-[24px] sm:leading-[48px] leading-[32px] tracking-[0%] align-middle uppercase">
                      PROMOTION
                    </p>
                  </div>
                  <ul className="flex gap-[16px]">
                    <li className="sm:w-[240px] w-[167px] h-[167px]  sm:h-[240px] rounded-[12px]">
                      <img
                        className="object-cover w-full h-full rounded-[12px]"
                        src="/public/images/img9.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-white"></div>
        <div className="py-[40px]  bg-black">
          <div className="grid max-w-[1128px] w-full text-white mx-auto sm:gap-[40px] gap-[16px] grid-cols-2 lg:grid-cols-4 sm:px-0 px-[20px]">
            <div className="max-w-[252px] w-full">
              <p className="font-title font-black italic text-[18px] leading-[28px] tracking-normal mb-[12px] uppercase">
                About Us
              </p>
              <ul className="space-y-[8px]">
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Careers
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Company Details
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Terms & Conditions
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Help center
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Privacy Policy
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Affiliate
                </li>
              </ul>
            </div>
            <div className="max-w-[252px] w-full">
              <p className="font-title font-black italic text-[18px] leading-[28px] tracking-normal mb-[12px] uppercase">
                Products
              </p>
              <ul className="space-y-[8px]">
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  NFT Marketplace
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Slingshot
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Swaps
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  NFT Launchpad
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Runes Platform
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Creator Dashboard
                </li>
              </ul>
            </div>
            <div className="max-w-[252px] w-full">
              <p className="font-title font-black italic text-[18px] leading-[28px] tracking-normal mb-[12px] uppercase">
                Resources
              </p>
              <ul className="space-y-[8px]">
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Support
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  API
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Feature Requests
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Trust & Safety
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  Sitemap
                </li>
              </ul>
            </div>
            <div className="max-w-[252px] w-full">
              <p className="font-title font-black italic text-[18px] leading-[28px] tracking-normal mb-[12px] uppercase">
                Contact Us
              </p>
              <ul className="space-y-[8px]">
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  support@tech.email
                </li>
                <li className="font-body text-[#D2D2D2] cursor-pointer font-normal text-[14px] leading-[20px] tracking-normal">
                  affiliate@tech.com
                </li>
                <li className="mt-[16px]">
                  <img
                    className="w-[151.4px] h-[44px] object-cover"
                    src="/public/images/install.png"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
