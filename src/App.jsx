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
import TermsOfService from "./Components/Terms&conditions";
import CertificationCard from "./Components/Compliences";
import { SmoothScrollProvider, useSmoothScroll } from "./Components/SmoothScroll";

function ScrollToTop() {
  const location = useLocation();
  const lenis = useSmoothScroll();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) {
          const navOffset = document.querySelector(".site-nav")?.getBoundingClientRect().height ?? 0;
          lenis?.scrollTo(target, { offset: -navOffset - 16, duration: 1.1 });
          if (!lenis) {
            const top = target.getBoundingClientRect().top + window.scrollY - navOffset - 16;
            window.scrollTo({ top, behavior: "auto" });
          }
          return;
        }
      }
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [lenis, location.pathname, location.hash, location.key]);
  return null;
}

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <ScrollToTop />
        <div className="min-h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/team" element={<Team />} />
            <Route path="/terms&conditions" element={<TermsOfService />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/ppolicy" element={<PrivacyPolicy />} />
            <Route path="/brandlogo" element={<BrandLogoScroller />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/compliance" element={<CertificationCard />} />
          </Routes>

          <BrandLogoScroller />
          <Footer />
        </div>
      </SmoothScrollProvider>
    </Router>
  );
}

export default App;
