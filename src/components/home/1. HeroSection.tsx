"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map";
import TextType from "@/components/TextType";

const HeroSection = () => {

  
  const dots = [
    {
      start: { lat: 30.0444, lng: 31.2357 }, // Cairo
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi
      end: { lat: 43.6532, lng: -79.3832 }, // Toronto
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi
      end: { lat: 51.5074, lng: -0.1278 }, // London
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi (Your location)
      end: { lat: -33.8688, lng: 151.2093 }, // Sydney
    },
    {
      start: { lat: 28.7041, lng: 77.1025 }, // Delhi
      end: { lat: 49.2827, lng: -123.1207 }, // Vancouver
    },
    {
      start: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
      end: { lat: 40.7128, lng: -74.0060 }, // New York
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-main-400 overflow-hidden">
      <div className="absolute inset-0 w-full h-full opacity-100">
        <WorldMap
          dots={dots}// Using main-200 color
        />
      </div>

      {/* Reduced overlay for more prominent map */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-main-400/30 to-main-400/70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="block mb-2">Achieve Your Dream IELTS Score with</span>
              <TextType
                text={[
                  "English Scholars",
                  "Expert Guidance",
                  "Proven Results",
                  "English Scholars"
                ]}
                as="span"
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                textColors={["#c1121f", "#fdf0d5", "#669bbc", "#c1121f"]}
                typingSpeed={100}
                deletingSpeed={50}
                pauseDuration={2000}
                loop={true}
                showCursor={true}
                cursorClassName="bg-main-200 w-[3px] h-[1.2em] translate-y-[0.1em]"
                startOnVisible={false}
              />
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-8"
          >
            Inspiring minds ~ Transforming lives | Founded by Mr. Gurdit Singh Grover
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
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
                  className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-white overflow-hidden text-lg font-semibold"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
                    className="absolute inset-0 bg-main-200"
                  />
                  <span className="relative z-10 text-white group-hover:text-white transition-colors duration-400">
                    Book Free Demo Class
                  </span>
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    className="relative z-10 text-main-200 group-hover:text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-main-200"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-main-200"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-main-200"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-main-200"
                />
              </motion.div>
            </motion.div>

            {/* View Courses Button */}
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
                  href="/courses"
                  className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-main-300/40 overflow-hidden text-lg font-semibold"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
                    className="absolute inset-0 bg-main-300/20 backdrop-blur-sm"
                  />
                  <span className="relative z-10 text-white transition-colors duration-400">
                    View Our Courses
                  </span>
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    className="relative z-10 text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>

                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-main-300/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-main-300/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-main-300/50"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-main-300/50"
                />
              </motion.div>
            </motion.div>
          </motion.div>

        
        </div>
      </div>

   
    </section>
  );
};

export default HeroSection;
