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
        <section className="w-full py-[40px] sm:py-[80px]">
          <NFTCollections />
          <div className="flex flex-col justify-between w-full max-w-[1128px] mx-auto px-[20px] sm:gap-[24px] sm:px-0 xl:flex-row">
            <NFTDropsCalendar />
            <div className="flex gap-[16px] sm:gap-[24px]">
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
