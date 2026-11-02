import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";

const initialForm = { name: "", email: "", message: "" };

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "ravi@connectingit.in",
    href: "mailto:ravi@connectingit.in",
  },
  {
    icon: Phone,
    label: "Call",
    value: "+91 98910 01443",
    href: "tel:+919891001443",
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required";
    else if (formData.message.trim().length < 10) {
      nextErrors.message = "Message must be at least 10 characters";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitStatus({
      type: "success",
      message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
    });
    setFormData(initialForm);
    setIsSubmitting(false);
  };

  const inputClassName = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-700 focus:ring-4 focus:ring-cyan-700/10";

  return (
    <main className="contact-page relative overflow-hidden bg-[#f4f8fb] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
      <div className="contact-orb contact-orb-one pointer-events-none absolute -right-32 -top-36 h-[28rem] w-[28rem] rounded-full" aria-hidden="true" />
      <div className="contact-orb contact-orb-two pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">Let&apos;s start a conversation</p>
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
            Good things start with <span className="contact-gradient-text">a hello.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Tell us what you&apos;re building or what you need. Our team is ready to help you find the right way forward.
          </p>
        </header>

        <div className="grid items-stretch gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="contact-info-panel relative overflow-hidden rounded-[1.75rem] bg-[#082943] p-7 text-white shadow-[0_22px_60px_rgba(8,41,67,0.16)] sm:p-9">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-cyan-200/10" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-2 -top-10 h-40 w-40 rounded-full border border-cyan-200/10" aria-hidden="true" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.17em] text-cyan-100">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                We&apos;re here to help
              </span>
              <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">Get in touch</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                Questions about eSIM, payment orchestration or prepaid solutions? Reach out and let&apos;s explore what&apos;s possible.
              </p>

              <div className="mt-8 space-y-3">
                {contactMethods.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="contact-method group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 transition hover:border-cyan-200/30 hover:bg-white/[0.08]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-200/10 text-cyan-200 transition group-hover:bg-cyan-200 group-hover:text-[#082943]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-400">{label}</span>
                      <span className="mt-1 block break-all text-sm font-semibold text-white">{value}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
                  </a>
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-200/10 text-cyan-200">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-white">Visit our office</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      ConnectingIT Technologies Pvt Ltd
                      <br />
                      Plot no.-20, 2nd Floor, opposite Bloom International School,
                      <br />
                      TECHZONE 7, IT Plots, Greater Noida West,
                      <br />
                      Uttar Pradesh – 203207
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2 text-xs font-medium text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                A real person from our team will get back to you.
              </div>
            </div>
          </aside>

          <section className="rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.06)] sm:p-9">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-800">Send us a message</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">How can we help?</h2>
              <p className="mt-2 text-sm text-slate-500">Share a few details and we&apos;ll take it from there.</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-slate-700">Your name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="Jane Smith"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && <p id="contact-name-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-slate-700">Work email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClassName}
                  placeholder="jane@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && <p id="contact-email-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-slate-700">What would you like to discuss?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClassName} resize-y`}
                  placeholder="Tell us a little about your goals..."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
                {errors.message && <p id="contact-message-error" className="mt-1.5 text-xs font-medium text-rose-600">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#094370] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(9,67,112,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#0b6683] hover:shadow-lg disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send message"}
                {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              </button>

              {submitStatus && (
                <p role="status" className={`rounded-xl px-4 py-3 text-sm ${submitStatus.type === "success" ? "bg-emerald-50 text-emerald-800" : "bg-rose-50 text-rose-700"}`}>
                  {submitStatus.message}
                </p>
              )}
            </form>
          </section>
        </div>

        <section className="mt-8 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-3 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-4" aria-labelledby="office-map-heading">
          <div className="flex flex-col gap-1 px-3 pb-3 pt-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-800">Find us</p>
              <h2 id="office-map-heading" className="mt-1 text-lg font-semibold text-slate-900">Our Greater Noida office</h2>
            </div>
            <span className="text-xs text-slate-500">TECHZONE 7, Uttar Pradesh</span>
          </div>
          <div className="h-64 overflow-hidden rounded-[1.2rem] bg-slate-100 sm:h-80">
            <iframe
              title="ConnectingIT office location near Bloom International School, Greater Noida"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.870902842877!2d77.493917!3d28.477247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0bc9f587e6d%3A0x4a2e2e1cfa53295b!2sBloom%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </main>
  );
}
