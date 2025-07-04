import React from "react";

function Footer() {
  return (
    <footer className="bg-[#131415] py-[40px] border-[#383A42] border-t-[1px]">
      <div className="grid grid-cols-2 text-white w-full gap-[24px] max-w-[1128px] mx-auto px-[20px] md:px-[40px] lg:grid-cols-4 lg:gap-[40px] lg:px-0">
        <section className="w-full max-w-[252px] ">
          <p className="text-[18px] font-black font-['Barlow_Semi_Condensed'] italic leading-[28px] mb-[12px] tracking-normal uppercase">
            About Us
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Careers
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Company Details
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Terms & Conditions
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Help center
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Privacy Policy
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Affiliate
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px] max-h-[200px]">
          <p className="text-[18px] font-black font-['Barlow_Semi_Condensed'] italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Products
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              NFT Marketplace
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Slingshot
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Swaps
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              NFT Launchpad
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Runes Platform
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Creator Dashboard
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px] max-h-[200px]">
          <p className="text-[18px] font-black font-['Barlow_Semi_Condensed'] italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Resources
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Support
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              API
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Feature Requests
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Trust & Safety
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              Sitemap
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px] max-h-[200px]">
          <p className="text-[18px] font-black font-['Barlow_Semi_Condensed'] italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Contact Us
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              support@tech.email
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] sm:leading-[20px] tracking-normal">
              affiliate@tech.com
            </li>
            <li className="mt-[24px]">
              <img
                className="h-[44px] w-[151.4px] object-cover"
                src="/images/install.png"
                alt=""
              />
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
