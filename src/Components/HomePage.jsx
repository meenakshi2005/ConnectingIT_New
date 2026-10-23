import React from "react";
import Hero from "./Hero";
import Progress from "./Progress";
import ComplianceSummary from "./ComplienceSummary";
import forexImage from "../assets/Images/Forex.jpg";

const features = [
  { icon: "⚡", title: "Instant Activation", description: "Activate eSIM and cards instantly." },
  { icon: "🌍", title: "Global Coverage", description: "Connect anywhere with seamless network." },
  { icon: "📶", title: "High-Speed Data", description: "Enjoy fast and reliable connectivity." },
  { icon: "🔒", title: "Secure Payments", description: "Safe and compliant financial transactions." },
];

const products = [
  {
    name: "International eSIM",
    description: "Stay connected worldwide",
    image: "https://www.mobilezguru.com/wp-content/uploads/2020/02/What-is-an-eSIM.jpg",
  },
  {
    name: "Prepaid Cards",
    description: "Flexible payments for everyone",
    image: "https://blog.xoxoday.com/content/images/2022/09/virtual-prepaid-reward-cards.png",
  },
  {
    name: "Digital Forex Card",
    description: "Multi-currency card for seamless international spending",
    image: forexImage,
  },
  {
    name: "Payment Orchestration Platform",
    description: "Smart routing, higher success rates, and unified payment management",
    image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-300 text-gray-800">
      
      <Hero />

      {/* Features Section */}
      <section id="why-us" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose ConnectingIT?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#094370] to-[#0f769e] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#094370] to-[#0f769e] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl text-[#094370] group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm group-hover:text-white/95 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#094370] to-[#0f769e] mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-[#094370] transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <ComplianceSummary />
      </section>

      {/* CTA Section */}
      <section className="py-14 px-6 bg-gradient-to-r from-[#094370] to-[#0f6a94] text-white text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to simplify your fintech solutions?
        </h2>
        <p className="text-base mb-6 max-w-2xl mx-auto">
          Start using ConnectingIT today and take control of your payments and connectivity.
        </p>
        <button className="px-7 py-3 rounded-full bg-white text-[#094370] font-semibold hover:bg-[#094370] hover:text-white transition shadow">
          Get Started
        </button>
      </section>

      <footer className="py-8 px-6 bg-gray-100 text-gray-600 text-center text-sm"></footer>
    </div>
  );
};

export default HomePage;