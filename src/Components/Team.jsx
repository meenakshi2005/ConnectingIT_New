import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUp, Sparkles, Users } from "lucide-react";
import image1 from "../assets/Images/Ramneek.png";
import image2 from "../assets/Images/Ravi.png";
import image3 from "../assets/Images/Abhay.png";
import image5 from "../assets/Images/rahulsir.png";
import image6 from "../assets/Images/Vinod.png";
import image7 from "../assets/Images/Ratesh.png";
import image8 from "../assets/Images/Alok.png";
import image9 from "../assets/Images/Ankur.png";
import image10 from "../assets/Images/Meenakshi.png";
import image11 from "../assets/Images/Shankar.png";
import image12 from "../assets/Images/himanshu.png";
import image13 from "../assets/Image/Yashi.png";
import image14 from "../assets/Images/Manu.png";
import image15 from "../assets/Images/Chandni.png";
import image16 from "../assets/Images/Yashtyagi.png";
import image17 from "../assets/Images/Vachaspati.png";
import image18 from "../assets/Images/vishu.png";
import image19 from "../assets/Images/Utkarsh.png";
import image20 from "../assets/Images/suman.png";
import image21 from "../assets/Images/Sachin.png";
import { useSmoothScroll } from "./SmoothScroll";

const members = [
  { name: "Ramneek Kochar", role: "Chief Executive Officer", image: image1 },
  { name: "Dr. Ravi Ramakrishnan", role: "Chief Technology Officer", image: image2 },
  { name: "Abhay Shringi", role: "Chief Financial Officer", image: image3 },
  { name: "Rahul Wali", role: "Head", image: image5 },
  { name: "Vinod Gupta", role: "Engineering Manager", image: image6 },
  { name: "Ritesh Chaudhary", role: "Support Manager", image: image7 },
  { name: "Shankar Jha", role: "Operations", image: image11 },
  { name: "Ankur Chauhan", role: "Front-End Developer", image: image9 },
  { name: "Meenakshi", role: "Quality Assurance", image: image10 },
  { name: "Alok Ratan", role: "Mobile App Developer", image: image8 },
  { name: "Chandni Varshney", role: "Data Analyst", image: image15 },
  { name: "Yash Tyagi", role: "MERN Stack Developer", image: image16 },
  { name: "Yashi Singh", role: "Customer Success Manager", image: image13 },
  { name: "Himanshu Pal", role: "Full Stack Developer", image: image12 },
  { name: "Manu Verma", role: "Backend Developer", image: image14 },
  { name: "Vishu Kumar", role: "React.js Developer", image: image18 },
  { name: "Vachaspati Sharma", role: "Front-End Developer", image: image17 },
  { name: "Utkarsh Pratap Singh", role: "Apex Developer", image: image19 },
  { name: "Suman Kumar Nayak", role: "Front-End Developer", image: image20 },
  { name: "Sachin Kumar Singh", role: "Apex Developer", image: image21 },
];

export default function Team() {
  const shouldReduceMotion = useReducedMotion();
  const lenis = useSmoothScroll();

  return (
    <main className="team-page min-h-screen bg-[#f4f8fb]">
      <section className="team-hero relative isolate overflow-hidden bg-[#071b2d] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="team-hero-glow pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            People behind the platform
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Meet the people making <span className="hero-gradient-text">connections count.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                A team of builders, thinkers and problem-solvers creating dependable payment and connectivity experiences for a changing world.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <Users className="h-5 w-5 text-cyan-200" />
                <span>
                  <span className="block text-lg font-semibold leading-5">{members.length}</span>
                  <span className="mt-1 block text-[10px] uppercase tracking-wider text-slate-400">Team members</span>
                </span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <span className="block text-lg font-semibold leading-5">One team</span>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-slate-400">Shared ambition</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.19em] text-cyan-800">Meet the team</p>
              <h2 id="team-heading" className="mt-2 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Different strengths. One direction.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              From leadership and engineering to operations and customer success, every perspective helps us build better.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {members.map((member, index) => (
              <motion.article
                key={member.name}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, delay: (index % 4) * 0.06, ease: "easeOut" }}
                className="team-card group relative flex min-h-[270px] flex-col items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 pb-6 pt-7 text-center shadow-[0_8px_25px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-cyan-700/25 hover:shadow-[0_18px_42px_rgba(8,47,73,0.1)]"
              >
                <div className="team-avatar-ring relative mb-5 rounded-full p-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    width="112"
                    height="112"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    className="relative h-24 w-24 rounded-full border-4 border-white bg-slate-100 object-cover shadow-md transition duration-500 group-hover:scale-[1.04] sm:h-28 sm:w-28"
                  />
                </div>
                <h3 className="text-base font-semibold tracking-tight text-slate-900">{member.name}</h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-500">{member.role}</p>
                <span className="mt-auto pt-5 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ConnectingIT
                </span>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => lenis ? lenis.scrollTo(0, { duration: 0.8 }) : window.scrollTo({ top: 0, behavior: "auto" })}
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-700/30 hover:text-cyan-800"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
