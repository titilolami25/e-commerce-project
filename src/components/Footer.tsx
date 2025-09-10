import type { FC } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Branding */}
        <div>
          <h2 className="text-xl font-decorative text-primary">Pnsmile Venture</h2>
          <p className="text-sm mt-2">
            Luxury at Affordable Price.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <a href="#" className="hover:text-primary transition">All Products</a>
          <a href="#" className="hover:text-primary transition">About Us</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Pnsmile Venture. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
