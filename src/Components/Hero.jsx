import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [hoveredAgent, setHoveredAgent] = useState(null);

  const profiles = [
    {
      name: "International eSIM",
      role: "Stay Connected Anywhere",
      experience: "Digital SIM for travelers",
      image:
        "https://mobileworld.com.vn/uploads/news/05_2023/original_blog_13380_4odqehr742f7qei5nmufram8aezugghh.jpg",
      agents: [
        { label: "Instant Activation", color: "from-[#094370] to-blue-700", icon: "⚡" },
        { label: "Global Coverage", color: "from-[#0a5870] to-[#0f769e]", icon: "🌍" },
        { label: "High-Speed Data", color: "from-[#0c5d88] to-[#118ab2]", icon: "📶" },
        { label: "Flexible Plans", color: "from-[#136e7e] to-[#158aa6]", icon: "🔄" },
      ],
      stats: {
        growth: "180+ Countries",
        automation: "1-min Activation",
        roi: "24×7 Support",
      },
      metric: "Global Connectivity",
    },
    {
      name: "Payment Orchestration Platform",
      role: "Centralized Payment Management",
      experience: "Optimize transactions and gateways",
      image:
        "https://dazeinfo.com/wp-content/uploads/2021/02/onlinepayment-getty.jpg",
      agents: [
        { label: "Multi-Gateway", color: "from-[#094370] to-blue-700", icon: "💳" },
        { label: "Smart Routing", color: "from-[#0b5a70] to-[#117198]", icon: "🔄" },
        { label: "Cross-Border", color: "from-[#0f769e] to-[#13a0cc]", icon: "🌐" },
        { label: "Analytics Dashboard", color: "from-[#0d698d] to-[#1390b5]", icon: "📊" },
      ],
      stats: {
        growth: "🚀 Higher Success Rates",
        automation: "💰 Lower Costs",
        roi: "🛡 Security & Compliance",
      },
      metric: "Transactions Optimized",
    },
    {
      name: "Prepaid Cards",
      role: "Flexible Payments for Everyone",
      experience: "Corporate, students & travelers",
      image:
        "https://blog.xoxoday.com/content/images/2022/09/virtual-prepaid-reward-cards.png",
      agents: [
        { label: "Instant Activation", color: "from-[#094370] to-blue-700", icon: "⚡" },
        { label: "Global Acceptance", color: "from-[#0d5f77] to-[#10819e]", icon: "🌍" },
        { label: "Secure Transactions", color: "from-[#106b8f] to-[#1390b5]", icon: "🔒" },
        { label: "Easy Top-Up", color: "from-[#0a5870] to-[#0f769e]", icon: "💳" },
      ],
      stats: {
        growth: "✅ No Credit Checks",
        automation: "📱 Real-Time Tracking",
        roi: "🌐 Worldwide Usage",
      },
      metric: "Prepaid Card Services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % profiles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [profiles.length]);

  const profile = profiles[currentProfile];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-10 bg-[#f8fafc] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#0f6a94] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-[#0a5870] rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white p-12 rounded-2xl shadow-xl border border-[#e2e8f0]">
        {/* Left Section */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-[#094370]">
            <span className="block bg-gradient-to-r from-[#094370] via-[#0b5a70] to-[#1390b5] bg-clip-text text-transparent">
              Empower Your
            </span>
            <span className="block bg-gradient-to-r from-[#094370] via-[#0b5a70] to-[#1390b5] bg-clip-text text-transparent">
              fintech solutions effortlessly
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
            ConnectingIT provides eSIMs, Prepaid Cards, and a Payment
            Orchestration Platform to simplify payments, connectivity, and
            financial management.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#094370] to-[#0f6a94] font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 text-white">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </button>
            <button className="px-8 py-4 rounded-full border border-[#094370] text-[#094370] font-semibold hover:bg-[#094370] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center">
          <div className="relative rounded-3xl bg-white p-8 shadow-lg border border-[#dbeafe] w-96 transition-all duration-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-20 h-20 rounded-2xl border border-gray-200 shadow-md object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#0f6a94] rounded-full border border-white"></div>
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#094370]">
                  {profile.name}
                </h3>
                <p className="text-gray-600 text-sm">{profile.role}</p>
                <p className="text-gray-500 text-xs">{profile.experience}</p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="space-y-3 mb-6">
              <div className="text-xs text-[#094370]/80 uppercase tracking-wider font-semibold">
                Key Features
              </div>
              <div className="grid grid-cols-2 gap-2">
                {profile.agents.map((agent, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredAgent(i)}
                    onMouseLeave={() => setHoveredAgent(null)}
                    className={`relative p-3 rounded-xl bg-gradient-to-br ${agent.color} cursor-pointer transform transition-all duration-300 ${
                      hoveredAgent === i ? "scale-105 shadow-lg" : "scale-100"
                    }`}
                  >
                    <div className="text-2xl mb-1">{agent.icon}</div>
                    <div className="text-xs font-medium text-white">
                      {agent.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-200">
              <div className="text-center">
                <div className="text-[#0b5a70] font-bold text-lg">
                  {profile.stats.growth}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Growth / Reach
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#0f6a94] font-bold text-lg">
                  {profile.stats.automation}
                </div>
                <div className="text-xs text-gray-500 mt-1">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-[#1390b5] font-bold text-lg">
                  {profile.stats.roi}
                </div>
                <div className="text-xs text-gray-500 mt-1">Support / ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {profiles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentProfile(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentProfile
                ? "w-8 bg-gradient-to-r from-[#094370] to-[#1390b5]"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
