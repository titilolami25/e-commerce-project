import React from "react";
import staffMain from "../assets/images/staff2.jpg"; 
import ceo from "../assets/images/ceo1.jpg"; 
import assistantCeo from "../assets/images/ceo-assist.jpg"; 
import manager from "../assets/images/manager.jpg"; 

const About: React.FC = () => {
  const team = [
    { name: "Jane Doe", role: "CEO", img: ceo },
    { name: "Abigail Lola", role: "Assistant CEO", img: assistantCeo },
    { name: "Michael Lee", role: "Operations Manager", img: manager },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Main About Section */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center mb-16 mt-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={staffMain}
            alt="staff"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 mt-8">
            About Us
          </h1>
          <p className="text-gray-800 leading-relaxed mb-4">
            We are a passionate team dedicated to delivering innovative
            solutions that make life easier and businesses stronger. Our staff
            brings together years of expertise in research, product management,
            digital transformation, and customer service.
          </p>
          <p className="text-gray-800 leading-relaxed mb-6">
            At the heart of everything we do is a commitment to excellence,
            teamwork, and building lasting relationships with our customers.
          </p>
          <button className="px-6 py-3 bg-accent text-white font-medium rounded-xl shadow hover:bg-primary transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
          Meet Our Leadership
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="overflow-hidden rounded-full w-40 h-40 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full transform transition duration-500 ease-in-out hover:scale-125"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
