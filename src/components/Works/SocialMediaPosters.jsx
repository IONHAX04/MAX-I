import { useState } from "react";
import image from "../../assets/works-banner/WEB-BANNERS-SOCIAL.jpg";

import img1 from "../../assets/works/social/img1.png";
import img2 from "../../assets/works/social/img2.png";
import img3 from "../../assets/works/social/img3.png";
import img4 from "../../assets/works/social/img4.jpg";
import img5 from "../../assets/works/social/img5.jpg";
import img6 from "../../assets/works/social/img6.png";
import img7 from "../../assets/works/social/img7.png";

export default function SocialMediaPosters() {
  const [modalImage, setModalImage] = useState(null); // State to store the selected image for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open

  const cardui =
    " w-[350px] h-[auto] cursor-pointer relative group overflow-hidden";
  const cardimg =
    "w-[350px] h-[300px] transition-transform duration-300 ease-in-out rounded-md object-cover";
  const heading =
    "w-[100%] h-[40px] bg-[#ffaa14] rounded-b-md text-[18px] font-bold flex justify-center items-center";
  const button =
    "w-[100px] absolute opacity-0 transition-opacity duration-300 ease-in-out bg-[#ffaa14] text-[#fff] text-[15px] py-2 px-4 rounded group-hover:opacity-100";

  const cardData = [
    {
      img: img1,
      fullimg: img1,
    },
    {
      img: img2,
      fullimg: img2,
    },
    {
      img: img3,
      fullimg: img3,
    },
    {
      img: img4,
      fullimg: img4,
    },
    {
      img: img5,
      fullimg: img5,
    },
    {
      img: img6,
      fullimg: img6,
    },
    {
      img: img7,
      fullimg: img7,
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

      <div className="w-[100%]" align="center">
        <div className="">
          <div className="w-[100%] bg-white py-10 flex flex-wrap justify-center gap-x-10 gap-y-8">
            {cardData.map((card, index) => (
              <div key={index} className={cardui} align="center">
                <img className={cardimg} src={card.img} alt={card.name} />
                <div className="absolute inset-0 bg-black rounded-md  opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
                {/* <div className={heading}>{card.name}</div> */}
                <button
                  className={button}
                  style={{
                    top: "50%",
                    left: "50%",
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
                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-101"
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
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="w-[80%] h-[80vh] overflow-auto">
                    <img
                      src={modalImage}
                      alt="Modal"
                      className="w-[90%] lg:w-[50%] rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
