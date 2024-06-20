import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import Shortener from "./components/Shortener";
import Statistics from "./components/Statistics";
import BoostLinks from "./components/BoostLinks";
import Footer from "./components/Footer";
import ShortUrls from "./components/ShortUrls";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

function App() {
  const [isDesktopWidth, setIsDesktopWidth] = useState(
    window.innerWidth >= 720
  );

  /**** This effect handles window width changes */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktopWidth(window.innerWidth >= 720);
    };

    /*** This event listener ensures state updates on window width change */
    window.addEventListener("resize", handleResize);

    handleResize();

    /*** Removed event listener as component unmounts */
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setIsDesktopWidth]);

  const [storedUrls, setStoredUrls] = useLocalStorageState([], "storedurls");

  return (
    <div className="w-full min-h-screen font-poppins ">
      <Navbar />

      <Hero />

      <div className="relative mt-28 pt-28 pb-16 text-center bg-[#f0f1f6]">
        <Shortener
          isDesktopWidth={isDesktopWidth}
          storedUrls={storedUrls}
          setStoredUrls={setStoredUrls}
        />

        <ShortUrls storedUrls={storedUrls} setStoredUrls={setStoredUrls} />

        <Statistics />
      </div>

      <BoostLinks isDesktopWidth={isDesktopWidth} />

      <Footer />
    </div>
  );
}

export default App;
