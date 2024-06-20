import illustrationWorking from "../assets/illustration-working.svg";
import Button from "./Button";

function Hero() {
  return (
    <div className="w-full max-w-[720px] mx-auto flex flex-col space-y-7 pb-0 md:flex-row-reverse md:items-center md:pl-0 md:space-y-0 md:py-6 lg:max-w-[1000px]">
      {/** Hero image */}
      <img
        src={illustrationWorking}
        className="w-full object-cover md:w-[60%] lg:w-[55%]"
      />

      {/** Hero Text */}
      <section className="text-center space-y-3 px-7 md:px-0 md:w-[475px] md:pl-[calc((100%-720px)/2)] md:text-left lg:w-[600px] lg:pl-[calc((100%-1000px)/2)]">
        <h1 className="text-very-dark-violet text-3xl font-extrabold md:text-4xl lg:text-[55px] lg:leading-[3.2rem]">
          More than just shorter links
        </h1>

        <p className="text-grayish-violet text-base font-semibold md:text-lg">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>

        {/** Get Started button */}
        <Button
          buttonClass={
            "!mt-5 hover:opacity-60 md:text-lg md:px-8 lg:py-3 lg:px-10"
          }
        >
          Get Started
        </Button>
      </section>
    </div>
  );
}

export default Hero;
