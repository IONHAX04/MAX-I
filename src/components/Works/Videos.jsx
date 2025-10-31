import { useState } from "react";
import image from "../../assets/works-banner/WEB-BANNERS-VIDEO.jpg";

import img1 from "../../assets/works/video/Thumbnail/img1.jpg";
import img2 from "../../assets/works/video/Thumbnail/img2.jpg";
import img3 from "../../assets/works/video/Thumbnail/img3.png";

import video1 from "../../assets/works/video/video1.mp4";
import video2 from "../../assets/works/video/video2.mp4";
import video3 from "../../assets/works/video/video3.mp4";
import { Helmet } from "react-helmet";

export default function Videos() {
  const [modalImage, setModalImage] = useState(null); // State to store the selected image for the modal
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track whether the modal is open

  const cardui =
    " w-[350px] h-[auto] rounded-md  cursor-pointer relative group overflow-hidden";
  const cardimg =
    "w-[350px] h-[300px] transition-transform duration-300 ease-in-out rounded-md object-cover";
  const heading =
    "w-[100%] h-[40px] bg-[#ffaa14] text-[18px] font-bold flex justify-center items-center";
  const button =
    "w-[100px] absolute opacity-0 transition-opacity duration-300 ease-in-out bg-[#ffaa14] text-[#fff] text-[15px] py-2 px-4 rounded group-hover:opacity-100";

  const cardData = [
    {
      img: img1,
      video: video1,
    },
    {
      img: img2,
      video: video2,
    },
    {
      img: img3,
      video: video3,
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
      <Helmet>
  <title>Max-iDigital | Brand Videos & Corporate Video Production in India</title>
  <meta
    name="description"
    content="Looking for professional video production in India? Max-iDigital delivers branded video content, social media clips, and campaign videos to boost reach, conversions & brand recall."
  />
  <meta
    name="keywords"
    content="video production India, corporate videos, brand videos, social media video marketing, campaign videos, professional video services, Max-iDigital, branded content"
  />
</Helmet>
      <img src={image} alt="" />
      <div className="w-[100%]" align="center">
        <div className="py-10 bg-white">
          <div className="w-[100%] flex flex-wrap justify-center gap-x-10 gap-y-8">
            {cardData.map((card, index) => (
              <div key={index} className={cardui} align="center">
                <img className={cardimg} src={card.img} alt={card.name} />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300 ease-in-out"></div>
                {/* <div className={heading}>{card.name}</div> */}
                <button
                  className={button}
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  onClick={() => handleViewClick(card.video)} // Set the image for the modal
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
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <div className="w-[100%] h-[80vh] overflow-auto">
                    {/* <img src={modalImage} alt="Modal" className="w-[50%] rounded-lg" /> */}
                    <video
                      className="h-[100%] bg-[#000] lg:w-[50%] rounded-lg"
                      controls
                    >
                      <source src={modalImage} />
                    </video>
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
