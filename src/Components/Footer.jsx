import React from "react";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const productLinks = [
  { name: "ePayNow", href: "https://epaynow.ai/" },
  { name: "eSimNow", href: "https://esimnow.ai/" },
  { name: "eSpendNow", href: "https://espendnow.ai/" },
  { name: "eForexNow", href: "https://eforexnow.ai/" },
];

const companyLinks = [
  { name: "About us", to: "/about-us" },
  { name: "Our team", to: "/team" },
  { name: "Contact", to: "/contact" },
  { name: "Compliance", to: "/compliance" },
];

const legalLinks = [
  { name: "Terms & conditions", to: "/terms&conditions" },
  { name: "Privacy & security", to: "/ppolicy" },
];

export default function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden bg-[#071b2d] px-6 pb-6 pt-14 text-white sm:px-10 sm:pt-16 lg:px-12">
      <div className="footer-glow pointer-events-none absolute -right-40 -top-48 h-[30rem] w-[30rem] rounded-full" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:gap-12 lg:pb-12">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex rounded-xl bg-white px-3 py-1.5" aria-label="ConnectingIT home">
              <img src="/image.png" alt="ConnectingIT" width="160" height="64" loading="lazy" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Payments, cards and global connectivity — thoughtfully connected for the way business moves.
            </p>
            <Link to="/contact" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white">
              Let&apos;s talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Products</h2>
            <ul className="mt-5 space-y-3">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="footer-link group inline-flex items-center gap-1.5 text-sm text-slate-300">
                    {item.name}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Explore</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link text-sm text-slate-300">{item.name}</Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-link text-sm text-slate-300">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Get in touch</h2>
            <p className="mt-5 text-sm leading-6 text-slate-300">
              Have a question or exploring a partnership? We&apos;d love to hear from you.
            </p>
            <div className="mt-4 space-y-3">
              <a href="mailto:ravi@connectingit.in" className="footer-link inline-flex items-center gap-2.5 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-cyan-300" />
                ravi@connectingit.in
              </a>
              <a href="tel:+919891001443" className="footer-link inline-flex items-center gap-2.5 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-cyan-300" />
                +91 98910 01443
              </a>
              <p className="flex items-start gap-2.5 text-sm leading-6 text-slate-400">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                Greater Noida West, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ConnectingIT Technologies Pvt Ltd. All rights reserved.</p>
          <p className="text-slate-500">Connecting people, payments and possibilities.</p>
        </div>
      </div>
    </footer>
  );
}
