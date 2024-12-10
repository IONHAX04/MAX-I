import seo from "../../assets/servicess/SOCIALMEDIAAD.jpg";
import service from "../../assets/common/service.jpg";
import { useEffect, useState } from "react";
import mobWork from "../../assets/mobile/SERVICE.jpg";

export default function SocialMediaAds() {
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
              Social Media Advertising
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Our social media advertising strategies are geared towards
              amplifying your brand's reach, driving meaningful engagements, and
              fostering lasting connections with your target audience. Achieve
              your business objectives with data-driven advertising, designed to
              optimize ad performance, drive traffic, and generate valuable
              leads.
            </p>
            <p
              className="text-base md:text-lg mt-4 text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
