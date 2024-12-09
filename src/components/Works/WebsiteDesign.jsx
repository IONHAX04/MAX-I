import { useState } from "react";
import image from "../../assets/works-banner/WEB-BANNERS-WEB.jpg";

import movenpack from "../../assets/works/web/movenpack.jpg";
import movenpackfull from "../../assets/works/web/movenpackfull.png";
import ublisyoga from "../../assets/works/web/ublisyoga.jpg";
import ublisyogafull from "../../assets/works/web/ublisyogafull.png";

export default function WebsiteDesign() {
  const [modalImage, setModalImage] = useState(null); // State to store the selected image for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open

  const cardui =
    " w-[350px] h-[auto] lg:h-[460px] cursor-pointer relative group overflow-hidden";
  const cardimg = "transition-transform duration-300 ease-in-out";
  const heading =
    "w-[100%] h-[40px] bg-[#ffaa14] rounded-t-lg text-[18px] font-bold flex justify-center items-center";
  const button =
    "w-[100px] absolute opacity-0 transition-opacity duration-300 ease-in-out bg-[#ffaa14] text-[#fff] text-[15px] py-2 px-4 rounded group-hover:opacity-100";

  const cardData = [
    {
      name: "Move N Pack",
      img: movenpack,
      fullimg: movenpackfull,
      link: "https://movenpack.ch/",
    },
    {
      name: "Ublis Yoga",
      img: ublisyoga,
      fullimg: ublisyogafull,
      link: "https://ublisyoga.in/",
    },
  ];

  // Function to handle opening the modal with the selected image
  const handleViewClick = (img) => {
    setModalImage(img);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <div>
      <img src={image} alt="" />
      <div className="w-[100%] bg-white" align="center">
        <div className="py-20 w-[90%]">
          <div className="w-[100%] flex flex-wrap justify-center gap-x-10 gap-y-8">
            {cardData.map((card, index) => (
              <div key={index} className={cardui} align="center">
                <img className={cardimg} src={card.img} alt={card.name} />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
                <div className={heading}>{card.name}</div>
                <a
                  href={card.link}
                  target="_blank"
                  className={button}
                  style={{
                    top: "50%",
                    left: "33%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Site&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <button
                  className={button}
                  style={{
                    top: "50%",
                    left: "69%",
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => handleViewClick(card.fullimg)} // Set the image for the modal
                >
                  View&nbsp;&nbsp;<i className="fa-solid fa-eye"></i>
                </button>
              </div>
            ))}

            {isModalOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                onClick={handleCloseModal}
              >
                <div
                  className="relative w-[100%]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="w-[80%] mb-5" align="end">
                    <button
                      className="bg-[#ffaa14] text-[#fff] rounded-full px-[11px] py-[5px]"
                      onClick={handleCloseModal}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="w-[80%] h-[80vh] overflow-auto">
                    <img
                      src={modalImage}
                      alt="Modal"
                      className="w-[100%] rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
