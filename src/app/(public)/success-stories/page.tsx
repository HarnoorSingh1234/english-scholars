"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp, Target, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessStoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const testimonials = [
    {
      name: "Priya Sharma",
      score: 8.0,
      photo: "👩",
      quote:
        "English Scholars transformed my English skills completely. The personalized attention and expert guidance from Mr. Grover helped me achieve my target score. The writing module coaching was exceptional!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
      type: "Academic",
      destination: "University of Toronto, Canada",
      year: 2024,
    },
    {
      name: "Rahul Kumar",
      score: 7.5,
      photo: "👨",
      quote:
        "I was struggling with the writing module until I joined English Scholars. The small batch size and individual feedback helped me improve significantly. Highly recommended!",
      modules: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Melbourne, Australia",
      year: 2024,
    },
    {
      name: "Sneha Patel",
      score: 8.0,
      photo: "👩",
      quote:
        "The mock tests and detailed feedback were game-changers for me. Mr. Grover's teaching methods are practical and effective. I achieved my dream score in the first attempt!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.5 },
      type: "General Training",
      destination: "PR Canada",
      year: 2024,
    },
    {
      name: "Amit Singh",
      score: 7.5,
      photo: "👨",
      quote:
        "English Scholars provided me with the confidence and skills needed for IELTS. The grammar classes were particularly helpful. Thank you for the amazing support!",
      modules: { L: 7.5, R: 8.0, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Manchester, UK",
      year: 2024,
    },
    {
      name: "Kavya Reddy",
      score: 8.5,
      photo: "👩",
      quote:
        "Outstanding coaching! The one-on-one speaking sessions made all the difference. I'm now pursuing my master's degree in Canada thanks to English Scholars.",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
      type: "Academic",
      destination: "McGill University, Canada",
      year: 2024,
    },
    {
      name: "Rohan Mehta",
      score: 7.0,
      photo: "👨",
      quote:
        "The early morning batches fit perfectly with my work schedule. The comprehensive study material and regular assessments kept me on track throughout my preparation.",
      modules: { L: 7.5, R: 7.0, W: 6.5, S: 7.0 },
      type: "General Training",
      destination: "PR Australia",
      year: 2023,
    },
    {
      name: "Anjali Verma",
      score: 8.0,
      photo: "👩",
      quote:
        "The writing task 2 coaching was phenomenal! Mr. Grover's techniques helped me structure my essays perfectly. Got my desired score in just 6 weeks!",
      modules: { L: 8.0, R: 8.5, W: 7.5, S: 8.0 },
      type: "Academic",
      destination: "University of Sydney, Australia",
      year: 2023,
    },
    {
      name: "Vikram Joshi",
      score: 7.5,
      photo: "👨",
      quote:
        "Excellent coaching center! The mock tests were very close to the actual exam. The feedback after each test helped me identify and improve my weak areas.",
      modules: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
      type: "General Training",
      destination: "PR Canada",
      year: 2023,
    },
    {
      name: "Divya Krishnan",
      score: 8.5,
      photo: "👩",
      quote:
        "Best IELTS coaching in town! The personalized study plan and regular progress tracking kept me motivated. Achieved 8.5 overall in my first attempt!",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
      type: "Academic",
      destination: "University of British Columbia, Canada",
      year: 2023,
    },
    {
      name: "Siddharth Malhotra",
      score: 7.0,
      photo: "👨",
      quote:
        "The speaking practice sessions with multiple trainers helped me overcome my nervousness. Great learning environment and supportive staff!",
      modules: { L: 7.5, R: 7.0, W: 6.5, S: 7.5 },
      type: "Academic",
      destination: "Deakin University, Australia",
      year: 2023,
    },
    {
      name: "Neha Gupta",
      score: 8.0,
      photo: "👩",
      quote:
        "Joining English Scholars was the best decision for my IELTS preparation. The comprehensive approach covering all modules helped me achieve Band 8!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
      type: "General Training",
      destination: "PR New Zealand",
      year: 2022,
    },
    {
      name: "Arjun Nair",
      score: 7.5,
      photo: "👨",
      quote:
        "The reading techniques taught here are amazing! Improved my speed and accuracy significantly. Highly professional and result-oriented institute.",
      modules: { L: 7.5, R: 8.5, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Auckland, New Zealand",
      year: 2022,
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const scoreMatch =
      selectedFilter === "all" ||
      (selectedFilter === "7.0-7.5" && testimonial.score >= 7.0 && testimonial.score <= 7.5) ||
      (selectedFilter === "8.0" && testimonial.score === 8.0) ||
      (selectedFilter === "8.5+" && testimonial.score >= 8.5);

    const typeMatch = selectedType === "all" || testimonial.type === selectedType;

    return scoreMatch && typeMatch;
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#011e48] via-[#011e48] to-[#023e73] py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm mb-8"
          >
            <Link href="/" className="text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/50 mx-2">›</span>
            <span className="text-white">Success Stories</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Success Stories from Our Scholars
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
            />
            <p className="text-xl md:text-2xl text-white/80">
              Real students, real results, real dreams achieved
            </p>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-10 w-32 h-32 rounded-full bg-red-500/10 blur-3xl"
        />
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-white border-b-2 border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            {/* Band Score Filter */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#011e48] mb-3">Filter by Band Score:</p>
              <div className="flex flex-wrap gap-2">
                {["all", "7.0-7.5", "8.0", "8.5+"].map((filter) => (
                  <motion.button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 font-semibold transition-all ${
                      selectedFilter === filter
                        ? "bg-red-500 text-white shadow-md"
                        : "bg-white text-[#011e48] border-2 border-[#011e48]/20 hover:border-red-500"
                    }`}
                  >
                    {filter === "all" ? "All" : filter}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Test Type Filter */}
            <div className="flex-1">
              <p className="text-sm font-semibold text-[#011e48] mb-3">Filter by Test Type:</p>
              <div className="flex flex-wrap gap-2">
                {["all", "Academic", "General Training"].map((type) => (
                  <motion.button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 font-semibold transition-all ${
                      selectedType === type
                        ? "bg-red-500 text-white shadow-md"
                        : "bg-white text-[#011e48] border-2 border-[#011e48]/20 hover:border-red-500"
                    }`}
                  >
                    {type === "all" ? "All" : type}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-gray-600 mt-4"
          >
            Showing <span className="font-bold text-[#011e48]">{filteredTestimonials.length}</span> success
            {filteredTestimonials.length === 1 ? " story" : " stories"}
          </motion.p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background pattern */}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedFilter}-${selectedType}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            >
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.name}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={{
                      hover: { y: -8, scale: 1.02 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-[#011e48] p-6 shadow-sm relative overflow-hidden h-full flex flex-col">
                      {/* Top accent bar */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-red-500 to-red-600"
                      />

                      {/* Background Fill */}
                      <motion.div
                        initial={{ y: "100%" }}
                        variants={{
                          hover: { y: "0%" },
                        }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-gradient-to-br from-[#011e48] to-[#023e73]"
                      />

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Student Photo */}
                        <div className="flex flex-col items-center mb-4">
                          <motion.div
                            variants={{
                              hover: { scale: 1.1, rotate: 5 },
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-20 h-20 rounded-full border-4 border-[#011e48] group-hover:border-white bg-gradient-to-br from-[#011e48] to-[#023e73] flex items-center justify-center text-4xl mb-3 transition-colors duration-400"
                          >
                            {testimonial.photo}
                          </motion.div>
                          <h3 className="text-lg font-bold text-[#011e48] group-hover:text-white text-center transition-colors duration-400">
                            {testimonial.name}
                          </h3>
                          <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full mt-2 text-base font-bold">
                            Band {testimonial.score.toFixed(1)}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-[#011e48] group-hover:border-white text-[#011e48] group-hover:text-white mt-2 text-xs transition-colors duration-400"
                          >
                            {testimonial.type}
                          </Badge>
                        </div>

                        {/* Module Breakdown */}
                        <div className="flex justify-around text-xs text-gray-600 group-hover:text-white/80 mb-4 pb-4 border-b border-gray-200 group-hover:border-white/30 transition-colors duration-400">
                          {[
                            { key: "L", label: "Listening", value: testimonial.modules.L },
                            { key: "R", label: "Reading", value: testimonial.modules.R },
                            { key: "W", label: "Writing", value: testimonial.modules.W },
                            { key: "S", label: "Speaking", value: testimonial.modules.S },
                          ].map((module) => (
                            <div key={module.key} className="text-center">
                              <p className="font-semibold text-[#011e48] group-hover:text-white transition-colors duration-400">
                                {module.value}
                              </p>
                              <p className="text-[10px] opacity-70">{module.label}</p>
                            </div>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-gray-700 group-hover:text-white/90 italic leading-relaxed text-sm mb-4 flex-1 transition-colors duration-400">
                          &quot;{testimonial.quote}&quot;
                        </p>

                        {/* Destination */}
                        {testimonial.destination && (
                          <p className="text-xs text-red-500 group-hover:text-white font-semibold mb-4 transition-colors duration-400">
                            📍 {testimonial.destination}
                          </p>
                        )}

                        {/* Star Rating */}
                        <div className="flex justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{
                                delay: index * 0.1 + 0.5 + i * 0.1,
                                type: "spring",
                              }}
                            >
                              <Star className="w-4 h-4 fill-red-500 text-red-500 group-hover:fill-white group-hover:text-white transition-colors duration-400" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corners */}
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48] group-hover:border-white z-20"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48] group-hover:border-white z-20"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48] group-hover:border-white z-20"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48] group-hover:border-white z-20"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredTestimonials.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20"
            >
              <div className="bg-white border-2 border-[#011e48] p-12 max-w-md mx-auto">
                <p className="text-gray-500 text-lg mb-4">No testimonials found for the selected filters.</p>
                <motion.button
                  onClick={() => {
                    setSelectedFilter("all");
                    setSelectedType("all");
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
                >
                  Clear Filters
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-gradient-to-br from-[#011e48] to-[#023e73] text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record Speaks for Itself</h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-white mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, number: "5000+", label: "Students Trained" },
              { icon: TrendingUp, number: "95%", label: "Success Rate" },
              { icon: Target, number: "8.0+", label: "Average Band Score" },
              { icon: Award, number: "15+", label: "Years of Excellence" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 mb-4 mx-auto w-fit"
                  >
                    <Icon className="w-12 h-12 mx-auto" />
                  </motion.div>
                  <p className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</p>
                  <p className="text-lg opacity-90">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
              YOUR SUCCESS STORY STARTS HERE
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"
            />
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of successful students who have achieved their dreams
            </p>

            <motion.div whileHover="hover" whileTap="tap">
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-block"
              >
                <Link
                  href="/contact"
                  className="relative group inline-flex items-center space-x-2 px-12 py-4 border-2 border-red-500 overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-red-500"
                  />
                  <span className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400 font-bold text-lg">
                    Book Your Free Demo Class
                  </span>
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-red-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
