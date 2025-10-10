import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Logo and tagline */}
        {/* <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primaryLight rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <img
                src="./images/logo1.png"
                alt="Logo"
                className="h-20 w-45 object-contain"
              />
            </div>
          </div>
        </div> */}

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Column 1 - Products */}
          <div className="group">
      <h4 className="text-base font-bold mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
        Intuit Products
      </h4>
      <ul className="space-y-3 text-sm">
        <li>
          <a
            href="#"
            className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            TurboTax
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            QuickBooks
          </a>
        </li>

        <li>
          <a
            href="#"
            className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Mailchimp
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            Credit Karma
          </a>
        </li>
      </ul>
    </div>

          {/* Column 2 - Resources */}
          <div className="group">
            <h4 className="text-base font-bold mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Developer API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#d6ffa1] transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#d6ffa1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy & Security
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="group">
            <h4 className="text-base font-bold mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-bold mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates and exclusive offers delivered to your
              inbox.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Subscribe
              </button>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 text-lg"
              >
                🐦
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 text-lg"
              >
                📘
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 text-lg"
              >
                📸
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 text-lg"
              >
                💼
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            {/* <p>© 2023. All Rights Reserved.</p> */}
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                Cookies
              </a>
            </div> */}
            {/* <p className="flex items-center gap-2">
              Made with <span className="text-red-500 animate-pulse">❤️</span>{" "}
              using React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
