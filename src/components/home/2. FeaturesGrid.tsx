"use client";

import { Sunrise, Users, PenTool, BookOpen, FileText, MessageSquare, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const FeaturesGrid = () => {
  const features = [
    {
      icon: Sunrise,
      title: "Early Morning Batch",
      description: "Flexible timings to fit your schedule, starting as early as 6 AM",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: "Small Batch Size",
      description: "Individual attention with maximum 10 students per batch",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: PenTool,
      title: "IELTS Writing Excellence",
      description: "Exclusive coaching focused on mastering the writing module",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: BookOpen,
      title: "Regular Grammar Classes",
      description: "Strong foundation building with dedicated grammar sessions",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: FileText,
      title: "Comprehensive Material",
      description: "Curated practice tests and study materials for all modules",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
    },
    {
      icon: MessageSquare,
      title: "One-on-One Speaking",
      description: "Personalized speaking classes with experienced trainers",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
    },
  ];


  return (
    <section className="py-20 bg-white relative overflow-hidden">
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
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-main-200/10 text-main-200 px-4 py-2 rounded-full mb-6 border border-main-200/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">What Makes Us Special</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-main-400 mb-4"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-main-200 to-main-100 bg-clip-text text-transparent">
              English Scholars
            </span>
            ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-6"
          >
            Experience personalized coaching with industry-leading features designed for your success
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="h-1.5 bg-gradient-to-r from-main-200 via-main-100 to-main-200 mx-auto rounded-full"
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={{
                    hover: { y: -12 },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="relative h-full"
                >
                  {/* Card with glass effect */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    {/* Gradient accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} origin-left`}
                    />

                    {/* Hover background gradient */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      variants={{
                        hover: { opacity: 1, scale: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <motion.div
                        variants={{
                          hover: {
                            scale: 1.1,
                            rotate: [0, -5, 5, -5, 0],
                          },
                        }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 relative inline-block"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-500`} />
                        <div className={`relative bg-gradient-to-br ${feature.color} p-4 rounded-2xl shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-main-400 mb-3 group-hover:text-main-200 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-sm mb-4">
                        {feature.description}
                      </p>

                      {/* Learn more link */}
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        variants={{
                          hover: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-2 text-main-200 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <span>Learn more</span>
                        <motion.div
                          variants={{
                            hover: { x: 4 },
                          }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Decorative corner elements */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      variants={{
                        hover: { scale: 1, rotate: 0 },
                      }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="absolute -top-1 -left-1 w-6 h-6"
                    >
                      <div className={`w-full h-full border-t-2 border-l-2 border-gradient-to-br ${feature.color} rounded-tl-lg`} style={{
                        borderImage: `linear-gradient(135deg, currentColor, transparent) 1`,
                      }} />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      variants={{
                        hover: { scale: 1, rotate: 0 },
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -bottom-1 -right-1 w-6 h-6"
                    >
                      <div className={`w-full h-full border-b-2 border-r-2 border-gradient-to-br ${feature.color} rounded-br-lg`} style={{
                        borderImage: `linear-gradient(135deg, currentColor, transparent) 1`,
                      }} />
                    </motion.div>

                    {/* Number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                      className="absolute top-6 right-6 w-10 h-10 bg-main-400/5 rounded-full flex items-center justify-center group-hover:bg-main-200/10 transition-colors duration-300"
                    >
                      <span className="text-main-400/40 font-bold text-sm group-hover:text-main-200 transition-colors duration-300">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-gray-600 text-lg mb-2">
              Ready to start your IELTS journey with us?
            </p>
            <p className="text-main-400 font-semibold">
              Join thousands of successful students today
            </p>
          </motion.div>

          <motion.div whileHover="hover" whileTap="tap" className="inline-block">
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
                className="relative group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-main-400 to-main-200 text-white font-bold text-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Animated background */}
                <motion.div
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: "0%" },
                  }}
                  transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-gradient-to-r from-main-200 to-main-100"
                />

                {/* Button content */}
                <span className="relative z-10">Get Started Today</span>
                <motion.div
                  variants={{
                    hover: { x: 4 },
                  }}
                  className="relative z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.div>

                {/* Shine effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  variants={{
                    hover: { x: "100%", opacity: [0, 1, 0] },
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
              </Link>

              {/* Decorative Corners */}
              <motion.div
                initial={{ scale: 0 }}
                variants={{
                  hover: { scale: 1 },
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-main-200 rounded-tl-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{
                  hover: { scale: 1 },
                }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-main-200 rounded-tr-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{
                  hover: { scale: 1 },
                }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-main-200 rounded-bl-lg"
              />
              <motion.div
                initial={{ scale: 0 }}
                variants={{
                  hover: { scale: 1 },
                }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-main-200 rounded-br-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
