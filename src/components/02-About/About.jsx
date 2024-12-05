import { useEffect } from "react";
import Glide from "@glidejs/glide";
import logo from "../../assets/home/color.jpg";

import about from "../../assets/common/about.jpg";

import img1 from "../../assets/about/bigbrains.PNG";
import img2 from "../../assets/about/dubai.jpg";
import img3 from "../../assets/about/golden.png";
import img4 from "../../assets/about/maxi.png";
import img5 from "../../assets/about/meateat.png";
import img6 from "../../assets/about/original.PNG";
import img7 from "../../assets/about/prestige.png";
import img8 from "../../assets/about/qbex.png";
import img9 from "../../assets/about/swiss.png";

export default function About() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 2500,
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
    <div>
      <img src={about} alt="" />
      <div className="flex items-center justify-center bg-white">
        <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-7xl mx-auto">
          <div className="image">
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
      </div>
      <div className="clients h-[20vh] bg-white flex items-center justify-center overflow-hidden">
        <div className="glide-09 relative w-full">
          {/* <!-- Slides --> */}
          <div data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 space-x-4">
              <li className="flex-shrink-0">
                <img src={img1} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img2} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img3} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img4} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img5} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img6} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img7} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img8} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
              <li className="flex-shrink-0">
                <img src={img9} className="m-auto h-20 max-h-full w-[150px]" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="visionMission bg-white flex flex-col">
        <h2 className="text-[30px] h-[8vh] uppercase text-center text-black font-bold">
          Our Testimonials
        </h2>
      </div>
    </div>
  );
}
