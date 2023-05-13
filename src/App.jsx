import React from "react";

// import HeroContent from "./components/HeroContent";
// import Navbar from "./Navbar/Navbar";
// import Home from "./Navbar/Home";
// import About from "./Navbar/About";
// import Contact from "./Navbar/Contact";
import { Routes, Route } from "react-router-dom";
import Business from "./components/Business";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Sports from "./components/Sports";
import Science from "./components/Science";
import Technology from "./components/Technology";

import GalleryNews from "./components/GalleryNews";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar />
      <HeroContent /> */}
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<GalleryNews />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Routes>
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/health" element={<Health />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/science" element={<Science />} />
        <Route path="/technology" element={<Technology />} />
      </Routes> */}
    </div>
  );
}

export default App;
