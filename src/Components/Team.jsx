import React from "react";
import BrandLogoScroller from "./BrandLogo";
import image1 from "../assets/Images/Ramneek.png";
import image2 from "../assets/Images/Ravi.png";
import image3 from "../assets/Images/Abhay.png";
// import image4 from "../assets/Images/user.png";
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
    {
      name: "Dr. Ravi Ramakrishnan",
      role: "Chief Technology Officer",
      image: image2,
    },
    { name: "Abhay Shringi", role: "Chief Financial Officer", image: image3 },
    // { name: "Sales Manveet Singh", role: "Head ", image: image4 },
    { name: "Rahul Wali", role: "Head ", image: image5 },
    { name: "Vinod Gupta ", role: "Engineering Manager", image: image6 },
    { name: "Ritesh Chaudhary", role: "Support Manager", image: image7 },
    { name: "Alok Ratan", role: "Mobile App Developer", image: image8 },
    { name: "Ankur Chauhan", role: "Front-End Developer", image: image9 },
    { name: "Meenakshi", role: "Quality Assurance", image: image10 },
    { name: "Shankar Jha", role: "Operations", image: image11 },
    { name: "Himanshu Pal", role: "Full Stack Developer", image: image12 },
    { name: "Yashi Singh", role: "Customer Success Manager", image: image13 },
    { name: "Manu Verma", role: "Backend Developer", image: image14 },
    { name: "Chandni Varshney ", role: "Data Analyst", image: image15 },
    { name: "Yash Tyagi", role: "Mern Stack Developer", image: image16 },
    { name: "Vachaspati Sharma", role: "Front-End Developer", image: image17 },
    { name: "Vishu kumar", role: "React.js Developer", image: image18 },
    { name: "Utkarsh Pratap Singh", role: "Apex Developer", image: image19 },
    { name: "Suman Kumar Nayak", role: "Front-End Developer", image: image20 },
    { name: "Sachin kumar singh", role: "Apex Developer", image: image21 },
  ];

  return (
    <>
      <section className="py-16" id="team">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <BrandLogoScroller /> */}
    </>
  );
}
