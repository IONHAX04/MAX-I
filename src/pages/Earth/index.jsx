import { useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { motion } from "framer-motion-3d";

import colorImg from "../../assets/home/color.jpg";
import normalImg from "../../assets/home/normal.png";
import occlusion from "../../assets/home/occlusion.jpg";

export default function Earth() {
  const scene = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ["start end", "end start"],
  });

  // Load textures
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    colorImg,
    normalImg,
    occlusion,
  ]);

  return (
    <div
      ref={scene}
      style={{ height: "100vh", width: "100%", position: "fixed" }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <motion.mesh scale={2.5} rotation-y={scrollYProgress}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
        </motion.mesh>
      </Canvas>
    </div>
  );
}
