import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/00-Header/Header";
import Home from "./components/01-Home/Home";
import About from "./components/02-About/About";
import Services from "./components/03-Services/Services";
import Works from "./components/04-Works/Works";
import Contact from "./components/05-Contact/Contact";
import Blogs from "./components/08-Blogs/Blogs";

import Footer from "./components/06-Footer/Footer";

import AppStoreOpt from "./components/Services/AppStoreOpt";
import BrandMgmt from "./components/Services/BrandMgmt";
import ContentMarketing from "./components/Services/ContentMarketing";
import SearchEngineMark from "./components/Services/SearchEngineMark";
import SEO from "./components/Services/SEO";
import SocialMediaAds from "./components/Services/SocialMediaAds";
import SocialMediaMgmt from "./components/Services/SocialMediaMgmt";
import WebDev from "./components/Services/WebDev";

import Logo from "./components/Works/Logo";
import Posters from "./components/Works/Posters";
import SocialMediaPosters from "./components/Works/SocialMediaPosters";
import Videos from "./components/Works/Videos";
import WebsiteDesign from "./components/Works/WebsiteDesign";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/seo" element={<SEO />} />
          <Route path="/content-marketing" element={<ContentMarketing />} />
          <Route path="/app-store-optimization" element={<AppStoreOpt />} />
          <Route
            path="/search-engine-marketing"
            element={<SearchEngineMark />}
          />
          <Route
            path="/social-media-advertising"
            element={<SocialMediaAds />}
          />
          <Route path="/brand-management" element={<BrandMgmt />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route
            path="/social-media-management"
            element={<SocialMediaMgmt />}
          />

          <Route path="/logo-designs" element={<Logo />} />
          <Route path="/web-design" element={<WebsiteDesign />} />
          <Route path="/posters" element={<Posters />} />
          <Route path="/social-posters" element={<SocialMediaPosters />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
