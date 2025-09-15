import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo2(1)(1).png";
import { useCart } from "../context/CartContext";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "All Products", path: "/products" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get cart from context
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Pleasant Fresh Logo" className="h-8 w-auto" />
          <span className="text-2xl font-decorative text-primary tracking-wide">
            Pleasant Fresh
          </span>
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
          <Link to="/cart" className="relative text-2xl text-gray hover:text-primary transition">
            <BsCart4 />
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {count}
              </span>
            )}
          </Link>

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
