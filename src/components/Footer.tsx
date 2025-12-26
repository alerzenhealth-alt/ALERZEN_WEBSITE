import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">A</span>
              </div>
              <span className="text-xl font-bold">Alerzen Health</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Wellness and Beyond. Premium home diagnostics for modern Bangalore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#services" className="hover:text-accent transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-accent transition-colors">
                  Health Packages
                </a>
              </li>
              <li>
                <a href="#labs" className="hover:text-accent transition-colors">
                  Partner Labs
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <a href="/terms" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Alerzen Health, BTM Stage 2, Bangalore - 560076</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                <a href="https://wa.me/919986404073" className="hover:text-accent transition-colors">
                  +91 99864 04073 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@alerzen.com" className="hover:text-accent transition-colors">
                  contact@alerzen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Alerzen Health. All rights reserved. | NABL Certified Partner Labs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
