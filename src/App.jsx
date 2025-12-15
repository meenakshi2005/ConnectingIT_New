// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Hero from "./Components/Hero";
import Progress from "./Components/Progress";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import BrandLogoScroller from "./Components/BrandLogo";
import PrivacyPolicy from "./Components/PPolicy";
import AboutUs from "./AboutUs";
import ContactUs from "./Components/ContactUs";

// ScrollToTop defined inline — no extra file
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // listens to pathname/hash/key; scrolls on any navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, location.hash, location.key]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />   {/* add once here */}
      <div className="min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/ppolicy" element={<PrivacyPolicy />} />
          <Route path="/brandlogo" element={<BrandLogoScroller />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <BrandLogoScroller />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
