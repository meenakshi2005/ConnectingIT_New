import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Cloud,
  FileCheck,
  LockKeyhole,
  RefreshCw,
  Settings,
  ShieldCheck,
} from "lucide-react";
import CertificateModal from "./CertificateModal";

import iso20000 from "../assets/Image/ISO/iso20000_1_2018.jpeg";
import iso22301 from "../assets/Image/ISO/iso22301_2019.jpeg";
import iso27001 from "../assets/Image/ISO/iso27001_2022.jpeg";
import iso27017 from "../assets/Image/ISO/iso27017_2015.jpeg";
import iso27018 from "../assets/Image/ISO/iso27018_2019.jpeg";
import iso27701 from "../assets/Image/ISO/iso27701_2019.jpeg";
import iso42001 from "../assets/Image/ISO/iso42001_2023.jpeg";
import registration from "../assets/Image/ISO/Registration.jpg";
import iso9001 from "../assets/Image/ISO/ISO 9001-2015.jpg.jpeg";

const certificationGroups = [
  {
    title: "Security & privacy",
    description: "Protecting information and respecting privacy across the services we deliver.",
    icon: ShieldCheck,
    items: [
      {
        code: "ISO/IEC 27001:2022",
        description: "Information Security Management System (ISMS) for managing and protecting sensitive company information.",
        icon: ShieldCheck,
        image: iso27001,
      },
      {
        code: "ISO/IEC 27701:2019",
        description: "Privacy Information Management System (PIMS), extending information security controls for privacy management.",
        icon: LockKeyhole,
        image: iso27701,
      },
    ],
  },
  {
    title: "Cloud infrastructure",
    description: "Guidance for information security and privacy in cloud services.",
    icon: Cloud,
    items: [
      {
        code: "ISO/IEC 27017:2015",
        description: "Information security controls and guidance applicable to cloud service providers and customers.",
        icon: Cloud,
        image: iso27017,
      },
      {
        code: "ISO/IEC 27018:2019",
        description: "Protection of personally identifiable information (PII) in public cloud environments.",
        icon: LockKeyhole,
        image: iso27018,
      },
    ],
  },
  {
    title: "Service & quality",
    description: "Consistent service delivery and quality management.",
    icon: Settings,
    items: [
      {
        code: "ISO/IEC 20000-1:2018",
        description: "Requirements for an IT Service Management System.",
        icon: Settings,
        image: iso20000,
      },
      {
        code: "ISO 9001:2015",
        description: "Quality Management System requirements focused on reliable processes and continuous improvement.",
        icon: CheckCircle2,
        image: iso9001,
      },
    ],
  },
  {
    title: "Resilience & innovation",
    description: "Building continuity into operations while governing emerging technologies.",
    icon: RefreshCw,
    items: [
      {
        code: "ISO/IEC 42001:2023",
        description: "Artificial Intelligence Management System framework for the responsible management of AI.",
        icon: Brain,
        image: iso42001,
      },
      {
        code: "ISO 22301:2019",
        description: "Business Continuity Management System requirements to prepare for and respond to disruption.",
        icon: RefreshCw,
        image: iso22301,
      },
    ],
  },
  {
    title: "Company registration",
    description: "Official company registration documentation.",
    icon: Award,
    items: [
      {
        code: "Certificate of Registration",
        description: "Official registration certificate issued by the competent authority.",
        icon: Award,
        image: registration,
      },
    ],
  },
];

function CertificationCard({ item, index, onView, shouldReduceMotion }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="cert-detail-card group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border p-5 shadow-[0_8px_28px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(8,47,73,0.11)] sm:p-6"
    >
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/10 blur-2xl transition duration-500 group-hover:scale-150" aria-hidden="true" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white shadow-[0_8px_20px_rgba(9,67,112,0.18)] transition duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-700/10 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-800">
          <CheckCircle2 className="h-3 w-3" />
          Document
        </span>
      </div>
      <div className="relative mt-5">
        <p className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">{item.code}</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
      </div>
      <div className="relative mt-auto border-t border-slate-200/80 pt-4">
        <button
          type="button"
          onClick={onView}
          className="group/button inline-flex items-center gap-2 text-sm font-semibold text-cyan-900 transition-colors hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-700"
        >
          View certificate
          <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
        </button>
      </div>
    </motion.article>
  );
}

export default function CompliancePage() {
  const [selectedCert, setSelectedCert] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const certificationCount = certificationGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <main className="compliance-page min-h-screen bg-[#f4f8fb]">
      <section className="compliance-page-hero relative isolate overflow-hidden bg-[#071b2d] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-12 lg:py-24">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="compliance-hero-glow pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-7xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust is built into the work
          </span>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                Compliance, made <span className="hero-gradient-text">clear.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Explore the standards and certifications that support our approach to information security, privacy, service quality and operational resilience.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <span className="block text-lg font-semibold leading-5">{certificationCount}</span>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-slate-400">Documents</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3">
                <span className="block text-lg font-semibold leading-5">ISO/IEC</span>
                <span className="mt-1 block text-[10px] uppercase tracking-wider text-slate-400">Standards</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-5 py-12 sm:space-y-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {certificationGroups.map((group, groupIndex) => {
          const GroupIcon = group.icon;
          return (
            <section key={group.title} aria-labelledby={`cert-group-${groupIndex}`}>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
                className="mb-5 flex items-start gap-4 sm:mb-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white shadow-[0_8px_20px_rgba(9,67,112,0.16)]">
                  <GroupIcon className="h-5 w-5" />
                </span>
                <div>
                  <h2 id={`cert-group-${groupIndex}`} className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl">
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{group.description}</p>
                </div>
              </motion.div>

              <div className={`grid gap-4 ${group.items.length === 1 ? "max-w-2xl" : "md:grid-cols-2"}`}>
                {group.items.map((item, itemIndex) => (
                  <CertificationCard
                    key={item.code}
                    item={item}
                    index={itemIndex}
                    shouldReduceMotion={shouldReduceMotion}
                    onView={() => setSelectedCert({ title: item.code, image: item.image })}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <motion.aside
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
          className="compliance-authenticity relative overflow-hidden rounded-[1.75rem] px-6 py-7 text-white shadow-[0_18px_45px_rgba(8,41,67,0.16)] sm:px-8 sm:py-9"
        >
          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-cyan-100/10" aria-hidden="true" />
          <div className="pointer-events-none absolute right-6 -top-16 h-44 w-44 rounded-full border border-cyan-100/10" aria-hidden="true" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-cyan-100">
              <FileCheck className="h-7 w-7" />
            </span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">Documentation & verification</p>
              <h2 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">Certificate authenticity</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                Open a certificate to review its document. Certifications are issued by certification bodies and are subject to their stated scope and validity periods.
              </p>
            </div>
          </div>
        </motion.aside>
      </div>

      <CertificateModal
        open={Boolean(selectedCert)}
        title={selectedCert?.title}
        image={selectedCert?.image}
        onClose={() => setSelectedCert(null)}
      />
    </main>
  );
}
