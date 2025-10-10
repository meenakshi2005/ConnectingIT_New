import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Progress from "./Components/Progress";
import Footer from "./Components/Footer";
import { Home } from "lucide-react";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#071527] to-[#0A2038] min-h-screen text-white">
      <Navbar />
      {/* <Hero />
      <Progress /> */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
