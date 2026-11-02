import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "Why us", link: "#why-us" },
  {
    name: "Products",
    dropdown: [
      { name: "ePayNow", link: "https://epaynow.ai/" },
      { name: "eSimNow", link: "https://esimnow.ai/" },
      { name: "eSpendNow", link: "https://espendnow.ai/" },
      { name: "eForexNow", link: "https://eforexnow.ai/" },
    ],
  },
  { name: "Our team", link: "/team" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef(null);
  const navigate = useNavigate();

  const handleWhyUs = () => {
    setMobileMenuOpen(false);
    navigate("/#why-us");
  };

  const handleMouseEnter = (index) => {
    clearTimeout(closeTimeout.current);
    setActiveItem(index);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setActiveItem(null), 180);
  };

  const renderLink = (item, mobile = false) => {
    const className = `nav-link ${mobile ? "nav-link-mobile" : ""}`;
    if (item.link === "#why-us") {
      return (
        <button className={className} onClick={handleWhyUs} type="button">
          {item.name}
        </button>
      );
    }
    return (
      <Link
        className={className}
        to={item.link}
        onClick={() => {
          setMobileMenuOpen(false);
          setActiveItem(null);
        }}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="site-nav sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 text-[#094370] shadow-[0_4px_24px_rgba(15,23,42,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2 sm:px-8 lg:px-12">
        <Link to="/" className="flex shrink-0 items-center" aria-label="ConnectingIT home">
          <img
            src="/image.png"
            alt="ConnectingIT"
            width="180"
            height="72"
            decoding="async"
            className="h-14 w-auto object-contain sm:h-[4.5rem]"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.dropdown ? (
                <button
                  className={`nav-link inline-flex items-center gap-1 ${activeItem === index ? "nav-link-active" : ""}`}
                  type="button"
                  aria-expanded={activeItem === index}
                  onClick={() => setActiveItem(activeItem === index ? null : index)}
                >
                  {item.name}
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform ${activeItem === index ? "rotate-180" : ""}`} />
                </button>
              ) : (
                renderLink(item)
              )}
              {item.dropdown && activeItem === index && (
                <ul className="nav-dropdown absolute left-0 top-full mt-3 w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                  {item.dropdown.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-xl px-3 py-2.5 text-sm text-slate-600 transition-colors hover:bg-cyan-50 hover:text-[#094370]"
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

        <div className="hidden md:block">
          <Link to="/contact" className="nav-cta rounded-full bg-[#094370] px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#0c608e] hover:shadow-lg">
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-[#094370] transition hover:bg-slate-50 md:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg md:hidden">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <details className="group">
                    <summary className="nav-link-mobile flex cursor-pointer list-none items-center justify-between">
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="ml-3 mt-1 border-l border-slate-200 pl-3">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-600"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  renderLink(item, true)
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-3 flex justify-center rounded-full bg-[#094370] px-5 py-3 text-sm font-semibold text-white">
            Talk to us
          </Link>
        </div>
      )}
    </nav>
  );
}
