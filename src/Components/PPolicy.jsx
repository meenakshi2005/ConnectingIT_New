import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Eye, LockKeyhole, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const policySections = [
  { id: "info-collect", title: "Information We Collect" },
  { id: "how-use", title: "How We Use Your Information" },
  { id: "sharing", title: "Sharing Your Information" },
  { id: "security", title: "Data Security" },
  { id: "rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies & Tracking Technologies" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicy() {
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
            <ShieldCheck className="h-3.5 w-3.5" />
            Your privacy matters
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Privacy, with <span className="hero-gradient-text">purpose.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Learn how information is collected, used and safeguarded when you use ConnectingIT services.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
            Effective date: <time dateTime="2025-12-12">December 12, 2025</time>
          </p>
        </motion.div>
      </section>

      <div className="legal-page-content mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-8 lg:px-12">
        <nav className="privacy-toc h-fit rounded-2xl border border-slate-200/80 bg-white p-5 lg:sticky lg:top-28" aria-label="Privacy policy contents">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-800">
              <Eye className="h-4 w-4" />
            </span>
            <h2 className="text-sm font-semibold text-slate-900">On this page</h2>
          </div>
          <ol className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-1">
            {policySections.map((section, index) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="privacy-toc-link flex items-start gap-2 rounded-lg px-2.5 py-2 text-xs leading-5 text-slate-600 transition hover:bg-cyan-50 hover:text-cyan-900">
                  <span className="shrink-0 font-semibold text-cyan-800">{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="privacy-document min-w-0 rounded-[1.75rem] border border-slate-200/80 bg-white p-5 shadow-[0_12px_42px_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
          <section id="overview" className="privacy-overview mb-7 flex gap-4 rounded-2xl border border-cyan-900/10 p-5 sm:p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0b4267] to-[#087e93] text-white">
              <LockKeyhole className="h-5 w-5" />
            </span>
            <p className="self-center text-sm leading-7 text-slate-700">
              This Privacy Policy explains how our fintech company collects, uses, discloses, and safeguards your information when you use our platform, mobile application, or related services.
            </p>
          </section>

          <div className="space-y-3">
            <motion.section id="info-collect" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of data:</p>
              <ul>
                <li><strong>Personal Information:</strong> name, email, phone number, KYC documents.</li>
                <li><strong>Financial Information:</strong> bank details, transaction history, UPI ID.</li>
                <li><strong>Technical Data:</strong> IP address, device details, browser type.</li>
                <li><strong>Usage Data:</strong> user interactions, preferences, and in-app behavior.</li>
              </ul>
            </motion.section>

            <motion.section id="how-use" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To verify your identity and complete KYC validation.</li>
                <li>To process transactions securely.</li>
                <li>To improve platform performance and user experience.</li>
                <li>To communicate updates, alerts, and promotional content.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </motion.section>

            <motion.section id="sharing" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>3. Sharing Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Regulated financial institutions and banking partners.</li>
                <li>Third-party service providers for analytics, verification, and cloud storage.</li>
                <li>Government authorities when required by law.</li>
              </ul>
            </motion.section>

            <motion.section id="security" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>4. Data Security</h2>
              <p>
                We implement technical and organizational measures to safeguard your data, including encryption, secure servers, and access controls. However, no system is completely secure and absolute protection cannot be guaranteed.
              </p>
            </motion.section>

            <motion.section id="rights" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the data we hold about you.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Withdraw consent for data processing.</li>
                <li>Request details on how your data is being used.</li>
              </ul>
            </motion.section>

            <motion.section id="cookies" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>6. Cookies & Tracking Technologies</h2>
              <p>
                We use cookies and similar technologies to enhance user experience, analyze traffic, and deliver personalized content. You can manage cookie preferences via your browser settings.
              </p>
            </motion.section>

            <motion.section id="updates" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>7. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use of our Services after changes indicates acceptance of the updated policy.
              </p>
            </motion.section>

            <motion.section id="contact" initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35 }} className="privacy-section-card">
              <h2>8. Contact Us</h2>
              <p>
                If you have questions or wish to exercise your rights, contact our support team at{" "}
                <a href="mailto:ravi@connectingit.in">ravi@connectingit.in</a>.
              </p>
            </motion.section>
          </div>

          <section className="legal-contact-cta mt-6 flex flex-col gap-4 rounded-2xl px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.17em] text-cyan-200">Privacy questions?</p>
              <p className="mt-1 text-sm text-slate-200">Contact our team for help or to exercise your rights.</p>
            </div>
            <Link to="/contact" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#094370] transition hover:-translate-y-0.5 hover:bg-cyan-50">
              Contact support
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
