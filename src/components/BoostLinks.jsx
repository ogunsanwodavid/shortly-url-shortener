import bgBoostMobile from "../assets/bg-boost-mobile.svg";
import bgBoostDesktop from "../assets/bg-boost-desktop.svg";

import Button from "./Button";

function BoostLinks({ isDesktopWidth }) {
  return (
    <div
      className="w-full  px-7 bg-dark-violet md:px-0 "
      style={{
        backgroundImage: `url(${
          isDesktopWidth ? bgBoostDesktop : bgBoostMobile
        })`,
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <main className="w-full max-w-[720px] mx-auto py-16 space-y-4  text-center md:space-y-6 md:py-20 md:px-0 lg:max-w-[1000px]">
        <h3 className="text-white text-2xl font-extrabold md:text-3xl lg:text-4xl">
          Boost your links today
        </h3>

        <Button buttonClass={`text-lg md:hover:opacity-90`}>Get Started</Button>
      </main>
    </div>
  );
}

export default BoostLinks;
