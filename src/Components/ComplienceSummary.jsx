
// import { ShieldCheck, Lock, Cloud, Cpu, RefreshCcw, CheckCircle2, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const complianceItems = [
//   {
//     icon: ShieldCheck,
//     title: "Information Security",
//     standards: ["ISO/IEC 27001:2022"],
//     color: "from-[#488B73] to-[#3a6f5c]",
//   },
//   {
//     icon: Lock,
//     title: "Privacy Protection",
//     standards: ["ISO/IEC 27701:2019"],
//     color: "from-[#488B73] to-[#3a6f5c]",
//   },
//   {
//     icon: Cloud,
//     title: "Cloud Security",
//     standards: ["ISO/IEC 27017:2015", "ISO/IEC 27018:2019"],
//     color: "from-[#488B73] to-[#3a6f5c]",
//   },
//   {
//     icon: Cpu,
//     title: "AI Governance",
//     standards: ["ISO/IEC 42001:2023"],
//     color: "from-[#488B73] to-[#3a6f5c]",
//   },
//   {
//     icon: RefreshCcw,
//     title: "Service Continuity",
//     standards: ["ISO/IEC 20000-1:2018", "ISO 22301:2019"],
//     color: "from-[#488B73] to-[#3a6f5c]",
//   },
// ];

// export default function ComplianceSummary() {
//   return (
//     <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 px-6 py-16 overflow-hidden">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0ODhCNzMiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
//       <div className="relative max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#488B73]/10 text-[#488B73] rounded-full mb-4 border border-[#488B73]/20">
//             <CheckCircle2 className="w-4 h-4" />
//             <span className="text-sm font-semibold">Certified & Compliant</span>
//           </div>
          
//           <h2 className="text-4xl font-bold text-slate-900 mb-4">
//             Security, Privacy & Compliance
//           </h2>
//           <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
//             Our systems and processes are independently certified against
//             internationally recognized ISO/IEC standards for security, privacy,
//             cloud operations, AI governance, and business continuity.
//           </p>
//         </div>

//         {/* Compliance Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
//           {complianceItems.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-[#488B73]/30 overflow-hidden"
//               >
//                 {/* Decorative gradient on hover */}
//                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#488B73] to-[#3a6f5c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
//                 {/* Icon Container */}
//                 <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                   <Icon className="w-8 h-8 text-white" />
//                 </div>
                
//                 {/* Title */}
//                 <h3 className="font-bold text-slate-900 mb-3 group-hover:text-[#488B73] transition-colors">
//                   {item.title}
//                 </h3>
                
//                 {/* Standards */}
//                 <div className="space-y-1">
//                   {item.standards.map((standard, stdIdx) => (
//                     <p key={stdIdx} className="text-xs text-slate-600 leading-relaxed bg-slate-50 rounded-lg px-2 py-1">
//                       {standard}
//                     </p>
//                   ))}
//                 </div>
                
//                 {/* Verified Badge */}
//                 <div className="mt-4 pt-4 border-t border-slate-100">
//                   <div className="flex items-center justify-center gap-1 text-xs text-[#488B73] font-medium">
//                     <CheckCircle2 className="w-3 h-3" />
//                     <span>Verified</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gradient-to-br from-[#488B73] to-[#3a6f5c] rounded-2xl p-8 shadow-xl relative overflow-hidden">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2Mi0oaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
          
//           <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold text-white mb-2">
//                 Want to learn more about our certifications?
//               </h3>
//               <p className="text-white/90">
//                 Explore detailed information about our compliance standards and security practices
//               </p>
//             </div>
            
//             <Link
//               to="/compliance"
//               className="flex-shrink-0 group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#488B73] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
//             >
//               View All Certifications
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </div>
//         </div>

//         {/* Trust Indicators */}
//         {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           <div>
//             <div className="text-3xl font-bold text-[#488B73] mb-1">8+</div>
//             <div className="text-sm text-slate-600">Certifications</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-[#488B73] mb-1">5</div>
//             <div className="text-sm text-slate-600">ISO Standards</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-[#488B73] mb-1">100%</div>
//             <div className="text-sm text-slate-600">Compliance</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-[#488B73] mb-1">24/7</div>
//             <div className="text-sm text-slate-600">Monitoring</div>
//           </div> */}
//         {/* </div> */}
//       </div>
//     </section>
//   );
// }













import {
  ShieldCheck,
  Lock,
  Cloud,
  Cpu,
  RefreshCcw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const complianceItems = [
  {
    icon: ShieldCheck,
    title: "Information Security",
    standards: ["ISO/IEC 27001:2022"],
    color: "from-[#094370] to-[#063458]",
  },
  {
    icon: Lock,
    title: "Privacy Protection",
    standards: ["ISO/IEC 27701:2019"],
    color: "from-[#094370] to-[#063458]",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    standards: ["ISO/IEC 27017:2015", "ISO/IEC 27018:2019"],
    color: "from-[#094370] to-[#063458]",
  },
  {
    icon: Cpu,
    title: "AI Governance",
    standards: ["ISO/IEC 42001:2023"],
    color: "from-[#094370] to-[#063458]",
  },
  {
    icon: RefreshCcw,
    title: "Service Continuity",
    standards: ["ISO/IEC 20000-1:2018", "ISO 22301:2019"],
    color: "from-[#094370] to-[#063458]",
  },
];

export default function ComplianceSummary() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 px-6 py-16 overflow-hidden border rounded-lg">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwOTQzNzAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">

          <h2 className="text-4xl font-bold text-[#094370] mb-4">
            Security, Privacy & Compliance
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our systems and processes are independently certified against
            internationally recognized ISO/IEC standards for security, privacy,
            cloud operations, AI governance, and business continuity.
          </p>
        </div>

        {/* Compliance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-[#094370]/30 overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#094370] to-[#063458] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-slate-900 mb-3 group-hover:text-[#094370] transition-colors">
                  {item.title}
                </h3>

                {/* Standards */}
                <div className="space-y-1">
                  {item.standards.map((standard, stdIdx) => (
                    <p
                      key={stdIdx}
                      className="text-xs text-slate-600 bg-slate-50 rounded-lg px-2 py-1"
                    >
                      {standard}
                    </p>
                  ))}
                </div>

                {/* Verified */}
                
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#094370] to-[#063458] rounded-2xl p-8 shadow-xl relative overflow-hidden">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Want to learn more about our certifications?
              </h3>
              <p className="text-white/90">
                Explore detailed information about our compliance standards and
                security practices
              </p>
            </div>

            <Link
              to="/compliance"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#094370] font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              View All Certifications
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
