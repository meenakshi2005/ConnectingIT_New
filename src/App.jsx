// import React from "react";
// import Navbar from "./Components/Navbar";
// import Hero from "./Components/Hero";
// import Progress from "./Components/Progress";
// import Footer from "./Components/Footer";
// import { Home } from "lucide-react";
// import HomePage from "./Components/HomePage";

// function App() {
//   return (
//     <div className="font-sans bg-gradient-to-b from-[#071527] to-[#0A2038] min-h-screen text-white">
//       <Navbar />
//       {/* <Hero />
//       <Progress /> */}
//       <HomePage />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 👉 Import Your New Page

import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Hero from "./Components/Hero";
import Progress from "./Components/Progress";
import Team from "./Components/Team";
import Footer from "./Components/Footer";
import BrandLogoScroller from "./Components/BrandLogo";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Example routes if needed */}
          <Route path="/hero" element={<Hero />} />
          <Route path="/progress" element={<Progress />} />

          {/* 👉 New Route for Our Team */}
          <Route path="/team" element={<Team />} />
          <Route path="/contect" element={<ContactUs />} />
          <Route path="/brandlogo" element={<BrandLogoScroller />} />
        </Routes>
        <BrandLogoScroller />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
