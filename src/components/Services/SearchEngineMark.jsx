import seo from "../../assets/servicess/SEM.jpg";
import service from "../../assets/common/service.jpg";
import mobWork from "../../assets/mobile/SERVICE.jpg";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";

export default function SearchEngineMark() {
  const [deviceType, setDeviceType] = useState("lg");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDeviceType("lg");
      } else if (window.innerWidth >= 768) {
        setDeviceType("md");
      } else {
        setDeviceType("sm");
      }
    };

    // Initialize on mount
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Helmet>
  <title>Max-iDigital | Search Engine Marketing (SEM) Services in India – Drive Paid Traffic & Conversions</title>
  <meta
    name="description"
    content="Max-iDigital delivers expert Search Engine Marketing services in India—covering PPC campaigns, Google Ads & Bing Ads setup, landing page optimisation, conversion tracking and analytics. Get targeted traffic, increase leads and boost ROI with our data-driven SEM strategies."
  />
  <meta
    name="keywords"
    content="Search Engine Marketing India, SEM services, PPC campaigns, Google Ads, Bing Ads, paid traffic, conversion tracking, landing page optimization, Max-iDigital, digital advertising"
  />
</Helmet>
      <img src={deviceType === "sm" ? mobWork : service} alt="Header" />
      <div className="restaurantContents bg-white w-full md:w-10/12 mx-auto">
        <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-6xl mx-auto">
          <div className="image lg:w-[150%] w-[100%]">
            <img src={seo} alt="" />
          </div>
          <div>
            <span className="block mb-4 text-xl text-[#000000] font-medium">
              We Are Catalysts of Digital Transformation
            </span>
            <h3 className="text-4xl md:text-6xl text-black font-semibold">
              Search Engine Marketing
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              At Max-I, we craft bespoke growth strategies that seamlessly
              integrate with your business goals, ensuring every marketing
              effort is purpose-driven and results-oriented." "By analyzing your
              target audience's search behaviors across their purchase cycles,
              we tailor SEM campaigns that resonate at each touchpoint,
              propelling prospects towards meaningful brand engagements
            </p>
            <p
              className="text-base md:text-lg mt-4 text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Google ads, Pay Per Click, Youtube Ads{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
