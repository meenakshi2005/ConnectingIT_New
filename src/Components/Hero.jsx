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
        "https://tse4.mm.bing.net/th/id/OIP.mdk62w7PYAecRSAPWZjv8AHaEK?pid=Api&P=0&h=180",
      agents: [
        {
          label: "Instant Activation",
          color: "from-cyan-400 to-blue-400",
          icon: "⚡",
        },
        {
          label: "Global Coverage",
          color: "from-green-400 to-teal-400",
          icon: "🌍",
        },
        {
          label: "High-Speed Data",
          color: "from-purple-400 to-indigo-400",
          icon: "📶",
        },
        {
          label: "Flexible Plans",
          color: "from-yellow-500 to-yellow-700",
          icon: "🔄",
        },
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
        {
          label: "Multi-Gateway",
          color: "from-indigo-400 to-blue-400",
          icon: "💳",
        },
        {
          label: "Smart Routing",
          color: "from-green-400 to-teal-400",
          icon: "🔄",
        },
        {
          label: "Cross-Border",
          color: "from-purple-400 to-pink-400",
          icon: "🌐",
        },
        {
          label: "Analytics Dashboard",
          color: "from-cyan-300 to-blue-300",
          icon: "📊",
        },
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
        {
          label: "Instant Activation",
     color: "from-yellow-500 to-yellow-700",
          icon: "⚡",
        },
        {
          label: "Global Acceptance",
          color: "from-green-400 to-teal-400",
          icon: "🌍",
        },
        {
          label: "Secure Transactions",
          color: "from-purple-400 to-indigo-400",
          icon: "🔒",
        },
        {
          label: "Easy Top-Up",
          color: "from-cyan-300 to-blue-300",
          icon: "💳",
        },
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
    <section className="relative min-h-screen flex items-center justify-center px-6 py-10 bg-gray-50 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>
<div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white p-12 rounded-2xl shadow-lg">
   {/* <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"> */}
        {/* Left content */}
        <div className="space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-800">
            <span className="block bg-gradient-to-r from-green-600 via-cyan-600 to-purple-500 bg-clip-text text-transparent ">
              Empower Your
            </span>
            <span className="block bg-gradient-to-r from-green-600 via-cyan-600 to-purple-500 bg-clip-text text-transparent">
              fintech solutions effortlessly
            </span>
          </h1>

          <p className="text-xl text-gray-700 max-w-lg leading-relaxed">
            ConnectingIT provides eSIMs, Prepaid Cards, and a Payment
            Orchestration Platform to simplify payments, connectivity, and
            financial management.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <button className="group px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold shadow-lg shadow-purple-200/30 hover:shadow-purple-200/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-white">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </button>
            <button className="px-8 py-4 rounded-full bg-white border border-gray-300 font-semibold hover:bg-gray-100 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right profile card */}
        <div className="relative flex justify-center">
          <div className="relative">
            <div className="relative rounded-3xl bg-white p-8 shadow-xl border border-gray-200 w-96 transition-all duration-700">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-20 h-20 rounded-2xl border border-gray-200 shadow-lg object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border border-white"></div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">
                    {profile.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{profile.role}</p>
                  <p className="text-gray-500 text-xs">{profile.experience}</p>
                </div>
              </div>

              {/* Agents grid */}
              <div className="space-y-3 mb-6">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Key Features
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {profile.agents.map((agent, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredAgent(i)}
                      onMouseLeave={() => setHoveredAgent(null)}
                      className={`relative p-3 rounded-xl bg-gradient-to-br ${
                        agent.color
                      } cursor-pointer transform transition-all duration-300 ${
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
                  <div className="flex items-center justify-center gap-1 text-green-500 font-bold text-lg">
                    {profile.stats.growth}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Growth / Reach
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-cyan-500 font-bold text-lg">
                    {profile.stats.automation}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-500 font-bold text-lg">
                    {profile.stats.roi}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Support / ROI
                  </div>
                </div>
              </div>

              {/* Bottom metric */}
              {/* <div className="mt-4 p-3 rounded-xl bg-gray-100 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">
                  {profile.metric}
                </div>
                <div className="text-2xl font-bold text-gray-900">$127,450</div>
              </div> */}
            </div>

            {/* Floating elements */}
            {/* <div
              className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-200 rounded-2xl flex items-center justify-center shadow-lg animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <span className="text-2xl">🚀</span>
            </div> */}

            {/* <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-200 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">✨</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* Profile indicator dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        {profiles.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentProfile(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === currentProfile
                ? "w-8 bg-gradient-to-r from-cyan-400 to-purple-400"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

// import React, { useState, useEffect } from "react";

// const Hero = () => {
//   const [floatOffset, setFloatOffset] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFloatOffset((prev) => (prev + 1) % 360);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleChatFocus = () => {
//     setIsTyping(true);
//     setTimeout(() => setIsTyping(false), 2000);
//   };

//   const cards = [
//     {
//       top: "10%",
//       right: "10%",
//       title: "🌐 eSIM",
//       text: "Connect globally in seconds",
//       bg: "bg-primary",
//       glow: "shadow-primary/40",
//     },
//     {
//       top: "32%",
//       right: "3%",
//       title: "💳 Payment Gateway",
//       text: "Orchestration Simplified",
//       bg: "bg-success",
//       glow: "shadow-success/40",
//     },
//     {
//       bottom: "35%",
//       right: "14%",
//       title: "🏦 Prepaid Cards",
//       text: "For employees & students",
//       bg: "bg-primaryDark",
//       glow: "shadow-primaryDark/40",
//     },
//     {
//       bottom: "45%",
//       left: "10%",
//       title: "🔒 Secure Transactions",
//       text: "Bank-level encryption",
//       bg: "bg-successLight",
//       glow: "shadow-successLight/40",
//     },
//     {
//       top: "55%",
//       left: "6%",
//       title: "⚡ FinTech Dashboard",
//       text: "Real-time analytics",
//       bg: "bg-primaryGradient",
//       glow: "shadow-purple-600/40",
//     },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center px-6 md:px-10 py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-primary to-primaryDark">
//       {/* Dynamic Background Glow */}
//       <div className="absolute inset-0 opacity-30">
//         <div
//           className="absolute w-96 h-96 rounded-full blur-3xl bg-primaryLight transition-all duration-1000"
//           style={{
//             top: `${mousePos.y * 0.05}px`,
//             left: `${mousePos.x * 0.05}px`,
//           }}
//         ></div>
//         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl bg-secondary opacity-50"></div>
//         <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full blur-3xl bg-success opacity-40 animate-pulse"></div>
//       </div>

//       {/* Moving Grid */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
//           backgroundSize: "80px 80px",
//           animation: "gridMove 20s linear infinite",
//         }}
//       ></div>

//       {/* Main Hero Content */}
//       <div className="relative z-10 max-w-7xl mx-auto w-full">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* Left Side Text */}
//           <div className="space-y-8">
//             <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//               <span className="inline-block bg-gradient1 bg-clip-text text-transparent">
//                 Empowering
//               </span>
//               <br />
//               <span className="inline-block bg-gradient2 bg-clip-text text-transparent">
//                 Digital Finance &
//               </span>
//               <br />
//               <span className="text-white drop-shadow-2xl">
//                 Global Connectivity
//               </span>
//             </h1>

//             <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
//               ConnectingIT FinTech delivers smart solutions for businesses and
//               individuals — from global eSIM connectivity to advanced payment
//               orchestration and prepaid financial tools.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-4">
//               <button className="group relative px-8 py-4 rounded-full font-semibold text-gray-900 shadow-xl shadow-primaryLight/30 hover:shadow-2xl hover:shadow-primaryLight/50 transform hover:scale-105 transition-all duration-300 bg-white overflow-hidden">
//                 <span className="relative z-10">Explore Products</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-primaryLight to-success opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </button>
//             </div>
//           </div>

//           {/* Right Side Floating Cards */}
//           <div className="relative h-[600px] hidden md:block">
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute text-3xl text-primaryLight animate-pulse"
//                 style={{
//                   top: `${Math.random() * 80}%`,
//                   left: `${Math.random() * 80}%`,
//                   animationDelay: `${i * 0.3}s`,
//                   opacity: 0.6,
//                 }}
//               ></div>
//             ))}

//             {cards.map((card, idx) => (
//               <div
//                 key={idx}
//                 className={`absolute px-6 py-4 rounded-2xl shadow-2xl ${card.glow} transform hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20 cursor-pointer group ${card.bg}`}
//                 style={{
//                   top: card.top,
//                   bottom: card.bottom,
//                   right: card.right,
//                   left: card.left,
//                   transform: `translateY(${
//                     Math.sin((floatOffset + idx * 60) * 0.02) * 15
//                   }px)`,
//                 }}
//               >
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-md shadow-lg group-hover:rotate-12 transition-transform duration-300">
//                     <span className="text-xl">{card.icon}</span>
//                   </div>
//                   <div>
//                     <div className="font-semibold text-xs text-white/90 tracking-wider">
//                       {card.title}
//                     </div>
//                     {card.text && (
//                       <div className="text-white text-sm font-medium mt-1">
//                         {card.text}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Center Glow */}
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primaryLight/10 blur-3xl animate-pulse"></div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Chat Input */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-6">
//         <div className="bg-slate-900/80 backdrop-blur-2xl border border-primaryLight/30 rounded-3xl px-6 py-4 shadow-2xl shadow-primaryLight/20 flex items-center gap-4 hover:border-primaryLight/50 transition-all duration-300">
//           <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-primary to-primaryDark shadow-lg shadow-primaryLight/30">
//             <span className="text-white text-2xl">💬</span>
//           </div>
//           <input
//             type="text"
//             placeholder="Ask about our FinTech solutions..."
//             className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none text-lg"
//             onFocus={handleChatFocus}
//           />
//           <button className="w-12 h-12 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 flex-shrink-0 bg-primaryLight shadow-lg shadow-primaryLight/40 hover:shadow-primaryLight/60">
//             {isTyping ? (
//               <span className="text-white text-sm animate-pulse">●●●</span>
//             ) : (
//               <span className="text-white text-2xl">🚀</span>
//             )}
//           </button>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes gridMove {
//           0% {
//             transform: translateY(0);
//           }
//           100% {
//             transform: translateY(80px);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;
