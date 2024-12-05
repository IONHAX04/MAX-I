import Titles from "./Titles/Titles";

import "./styles.css";

const data = [
  {
    title: "MAX-I",
    description:
      "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67,
  },
  {
    title: "DIGITAL SOLUTIONS",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8,
  },
  // {
  //   title: "SOLUTIONS",
  //   description:
  //     "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
  //   speed: 0.8,
  // },
];

export default function Projects() {
  return (
    <div className="container">
      <Titles data={data} />
    </div>
  );
}
