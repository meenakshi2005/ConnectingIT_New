// import React, { useState } from "react";

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));

//     if (errors[name]) {
//       setErrors((prev) => ({
//         ...prev,
//         [name]: ""
//       }));
//     }
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent page reload
//     if (!validateForm()) return;

//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       setSubmitStatus({
//         type: "success",
//         message:
//           "Thank you! Your message has been sent successfully. We'll get back to you soon."
//       });

//       setFormData({
//         name: "",
//         email: "",
//         message: ""
//       });
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "Something went wrong. Please try again later."
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen relative z-10 bg-gray-50 py-12 px-6">
//       <div className="max-w-7xl mx-auto bg-white shadow-xl border border-gray-200 rounded-2xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-primary"> 
//           Contact Us
//         </h1>
//         <p className="text-center text-gray-600 mb-10">
//           We're here to help! Feel free to reach out to us anytime.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <div className="space-y-4">
//           <h2 className="text-xl font-semibold text-primary">Get in Touch</h2>

//             <div className="space-y-3">
//               <p className="text-gray-700">
//                 <strong>Email:</strong> ravi@connictingit.in
//               </p>
//               <p className="text-gray-700">
//                 <strong>Phone:</strong> +91-9891001443
//               </p>
//               <p className="text-gray-700">
//                 <strong>Address:</strong> 20, ConsultIT House, Plot, West, opposite Bloom International School, TECHZONE 7, IT Plots, Milak Lachchhi, Greater Noida, Milak Lachchi, Uttar Pradesh 203207
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <form className="space-y-4" onSubmit={handleSubmit}>
//   {/* Name */}
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       Your Name
//     </label>
//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400`}
//       placeholder="Enter your name"
//     />
//     {errors.name && (
//       <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//     )}
//   </div>

//   {/* Email */}
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       Email Address
//     </label>
//     <input
//       type="email"
//       name="email"
//       value={formData.email}
//       onChange={handleChange}
//       className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400`}
//       placeholder="Enter your email"
//     />
//     {errors.email && (
//       <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//     )}
//   </div>

//   {/* Message */}
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">
//       Message
//     </label>
//     <textarea
//       name="message"
//       rows="4"
//       value={formData.message}
//       onChange={handleChange}
//       className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 resize-none`}
//       placeholder="Write your message"
//     ></textarea>
//     {errors.message && (
//       <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//     )}
//   </div>

//   {/* Submit */}
//   <button
//     type="submit"
//     disabled={isSubmitting}
//     className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-blue-700 w-full md:w-auto transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
//   >
//     {isSubmitting ? "Sending..." : "Send Message"}
//   </button>
// </form>

//         </div>

//         {/* Map Section */}
//         <div className="mt-12">
//           <h2 className="text-xl font-semibold text-blue-600 mb-4">Find Us</h2>
//           <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.870902842877!2d77.493917!3d28.477247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0bc9f587e6d%3A0x4a2e2e1cfa53295b!2sBloom%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
//               width="100%"
//               height="100%"
//               className="border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




















import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#094370] py-12 px-4 scroll-smooth">
      <div className="max-w-6xl mx-auto">
        <article className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          
          {/* Header */}
          <header className="px-8 py-6 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 text-center">
            <h1 className="text-2xl md:text-3xl font-extrabold">
              Contact Us
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              We’re here to help. Reach out to the ConnectingIt team anytime.
            </p>
          </header>

          {/* Body */}
          <div className="px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Contact Info */}
              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Get in Touch</h2>
                <p className="text-slate-700 dark:text-slate-300">
                  Have questions about our eSIM, ePayNow, or eSpendNow services?
                  Our team is ready to assist you.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> ravi@connectingit.in</p>
                  <p><strong>Phone:</strong> +91-9891001443</p>
                  <p>
                       <strong>ConnectingIT Technologies Pvt Ltd</strong>
                    <br />
                    Plot no.-20, 2nd Floor, opposite Bloom
                    International School,
                    <br />
                    TECHZONE 7, IT Plots
                    <br />
                    Greater Noida West, Uttar Pradesh – 203207
              
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-500 text-slate-700"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-500 text-slate-700"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-sky-500 text-slate-700 resize-none"
                    placeholder="Write your message"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-sky-600 text-white px-6 py-2 rounded-xl hover:bg-sky-700 transition disabled:bg-sky-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus && (
                  <p
                    className={`text-sm ${
                      submitStatus.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </div>

            {/* Map */}
            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4">Find Us</h2>
              <div className="w-full h-64 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.870902842877!2d77.493917!3d28.477247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0bc9f587e6d%3A0x4a2e2e1cfa53295b!2sBloom%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <div></div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium px-4 py-2 rounded-md border bg-slate-50 hover:shadow"
            >
              Back to top
            </button>
          </div>

        </article>
      </div>
    </div>
  );
}
