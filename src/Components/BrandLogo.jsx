import React from "react";
import image1 from "../assets/Partners/claro.png";
import image2 from "../assets/Partners/bakcell.png";
import image3 from "../assets/Partners/digicel.png";
import image4 from "../assets/Partners/grameenphone.png";
import image5 from "../assets/Partners/movistar.png";
import image6 from "../assets/Partners/mtn.png";
import image7 from "../assets/Partners/olp.png";
import image8 from "../assets/Partners/proximus.png";
import image9 from "../assets/Partners/telstra.png";
import image10 from "../assets/Partners/tigo.png";
import image11 from "../assets/Partners/TIMB_BIG.png";
import image12 from "../assets/Partners/unitel.png";
import image13 from "../assets/Partners/velcom.png";
import image14 from "../assets/Partners/vivo.png";

const logos = [
  { name: "Claro", url: image1 },
  { name: "Bakcell", url: image2 },
  { name: "Digicel", url: image3 },
  { name: "Grameenphone", url: image4 },
  { name: "Movistar", url: image5 },
  { name: "MTN", url: image6 },
  { name: "OLP", url: image7 },
  { name: "Proximus", url: image8 },
  { name: "Telstra", url: image9 },
  { name: "Tigo", url: image10 },
  { name: "TIMB", url: image11 },
  { name: "Unitel", url: image12 },
  { name: "Velcom", url: image13 },
  { name: "Vivo", url: image14 },
];

function LogoGroup({ duplicate = false }) {
  return (
    <div className="partner-logo-group" aria-hidden={duplicate || undefined}>
      {logos.map((logo, index) => (
        <div className="partner-logo-item" key={logo.name}>
          <img
            src={logo.url}
            alt={duplicate ? "" : logo.name}
            width="150"
            height="56"
            loading={duplicate || index >= 4 ? "lazy" : "eager"}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandLogoScroller() {
  return (
    <section className="partner-section overflow-hidden border-y border-slate-100 bg-white py-12 sm:py-14" aria-labelledby="partner-heading">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="mb-7 flex flex-col gap-2 text-center sm:mb-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-800">Our global network</p>
          <h2 id="partner-heading" className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Trusted connections, worldwide
          </h2>
        </div>
        <div className="partner-marquee" aria-label="Our partner network">
          <div className="partner-marquee-track">
            <LogoGroup />
            <LogoGroup duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
