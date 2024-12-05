import { useEffect } from "react";
import Glide from "@glidejs/glide";
import logo from "../../assets/about/about.jpg";

import vision from "../../assets/about/about1.jpg";
import mission from "../../assets/about/about2.jpg";

import about from "../../assets/common/about.jpg";

import img1 from "../../assets/about/logo1.png";
import img2 from "../../assets/about/logo2.png";
import img3 from "../../assets/about/logo3.png";
import img4 from "../../assets/about/logo4.png";
import img5 from "../../assets/about/logo5.png";
import img6 from "../../assets/about/logo6.png";
import img7 from "../../assets/about/logo7.png";
import img8 from "../../assets/about/logo8.png";
import SmoothScroll from "../../pages/Projects/SmoothScroll";

export default function About() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <SmoothScroll>
      <div>
        <img className="mt-20" src={about} alt="" />
        <div className="flex flex-col items-center justify-center bg-white">
          <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-7xl mx-auto">
            <div className="image lg:w-[150%] w-[100%]">
              <img src={logo} alt="" />
            </div>
            <div>
              <span className="block mb-4 text-xl text-[#000000] font-medium">
                Your Partner in Lifelong Learning
              </span>
              <h3 className="text-4xl md:text-6xl text-black font-semibold">
                About Us <span className="text-[#000000]"> Max-I</span>
              </h3>
              <p
                className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                style={{ fontSize: "20px" }}
              >
                Welcome to Max-I, a digital marketing agency where creativity
                meets strategy and innovation thrives! We are a dynamic team of
                passionate digital marketers dedicated to helping businesses
                unlock their full potential in the online realm. We develop
                growth-oriented online marketing campaigns that make a positive
                impact on businesses.
              </p>
              <p
                className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                style={{ fontSize: "20px" }}
              >
                Partner with Us for Business Excellence
              </p>
              <button className="bg-[#ffaa14] text-white font-medium py-2 px-4 rounded transition-all hover:bg-black active:scale-95">
                Explore Our Service
              </button>
            </div>
          </section>
          <div className="glide-09 relative py-5 bg-white w-full overflow-hidden">
            <h3 className="text-[40px] text-black font-bold pb-[5vh] text-center">
              Our Client
            </h3>
            {/* <!-- Slides --> */}
            <div data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                <li>
                  <img
                    src={img1}
                    className="m-auto h-20 max-h-full w-auto max-w-full "
                  />
                </li>
                <li>
                  <img
                    src={img2}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img3}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img4}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img5}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img6}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img7}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <img
                    src={img8}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="visionMissionContents bg-white lg:h-screen">
          <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-5xl mx-auto">
            <div className="image hidden lg:block">
              <img src={vision} alt="" />
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl text-black font-semibold">
                Our Mission{" "}
              </h3>
              <p
                className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                style={{ fontSize: "20px" }}
              >
                At MAX-I, our mission is simple yet profound: to empower
                businesses of all sizes to thrive in the digital age. We believe
                that every brand has a unique story to tell, and we're here to
                help you craft and amplify that narrative across various digital
                channels.
              </p>
            </div>
          </section>
          <section className="flex lg:flex-row flex-col w-full px-8 py-15 items-center gap-10 max-w-5xl mx-auto">
            <div>
              <h3 className="text-4xl md:text-6xl text-black font-semibold">
                Our Vision
              </h3>
              <p
                className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                style={{ fontSize: "20px" }}
              >
                Our vision at Max-I is to be the trailblazer of digital
                evolution, sculpting bespoke digital ecosystems that transcend
                boundaries and redefine industry standards. We envision a
                dynamic digital landscape where brands not only engage but
                inspire, leveraging our strategic prowess and innovative
                technologies to create immersive experiences, foster genuine
                connections, and drive sustainable growth in the digital
                frontier.
              </p>
            </div>
            <div className="image lg:w-[200%]">
              <img src={mission} alt="" />
            </div>
          </section>
        </div>
      </div>
    </SmoothScroll>
  );
}
