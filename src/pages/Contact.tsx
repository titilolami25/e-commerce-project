import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import heroBg from "../assets/images/contact-bg3.jpg";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="h-[50vh] flex flex-col items-center justify-center text-center text-white relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg">We’d love to hear from you</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info + Socials */}
        <div className="space-y-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6  mt-6">
            Contact Information
          </h2>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-accent" />
              <p className="text-gray-700">+234 808 721 9452</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-accent" />
              <p className="text-gray-700">info@pnsmile.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-accent" />
              <p className="text-gray-700">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 pt-4">
            <a href="#" className="text-gray-600 hover:text-accent transition">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-accent transition">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-accent transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="bg-white shadow-md rounded-2xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Send Us a Message
          </h2>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent text-white font-medium py-3 rounded-xl shadow hover:bg-primary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
