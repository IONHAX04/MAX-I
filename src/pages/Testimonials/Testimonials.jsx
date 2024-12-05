import PropTypes from "prop-types"; // Import PropTypes
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import "./Testimonials.css";

import logo from "../../assets/home/bg2.svg";

const images = [
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
  logo,
];

export default function Testimonials() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true, // Enable smooth scrolling
      lerp: 0.1, // Adjust this value for the scroll animation damping
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    let timeout;

    const resize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
      }, 200); // Adjust debounce delay as needed
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      lenis.destroy();
      clearTimeout(timeout);

      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div>
      <div className="mainTest">
        <div className="spacer"></div>
        <div ref={gallery} className="gallery">
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className="imageContainer">
          <img src={`${src}`} alt="gallery" className="image" loading="lazy" />
        </div>
      ))}
    </motion.div>
  );
};

Column.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  y: PropTypes.object.isRequired,
};
