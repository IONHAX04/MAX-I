import { useRef } from "react";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import PropTypes from "prop-types";

import "./Titles.css";

export default function Index({ data, setSelectedProject }) {
  return (
    <div className="titles">
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

Index.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      speed: PropTypes.number.isRequired,
    })
  ).isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};

function Title({ data, setSelectedProject }) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className="title">
      <div
        className="wrapper"
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p style={{ clipPath: clip }}>{title}</motion.p>
        <p>{title}</p>
      </div>
    </div>
  );
}

Title.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    i: PropTypes.number.isRequired,
  }).isRequired,
  setSelectedProject: PropTypes.func.isRequired,
};
