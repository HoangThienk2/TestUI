import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import FeaturesBar from "./components/FeaturesBar";
import NFTCollections from "./components/NFTCollections";
import NFTDropsCalendar from "./components/NFTDropsCalendar";
import HotNFT from "./components/HotNFT";
import Promotion from "./components/Promotion";
import "./styles/fonts.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("HOME");

  return (
    <div className="h-full w-full overflow-hidden">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <main className="bg-[#131415]">
        <Banner />
        <FeaturesBar />
        <section className="w-full py-[40px] sm:py-[60px] lg:py-[80px]">
          <NFTCollections />
          <div className="flex flex-col w-full max-w-[1128px] mx-auto px-[20px] sm:gap-[24px] md:px-[40px] lg:px-[40px] xl:px-0 lg:flex-row lg:justify-between">
            <NFTDropsCalendar />
            <div className="flex gap-[16px] sm:gap-[24px] justify-center lg:justify-start">
              <HotNFT />
              <Promotion />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
