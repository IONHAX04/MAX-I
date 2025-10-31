import { useState } from "react";
import image from "../../assets/works-banner/WEB-BANNERS-PRINT.jpg";

import chillax from "../../assets/works/poster/chillax.png";
import dubaijwellery from "../../assets/works/poster/DubaiJewellery.jpg";
import { Helmet } from "react-helmet";

export default function Posters() {
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
    { img: dubaijwellery, fullimg: dubaijwellery },
    { img: chillax, fullimg: chillax },
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
  <title>Max-iDigital | Custom Poster Design & Print Services in India</title>
  <meta
    name="description"
    content="Max-iDigital provides professional poster design and printing services across India from eye-catching event posters to social media print-ready layouts. Elevate your brand visibility with creative visuals that grab attention and deliver results."
  />
  <meta
    name="keywords"
    content="poster design India, print design services, custom posters, event poster design, social media posters, creative design, Max-iDigital, printing services, brand visibility"
  />
</Helmet>
      <img src={image} alt="" />
      <div className="w-[100%] bg-white" align="center">
        <div className="py-20 w-[90%]">
          <div className="w-[100%] flex flex-wrap justify-center gap-x-10 gap-y-8">
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
