import React, { useState } from "react";

const data = {
  esim: {
    title: "Stay connected anywhere with eSIM",
    description:
      "Activate international eSIM instantly without changing your SIM card. Enjoy seamless connectivity, high-speed data, and flexible plans for travelers.",
    image: "https://mobileworld.com.vn/uploads/news/05_2023/original_blog_13380_4odqehr742f7qei5nmufram8aezugghh.jpg",
    button: "Explore eSIM",
  },
  payments: {
  title: "Intelligent Payment Orchestration Platform",
  description:
    "Empower your business with smart routing, real-time dashboards, and PCI-DSS Level 1 security. Our platform optimizes success rates by 10%, reduces MDR, and ensures 99.9% uptime through auto-failover and SLA-backed performance — delivering reliable, compliant, and data-driven payment management.",
  image: "https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/03/04/127539-payment.jpg",
  button: "Discover Payment Platform",
},

  prepaid: {
  title: "Comprehensive Prepaid Solutions for Every Need",
  description:
    "NPCI and Mastercard certified prepaid card issuance platform offering secure, reloadable, and non-reloadable cards. Manage full card lifecycle with Pine Perks API — empowering corporates, merchants, and individuals with seamless digital and physical prepaid experiences across 17 countries.",
  image: "https://www.casita.com/images/files/public/19012023042223PM-shutterstock_1785960965.jpg",
  button: "Discover Prepaid Solutions",
},
  growth: {
    title: "Boost your business with fintech tools",
    description:
      "Use our platform to expand your brand reach, automate campaigns, and improve financial efficiency for smarter growth.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?fit=crop&w=800&q=80",
    button: "Explore Growth Tools",
  },
};

const Progress = () => {
  const [selected, setSelected] = useState("esim");

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mt-6 bg-gradient-to-r from-gray-100 to-gray-50 px-8 py-2">
      {/* Sidebar */}
      <div className="flex flex-col space-y-4 w-full md:w-1/3">
        <button
          className={`flex items-center space-x-3 p-4 rounded-full text-left shadow-sm transition-all duration-300 ${
            selected === "esim"
              ? "bg-white text-black font-semibold shadow-md"
              : "bg-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setSelected("esim")}
        >
          <span className="text-cyan-500 text-2xl">📶</span>
          <span>International eSIM</span>
        </button>

        <button
          className={`flex items-center space-x-3 p-4 rounded-full text-left transition-all duration-300 ${
            selected === "payments"
              ? "bg-white text-black font-semibold shadow-md"
              : "bg-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setSelected("payments")}
        >
          <span className="text-indigo-500 text-2xl">💳</span>
          <span>Payment Platform</span>
        </button>

        <button
          className={`flex items-center space-x-3 p-4 rounded-full text-left transition-all duration-300 ${
            selected === "prepaid"
              ? "bg-white text-black font-semibold shadow-md"
              : "bg-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setSelected("prepaid")}
        >
          <span className="text-yellow-500 text-2xl">💰</span>
          <span>Prepaid Cards</span>
        </button>

        {/* <button
          className={`flex items-center space-x-3 p-4 rounded-full text-left transition-all duration-300 ${
            selected === "growth"
              ? "bg-white text-black font-semibold shadow-md"
              : "bg-transparent text-gray-600 hover:text-black"
          }`}
          onClick={() => setSelected("growth")}
        >
          <span className="text-green-500 text-2xl">🚀</span>
          <span>Business Growth Tools</span>
        </button> */}
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-10 md:mt-0 w-full md:w-2/3">
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-b from-pink-200 to-blue-200">
          <img
            src={data[selected].image}
            alt="preview"
            className="w-80 h-96 object-cover rounded-2xl"
          />
        </div>

        <div className="mt-8 md:mt-0 md:ml-8 max-w-lg">
  <p className="text-sm uppercase tracking-widest text-gray-500">
    {selected.toUpperCase()}
  </p>
  <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
    {data[selected].title}
  </h2>
  <p className="text-gray-600 mb-6">{data[selected].description}</p>

  <button className="bg-[#094370] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0f6a94] hover:scale-105 transition-all duration-300 shadow-md">
    {data[selected].button}
  </button>
</div>

      </div>
    </div>
  );
};

export default Progress;
