import React, { Suspense, lazy } from "react";
import SmoothScroll from "../../pages/Projects/SmoothScroll/index";
import Projects from "../../pages/Projects";

import "./Home.css";

const Earth = lazy(() => import("../../pages/Earth/index"));

import placeholder from "../../assets/home/placeholder.png";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="main">
        <Suspense fallback={<img src={placeholder} alt="Loading..." />}>
          <Earth />
        </Suspense>
        <Projects />
      </main>
    </SmoothScroll>
  );
}
