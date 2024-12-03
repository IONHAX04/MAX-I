import { useRef } from "react";
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
  const { title, i } = data;
  const container = useRef(null);

  const titleClass = i === 0 ? "first" : "other";

  return (
    <div ref={container} className={`title ${titleClass}`}>
      <div
        className="wrapper"
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
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
