import seo from "../../assets/servicess/CONTENTMARKETING.jpg";
import service from "../../assets/common/service.jpg";

export default function ContentMarketing() {
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
              Content Marketing
            </h3>
            <p
              className="text-base md:text-lg text-slate-700 my-4 md:my-6 text-justify"
              style={{ fontSize: "20px" }}
            >
              Our content marketing services engage audiences, build brand
              authority, and boost conversions. We create valuable content for
              blogs, social media, and email campaigns, attracting and retaining
              customers. With strategic campaigns, we fuel online growth,
              helping businesses succeed in the digital landscape.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
