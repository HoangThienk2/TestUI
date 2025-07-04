import React from "react";

function Footer() {
  return (
    <footer className="bg-[#131415] py-[40px]">
      <div className="grid grid-cols-2 text-white w-full gap-[16px] lg:grid-cols-4 max-w-[1128px] mx-auto px-[20px] sm:gap-[40px] sm:px-0">
        <section className="w-full max-w-[252px]">
          <p className="text-[18px] font-black font-title italic leading-[28px] mb-[12px] tracking-normal uppercase">
            About Us
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Careers
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Company Details
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Terms & Conditions
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Help center
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Privacy Policy
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Affiliate
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px]">
          <p className="text-[18px] font-black font-title italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Products
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              NFT Marketplace
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Slingshot
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Swaps
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              NFT Launchpad
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Runes Platform
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Creator Dashboard
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px]">
          <p className="text-[18px] font-black font-title italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Resources
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Support
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              API
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Feature Requests
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Trust & Safety
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              Sitemap
            </li>
          </ul>
        </section>
        <section className="w-full max-w-[252px]">
          <p className="text-[18px] font-black font-title italic leading-[28px] mb-[12px] tracking-normal uppercase">
            Contact Us
          </p>
          <ul className="space-y-[8px]">
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
              support@tech.email
            </li>
            <li className="text-[#D2D2D2] text-[12px] sm:text-[14px] cursor-pointer font-body font-normal leading-[16px] tracking-normal">
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
