import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const menuItems = [
    { name: "Home" , link: "/" },
    { name: "Why Us", link: "#why-us" }, // 🔥 Internal link
    {
      name: "Products",
      dropdown: [
        { name: "ePayNow", link: "https://epaynow.ai/" },
        { name: "eSimNow", link: "https://esimnow.ai/" },
        { name: "eSpendNow", link: "https://espendnow.ai/" },
        { name: "eForexNow", link: "https://eforexnow.ai/" },
      ],
    },
    
    { name: "Our Team", link: "/team" }, // 🔥 Internal link
  ];

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout.current);
    setActiveItem(index);
  };
const handleScrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveItem(null);
    }, 400);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-[#094370] shadow-md">
  <div className="flex items-center px-6 md:px-10 py-1">

    {/* LEFT: Logo */}
    <Link to="/" className="flex-shrink-0">
      <img
        src="/image.png"
        alt="Logo"
        className="h-20 w-auto object-contain"
      />
    </Link>

    {/* CENTER MENU WRAPPER */}
    <div className="flex-1 flex justify-center">
      <ul className="hidden md:flex space-x-8 font-medium ml-20">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="relative cursor-pointer"
          >
         {item.link?.startsWith("#") ? (
  <button
    onClick={() => handleScrollToSection(item.link.replace("#", ""))}
    className={`transition-colors duration-300 ${
      activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
    }`}
  >
    {item.name}
  </button>
) : item.link ? (
  item.link.startsWith("http") ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors duration-300 ${
        activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
      }`}
    >
      {item.name}
    </a>
  ) : (
    <Link
      to={item.link}
      className={`transition-colors duration-300 ${
        activeItem === index ? "text-[#0b5a8a]" : "text-[#094370]"
      }`}
    >
      {item.name}
    </Link>
  )
) : (
  <span>{item.name}</span>
)}


            {/* Underline */}
            {activeItem === index && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0b5a8a] rounded-full" />
            )}

            {/* Dropdown */}
            {item.dropdown && activeItem === index && (
              <ul className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-lg z-20">
                {item.dropdown.map((subItem, i) => (
                  <li key={i}>
                    <Link
                      to={subItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-[#094370] hover:bg-[#094370]/10"
                    >
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>

    {/* RIGHT: LANGUAGE */}
    <div className="hidden md:flex items-center space-x-2 px-4 py-1.5 rounded-full border border-[#094370] hover:bg-[#094370]/10 cursor-pointer">
      <span className="text-sm">🌐</span>
      <span className="text-sm font-medium">EN-US</span>
    </div>

    {/* MOBILE MENU BUTTON */}
    <div className="md:hidden ml-auto">
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded-lg hover:bg-[#094370]/10"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
