import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/00-Header/Header";
import Home from "./components/01-Home/Home";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
