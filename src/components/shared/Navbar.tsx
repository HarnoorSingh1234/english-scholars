"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg bg-[#011e48] backdrop-blur-md bg-opacity-95"
          : "bg-[#011e48]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section with Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/logo.jpg"
                  alt="English Scholars Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center space-x-1"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 group"
                  onMouseEnter={() => setHoveredPath(link.href)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  {/* Text */}
                  <span
                    className={`relative z-10 font-medium transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/80 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* Animated underline */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-red-500"
                    initial={{ width: 0, left: "50%" }}
                    animate={{
                      width:
                        pathname === link.href || hoveredPath === link.href
                          ? "100%"
                          : 0,
                      left:
                        pathname === link.href || hoveredPath === link.href
                          ? "0%"
                          : "50%",
                    }}
                    transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                  />

                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 -z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredPath === link.href ? 1 : 0,
                      opacity: hoveredPath === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Decorative corners on hover */}
                  <motion.span
                    className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/40"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredPath === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  />
                  <motion.span
                    className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/40"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredPath === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  />
                  <motion.span
                    className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/40"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredPath === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                  />
                  <motion.span
                    className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/40"
                    initial={{ scale: 0 }}
                    animate={{
                      scale: hoveredPath === link.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Section - Phone & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center space-x-4"
          >
            {/* Phone Link */}
            <motion.a
              href="tel:+919876543210"
              className="flex items-center space-x-2 text-white/80 text-sm group relative"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  hover: { rotate: 15, scale: 1.1 },
                }}
                transition={{ duration: 0.3 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span className="group-hover:text-white transition-colors duration-300">
                +91-98765-43210
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[1px] bg-white"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Book Demo Button */}
            <motion.div whileHover="hover" whileTap="tap">
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
              >
                <Link
                  href="/contact"
                  className="relative group inline-flex items-center space-x-2 px-6 py-2.5 border border-red-500 overflow-hidden"
                >
                  {/* Background Fill */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-red-500"
                  />

                  <span className="relative z-10 font-semibold text-red-500 group-hover:text-white transition-colors duration-400">
                    Book Demo
                  </span>
                  <motion.span
                    variants={{
                      hover: { x: 4 },
                    }}
                    className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.span>
                </Link>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-red-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="lg:hidden text-white relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
              style={{ top: "72px" }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
              className="lg:hidden bg-[#011e48] border-t border-white/10 overflow-hidden"
            >
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.1,
                    },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="container mx-auto px-4 py-6 space-y-2"
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.4,
                          ease: [0.76, 0, 0.24, 1],
                        },
                      },
                      closed: {
                        y: 20,
                        opacity: 0,
                        transition: {
                          duration: 0.3,
                        },
                      },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block relative group py-3 px-4 ${
                        pathname === link.href ? "text-white" : "text-white/80"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium group-hover:text-white transition-colors duration-300">
                          {link.name}
                        </span>
                        <motion.div
                          initial={{ x: -10, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </div>

                      {/* Underline */}
                      <motion.div
                        className="h-[2px] bg-red-500 mt-2"
                        initial={{ width: pathname === link.href ? "100%" : 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Background hover effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 -z-10"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Phone Link Mobile */}
                <motion.div
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      },
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                  className="pt-4 border-t border-white/10"
                >
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-3 text-white/80 py-3 px-4 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:text-white transition-colors duration-300">
                      +91-98765-43210
                    </span>
                  </a>
                </motion.div>

                {/* Book Demo Button Mobile */}
                <motion.div
                  variants={{
                    open: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: [0.76, 0, 0.24, 1],
                      },
                    },
                    closed: {
                      y: 20,
                      opacity: 0,
                      transition: {
                        duration: 0.3,
                      },
                    },
                  }}
                  className="pt-2"
                >
                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="relative"
                  >
                    <Link
                      href="/contact"
                      className="relative group flex items-center justify-center space-x-2 w-full py-3 px-4 border border-red-500 overflow-hidden"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.div
                        initial={{ x: "-100%" }}
                        whileTap={{ x: "0%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-red-500"
                      />
                      <span className="relative z-10 font-semibold text-red-500 group-active:text-white transition-colors duration-300">
                        Book Demo
                      </span>
                      <ChevronRight className="relative z-10 w-4 h-4 text-red-500 group-active:text-white transition-colors duration-300" />
                    </Link>

                    {/* Decorative corners */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-red-500" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-red-500" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-red-500" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-red-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
