import seo from "../../assets/servicess/WEB.jpg";
import service from "../../assets/common/service.jpg";
import mobWork from "../../assets/mobile/SERVICE.jpg";

import { useEffect, useState } from "react";

export default function WebDev() {
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
              Website Design and Development
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              In today's digital landscape, having a user-friendly website is
              essential, but it's equally crucial for it to be SEO-friendly. Our
              website development strategy focuses on striking the perfect
              balance between aesthetics, functionality, and search engine
              optimization, ensuring your site attracts and retains visitors
              while also ranking well organically.
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
