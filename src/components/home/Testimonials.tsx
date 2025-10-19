"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      score: "8.0",
      photo: "👩",
      quote: "English Scholars transformed my English skills completely. The personalized attention and expert guidance from Mr. Grover helped me achieve my target score. The writing module coaching was exceptional!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
    },
    {
      name: "Rahul Kumar",
      score: "7.5",
      photo: "👨",
      quote: "I was struggling with the writing module until I joined English Scholars. The small batch size and individual feedback helped me improve significantly. Highly recommended!",
      modules: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
    },
    {
      name: "Sneha Patel",
      score: "8.0",
      photo: "👩",
      quote: "The mock tests and detailed feedback were game-changers for me. Mr. Grover's teaching methods are practical and effective. I achieved my dream score in the first attempt!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.5 },
    },
    {
      name: "Amit Singh",
      score: "7.5",
      photo: "👨",
      quote: "English Scholars provided me with the confidence and skills needed for IELTS. The grammar classes were particularly helpful. Thank you for the amazing support!",
      modules: { L: 7.5, R: 8.0, W: 7.0, S: 7.5 },
    },
    {
      name: "Kavya Reddy",
      score: "8.5",
      photo: "👩",
      quote: "Outstanding coaching! The one-on-one speaking sessions made all the difference. I'm now pursuing my master's degree in Canada thanks to English Scholars.",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
    },
    {
      name: "Rohan Mehta",
      score: "7.0",
      photo: "👨",
      quote: "The early morning batches fit perfectly with my work schedule. The comprehensive study material and regular assessments kept me on track throughout my preparation.",
      modules: { L: 7.5, R: 7.0, W: 6.5, S: 7.0 },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-main-300 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23011e48' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-main-400 mb-4">
            Success Stories from Our Scholars
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="h-1 bg-gradient-to-r from-main-200 to-main-100 mx-auto rounded-full"
          />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={{
                      hover: {
                        y: -8,
                        scale: 1.02,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-main-400/10 relative overflow-hidden h-full"
                  >
                    {/* Top border accent */}
                    <motion.div
                      initial={{ width: "0%" }}
                      variants={{
                        hover: { width: "100%" },
                      }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute top-0 left-0 h-1 bg-gradient-to-r from-main-200 to-main-500"
                    />

                    {/* Background gradient on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      variants={{
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-main-400/5 to-transparent"
                    />
                    {/* Student Photo */}
                    <div className="flex flex-col items-center mb-4 relative z-10">
                      <motion.div
                        variants={{
                          hover: { scale: 1.1, rotate: 5 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-20 h-20 rounded-full border-4 border-main-500 bg-gradient-to-br from-main-400 to-main-500 flex items-center justify-center text-4xl mb-3"
                      >
                        {testimonial.photo}
                      </motion.div>
                      <h3 className="text-lg font-bold text-main-400 group-hover:text-main-200 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <Badge className="bg-main-500 text-white px-4 py-1 rounded-full mt-2">
                        Band {testimonial.score}
                      </Badge>
                    </div>

                    {/* Module Breakdown */}
                    <div className="flex justify-around text-xs text-gray-600 mb-4 pb-4 border-b border-main-400/10 relative z-10">
                      <span className="font-semibold">L: {testimonial.modules.L}</span>
                      <span className="font-semibold">R: {testimonial.modules.R}</span>
                      <span className="font-semibold">W: {testimonial.modules.W}</span>
                      <span className="font-semibold">S: {testimonial.modules.S}</span>
                    </div>

                    {/* Quote */}
                    <p className="text-gray-700 italic leading-relaxed text-sm mb-4 relative z-10">
                      &quot;{testimonial.quote}&quot;
                    </p>

                    {/* Star Rating */}
                    <div className="flex justify-center space-x-1 relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                        >
                          <Star className="w-4 h-4 fill-main-200 text-main-200" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Decorative Corners */}
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{
                        hover: { scale: 1 },
                      }}
                      transition={{ duration: 0.2, delay: 0.05 }}
                      className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-main-200"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{
                        hover: { scale: 1 },
                      }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-main-200"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{
                        hover: { scale: 1 },
                      }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-main-200"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{
                        hover: { scale: 1 },
                      }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                      className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-main-200"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4"
          >
            <motion.button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border-2 border-main-500 flex items-center justify-center hover:bg-main-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group"
            >
              <ChevronLeft className="w-5 h-5" />
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              disabled={currentIndex + itemsPerPage >= testimonials.length}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full border-2 border-main-500 flex items-center justify-center hover:bg-main-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative group"
            >
              <ChevronRight className="w-5 h-5" />
              {/* Decorative corners */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-main-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-2 mt-4"
          >
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerPage)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i * itemsPerPage
                    ? "w-8 bg-main-500"
                    : "w-2 bg-gray-300 hover:bg-main-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
