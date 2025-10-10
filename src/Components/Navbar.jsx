import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      name: "Products",
      dropdown: [
        { name: "Connecting IT", link: "https://connectingit.in/", icon: "🔗" },
        { name: "Motif eSIM (UAT)", link: "https://uat.motifesim.com/", icon: "📱" },
        { name: "Motif eSIM (Live)", link: "https://motifesim.com/", icon: "✨" },
      ],
    },
    { name: "Support & Blogs" },
    { name: "Company" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-blue-700 text-white shadow-lg">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto object-contain"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                className="relative cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <span
                  className={`flex items-center space-x-1 transition-colors duration-300 ${
                    activeItem === index ? "text-blue-200" : "text-white"
                  }`}
                >
                  <span>{item.name}</span>
                </span>

                {/* Underline animation */}
                {activeItem === index && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300 rounded-full"></span>
                )}

                {/* Dropdown */}
                {item.dropdown && activeItem === index && (
                  <ul className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.1)] z-20 animate-fadeIn">
                    {item.dropdown.map((subItem, i) => (
                      <li key={i}>
                        <a
                          href={subItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100 transition-colors"
                        >
                          {subItem.icon} {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white cursor-pointer transition-all duration-300 hover:bg-white/10">
            <span className="text-sm">🌐</span>
            <span className="text-sm font-medium">EN-US</span>
          </div>

          <button className="px-6 py-2.5 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Sign in
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-blue-800 px-6 py-4 space-y-3 animate-fadeIn">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center py-2 cursor-pointer hover:text-blue-200"
                onClick={() =>
                  setActiveItem(activeItem === index ? null : index)
                }
              >
                <span>{item.name}</span>
                {item.dropdown && (
                  <span>{activeItem === index ? "▲" : "▼"}</span>
                )}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && activeItem === index && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.dropdown.map((subItem, i) => (
                    <li key={i}>
                      <a
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gray-100 hover:text-blue-200"
                      >
                        {subItem.icon} {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Language + Sign In */}
          <div className="flex flex-col gap-3 pt-4 border-t border-white/20">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white cursor-pointer hover:bg-white/10 transition-all duration-300">
              <span>🌐</span>
              <span className="text-sm font-medium">EN-US</span>
            </div>

            <button className="px-5 py-2.5 font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
