import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#094370] py-12 px-4 scroll-smooth">
      <div className="max-w-5xl mx-auto">
        {/* Card */}
        <article className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header */}
          <header className="px-8 py-6 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Effective date: <time dateTime="2025-12-12">December 12, 2025</time>
            </p>
          </header>

          {/* Body */}
          <div className="px-8 py-8 md:py-10">
            {/* TOC */}
            <nav className="mb-6">
              <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                On this page
              </h2>
              <ul className="flex flex-wrap gap-2">
                <li>
                  <a
                    href="#info-collect"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    1. Information We Collect
                  </a>
                </li>
                <li>
                  <a
                    href="#how-use"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    2. How We Use Your Information
                  </a>
                </li>
                <li>
                  <a
                    href="#sharing"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    3. Sharing Your Information
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    4. Data Security
                  </a>
                </li>
                <li>
                  <a
                    href="#rights"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    5. Your Rights
                  </a>
                </li>
                <li>
                  <a
                    href="#cookies"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    6. Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="#updates"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    7. Updates
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition"
                  >
                    8. Contact
                  </a>
                </li>
              </ul>
            </nav>

            {/* Content sections */}
            <section id="overview" className="mb-6">
              <p className="text-slate-700 dark:text-slate-300">
                This Privacy Policy explains how our fintech company (<strong>“we”</strong>,{" "}
                <strong>“our”</strong>, <strong>“us”</strong>) collects, uses, discloses,
                and safeguards your information when you use our platform, mobile
                application, or related services (<strong>“Services”</strong>).
              </p>
            </section>

            <section id="info-collect" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                1. Information We Collect
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                We collect the following types of data:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>
                  <strong>Personal Information:</strong> name, email, phone number, KYC
                  documents.
                </li>
                <li>
                  <strong>Financial Information:</strong> bank details, transaction
                  history, UPI ID.
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, device details, browser
                  type.
                </li>
                <li>
                  <strong>Usage Data:</strong> user interactions, preferences, and
                  in-app behavior.
                </li>
              </ul>
            </section>

            <section id="how-use" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                2. How We Use Your Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>To verify your identity and complete KYC validation.</li>
                <li>To process transactions securely.</li>
                <li>To improve platform performance and user experience.</li>
                <li>To communicate updates, alerts, and promotional content.</li>
                <li>To comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section id="sharing" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                3. Sharing Your Information
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Regulated financial institutions and banking partners.</li>
                <li>
                  Third-party service providers for analytics, verification, and cloud
                  storage.
                </li>
                <li>Government authorities when required by law.</li>
              </ul>
            </section>

            <section id="security" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                4. Data Security
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We implement technical and organizational measures to safeguard your
                data, including encryption, secure servers, and access controls.
                However, no system is completely secure and absolute protection cannot
                be guaranteed.
              </p>
            </section>

            <section id="rights" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                5. Your Rights
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Access the data we hold about you.</li>
                <li>Request correction or deletion of your information.</li>
                <li>Withdraw consent for data processing.</li>
                <li>Request details on how your data is being used.</li>
              </ul>
            </section>

            <section id="cookies" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                6. Cookies & Tracking Technologies
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We use cookies and similar technologies to enhance user experience,
                analyze traffic, and deliver personalized content. You can manage
                cookie preferences via your browser settings.
              </p>
            </section>

            <section id="updates" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                7. Policy Updates
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We may update this Privacy Policy from time to time. Continued use of
                our Services after changes indicates acceptance of the updated
                policy.
              </p>
            </section>

            <section id="contact" className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                8. Contact Us
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                If you have questions or wish to exercise your rights, contact our
                support team at{" "}
                <a
                  href="mailto:support@connectingit.com"
                  className="text-sky-600 dark:text-sky-400 hover:underline"
                >
                  support@connectingit.com
                </a>
                .
              </p>
            </section>

            {/* Footer actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} ConnectingIt. All rights reserved.
              </p>

              <div className="flex gap-3">
                <a
                  href="#top"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:shadow"
                >
                  Back to top
                </a>
                <a
                  href="mailto:support@connectingit.com"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
