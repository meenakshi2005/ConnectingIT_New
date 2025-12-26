import React from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#094370] py-12 px-4 scroll-smooth">
      <div className="max-w-5xl mx-auto">
        <article className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          
          {/* Header */}
          <header className="px-8 py-6 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Terms & Conditions
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Please read these terms carefully before using our services.
            </p>
          </header>

          {/* Body */}
          <div className="px-8 py-8 md:py-10 space-y-8">

            {/* Intro */}
            <section>
              <p className="text-slate-700 dark:text-slate-300">
                These Terms & Conditions govern your access to and use of services
                provided by <strong>ConnectingIt</strong>, including our digital
                connectivity and fintech offerings such as <strong>eSIM</strong>,
                <strong> ePayNow</strong>, and <strong> eSpendNow</strong>.
                By accessing or using our platform, you agree to be bound by these terms.
              </p>
            </section>

            {/* Services */}
            <section>
              <h3 className="text-lg font-semibold mb-3">1. Services</h3>
              <p className="text-slate-700 dark:text-slate-300">
                ConnectingIt provides digital services including international eSIM
                connectivity, payment solutions, and expense management tools.
                Availability of services may depend on device compatibility,
                network coverage, and regulatory requirements.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h3 className="text-lg font-semibold mb-3">2. Eligibility</h3>
              <p className="text-slate-700 dark:text-slate-300">
                You must be legally capable of entering into a binding agreement
                to use our services. By using our platform, you represent that
                you meet all eligibility requirements.
              </p>
            </section>

            {/* User Responsibilities */}
            <section>
              <h3 className="text-lg font-semibold mb-3">3. User Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
                <li>Provide accurate and complete information</li>
                <li>Maintain confidentiality of account credentials</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Avoid misuse, abuse, or unauthorized access</li>
              </ul>
            </section>

            {/* Payments */}
            <section>
              <h3 className="text-lg font-semibold mb-3">4. Payments & Charges</h3>
              <p className="text-slate-700 dark:text-slate-300">
                You are responsible for all charges associated with your use of
                ConnectingIt services. Pricing, billing terms, and payment methods
                are disclosed at the time of purchase and may vary by product.
              </p>
            </section>

            {/* Suspension */}
            <section>
              <h3 className="text-lg font-semibold mb-3">5. Suspension or Termination</h3>
              <p className="text-slate-700 dark:text-slate-300">
                We reserve the right to suspend or terminate access to services
                if these terms are violated, if misuse is detected, or if required
                by law or regulatory authorities.
              </p>
            </section>

            {/* IP */}
            <section>
              <h3 className="text-lg font-semibold mb-3">6. Intellectual Property</h3>
              <p className="text-slate-700 dark:text-slate-300">
                All content, trademarks, software, and branding related to
                ConnectingIt, ePayNow, and eSpendNow remain our intellectual property
                or that of our licensors and may not be used without permission.
              </p>
            </section>

            {/* Liability */}
            <section>
              <h3 className="text-lg font-semibold mb-3">7. Limitation of Liability</h3>
              <p className="text-slate-700 dark:text-slate-300">
                To the maximum extent permitted by law, ConnectingIt shall not be
                liable for indirect, incidental, or consequential damages arising
                from your use of the services.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h3 className="text-lg font-semibold mb-3">8. Disclaimer</h3>
              <p className="text-slate-700 dark:text-slate-300">
                Services are provided on an “as is” and “as available” basis
                without warranties of any kind, whether express or implied.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h3 className="text-lg font-semibold mb-3">9. Governing Law</h3>
              <p className="text-slate-700 dark:text-slate-300">
                These Terms & Conditions shall be governed by and construed in
                accordance with the laws of India. Any disputes shall be subject
                to the exclusive jurisdiction of Indian courts.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h3 className="text-lg font-semibold mb-3">10. Contact</h3>
              <p className="text-slate-700 dark:text-slate-300">
                For any questions regarding these Terms, please contact us at{" "}
                <a
                  href="mailto:ravi@connectingit.in"
                  className="text-sky-600 dark:text-sky-400 hover:underline"
                >
                  ravi@connectingit.in
                </a>
                .
              </p>
            </section>

            {/* Footer actions */}
            <div className="pt-6 mt-8 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} ConnectingIt. All rights reserved.
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:shadow"
                >
                  Back to top
                </button>

                <Link
                  to="/contact"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700"
                >
                  Contact Support
                </Link>
              </div>
            </div>

          </div>
        </article>
      </div>
    </div>
  );
}
