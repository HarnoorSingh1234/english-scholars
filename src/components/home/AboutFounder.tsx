"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutFounder = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-main-400/10 relative group">
                {/* Full Founder Image */}
                <Image
                  src="/founder.png"
                  alt="Mr. Gurdit Singh Grover - Founder & Head Trainer"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-main-400/70 via-main-400/30 to-transparent z-10"
                />
                
                {/* Text overlay on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white"
                >
                  <p className="text-lg font-semibold">Mr. Gurdit Singh Grover</p>
                  <p className="text-sm opacity-90">Founder & Head Trainer</p>
                </motion.div>
              </div>

              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-main-200" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-main-200" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-main-200" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-main-200" />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-main-300 rounded-2xl -z-10"
            />

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-center"
            >
              <p className="text-lg font-semibold text-main-400">
                Mr. Gurdit Singh Grover
              </p>
              <p className="text-main-500">Founder & Head Trainer</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-main-400 mb-6">
                Meet Our Visionary Founder
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="h-1 bg-gradient-to-r from-main-200 to-main-100 rounded-full mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <p>
                <strong>ENGLISH SCHOLARS</strong> has been providing personalized coaching to
                students for improving their level of English. The institute is the brainchild of{" "}
                <strong>Mr. Gurdit Singh Grover</strong> and has been functioning under his able
                guidance, supervision and active participation for over 15 years.
              </p>

              <p>
                Our endeavor is to provide the highest level of English education to produce
                &apos;Scholars of English&apos; globally. With a result-oriented approach, we cater
                to the needs of students for <strong>SPOKEN ENGLISH, IELTS, ENGLISH GRAMMAR</strong>{" "}
                and <strong>BUSINESS ENGLISH</strong>.
              </p>

          
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover="hover"
              whileTap="tap"
              className="mt-6"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-block"
              >
                <Link
                  href="/about"
                  className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-main-200 overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-main-200"
                  />
                  <span className="relative z-10 text-main-200 group-hover:text-white transition-colors duration-400 font-semibold">
                    Learn More About Us
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
