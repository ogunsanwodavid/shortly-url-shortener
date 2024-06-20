import iconBrandRecognition from "../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/icon-fully-customizable.svg";

function Statistics() {
  const statItems = [
    {
      image: iconBrandRecognition,
      heading: "Brand recognition",
      content:
        "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      image: iconDetailedRecords,
      heading: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      image: iconFullyCustomizable,
      heading: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links,supercharging audience engagement.",
    },
  ];
  return (
    <div className="w-full max-w-[720px] mx-auto px-7 mt-14 space-y-16 text-center bg-[#f0f1f6] md:px-0 lg:max-w-[1000px]">
      {/*** Heading of Statistics section */}
      <section className="space-y-5">
        <h2 className="text-very-dark-violet text-2xl font-extrabold md:text-3xl lg:text-4xl">
          Advanced Statistics
        </h2>

        <p className="text-grayish-violet text-base font-semibold md:text-lg md:max-w-[520px] md:text-center md:mx-auto">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>

      {/*** List of Statistics items */}
      <ul className="relative space-y-16 md:flex md:space-x-3 md:space-y-0">
        {statItems.map((item, index) => {
          return (
            <li
              className="relative bg-white p-6 pt-10 space-y-4 rounded-lg md:h-max"
              key={index}
              style={{
                marginTop: `${index * 3}rem`,
              }}
            >
              {/*** Item image div at top */}
              <div
                className={`absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto h-16 w-16 p-2 rounded-full bg-dark-violet flex items-center justify-center md:translate-x-0 md:left-6 `}
              >
                <img src={item.image} alt={item.heading} className="h-8" />
              </div>

              {/*** Item heading */}
              <h3 className="text-very-dark-blue font-extrabold text-xl">
                {item.heading}
              </h3>

              {/*** Item content */}
              <p className="text-grayish-violet text-base font-semibold">
                {item.content}
              </p>

              {/*** Blue line joining items - not visible in last item */}
              {index < statItems.length - 1 && (
                <div className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[100%] w-2 h-16 bg-cyan md:h-2 md:w-16 md:left-[100%] md:bottom-[50%] md:translate-x-0 md:translate-y-[50%]"></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Statistics;
