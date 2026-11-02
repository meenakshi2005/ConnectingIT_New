import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Check, CreditCard, Globe2, RadioTower, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  { icon: CreditCard, label: "Card issuing", detail: "Flexible prepaid programs" },
  { icon: Globe2, label: "Global eSIM", detail: "Connectivity across borders" },
  { icon: Workflow, label: "Smart payments", detail: "Intelligent payment routing" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-shell relative isolate overflow-hidden bg-[#071b2d] text-white"
    >
      <div className="hero-grid absolute inset-0 -z-10 opacity-50" aria-hidden="true" />
      <div className="hero-orb hero-orb-one absolute -z-10" aria-hidden="true" />
      <div className="hero-orb hero-orb-two absolute -z-10" aria-hidden="true" />

      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-14 px-6 pb-20 pt-16 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-24 lg:pt-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
          className="relative z-10 max-w-2xl text-center lg:text-left"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
            One platform. A world of possibility.
          </div>

          <h1 id="hero-title" className="text-balance text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-[4.35rem]">
            The infrastructure
            <br className="hidden sm:block" /> behind <span className="hero-gradient-text">what&apos;s next.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            Payments, prepaid cards and global connectivity — brought together in one secure, integration-ready platform.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#08263b] shadow-[0_12px_34px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Talk to our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore solutions
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-300 lg:justify-start">
            {["Built for scale", "Security at every layer", "Global reach"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[510px]"
        >
          <div className="absolute -inset-8 rounded-[3rem] bg-cyan-400/10 blur-3xl" aria-hidden="true" />
          <div className="hero-panel relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0c2940]/85 p-5 shadow-[0_35px_100px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:p-7">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl" aria-hidden="true" />
            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">ConnectingIT platform</p>
                <h2 className="mt-2 text-xl font-semibold tracking-tight text-white sm:text-2xl">Everything, in sync.</h2>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-200">
                <RadioTower className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-5 rounded-2xl border border-white/10 bg-[#071b2d]/80 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">One connected ecosystem</p>
                  <p className="mt-1 text-sm font-semibold text-white">Products that work better together</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Connected
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {capabilities.map(({ icon: Icon, label, detail }, index) => (
                  <motion.div
                    key={label}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: 0.35 + index * 0.12 }}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] px-3.5 py-3 transition-colors hover:border-cyan-200/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-200/10 text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">{label}</span>
                      <span className="mt-0.5 block text-xs text-slate-400">{detail}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative mt-5 flex items-center justify-between px-1 text-xs text-slate-400">
              <span>One integration. More possibilities.</span>
              <span className="font-medium text-cyan-200">Explore the platform ↗</span>
            </div>
          </div>
          <div className="hero-float absolute -left-5 top-1/3 hidden rounded-2xl border border-white/15 bg-[#123751]/90 p-3 shadow-xl backdrop-blur-md sm:block">
            <Globe2 className="h-5 w-5 text-cyan-200" />
          </div>
          <div className="hero-float hero-float-delayed absolute -right-4 bottom-12 hidden rounded-2xl border border-white/15 bg-[#123751]/90 p-3 shadow-xl backdrop-blur-md sm:block">
            <Check className="h-5 w-5 text-emerald-200" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
