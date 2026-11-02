import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText, Scale } from "lucide-react";
import { Link } from "react-router-dom";

const terms = [
  {
    title: "Services",
    content: (
      <p>
        ConnectingIt provides digital services including international eSIM connectivity, payment solutions, and expense management tools. Availability of services may depend on device compatibility, network coverage, and regulatory requirements.
      </p>
    ),
  },
  {
    title: "Eligibility",
    content: (
      <p>
        You must be legally capable of entering into a binding agreement to use our services. By using our platform, you represent that you meet all eligibility requirements.
      </p>
    ),
  },
  {
    title: "User Responsibilities",
    content: (
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain confidentiality of account credentials</li>
        <li>Use services in compliance with applicable laws</li>
        <li>Avoid misuse, abuse, or unauthorized access</li>
      </ul>
    ),
  },
  {
    title: "Payments & Charges",
    content: (
      <p>
        You are responsible for all charges associated with your use of ConnectingIt services. Pricing, billing terms, and payment methods are disclosed at the time of purchase and may vary by product.
      </p>
    ),
  },
  {
    title: "Suspension or Termination",
    content: (
      <p>
        We reserve the right to suspend or terminate access to services if these terms are violated, if misuse is detected, or if required by law or regulatory authorities.
      </p>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        All content, trademarks, software, and branding related to ConnectingIt, ePayNow, and eSpendNow remain our intellectual property or that of our licensors and may not be used without permission.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        To the maximum extent permitted by law, ConnectingIt shall not be liable for indirect, incidental, or consequential damages arising from your use of the services.
      </p>
    ),
  },
  {
    title: "Disclaimer",
    content: (
      <p>
        Services are provided on an “as is” and “as available” basis without warranties of any kind, whether express or implied.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.
      </p>
    ),
  },
];

export default function TermsAndConditions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="legal-page">
      <section className="legal-hero relative isolate overflow-hidden bg-[#071b2d] px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-12 lg:py-20">
        <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="legal-hero-glow pointer-events-none absolute -right-40 -top-44 -z-10 h-[30rem] w-[30rem] rounded-full" aria-hidden="true" />
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-100">
            <Scale className="h-3.5 w-3.5" />
            Terms of service
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Terms & <span className="hero-gradient-text">Conditions.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Please read these terms carefully. They explain the conditions for accessing and using ConnectingIT services.
          </p>
        </motion.div>
      </section>

      <div className="legal-page-content mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="legal-intro-card mb-6 flex gap-4 rounded-2xl border border-cyan-900/10 p-5 sm:p-6">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white">
            <FileText className="h-5 w-5" />
          </span>
          <p className="self-center text-sm leading-7 text-slate-700 sm:text-base">
            These Terms & Conditions govern your access to and use of services provided by <strong>ConnectingIt</strong>, including our digital connectivity and fintech offerings such as <strong>eSIM</strong>, <strong>ePayNow</strong>, and <strong>eSpendNow</strong>. By accessing or using our platform, you agree to be bound by these terms.
          </p>
        </div>

        <div className="space-y-3">
          {terms.map((term, index) => (
            <motion.section
              key={term.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, delay: (index % 3) * 0.05 }}
              className="legal-section-card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-xs font-bold text-cyan-900">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="text-base font-semibold text-slate-900 sm:text-lg">{term.title}</h2>
                  <div className="legal-copy mt-2 text-sm leading-7 text-slate-600">{term.content}</div>
                </div>
              </div>
            </motion.section>
          ))}

          <section className="legal-section-card rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-xs font-bold text-cyan-900">10</span>
              <div>
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">Contact</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  For any questions regarding these Terms, please contact us at{" "}
                  <a href="mailto:ravi@connectingit.in" className="font-semibold text-cyan-800 underline decoration-cyan-800/30 underline-offset-4 hover:text-cyan-600">
                    ravi@connectingit.in
                  </a>.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="legal-contact-cta mt-6 flex flex-col gap-4 rounded-2xl px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-200">Need clarification?</p>
            <p className="mt-1 text-sm text-slate-200">Our team is happy to help with questions about these terms.</p>
          </div>
          <Link to="/contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#094370] transition hover:-translate-y-0.5 hover:bg-cyan-50">
            Contact support
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </main>
  );
}
