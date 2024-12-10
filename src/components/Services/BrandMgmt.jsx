import seo from "../../assets/servicess/BRANDMANAGEMENT.jpg";
import service from "../../assets/common/service.jpg";
import mobWork from "../../assets/mobile/SERVICE.jpg";

import { useEffect, useState } from "react";

export default function BrandMgmt() {
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
      <div>
        <img src={deviceType === "sm" ? mobWork : service} alt="Header" />
      </div>{" "}
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
              Brand Management
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Our brand management services encompass strategic planning,
              identity development, reputation management, and ongoing brand
              enhancement to ensure your brand resonates with your target
              audience. Achieve brand differentiation and relevance in your
              industry with our strategic approach, focusing on brand
              positioning, market insights, and continuous improvement.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
