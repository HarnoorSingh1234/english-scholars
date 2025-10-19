"use client";

import Link from "next/link";
import { GraduationCap, MessageCircle, BookOpen, Briefcase, Check, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const CoursesOverview = () => {
  const courses = [
    {
      icon: GraduationCap,
      title: "IELTS Comprehensive Training",
      modules: "Listening • Reading • Writing • Speaking",
      duration: "6-8 Weeks",
      features: [
        "Personal attention in small batches",
        "Exclusive writing module coaching",
        "Regular mock tests",
        "Speaking practice sessions",
      ],
      badge: "Most Popular",
    },
    {
      icon: MessageCircle,
      title: "Spoken English Mastery",
      modules: "Fluency • Pronunciation • Confidence",
      duration: "4-6 Weeks",
      features: [
        "Interactive group discussions",
        "Real-world conversation practice",
        "Accent training",
        "Public speaking skills",
      ],
    },
    {
      icon: BookOpen,
      title: "English Grammar Foundation",
      modules: "Tenses • Articles • Sentence Structure",
      duration: "4 Weeks",
      features: [
        "From basics to advanced concepts",
        "Practice exercises and worksheets",
        "Regular assessments",
        "Doubt clearing sessions",
      ],
    },
    {
      icon: Briefcase,
      title: "Business English Professional",
      modules: "Corporate Communication • Email Etiquette",
      duration: "6 Weeks",
      features: [
        "Professional vocabulary building",
        "Presentation skills",
        "Meeting management",
        "Report writing",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-main-400 via-main-400 to-main-100 relative overflow-hidden">
      {/* Subtle background pattern */}
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
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Specialized Programs
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="h-1 bg-main-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
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
                  className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-8 relative overflow-hidden h-full"
                >
                  {/* Badge */}
                  {course.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute top-4 right-4 bg-main-200 text-white text-xs font-semibold px-3 py-1 rounded-full z-10"
                    >
                      {course.badge}
                    </motion.div>
                  )}

                  {/* Top border accent */}
                  <motion.div
                    initial={{ width: "0%" }}
                    variants={{
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-main-200 to-main-500"
                  />

                  {/* Icon */}
                  <motion.div
                    variants={{
                      hover: {
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="bg-main-500 w-16 h-16 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      variants={{
                        hover: {
                          scale: 1.5,
                          opacity: 0.2,
                        },
                      }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-white rounded-full"
                    />
                    <Icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-main-300 transition-colors duration-300">
                    {course.title}
                  </h3>

                  {/* Modules */}
                  <p className="text-main-300 text-sm mb-3">{course.modules}</p>

                  {/* Duration */}
                  <p className="text-main-500 font-semibold mb-4">
                    Duration: {course.duration}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <Check className="w-5 h-5 text-main-300 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.div whileHover="buttonHover" whileTap="buttonTap">
                    <motion.div
                      variants={{
                        buttonHover: { scale: 1.05 },
                        buttonTap: { scale: 0.98 },
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative"
                    >
                      <Link
                        href="/courses"
                        className="relative group/btn w-full flex items-center justify-center px-6 py-3 border-2 border-main-500 overflow-hidden"
                      >
                        <motion.div
                          initial={{ x: "-100%" }}
                          variants={{
                            buttonHover: { x: "0%" },
                          }}
                          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                          className="absolute inset-0 bg-white"
                        />
                        <span className="relative z-10 text-white group-hover/btn:text-main-400 transition-colors duration-400 font-semibold">
                          Enroll Now
                        </span>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Decorative corners */}
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/50"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/50"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white/50"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/50"
                  />

                  {/* Decorative Element */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 0.1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full"
                  />

                  {/* Number indicator */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 0.05 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 right-4 text-6xl font-bold text-white"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Courses Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
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
                href="/courses"
                className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-white overflow-hidden"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  variants={{ hover: { x: "0%" } }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-white"
                />
                <span className="relative z-10 text-white group-hover:text-main-400 transition-colors duration-400 font-semibold">
                  View All Courses Details
                </span>
                <motion.span
                  variants={{ hover: { x: 4 } }}
                  className="relative z-10 text-white group-hover:text-main-400 transition-colors duration-400"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.span>
              </Link>

              {/* Decorative Corners */}
              <motion.div
                initial={{ scale: 0 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-white"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-white"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-white"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-white"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesOverview;
