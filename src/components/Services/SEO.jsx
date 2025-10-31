import seo from "../../assets/servicess/SEO.jpg";
import service from "../../assets/common/service.jpg";
import mobWork from "../../assets/mobile/SERVICE.jpg";
import { Helmet } from "react-helmet";


import { useEffect, useState } from "react";

export default function SEO() {
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
  <title>Max-iDigital | Professional SEO Services in India – Boost Your Organic Growth</title>
  <meta
    name="description"
    content="Max-iDigital offers expert SEO services in India - including technical SEO audits, on-page & off-page optimization, keyword strategy and local & national ranking support. Drive targeted traffic and measurable growth for your business."
  />
  <meta
    name="keywords"
    content="SEO services India, professional SEO, technical SEO audits, on-page optimization, off-page optimization, keyword strategy, local SEO, national SEO, Max-iDigital, search engine optimization"
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
              Search Engine Optimzation
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              We specialize in providing SEO solutions tailored to help
              businesses enhance their online visibility, generate more leads,
              and boost revenue. With our expertise in white hat SEO practices,
              we craft customized strategies to address your unique business
              goals, delivering measurable results and tangible ROI.
            </p>
            <p
              className="text-base md:text-lg mt-4 text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              On-page SEO, Off-Page SEO, Technical SEO, Local SEO
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
