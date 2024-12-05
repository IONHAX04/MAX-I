import { motion } from "framer-motion";
import PropTypes from "prop-types";

import workimg from "../../assets/common/works.jpg";

import workslogo from "../../assets/works/WORKSLOGO.png";
import worksposter from "../../assets/works/WORKSPOSTER.png";
import workssocial from "../../assets/works/WORKSSOCIAL.png";
import worksvideo from "../../assets/works/WORKSVIDEO.png";
import worksweb from "../../assets/works/WORKSWEB.png";
import { useNavigate } from "react-router-dom";

const worksData = [
  {
    image: workslogo,
    title: "Logo Designs",
    route: "/logo-designs",
  },
  {
    image: worksweb,
    title: "Web Designs",
    route: "/web-design",
  },
  {
    image: worksposter,
    title: "Print Posters",
    route: "/posters",
  },
  {
    image: workssocial,
    title: "Social Media Posters",
    route: "/social-posters",
  },
  {
    image: worksvideo,
    title: "Videos",
    route: "/videos",
  },
];

export default function Works() {
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

Works.propTypes = {
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
