import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "All Products", path: "/all-products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-decorative text-primary tracking-wide"
        >
          Pleasant Fresh
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8 font-body text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <div className="text-2xl relative cursor-pointer text-gray hover:text-primary transition">
            <BsCart4 />
            <span className="absolute w-5 h-5 rounded-full flex justify-center items-center -top-2 -right-3 bg-primary text-xs text-white">
              0
            </span>
          </div>

          {/* Mobile nav toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-primary text-2xl"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary text-white py-4 px-6 space-y-4 font-body text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="block hover:text-gray transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
