import React from "react";
import image1 from "../assets/Images/Ramneek.png";
import image2 from "../assets/Images/Ravi.png";
import image3 from "../assets/Images/Abhay.png";
import image5 from "../assets/Images/rahulsir.png";
import image6 from "../assets/Images/Vinod.png";
import image7 from "../assets/Images/Ratesh.png";
import image8 from "../assets/Images/Alok.png";
import image9 from "../assets/Images/Ankur.png";
import image10 from "../assets/Images/Meenakshi.png";
import image11 from "../assets/Images/Shankar.png";
import image12 from "../assets/Images/himanshu.png";
import image13 from "../assets/Images/Yashi.png";
import image14 from "../assets/Images/Manu.png";
import image15 from "../assets/Images/Chandni.png";
import image16 from "../assets/Images/Yashtyagi.png";
import image17 from "../assets/Images/Vachaspati.png";
import image18 from "../assets/Images/vishu.png";
import image19 from "../assets/Images/Utkarsh.png";
import image20 from "../assets/Images/suman.png";
import image21 from "../assets/Images/Sachin.png";

export default function Team() {
  const members = [
    { name: "Ramneek Kochar", role: "Chief Executive Officer", image: image1 },
    { name: "Dr. Ravi Ramakrishnan", role: "Chief Technology Officer", image: image2 },
    { name: "Abhay Shringi", role: "Chief Financial Officer", image: image3 },
    { name: "Rahul Wali", role: "Head", image: image5 },
    { name: "Vinod Gupta", role: "Engineering Manager", image: image6 },
    { name: "Ritesh Chaudhary", role: "Support Manager", image: image7 },
     { name: "Shankar Jha", role: "Operations", image: image11 },
    { name: "Ankur Chauhan", role: "Front-End Developer", image: image9 },
   
    { name: "Meenakshi", role: "Quality Assurance", image: image10 },
    { name: "Alok Ratan", role: "Mobile App Developer", image: image8 },
     { name: "Chandni Varshney", role: "Data Analyst", image: image15 },
    { name: "Yash Tyagi", role: "MERN Stack Developer", image: image16 },
    { name: "Yashi Singh", role: "Customer Success Manager", image: image13 },
    { name: "Himanshu Pal", role: "Full Stack Developer", image: image12 },
   
    { name: "Manu Verma", role: "Backend Developer", image: image14 },
   { name: "Vishu Kumar", role: "React.js Developer", image: image18 },
    
    { name: "Vachaspati Sharma", role: "Front-End Developer", image: image17 },
    
    
    { name: "Utkarsh Pratap Singh", role: "Apex Developer", image: image19 },
    { name: "Suman Kumar Nayak", role: "Front-End Developer", image: image20 },
    { name: "Sachin Kumar Singh", role: "Apex Developer", image: image21 },
  ];

  return (
    <div className="min-h-screen bg-[#094370] py-12 px-4 scroll-smooth">
      <div className="max-w-7xl mx-auto">
        <article className="bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          
          {/* Header */}
          <header className="px-8 py-6 ">
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white text-center">
              Meet Our Team
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto">
              A group of passionate professionals dedicated to building reliable,
              secure, and customer-focused fintech solutions.
            </p>
          </header>

          {/* Team Grid */}
          <div className="px-8 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover shadow-md mb-4"
                  />

                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {member.name}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <div></div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-medium px-4 py-2 rounded-md border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:shadow"
            >
              Back to top
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
