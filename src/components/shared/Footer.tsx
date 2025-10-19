import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-main-400)] text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">ENGLISH SCHOLARS</h3>
            <p className="text-[var(--color-main-300)] text-sm mb-4">
              Inspiring minds ~ Transforming lives
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Providing personalized English coaching for IELTS, Spoken English, Grammar, and
              Business English for over 15 years.
            </p>
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-200)] rounded-full p-2 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-200)] rounded-full p-2 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-200)] rounded-full p-2 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-200)] rounded-full p-2 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Courses</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/courses#ielts" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  IELTS Preparation
                </Link>
              </li>
              <li>
                <Link href="/courses#spoken" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Spoken English
                </Link>
              </li>
              <li>
                <Link href="/courses#grammar" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  English Grammar
                </Link>
              </li>
              <li>
                <Link href="/courses#business" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Business English
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--color-main-300)] hover:underline transition-colors">
                  Free Demo Class
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  123 Education Street<br />
                  City, State - 123456<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm hover:text-[var(--color-main-300)] transition-colors">
                  +91-98765-43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0" />
                <a href="mailto:info@english-scholars.com" className="text-sm hover:text-[var(--color-main-300)] transition-colors">
                  info@english-scholars.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Monday - Saturday<br />
                  9:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-[var(--color-main-300)]">
            © {currentYear} English Scholars. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
