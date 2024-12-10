import contact from "../../assets/common/contact.jpg";
import { useNavigate } from "react-router-dom";

import mobContact from "../../assets/mobile/CONTACT.jpg";

import "./Contact.css";
import { useEffect, useState } from "react";

export default function Contact() {
  const navigate = useNavigate();

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
    <>
      <img
        className="mt-20"
        src={deviceType === "sm" ? mobContact : contact}
        alt=""
      />
      <div className="bg-white">
        <div className="w-[100%]" align="center">
          <h1
            className=" w-[90%] lg:-[100%] text-[35px] font-bold capitalize text-[#000] py-10"
            data-aos="fade-up"
            align="center"
          >
            Get In Touch
          </h1>

          <div className="w-[90%] lg:w-[75%] bg-[#F5F7F8] flex pb-10 flex-col lg:flex-row">
            <div
              className="w-[100%] lg:w-[40%] bg-[#fff] rounded-l-md"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
              }}
            >
              <div className="pt-10">
                <a
                  target="_blank"
                  href="tel:+41763953921"
                  className="w-[90%] cursor-pointer"
                >
                  <div className="text-[15px]">
                    <i className="fa-solid fa-phone border border-[#ffaa14] p-3 text-[#ffaa14] rounded-[50%]"></i>
                  </div>
                  <div className="mt-3 text-[18px] text-[#000] font-bold font-sans">
                    +41 76 395 39 21
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <a
                  target="_blank"
                  href="mailto:contact@max-idigital.com"
                  className="w-[90%] cursor-pointer"
                >
                  <div className="text-[15px]">
                    <i className="fa-regular fa-envelope border border-[#ffaa14] p-3 text-[#ffaa14] rounded-[50%]"></i>
                  </div>
                  <div className="mt-3 text-[18px] text-[#000] font-bold font-sans">
                    contact-us@max-idigital.com
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/xzAdmKzvMFFXgoqB7"
                  className="w-[70%] cursor-pointer"
                >
                  <div className="text-[15px]">
                    <i className="fa-solid fa-location-dot border border-[#ffaa14] p-3 px-4 text-[#ffaa14] rounded-[50%]"></i>
                  </div>
                  <div className="mt-3 text-[18px] text-[#000] font-bold font-sans">
                    {/* 38/37 No.1 Logi Street, Gugai,
                <br /> Salem - 636006, Tamilnadu,
                <br /> India */}
                    Corporate Office: <br /> Güterstrasse 8, 8952 Schlieren,
                    <br /> Switzerland
                  </div>
                </a>
              </div>

              <div className="pt-8 pb-10">
                <a
                  target="_blank"
                  href="https://maps.app.goo.gl/jXgitCchAK13imy36"
                  className="w-[70%] cursor-pointer"
                >
                  <div className="text-[15px]">
                    <i className="fa-solid fa-location-dot border border-[#ffaa14] p-3 px-4 text-[#ffaa14] rounded-[50%]"></i>
                  </div>
                  <div className="mt-3 text-[18px] text-[#000] font-bold font-sans">
                    Branch Office: <br /> 38/37B, No.1 Logi Street,
                    <br /> Gugai, Salem - 636006,
                    <br /> Tamilnadu, India
                  </div>
                </a>
              </div>
            </div>
            <div className="w-[100%] bg-[#fff] rounded-r-md lg:w-[60%]">
              <div className="w-[90%]">
                <div className="text-[30px] font-bold capitalize text-[#000] pt-10 lg:pt-20 pb-5">
                  <span className="text-[#ffaa14] uppercase underline">
                    drop us a line
                  </span>
                </div>

                <div className="relative my-6">
                  <input
                    id="id-l01"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#fff] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    for="id-l01"
                    className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Enter Your Name
                  </label>
                </div>

                <div className="relative my-6">
                  <input
                    id="id-l02"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    className="relative w-full h-12 px-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#fff] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  />
                  <label
                    for="id-l02"
                    className="cursor-text peer-focus:cursor-default peer-autofill:-top-2 absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Enter E-Mail
                  </label>
                </div>

                <div className="relative  pb-5">
                  <textarea
                    id="id-l03"
                    type="text"
                    name="id-l01"
                    rows="3"
                    placeholder="Write your message"
                    className="relative w-full p-4 placeholder-transparent transition-all border rounded outline-none focus-visible:outline-none peer bg-[#fff] border-slate-200 text-slate-500 autofill:bg-[#ffaa14] invalid:border-pink-500 invalid:text-pink-500 focus:border-[#ffaa14] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                  ></textarea>
                  <label
                    for="id-l03"
                    className="cursor-text peer-focus:cursor-default absolute left-2 -top-2 z-[1] px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-[#fff] before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#ffaa14] peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                  >
                    Write your message
                  </label>
                </div>

                <button className="conatctbutton mb-10 lg:mb-0">
                  <div className="svg-wrapper-1">
                    <div className="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-[90%] lg:w-[75%] h-[450px] bg-[#F5F7F8] py-5 lg:py-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.675779286769!2d8.445608535601265!3d47.3987585371076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900c715bc72bcd%3A0xae40b37a12d40206!2sG%C3%BCterstrasse%208%2C%208952%20Schlieren%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1728300704635!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0", borderRadius: "5px" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
