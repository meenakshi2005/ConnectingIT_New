import React from "react";
import { ArrowRight, Eye, HeartHandshake, LockKeyhole, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: Sparkles,
    title: "Payments",
    description: "Seamless, secure payment experiences designed for modern businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Accounts",
    description: "Simple account tools that make tracking and managing funds effortless.",
  },
  {
    icon: Eye,
    title: "Insights",
    description: "Actionable insights to help users make informed financial decisions.",
  },
];

const values = [
  {
    icon: LockKeyhole,
    title: "Security",
    description: "We design with a security-first mindset and treat safety as core to everything we build.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Clear communication and predictable behavior help us earn trust.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    description: "We solve real problems by listening closely and putting people first.",
  },
];

const milestones = [
  {
    title: "An idea to make finance simpler",
    description: "A small group of builders came together around a shared opportunity.",
  },
  {
    title: "Growth through feedback",
    description: "We listened to users and refined our work with real-world input.",
  },
  {
    title: "Building for what comes next",
    description: "Today, our platform brings financial and connectivity solutions together.",
  },
];

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-hero relative isolate overflow-hidden bg-[#071b2d] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="about-hero-glow pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            About ConnectingIT
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Making connections <span className="hero-gradient-text">count.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                We&apos;re building secure, intuitive financial and connectivity solutions that help people and businesses move forward with confidence.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Customer-focused", "Built for reliability"].map((label) => (
                <span key={label} className="rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-slate-200">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="about-page-content mx-auto max-w-7xl space-y-12 px-5 py-12 sm:space-y-16 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <section className="about-mission-panel grid gap-6 rounded-[1.75rem] border border-cyan-900/10 p-7 sm:p-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-cyan-800">Our mission</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Better tools. More confidence.</h2>
          </div>
          <div className="flex gap-4">
            <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white sm:flex">
              <Target className="h-5 w-5" />
            </span>
            <p className="text-base leading-8 text-slate-600 sm:text-lg">
              To make financial tools accessible, secure, and delightful — empowering individuals and small businesses to take control of their finances.
            </p>
          </div>
        </section>

        <section aria-labelledby="about-capabilities-heading">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-cyan-800">What we do</p>
            <h2 id="about-capabilities-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Connected solutions for a changing world.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="about-info-card group rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(8,47,73,0.09)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800 transition-colors group-hover:bg-[#094370] group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-values-heading">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-cyan-800">What guides us</p>
            <h2 id="about-values-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Our values, in practice.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="about-value-card flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">0{index + 1}</span>
                  <h3 className="mt-1 font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="about-journey-heading">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.19em] text-cyan-800">Our journey</p>
            <h2 id="about-journey-heading" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Always learning. Always building.</h2>
          </div>
          <ol className="about-timeline grid gap-4 md:grid-cols-3">
            {milestones.map((milestone, index) => (
              <li key={milestone.title} className="relative rounded-2xl border border-slate-200/80 bg-white p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-50 text-xs font-bold text-cyan-900">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-semibold text-slate-900">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{milestone.description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-cta flex flex-col gap-5 rounded-[1.75rem] px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">Let&apos;s work together</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Have an idea in mind?</h2>
            <p className="mt-2 text-sm text-slate-300">We&apos;d love to hear what you&apos;re working on.</p>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#094370] transition hover:-translate-y-0.5 hover:bg-cyan-50">
            Talk to our team
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      </div>
    </main>
  );
}
