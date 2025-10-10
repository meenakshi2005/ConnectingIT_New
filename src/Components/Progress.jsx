import React, { useState } from "react";

const data = {
  esim: {
    title: "Stay connected anywhere with eSIM",
    description:
      "Activate international eSIM instantly without changing your SIM card. Enjoy seamless connectivity, high-speed data, and flexible plans for travelers.",
    image: "https://miro.medium.com/v2/resize:fit:1358/1*qRg0buATOB7sJqtbRUHghg.jpeg",
    button: "Explore eSIM",
  },
  payments: {
    title: "Centralized payment management",
    description:
      "Optimize your transactions with our Payment Orchestration Platform. Manage multiple gateways, automate routing, and get analytics for smarter business decisions.",
    image: "https://cdn.zeebiz.com/hindi/sites/default/files/styles/zeebiz_850x478/public/2023/03/04/127539-payment.jpg",
    button: "Explore Payments",
  },
  prepaid: {
    title: "Flexible prepaid cards for everyone",
    description:
      "Corporate, student, or travel cards — secure, globally accepted, and easy to top-up. Track your spending in real-time and enjoy worldwide coverage.",
    image: "https://tse2.mm.bing.net/th/id/OIP.TNtdgJ9ybeKxUVDRNW5iHAHaE7?pid=Api&P=0&h=180",
    button: "Explore Prepaid Cards",
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
          <p className="text-sm uppercase tracking-widest text-gray-500">{selected.toUpperCase()}</p>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">{data[selected].title}</h2>
          <p className="text-gray-600 mb-6">{data[selected].description}</p>
          <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
            {data[selected].button}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Progress;
