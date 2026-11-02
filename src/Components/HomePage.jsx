import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  LockKeyhole,
  RadioTower,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import ComplianceSummary from "./ComplienceSummary";
import Hero from "./Hero";

const benefits = [
  {
    icon: Zap,
    number: "01",
    title: "Move at the speed of ideas",
    description: "Launch and manage financial products with streamlined tools built to reduce complexity.",
  },
  {
    icon: Globe2,
    number: "02",
    title: "Reach beyond borders",
    description: "Connect customers and businesses to services designed for a world without boundaries.",
  },
  {
    icon: LockKeyhole,
    number: "03",
    title: "Trust built in",
    description: "Security, compliance and reliability are part of the platform from day one.",
  },
  {
    icon: Route,
    number: "04",
    title: "One connected platform",
    description: "Bring payments, cards and connectivity together through a unified experience.",
  },
];

const solutions = [
  {
    icon: Globe2,
    category: "CONNECTIVITY",
    title: "Global eSIM",
    description: "Give people reliable mobile data wherever business takes them.",
    accent: "cyan",
    metric: "Stay connected, everywhere",
  },
  {
    icon: RadioTower,
    category: "PAYMENTS",
    title: "Payment orchestration",
    description: "Manage payment flows with smart routing and a clearer view of performance.",
    accent: "blue",
    metric: "One layer. More control.",
  },
  {
    icon: Sparkles,
    category: "CARD PROGRAMS",
    title: "Prepaid solutions",
    description: "Create flexible prepaid experiences for customers, teams and partners.",
    accent: "violet",
    metric: "Designed around your needs",
  },
  {
    icon: ShieldCheck,
    category: "CROSS-BORDER",
    title: "Digital forex",
    description: "Make international spending simpler with multi-currency solutions.",
    accent: "teal",
    metric: "Spend with confidence",
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <Hero />

      <section id="why-us" className="relative px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="Built for what comes next"
              title="The right tools. A better way forward."
              description="We make it easier to connect people, businesses and opportunities with a thoughtful suite of financial and connectivity solutions."
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, number, title, description }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className="benefit-card group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_18px_50px_rgba(8,47,73,0.09)]">
                  <div className="mb-9 flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800 transition-colors group-hover:bg-[#094370] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-widest text-slate-300">{number}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="relative bg-[#f5f8fa] px-6 py-20 sm:px-10 sm:py-24 lg:px-12">
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow="A unified ecosystem"
              title="Power every part of the journey."
              description="Flexible products for modern businesses — designed to work beautifully on their own and even better together."
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(({ icon: Icon, category, title, description, accent, metric }, index) => (
              <Reveal key={title} delay={index * 0.07}>
                <article className={`solution-card solution-${accent} group flex h-full min-h-[310px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(8,47,73,0.1)]`}>
                  <div className="relative flex h-36 items-center justify-center overflow-hidden bg-slate-50">
                    <div className="solution-art absolute inset-0" aria-hidden="true" />
                    <div className="solution-halo absolute h-28 w-28 rounded-full opacity-60 blur-2xl transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-white/80 bg-white/90 text-slate-800 shadow-[0_12px_35px_rgba(15,23,42,0.1)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-3">
                      <Icon className="h-7 w-7" strokeWidth={1.7} />
                    </div>
                    <span className="absolute bottom-4 left-5 text-[10px] font-bold tracking-[0.17em] text-slate-500">{category}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{description}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-medium text-slate-500">{metric}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-700" />
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#071b2d] px-7 py-10 text-white sm:px-12 sm:py-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <Reveal className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Confidence, built in</p>
              <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Designed with trust at the center.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Our security and compliance practices help create a dependable foundation for every connection and transaction.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/compliance"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/60 hover:bg-white/5"
              >
                Explore our standards
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 pb-8 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <ComplianceSummary />
        </div>
      </section>

      <section className="px-6 pb-20 pt-12 sm:px-10 sm:pb-24 lg:px-12">
        <Reveal className="mx-auto max-w-7xl">
          <div className="cta-panel relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0b4267] via-[#075678] to-[#087e93] px-7 py-12 text-center text-white sm:px-12 sm:py-16">
            <div className="cta-orb absolute -right-12 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
            <div className="cta-orb cta-orb-inner absolute -right-2 -top-14 h-52 w-52 rounded-full border border-white/10" aria-hidden="true" />
            <p className="relative mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-100">Let&apos;s build what&apos;s next</p>
            <h2 className="relative mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Ready to make your next move?
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-sm leading-7 text-cyan-50/90 sm:text-base">
              Tell us where you want to go. We&apos;ll help you find the right way to get there.
            </p>
            <Link
              to="/contact"
              className="group relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#094370] shadow-lg transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
