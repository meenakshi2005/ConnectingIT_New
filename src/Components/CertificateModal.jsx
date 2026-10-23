// import { X } from "lucide-react";
// import { useEffect } from "react";

// export default function CertificateModal({ open, onClose, image, title }) {
//   useEffect(() => {
//     const handleEsc = (e) => e.key === "Escape" && onClose();
//     document.addEventListener("keydown", handleEsc);
//     return () => document.removeEventListener("keydown", handleEsc);
//   }, [onClose]);

//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* Modal */}
//       <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-6 animate-fadeIn">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="text-lg font-bold text-slate-900">
//             {title}
//           </h3>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-slate-100"
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Image */}
//         <div className="flex justify-center">
//           <img
//             src={image}
//             alt={title}
//             className="max-h-[70vh] w-auto rounded-lg border"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }










import { X } from "lucide-react";
import { useEffect } from "react";

export default function CertificateModal({ open, onClose, image, title }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-6 animate-fadeIn border border-[#094370]/20">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-[#094370]">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#094370] hover:bg-[#094370]/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[70vh] w-auto rounded-lg border border-[#094370]/20"
          />
        </div>
      </div>
    </div>
  );
}
