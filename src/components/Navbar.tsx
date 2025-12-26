import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/alerzen-logo.png";
import { openWhatsApp } from "@/lib/whatsapp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Location */}
          <div className="flex items-center gap-4 md:gap-8">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Alerzen Health Logo" className="h-14 md:h-16 w-auto" />
            </Link>

            <div className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
              <span className="text-xs text-gray-500 uppercase tracking-wider">My Location:</span>
              <span className="flex items-center gap-1 text-primary">
                Bangalore <span className="text-gray-400">▼</span>
              </span>
            </div>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tests" className="text-gray-700 hover:text-primary font-medium text-sm uppercase tracking-wide">
              Tests
            </Link>
            <Link to="/health-packages" className="text-gray-700 hover:text-primary font-medium text-sm uppercase tracking-wide">
              Checkups
            </Link>
            <Link to="/about-us" className="text-gray-700 hover:text-primary font-medium text-sm uppercase tracking-wide">
              About Us
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/checkout" className="text-gray-700 hover:text-primary relative group">
              <ShoppingCart className="w-6 h-6" />
              {/* Optional: Add badge here if we have cart count state */}
            </Link>
            <Button
              size="default"
              className="hidden md:flex bg-primary hover:bg-primary-light text-white font-bold rounded-md px-6 shadow-md hover:shadow-lg transition-all"
              onClick={() => openWhatsApp("Hi")}
            >
              Login
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="md:hidden glass glass-card border-t border-gray-100 absolute top-16 left-0 right-0 shadow-lg animate-slide-up">
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 w-fit">
              <span className="text-xs text-gray-500 uppercase tracking-wider">Location:</span>
              <span className="text-primary">Bangalore</span>
            </div>

            <div className="flex flex-col space-y-3">
              <Link
                to="/tests"
                className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tests
              </Link>
              <Link
                to="/health-packages"
                className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Checkups
              </Link>
              <Link
                to="/about-us"
                className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
            </div>

            <Button
              className="w-full bg-primary hover:bg-primary-light text-white font-bold rounded-md shadow-md"
              onClick={() => openWhatsApp("Hi")}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
