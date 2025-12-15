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
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//     // Clear error for this field when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
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

//   const handleSubmit = async () => {
//     if (!validateForm()) {
//       return;
//     }
    
//     setIsSubmitting(true);
//     setSubmitStatus(null);
    
//     // Simulate form submission
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
      
//       setSubmitStatus({
//         type: "success",
//         message: "Thank you! Your message has been sent successfully. We'll get back to you soon."
//       });
      
//       // Reset form
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
//     <div className="min-h-screen bg-gray-50 py-12 px-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl border border-gray-200 rounded-2xl p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
//           Contact Us
//         </h1>

//         <p className="text-center text-gray-600 mb-10">
//           We're here to help! Feel free to reach out to us anytime.
//         </p>

//         {/* Contact Details & Form */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Contact Info */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold text-blue-600">Get in Touch</h2>

//             <div className="space-y-3">
//               <p className="text-gray-700">
//                 <strong>Email:</strong> info@connectingit.in
//               </p>

//               <p className="text-gray-700">
//                 <strong>Phone:</strong> +91-XXXXXXXXXX
//               </p>

//               <p className="text-gray-700">
//                 <strong>Address:</strong> 20, ConsultIT House, Plot, West,
//                 opposite Bloom International School, TECHZONE 7, IT Plots,
//                 Milak Lachchhi, Greater Noida, Milak Lachchi, Uttar Pradesh
//                 203207
//               </p>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="space-y-4">
//             {/* Success/Error Message */}
//             {submitStatus && (
//               <div className={`p-4 rounded-xl ${
//                 submitStatus.type === "success" 
//                   ? "bg-green-50 text-green-800 border border-green-200" 
//                   : "bg-red-50 text-red-800 border border-red-200"
//               }`}>
//                 {submitStatus.message}
//               </div>
//             )}

//             {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 ${
//                   errors.name 
//                     ? "border-red-500 focus:ring-red-500" 
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//                 placeholder="Enter your name"
//               />
//               {errors.name && (
//                 <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//               )}
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 ${
//                   errors.email 
//                     ? "border-red-500 focus:ring-red-500" 
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//                 placeholder="Enter your email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 text-gray-700 placeholder-gray-400 resize-none ${
//                   errors.message 
//                     ? "border-red-500 focus:ring-red-500" 
//                     : "border-gray-300 focus:ring-blue-500"
//                 }`}
//                 placeholder="Write your message"
//               ></textarea>
//               {errors.message && (
//                 <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//               )}
//             </div>

//             {/* Submit Button */}
//             <button 
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 w-full md:w-auto transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </button>
//           </div>
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
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus({
        type: "success",
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you soon."
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative z-10 bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-xl border border-gray-200 rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary"> 
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          We're here to help! Feel free to reach out to us anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
          <h2 className="text-xl font-semibold text-primary">Get in Touch</h2>

            <div className="space-y-3">
              <p className="text-gray-700">
                <strong>Email:</strong> ravi@connictingit.in
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +91-9891001443
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 20, ConsultIT House, Plot, West, opposite Bloom International School, TECHZONE 7, IT Plots, Milak Lachchhi, Greater Noida, Milak Lachchi, Uttar Pradesh 203207
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Your Name
    </label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400`}
      placeholder="Enter your name"
    />
    {errors.name && (
      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
    )}
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email Address
    </label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400`}
      placeholder="Enter your email"
    />
    {errors.email && (
      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
    )}
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      name="message"
      rows="4"
      value={formData.message}
      onChange={handleChange}
      className={`w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400 resize-none`}
      placeholder="Write your message"
    ></textarea>
    {errors.message && (
      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
    )}
  </div>

  {/* Submit */}
  <button
    type="submit"
    disabled={isSubmitting}
    className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-blue-700 w-full md:w-auto transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
  >
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
</form>

        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Find Us</h2>
          <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.870902842877!2d77.493917!3d28.477247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc0bc9f587e6d%3A0x4a2e2e1cfa53295b!2sBloom%20International%20School!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
