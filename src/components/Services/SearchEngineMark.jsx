import seo from "../../assets/servicess/SEM.jpg";
import service from "../../assets/common/service.jpg";

export default function SearchEngineMark() {
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
              Search Engine Marketing
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              At Max-I, we craft bespoke growth strategies that seamlessly
              integrate with your business goals, ensuring every marketing
              effort is purpose-driven and results-oriented." "By analyzing your
              target audience's search behaviors across their purchase cycles,
              we tailor SEM campaigns that resonate at each touchpoint,
              propelling prospects towards meaningful brand engagements
            </p>
            <p
              className="text-base md:text-lg mt-4 text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Google ads, Pay Per Click, Youtube Ads{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
