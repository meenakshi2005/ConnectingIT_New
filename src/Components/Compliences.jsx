import {
  Shield,
  Cloud,
  Settings,
  Brain,
  RefreshCw,
  CheckCircle2,
  Award,
  FileCheck,
} from "lucide-react";
import { useState } from "react";

import img1 from "../assets/Image/ISO/iso20000_1_2018.jpeg";
import img2 from "../assets/Image/ISO/iso22301_2019.jpeg";
import img3 from "../assets/Image/ISO/iso27001_2022.jpeg";
import img4 from "../assets/Image/ISO/iso27017_2015.jpeg";
import img5 from "../assets/Image/ISO/iso27018_2019.jpeg";
import img6 from "../assets/Image/ISO/iso27701_2019.jpeg";
import img7 from "../assets/Image/ISO/iso42001_2023.jpeg";
import img8 from "../assets/Image/ISO/Registration.jpg";
import img9 from "../assets/Image/ISO/ISO 9001-2015.jpg.jpeg";

import CertificateModal from "./CertificateModal";

/* ================= CARD ================= */

function CertificationCard({ code, description, icon: Icon, onView }) {
  return (
    <div className="group relative bg-white rounded-2xl border-2 border-slate-200 p-8 overflow-hidden transition-all duration-300 hover:border-[#063458] hover:shadow-md">
      
      {/* Hover accent */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#063458]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#063458] flex items-center justify-center shadow-sm">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-[#063458]">
              {code}
            </h3>
          </div>

          <div className="w-8 h-8 rounded-full bg-[#063458]/10 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-[#063458]" />
          </div>
        </div>

        {/* Content */}
        <p className="text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <button
            onClick={onView}
            className="text-[#063458] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
          >
            View Certificate <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function CompliancePage() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <div className="bg-[#063458]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <h1 className="text-5xl font-bold text-white mb-6">
            Compliance & Certifications
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Internationally recognized standards for security, privacy, and operational excellence.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

        {/* Security & Privacy */}
        <Section
          title="Security & Privacy"
          icon={Shield}
          items={[
            {
              code: "ISO/IEC 27001:2022",
              description:
                "Information Security Management System (ISMS) – Comprehensive framework for managing sensitive company information",
              icon: Shield,
              image: img3,
            },
            {
              code: "ISO/IEC 27701:2019",
              description:
                "Privacy Information Management System (PIMS) – Extension for privacy management and GDPR compliance",
              icon: Shield,
              image: img6,
            },
          ]}
          setSelectedCert={setSelectedCert}
        />

        {/* Cloud Infrastructure */}
        <Section
          title="Cloud Infrastructure"
          icon={Cloud}
          items={[
            {
              code: "ISO/IEC 27017:2015",
              description:
                "Guidelines for information security controls applicable to cloud services",
              icon: Cloud,
              image: img4,
            },
            {
              code: "ISO/IEC 27018:2019",
              description:
                "Protection of personally identifiable information (PII) in cloud environments",
              icon: Cloud,
              image: img5,
            },
          ]}
          setSelectedCert={setSelectedCert}
        />

        {/* Service Management + AI */}
        <TwoColumnRow
          sections={[
            {
              title: "Service Management",
              icon: Settings,
              item: {
                code: "ISO/IEC 20000-1:2018",
                description: "IT Service Management System requirements",
                icon: Settings,
                image: img1,
              },
            },
            {
              title: "AI & Innovation",
              icon: Brain,
              item: {
                code: "ISO/IEC 42001:2023",
                description: "Artificial Intelligence Management System framework",
                icon: Brain,
                image: img7,
              },
            },
          ]}
          setSelectedCert={setSelectedCert}
        />
<TwoColumnRow
          sections={[
            {
              title: "Quality Management",
              icon: Settings,
              item: {
                code: "ISO 9001:2015",
                description: "Quality Management System requirements",
                icon: Settings,
                image: img9,
              },
            },
       
          ]}
          setSelectedCert={setSelectedCert}
        />
        {/* Business Continuity + Registration */}
        <TwoColumnRow
          sections={[
            {
              title: "Business Continuity",
              icon: RefreshCw,
              item: {
                code: "ISO 22301:2019",
                description: "Business Continuity Management System",
                icon: RefreshCw,
                image: img2,
              },
            },
            {
              title: "Registration",
              icon: Award,
              item: {
                code: "Certificate of Registration",
                description:
                  "Official registration certificate issued by the competent authority",
                icon: Award,
                image: img8,
              },
            },
          ]}
          setSelectedCert={setSelectedCert}
        />

        {/* Footer */}
        <div className="bg-white rounded-3xl border border-slate-200 p-10">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[#063458] flex items-center justify-center">
              <FileCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#063458] mb-3">
                Certificate Authenticity
              </h3>
              <p className="text-slate-600">
                All certifications are issued by accredited certification bodies and undergo regular audits.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CertificateModal
        open={!!selectedCert}
        title={selectedCert?.title}
        image={selectedCert?.image}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
}

/* ================= HELPERS ================= */

function Section({ title, icon: Icon, items, setSelectedCert }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#063458] flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-[#063458]">{title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <CertificationCard
            key={i}
            {...item}
            onView={() =>
              setSelectedCert({ title: item.code, image: item.image })
            }
          />
        ))}
      </div>
    </div>
  );
}

function TwoColumnRow({ sections, setSelectedCert }) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {sections.map((sec, i) => (
        <div key={i}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#063458] flex items-center justify-center">
              <sec.icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#063458]">
              {sec.title}
            </h2>
          </div>

          <CertificationCard
            {...sec.item}
            onView={() =>
              setSelectedCert({
                title: sec.item.code,
                image: sec.item.image,
              })
            }
          />
        </div>
      ))}
    </div>
  );
}
