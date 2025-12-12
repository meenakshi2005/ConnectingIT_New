import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const menuItems = [
    { name: "Home" , link: "/" }, // 🔥 Internal link
    {
      name: "Products",
      dropdown: [
        { name: "ePayNow", link: "https://epaynow.ai/" },
        { name: "eSimNow", link: "https://esimnow.ai/" },
        { name: "eSpendNow", link: "https://espendnow.ai/" },
      ],
    },
    
    { name: "Our Team", link: "/team" }, // 🔥 Internal link
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout.current);
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveItem(null);
    }, 400);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-[#094370] shadow-md">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo + Desktop Menu */}
        <div className="flex items-center space-x-8">
          <Link to="/">
            <img
              src="/image.png"
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium relative">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="relative cursor-pointer transition-all duration-300 hover:scale-105"
              >

                {/* 🔥 Internal link uses <Link>, External uses <a> */}
                {item.link ? (
                  item.link.startsWith("http") ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-1 transition-colors duration-300 ${
                        activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.link}
                      className={`flex items-center space-x-1 transition-colors duration-300 ${
                        activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                ) : (
                  <span
                    className={`flex items-center space-x-1 transition-colors duration-300 ${
                      activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
                    }`}
                  >
                    {item.name}
                  </span>
                )}

                {/* Underline */}
                {activeItem === index && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0b5a8a] rounded-full"></span>
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
                          className="block px-4 py-2 text-sm text-[#094370] hover:bg-[#094370]/10 transition-colors"
                        >
                          {subItem.name}
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
          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#094370] cursor-pointer transition-all duration-300 hover:bg-[#094370]/10">
            <span className="text-sm">🌐</span>
            <span className="text-sm font-medium">EN-US</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-[#094370]/10 transition-colors text-[#094370]"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor">
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
        <div className="md:hidden bg-[#094370]/5 px-6 py-4 space-y-3 animate-fadeIn text-[#094370]">
          {menuItems.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center py-2 cursor-pointer hover:text-[#0b5a8a]"
                onClick={() => {
                  if (!item.dropdown && item.link) setActiveItem(null);
                  setActiveItem(activeItem === index ? null : index);
                }}
              >
                {/* Mobile Internal/External Links */}
                {item.link ? (
                  item.link.startsWith("http") ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link}>{item.name}</Link>
                  )
                ) : (
                  <span>{item.name}</span>
                )}

                {item.dropdown && <span>{activeItem === index ? "▲" : "▼"}</span>}
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
                        className="block text-sm hover:text-[#0b5a8a]"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Mobile Bottom Section */}
          <div className="flex flex-col gap-3 pt-4 border-t border-[#094370]/30">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#094370] cursor-pointer hover:bg-[#094370]/10">
              <span>🌐</span>
              <span className="text-sm font-medium">EN-US</span>
            </div>

            <button className="px-5 py-2.5 font-semibold rounded-full bg-gradient-to-r from-[#094370] to-[#0b5a8a] text-white hover:from-[#0b5a8a] hover:to-[#094370] transition-all shadow-lg hover:shadow-xl">
              Sign in
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
