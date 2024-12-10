import seo from "../../assets/servicess/SOCIALMANAGEMENT.jpg";
import service from "../../assets/common/service.jpg";

export default function SocialMediaMgmt() {
  return (
    <div>
      <img src={service} alt="" />
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
              Social Media Management
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Let our experienced team handle your social media presence, from
              crafting compelling posts to managing interactions, to help you
              connect with your audience and achieve your business
              goals.Transform your social media channels into powerful marketing
              tools.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
