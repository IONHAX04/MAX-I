import { Suspense, lazy } from "react";
import SmoothScroll from "../../pages/Projects/SmoothScroll/index";
import Projects from "../../pages/Projects";

import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";

import logo from "../../assets/home/bg2.svg";

import img1 from "../../assets/home/home1.jpg";
import img2 from "../../assets/home/home2.jpg";

import "./Home.css";

const Earth = lazy(() => import("../../pages/Earth/index"));

import placeholder from "../../assets/home/placeholder.png";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="main">
        <Suspense fallback={<img src={placeholder} alt="Loading..." />}>
          <Earth />
        </Suspense>
        <Projects />
      </main>
      <div className="h-auto">
        <div
          className="flex flex-col items-center bg-white text-[#000]"
          style={{ marginTop: "-30vh" }}
        >
          <div className="primary">
            <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-6xl mx-auto">
              <div className="image" style={{ width: "150%" }}>
                <img src={img1} alt="" />
              </div>
              <div>
                <span className="block mb-4 text-xl text-[#000000] font-medium">
                  We Are Catalysts of Digital Transformation
                </span>
                <h3 className="text-4xl md:text-6xl font-semibold">
                  Welcome to <span className="text-[#000000]"> Max-I</span>
                </h3>
                <p
                  className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                  style={{ fontSize: "20px" }}
                >
                  Welcome to Max-I, a digital marketing agency where creativity
                  meets strategy and innovation thrives! We are a dynamic team
                  of passionate digital marketers dedicated to helping
                  businesses unlock their full potential in the online realm. We
                  develop growth-oriented online marketing campaigns that make a
                  positive impact on businesses.
                </p>
                <p
                  className="text-base md:text-lg mt-4 text-slate-700 my-4 md:my-6 text-justify"
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
        </div>
        <div className="p-10 w-full md:w-10/12 mx-auto">
          <p className="text-xl font-semibold mb-2">Settings</p>
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
            <Card
              title="Account"
              subtitle="Manage profile"
              href="#"
              Icon={FiUser}
            />
            <Card
              title="Email"
              subtitle="Manage email"
              href="#"
              Icon={FiMail}
            />
            <Card title="Team" subtitle="Manage team" href="#" Icon={FiUsers} />
            <Card
              title="Billing"
              subtitle="Manage cards"
              href="#"
              Icon={FiCreditCard}
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white text-[#000]">
          <div className="secondary">
            <section className="flex lg:flex-row flex-col w-full md:h-screen px-8 py-12 items-center gap-10 max-w-6xl mx-auto">
              <div>
                <h3 className="text-4xl md:text-6xl font-semibold">
                  What We Do ?{" "}
                </h3>
                <p
                  className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
                  style={{ fontSize: "20px" }}
                >
                  MAX-I, is a leading digital marketing agency that specializes
                  in creating dynamic online strategies tailored to each
                  client's unique needs. Our team of passionate marketers is
                  dedicated to helping businesses unlock their full potential in
                  the digital realm by developing growth-oriented campaigns that
                  drive engagement, boost visibility, and generate meaningful
                  results.
                </p>
                <p
                  className="text-base md:text-lg mt-10 text-slate-700 my-4 md:my-6 text-justify"
                  style={{ fontSize: "20px" }}
                >
                  At Max-I, we blend creativity with data-driven insights to
                  craft compelling digital experiences that resonate with
                  audiences and drive conversions. Whether it's optimizing your
                  website for search engines, crafting engaging social media
                  campaigns, or designing user-friendly websites, we harness the
                  power of digital marketing to help businesses thrive in
                  today's competitive landscape.{" "}
                </p>
              </div>
              <div className="image" style={{ width: "150%" }}>
                <img src={img2} alt="" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </SmoothScroll>
  );
}

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};
