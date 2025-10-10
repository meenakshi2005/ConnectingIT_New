import React from "react";
import Hero from "./Hero"; // Your Hero component (update it to light mode as well)
import Progress from "./Progress";

const features = [
  { icon: "⚡", title: "Instant Activation", description: "Activate eSIM and cards instantly.," },
  { icon: "🌍", title: "Global Coverage", description: "Connect anywhere with seamless network." },
  { icon: "📶", title: "High-Speed Data", description: "Enjoy fast and reliable connectivity." },
  { icon: "🔒", title: "Secure Payments", description: "Safe and compliant financial transactions." },
];

const products = [
  { name: "International eSIM", description: "Stay connected worldwide", image: "https://europeesim.com/wp-content/uploads/2023/02/eSIM-Europe-p1-what-is-eSIM-2-1.jpg" },
  { name: "Payment Orchestration Platform", description: "Centralized payment management", image: "https://dazeinfo.com/wp-content/uploads/2021/02/onlinepayment-getty.jpg" },
  { name: "Prepaid Cards", description: "Flexible payments for everyone", image: "https://blog.xoxoday.com/content/images/2022/09/virtual-prepaid-reward-cards.png" },
];

const testimonials = [
  { name: "Sarah Chen", feedback: "ConnectingIT simplified our global payments and connectivity.", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { name: "John Doe", feedback: "The platform is intuitive and the support is amazing!", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Alice Brown", feedback: "We reduced transaction failures by 40% using their orchestration platform.", avatar: "https://randomuser.me/api/portraits/women/45.jpg" },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Hero /> {/* Make sure Hero component uses light theme colors */}
      <Progress />

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose ConnectingIT?</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products / Services */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="text-xl font-bold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create your account in seconds and get instant access.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="text-xl font-bold mb-2">Choose Product</h3>
            <p className="text-gray-600">Select eSIMs, prepaid cards or our POP platform according to your needs.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="text-xl font-bold mb-2">Go Live</h3>
            <p className="text-gray-600">Start using our services immediately with full global coverage.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4">"{t.feedback}"</p>
              <h4 className="font-bold">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center rounded-t-3xl">
        <h2 className="text-4xl font-bold mb-6">Ready to simplify your fintech solutions?</h2>
        <p className="text-lg mb-8">Start using ConnectingIT today and take control of your payments and connectivity.</p>
        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-100 text-gray-600 text-center">
        {/* <p>&copy; {new Date().getFullYear()} ConnectingIT. All rights reserved.</p> */}
      </footer>
    </div>
  );
};

export default HomePage;
