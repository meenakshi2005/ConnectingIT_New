import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#094370] py-12 px-4 scroll-smooth">
      <div className="max-w-5xl mx-auto">
        <article className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Header / Hero */}
          <header className="px-8 py-8 md:py-10 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              About ConnectingIt
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
              We’re a fintech company building secure, intuitive, and delightful
              financial products that help people and businesses manage money with confidence.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs">
                Remote-first team
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs">
                Customer-focused
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs">
                Built for reliability
              </span>
            </div>
          </header>

          <div className="px-8 py-8 md:py-10 space-y-8">
            {/* Mission */}
            <section id="mission">
              <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">
                Our mission
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                To make financial tools accessible, secure, and delightful — empowering
                individuals and small businesses to take control of their finances.
              </p>
            </section>

            {/* What we do */}
            <section id="what" className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-sm font-semibold mb-2">Payments</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Seamless and secure payment experiences designed for everyday use.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-sm font-semibold mb-2">Accounts</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Simple account tools that make tracking and managing funds effortless.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <h3 className="text-sm font-semibold mb-2">Insights</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Actionable insights to help users make informed financial decisions.
                </p>
              </div>
            </section>

            {/* Values */}
            <section id="values" className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Our values
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold">Security</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    We design with a security-first mindset and treat safety as core to everything we build.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold">Transparency</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Clear communication and predictable behavior — we believe trust is earned.
                  </p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg">
                  <h4 className="font-semibold">Empathy</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    User needs come first — we solve real problems with kindness and clarity.
                  </p>
                </div>
              </div>
            </section>

            {/* Journey */}
            <section id="journey">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">
                Our journey
              </h3>

              <ol className="border-l border-slate-200 dark:border-slate-700 pl-4 space-y-6">
                <li>
                  <div className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Early days</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">A small group of builders came together around an idea to make finance simpler.</div>
                </li>
                <li>
                  <div className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Growth through feedback</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">We invited users, listened closely, and improved the product with real-world input.</div>
                </li>
                <li>
                  <div className="mb-1 text-sm font-semibold text-slate-800 dark:text-slate-100">Broad availability</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Our product matured into a stable offering designed for everyday users and businesses.</div>
                </li>
              </ol>
            </section>

            {/* Impact & CTA */}
            <section className="mt-2 grid md:grid-cols-2 gap-6 items-center">
              <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                <div className="flex flex-col gap-2">
                  <div className="text-lg font-extrabold text-slate-800 dark:text-white">Designed for people</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">We focus on clear flows, predictable behavior, and useful defaults.</div>
                </div>
              </div>

              {/* <div className="flex flex-col gap-3">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Want to partner with us or learn more? We'd love to talk.
                </p>
                <div className="flex gap-3">
                  <a
                    href="/contact"
                    className="inline-block px-4 py-2 rounded-md bg-sky-600 text-white text-sm hover:bg-sky-700"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Contact Sales
                  </a>
                  <a
                    href="/careers"
                    className="inline-block px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 text-sm"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  >
                    Explore opportunities
                  </a>
                </div>
              </div> */}
            </section>

            {/* Footer actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* <p className="text-sm text-slate-500 dark:text-slate-400">
                © ConnectingIt. All rights reserved.
              </p> */}

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
                <Link
                  to="/contact"
                  className="inline-block text-sm font-medium px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700"
                >
                  Email Us
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}