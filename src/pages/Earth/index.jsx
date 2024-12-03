import { useRef, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import colorImg from "../../assets/home/color.jpg";
import normalImg from "../../assets/home/normal.png";
import occlusion from "../../assets/home/occlusion.jpg";

export default function Earth() {
  const scene = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [color, normal, aoMap] = useLoader(TextureLoader, [
    colorImg,
    normalImg,
    occlusion,
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = scrollPosition / totalScrollHeight;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={scene}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <motion.mesh scale={2.5} rotation-y={scrollProgress * Math.PI * 2}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </div>
  );
}
