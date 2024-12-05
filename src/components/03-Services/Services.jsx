import { motion } from "framer-motion";
import PropTypes from "prop-types";

import workimg from "../../assets/common/service.jpg";

import app from "../../assets/servicess/APP.jpg";
import brandmgmt from "../../assets/servicess/BRANDMANAGEMENT.jpg";
import contentmarket from "../../assets/servicess/CONTENTMARKETING.jpg";
import sem from "../../assets/servicess/SEM.jpg";
import seo from "../../assets/servicess/SEO.jpg";
import socialmgmt from "../../assets/servicess/SOCIALMANAGEMENT.jpg";
import socialmediaads from "../../assets/servicess/SOCIALMEDIAAD.jpg";
import web from "../../assets/servicess/WEB.jpg";
import { useNavigate } from "react-router-dom";

const worksData = [
  {
    image: seo,
    title: "Search Engine Optimization",
    route: "/seo",
  },
  {
    image: contentmarket,
    title: "Content Marketing",
    route: "/content-marketing",
  },
  {
    image: app,
    title: "App Store Optimization",
    route: "/app-store-optimization",
  },
  {
    image: sem,
    title: "Search Engine Marketing",
    route: "/search-engine-marketing",
  },
  {
    image: socialmediaads,
    title: "Social Media Advertising",
    route: "/social-media-advertising",
  },
  {
    image: brandmgmt,
    title: "Brand Management",
    route: "/brand-management",
  },
  {
    image: web,
    title: "Website Design & Development",
    route: "/web-dev",
  },
  {
    image: socialmgmt,
    title: "Social Media Management",
    route: "/social-media-management",
  },
];

export default function Services() {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    console.log("path", path);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="sm:p-6 md:p-8 mt-[10vh] bg-white">
      <div>
        <img src={workimg} alt="Header" />
      </div>
      <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
        <div className="grid grid-cols-12 gap-4">
          {worksData.map((work, index) => (
            <BounceCard
              key={index}
              onClick={() => onNavigate(work.route)}
              className="col-span-12 lg:col-span-4 md:col-span-4 hover:bg-[#ffffff] transition duration-100 bg-opacity-10"
            >
              <CardTitle>
                <img src={work.image} alt={work.title} />
              </CardTitle>
              <div
                className="absolute bottom-0 left-4 right-4 lg:top-[76%] top-[72%] translate-y-8 translate-x-10 rounded-t-2xl bg-gradient-to-br from-[#fead0ade] to-[#ffc20b81]
                 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
              >
                <span className="block text-center font-bold text-indigo-50 lg:text-xl text-lg">
                  {work.title}
                </span>
              </div>
            </BounceCard>
          ))}
        </div>
      </section>
    </div>
  );
}

const BounceCard = ({ className, children, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      onClick={onClick}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};

Services.propTypes = {
  worksData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  headerImage: PropTypes.string.isRequired,
};

BounceCard.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Add PropTypes for onClick
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
