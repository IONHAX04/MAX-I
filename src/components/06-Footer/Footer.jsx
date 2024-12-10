import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

export default function Footer() {
  let location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-[#000]">
      <div className="w-[100%] flex flex-wrap gap-10 justify-center py-10">
        <div className="w-[90%] lg:w-[30%]">
          <img className="w-[100px] h-[100px]" src={logo} alt="logo" />
          <p className="mt-10 text-justify text-semibold text-[#fff]">
            Welcome to Max-I, a digital marketing agency where creativity meets
            strategy and innovation thrives! We are a dynamic team of passionate
            digital marketers dedicated to helping businesses unlock their full
            potential in the online realm. We develop growth-oriented online
            marketing campaigns that make a positive impact on businesses.{" "}
          </p>
        </div>
        <div className="w-[90%] lg:w-[25%]">
          <h1 className="text-[#ffaa14] text-[30px] font-bold">Get In Touch</h1>
          <a
            target="_blank"
            href="tel:+41763953921"
            className="flex items-center cursor-pointer mt-10 text-[#fff] hover:text-[#ffaa14]"
          >
            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
              <i className="fa-solid fa-phone"></i>
            </div>
            &nbsp;&nbsp;
            <div className="font-sans">+41 76 395 39 21</div>
          </a>

          <a
            target="_blank"
            href="mailto:contact@max-idigital.com"
            className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
          >
            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
              <i className="fa-solid fa-envelope"></i>
            </div>
            &nbsp;&nbsp;
            <div className="font-sans">contact@max-idigital.com</div>
          </a>

          <a
            target="_blank"
            href="https://maps.app.goo.gl/xzAdmKzvMFFXgoqB7"
            className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
          >
            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            &nbsp;&nbsp;
            {/* <div className="font-sans">
              38/37 No.1 Logi Street, Gugai,
              <br /> Salem - 636006, Tamilnadu, India
            </div> */}
            <div className="font-sans">
              Corporate Office: Güterstrasse 8, <br /> 8952 Schlieren,{" "}
              Switzerland
            </div>
          </a>

          <a
            target="_blank"
            href="https://maps.app.goo.gl/WsimStUWU3kxQM2C6"
            className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
          >
            <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            &nbsp;&nbsp;
            {/* <div className="font-sans">
              38/37 No.1 Logi Street, Gugai,
              <br /> Salem - 636006, Tamilnadu, India
            </div> */}
            <div className="font-sans">
              Branch Office: 38/37B, No.1 Logi Street, Gugai, Salem - 636006,
              Tamilnadu, India
            </div>
          </a>
        </div>
        <div className="w-[90%] lg:w-[15%]">
          <h1 className="text-[#ffaa14] text-[30px] font-bold">
            Useful Links.
          </h1>
          <div
            className={`mt-10 cursor-pointer font-semibold ${
              isActive("/") ? "text-[#ffaa14]" : "text-[#fff]"
            } hover:text-[#ffaa14]`}
            onClick={() => navigate("/")}
          >
            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Home
          </div>
          <div
            className={`mt-4 cursor-pointer font-semibold ${
              isActive("/aboutus") ? "text-[#ffaa14]" : "text-[#fff]"
            } hover:text-[#ffaa14]`}
            onClick={() => navigate("/aboutus")}
          >
            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; About
          </div>
          <div
            className={`mt-4 cursor-pointer font-semibold ${
              isActive("/services") ? "text-[#ffaa14]" : "text-[#fff]"
            } hover:text-[#ffaa14]`}
            onClick={() => navigate("/services")}
          >
            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Services
          </div>
          <div
            className={`mt-4 cursor-pointer font-semibold ${
              isActive("/works") ||
              isActive("/works/webdesigns") ||
              isActive("/works/logodesigns") ||
              isActive("/works/printposters") ||
              isActive("/works/socialmediaposters") ||
              isActive("/works/videos")
                ? "text-[#ffaa14]"
                : "text-[#fff]"
            } hover:text-[#ffaa14]`}
            onClick={() => navigate("/works")}
          >
            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Works
          </div>
          {/* <div
                        className={`mt-4 cursor-pointer font-semibold ${isActive("/works") ? "text-[#ffaa14]" : "text-[#fff]"
                            } hover:text-[#ffaa14]`}
                        onClick={() => navigate("/blogs")}
                    >
                        <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Our Blogs
                    </div> */}
          <div
            className={`mt-4 cursor-pointer font-semibold ${
              isActive("/contact") ? "text-[#ffaa14]" : "text-[#fff]"
            } hover:text-[#ffaa14]`}
            onClick={() => navigate("/contact")}
          >
            <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp; Contact
          </div>
          {/* <div
                        className={`mt-4 cursor-pointer font-semibold ${isActive("/privacy") ? "text-[#ffaa14]" : "text-[#fff]"
                            } hover:text-[#ffaa14]`}
                        onClick={() => navigate("/privacy")}
                    >
                        <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;Privacy Policy
                    </div> */}

          <div className="flex">
            <a
              target="_blank"
              href="https://www.facebook.com/people/Max-I/pfbid02kVFZE1pMCFF3nDWYjZbvEqZ1KHLcd4usvXzyWoEBdRVA1s65ngWymkN5Wqj2C3MPl/?sk=about"
              className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
            >
              <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
                <i className="fa-brands fa-facebook"></i>
              </div>
            </a>
            &nbsp;&nbsp;
            <a
              target="_blank"
              href="https://www.linkedin.com/in/max-i-digital-solution-b33a6030a/"
              className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
            >
              <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </a>
            &nbsp;&nbsp;
            <a
              target="_blank"
              href="https://www.youtube.com/@Max-IDigitalSolutions/videos"
              className="flex items-center cursor-pointer mt-5 text-[#fff] hover:text-[#ffaa14]"
            >
              <div className="border rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-[20px]">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[2px] bg-[#ffaa14]"></div>
      <div className="text-[#fff] text-[17px] font-normal py-4" align="center">
        © Copyright @ MAX-I - 2024. All Rights Reserved
      </div>
    </div>
  );
}
