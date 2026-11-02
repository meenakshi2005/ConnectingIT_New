import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Cpu,
  Lock,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Information Security",
    standards: ["ISO/IEC 27001:2022"],
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    standards: ["ISO/IEC 27701:2019"],
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    standards: ["ISO/IEC 27017:2015", "ISO/IEC 27018:2019"],
  },
  {
    icon: Cpu,
    title: "AI Governance",
    standards: ["ISO/IEC 42001:2023"],
  },
  {
    icon: RefreshCcw,
    title: "Service Continuity",
    standards: ["ISO/IEC 20000-1:2018", "ISO 22301:2019"],
  },
];

export default function ComplianceSummary() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="compliance-section relative isolate overflow-hidden rounded-[2rem] border border-slate-200/80 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="pointer-events-none absolute -right-24 -top-32 -z-10 h-96 w-96 rounded-full bg-cyan-100/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-800/10 bg-white/80 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.19em] text-cyan-900 shadow-sm sm:text-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
            A foundation of trust
          </span>
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-[2.75rem]">
            Security is not an add-on.
            <span className="block text-[#0b6683]">It&apos;s built into everything.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Our systems and processes are independently certified against internationally recognized ISO/IEC standards for security, privacy, cloud operations, AI governance, and business continuity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: idx * 0.07, ease: "easeOut" }}
                className="compliance-card group relative flex min-h-[225px] flex-col overflow-hidden rounded-2xl border p-5 shadow-[0_8px_28px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(8,47,73,0.1)] sm:p-5"
              >
                <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-700/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white shadow-[0_8px_18px_rgba(9,67,112,0.2)] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="pt-1 text-[10px] font-semibold tracking-[0.15em] text-slate-300">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-[#0b6683]">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-1.5">
                  {item.standards.map((standard) => (
                    <span
                      key={standard}
                      className="block rounded-lg border border-slate-100 bg-slate-50/90 px-2.5 py-1.5 text-[10px] font-medium leading-4 text-slate-600 sm:text-[11px]"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay: 0.12, ease: "easeOut" }}
          className="compliance-cta relative mt-6 overflow-hidden rounded-2xl px-6 py-7 text-white shadow-[0_18px_45px_rgba(8,41,67,0.18)] sm:px-8 sm:py-8"
        >
          <div className="pointer-events-none absolute -right-16 -top-28 h-64 w-64 rounded-full border border-cyan-200/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-4 -top-16 h-44 w-44 rounded-full border border-cyan-200/10" aria-hidden="true" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="max-w-2xl">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">Clear standards. Confident decisions.</p>
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Want to take a closer look?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Explore our certifications and the practices behind them.
              </p>
            </div>
            <Link
              to="/compliance"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#094370] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              View certifications
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
