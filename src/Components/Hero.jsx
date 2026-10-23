import React, { useState } from "react";

const products = [
  {
    title: "Prepaid Cards",
    description: "Prepaid card issuing and management.",
    icon: "💳",
    gradient: "from-[#0a3d62] to-[#1e6091]",
  },
  {
    title: "Global eSIM",
    description: "Instant connectivity across 180+ countries.",
    icon: "🌍",
    gradient: "from-[#0b525b] to-[#1b9aaa]",
  },
  {
    title: "Payment Orchestration",
    description: "Intelligent routing and payment optimization.",
    icon: "🔄",
    gradient: "from-[#144552] to-[#0bbcd6]",
  },
  {
    title: "API-First Platform",
    description: "Modern APIs built for seamless integration.",
    icon: "⚙️",
    gradient: "from-[#1a5f7a] to-[#2ec4b6]",
  },
];


export default function Hero() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="relative min-h-[90vh] bg-[#094370] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-8 text-center lg:text-left">
          {/* <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm font-semibold text-cyan-200 tracking-wider">
            🚀 FINTECH INFRASTRUCTURE
          </span> */}

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Power Payments
            </span>
            <br />
            <span className="text-white">Connectivity & Cards</span>
            <br />
            <span className="text-gray-300">
              from one unified platform
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
            A modern fintech platform delivering prepaid cards, global eSIMs,
            and intelligent payment orchestration — built for scale, security,
            and speed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1390b5] to-[#22d3ee] text-white font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-2xl bg-white/90 text-[#094370] font-semibold border-2 border-transparent hover:border-white hover:bg-white transition-all">
              Talk to Sales
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              ✅ PCI-DSS Ready
            </div>
            <div className="flex items-center gap-2">
              🔐 Bank-Grade Security
            </div>
            <div className="flex items-center gap-2">
              🌍 180+ Countries
            </div>
          </div>
        </div>

        {/* RIGHT FINTECH CARD */}
        <div className="relative max-w-md mx-auto w-full">
          <div className="relative bg-white rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

            <div className="relative p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-xs font-extrabold text-[#094370] tracking-widest">
                    FINTECH PLATFORM
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-gray-900">
                    Unified Product Stack
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Cards • eSIM • Payments • APIs
                  </p>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#094370] to-[#22d3ee] flex items-center justify-center text-2xl text-white shadow-lg">
                  💼
                </div>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-sm font-extrabold text-gray-800 mb-4 tracking-wide flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-[#094370] to-[#22d3ee] rounded-full" />
                  CORE PRODUCTS
                </h4>

               <div className="grid grid-cols-2 gap-4">
  {products.map((item, i) => (
    <div
      key={i}
      className={`relative p-4 rounded-2xl bg-gradient-to-br ${item.gradient} text-white shadow-md`}
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{item.icon}</span>
        <span className="text-sm font-bold leading-tight">
          {item.title}
        </span>
      </div>

      <p className="mt-2 text-xs text-white/90">
        {item.description}
      </p>
    </div>
  ))}
</div>

              </div>
            </div>
          </div>

          {/* glow */}
          <div className="absolute -z-10 inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
