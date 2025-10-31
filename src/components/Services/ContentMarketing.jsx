import seo from "../../assets/servicess/CONTENTMARKETING.jpg";
import service from "../../assets/common/service.jpg";
import mobImg from "../../assets/mobile/SERVICE.jpg";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function ContentMarketing() {
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
  <title>Max-iDigital | Content Marketing Services in India – Strategy & Creative Storytelling</title>
  <meta
    name="description"
    content="Max-iDigital delivers expert content marketing services in India - including content strategy, blog & article writing, visual storytelling, and SEO-driven content. Elevate your brand voice, engage your audience and drive meaningful conversions."
  />
  <meta
    name="keywords"
    content="content marketing services India, content strategy, blog writing, article writing, visual storytelling, SEO content, brand voice, audience engagement, Max-iDigital, digital marketing"
  />
</Helmet>
      <img src={deviceType === "sm" ? mobImg : service} alt="Header" />
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
              Content Marketing
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Our content marketing services engage audiences, build brand
              authority, and boost conversions. We create valuable content for
              blogs, social media, and email campaigns, attracting and retaining
              customers. With strategic campaigns, we fuel online growth,
              helping businesses succeed in the digital landscape.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
