"use client";

import { Sunrise, Users, PenTool, BookOpen, FileText, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Sunrise,
      title: "Early Morning Batch",
      description: "Flexible timings to fit your schedule, starting as early as 6 AM",
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Individual attention with maximum 10 students per batch",
    },
    {
      icon: PenTool,
      title: "IELTS Writing Excellence",
      description: "Exclusive coaching focused on mastering the writing module",
    },
    {
      icon: BookOpen,
      title: "Regular Grammar Classes",
      description: "Strong foundation building with dedicated grammar sessions",
    },
    {
      icon: FileText,
      title: "Comprehensive Material",
      description: "Curated practice tests and study materials for all modules",
    },
    {
      icon: MessageSquare,
      title: "One-on-One Speaking",
      description: "Personalized speaking classes with experienced trainers",
    },
  ];

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  // Card animation variants
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#011e48] mb-3"
          >
            Why Choose English Scholars
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-[#011e48] mx-auto mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-base max-w-2xl mx-auto"
          >
            Six key features that set us apart in IELTS coaching excellence
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative h-full"
              >
                {/* Card Container */}
                <motion.div
                  variants={{
                    hover: { y: -8 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="relative"
                >
                  {/* Main Card */}
                  <div className="relative bg-white p-8 border-2 border-[#011e48] overflow-hidden shadow-sm h-full">
                    {/* Background Fill Animation */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      variants={{
                        hover: { x: "0%" },
                      }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute inset-0 bg-[#011e48]"
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        variants={{
                          hover: {
                            scale: 1.1,
                            rotate: [0, -5, 5, -5, 0],
                          },
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-14 h-14 bg-[#011e48] group-hover:bg-white rounded-lg flex items-center justify-center mb-6 relative overflow-hidden"
                      >
                        {/* Icon background pulse */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          variants={{
                            hover: {
                              scale: 2,
                              opacity: 0.2,
                            },
                          }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-red-500"
                        />
                        <Icon className="w-7 h-7 text-white group-hover:text-[#011e48] transition-colors duration-400 relative z-10" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#011e48] mb-3 group-hover:text-white transition-colors duration-400">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-400">
                        {feature.description}
                      </p>

                      {/* Number indicator */}
                      <motion.div
                        initial={{ opacity: 0.05 }}
                        variants={{
                          hover: { opacity: 0.1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-4 right-6 text-6xl font-bold text-[#011e48] group-hover:text-white transition-colors duration-400"
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </motion.div>
                    </div>
                  </div>

                  {/* Decorative Corners */}
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48]"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8 text-sm">
            Ready to start your IELTS journey with personalized coaching?
          </p>

          <motion.div whileHover="hover" whileTap="tap">
            <motion.a
              href="/contact"
              variants={{
                hover: { scale: 1.05 },
                tap: { scale: 0.98 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative inline-block group"
            >
              <motion.div className="relative">
                {/* Main Button */}
                <div className="relative px-8 py-4 border-2 border-[#011e48] overflow-hidden">
                  {/* Background Fill Animation */}
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{
                      hover: { x: "0%" },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute inset-0 bg-[#011e48]"
                  />

                  {/* Button Text */}
                  <span className="relative font-semibold text-base tracking-wider uppercase text-[#011e48] group-hover:text-white transition-colors duration-400">
                    Get Started Today
                  </span>

                  {/* Arrow Icon */}
                  <motion.span
                    variants={{
                      hover: { x: 4 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative ml-2 inline-block text-[#011e48] group-hover:text-white transition-colors duration-400"
                  >
                    →
                  </motion.span>
                </div>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48]"
                />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
