// export default function CertificateCard({
//   code,
//   description,
// }) {
//   return (
//     <div className="border border-slate-200 rounded-xl p-6 bg-white hover:shadow-md transition">
//       <div className="flex flex-col h-full">
//         <h3 className="text-base font-medium text-slate-900">
//           {code}
//         </h3>

//         <p className="text-sm text-slate-600 mt-2">
//           {description}
//         </p>

//         {/* Certificate Image Placeholder */}
//         <div className="mt-4 flex-1 flex items-center justify-center border border-dashed border-slate-300 rounded-lg text-sm text-slate-400">
//           Certificate image goes here
//         </div>

//         {/* Action */}
//         <button
//           type="button"
//           className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 self-start"
//         >
//           View certificate →
//         </button>
//       </div>
//     </div>
//   );
// }














export default function CertificateCard({
  code,
  description,
  onView,
}) {
  return (
    <div className="border border-[#094370]/20 rounded-xl p-6 bg-white hover:shadow-lg hover:border-[#094370] transition">
      <div className="flex flex-col h-full">
        {/* Title */}
        <h3 className="text-base font-semibold text-[#094370]">
          {code}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 mt-2">
          {description}
        </p>

        {/* Certificate Image Placeholder */}
        <div className="mt-4 flex-1 flex items-center justify-center border border-dashed border-[#094370]/40 rounded-lg text-sm text-[#094370]/60">
          Certificate image goes here
        </div>

        {/* Action */}
        <button
          type="button"
          onClick={onView}
          className="mt-4 text-sm font-semibold text-[#094370] hover:text-[#063458] flex items-center gap-1 self-start transition"
        >
          View certificate
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
