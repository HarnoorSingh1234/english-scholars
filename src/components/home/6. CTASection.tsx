"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/mobilenumber";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Show success toast
    toast.success("Demo class booking request received! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#011e48] via-[#011e48] to-[#023e73] relative overflow-hidden">
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

      {/* Animated floating elements */}
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
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-red-500/10 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-red-500/10 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="text-center text-white mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              Your Journey to Success Starts Here
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-4"
            />
            <p className="text-lg md:text-xl opacity-90">
              Book your FREE demo class today and experience the English Scholars difference
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Form Container with decorative corners */}
            <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/20 p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.4,
                      },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Name Input */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="relative group"
                  >
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-white text-[#011e48] px-4 py-6 rounded-none border-2 border-white/30 focus:border-red-500 transition-all duration-300 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {/* Decorative corners on focus */}
                    {focusedField === "name" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Email Input */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="relative group"
                  >
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-white text-[#011e48] px-4 py-6 rounded-none border-2 border-white/30 focus:border-red-500 transition-all duration-300 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {focusedField === "email" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"
                        />
                      </>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {/* Phone Input */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="relative group"
                  >
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="bg-white text-[#011e48] px-4 py-6 rounded-none border-2 border-white/30 focus:border-red-500 transition-all duration-300 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {focusedField === "phone" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"
                        />
                      </>
                    )}
                  </motion.div>

                  {/* Course Select */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="relative group"
                  >
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("course")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white text-[#011e48] px-4 py-3 rounded-none border-2 border-white/30 focus:border-red-500 outline-none transition-all duration-300 h-[52px]"
                    >
                      <option value="">Select Preferred Course *</option>
                      <option value="ielts">IELTS Comprehensive Training</option>
                      <option value="spoken">Spoken English Mastery</option>
                      <option value="grammar">English Grammar Foundation</option>
                      <option value="business">Business English Professional</option>
                      <option value="unsure">Not Sure (Need Guidance)</option>
                    </select>
                    {focusedField === "course" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500"
                        />
                      </>
                    )}
                  </motion.div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center pt-2"
                >
                  <motion.div whileHover="hover" whileTap="tap">
                    <motion.div
                      variants={{
                        hover: { scale: 1.05 },
                        tap: { scale: 0.98 },
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="relative"
                    >
                      <button
                        type="submit"
                        className="relative group inline-flex items-center space-x-2 px-12 py-4 border-2 border-red-500 overflow-hidden"
                      >
                        <motion.div
                          initial={{ x: "-100%" }}
                          variants={{ hover: { x: "0%" } }}
                          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                          className="absolute inset-0 bg-red-500"
                        />
                        <span className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400 font-bold text-lg">
                          Book Free Demo Class
                        </span>
                        <motion.span
                          variants={{ hover: { x: 4 } }}
                          className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.span>
                      </button>

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
              </form>

              {/* Form Card Decorative Corners */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-white/40" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white/40" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-white/40" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-white/40" />
            </div>
          </motion.div>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center text-white"
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/20 px-8 py-6 relative">
              <p className="text-lg mb-3 opacity-90">Or call us directly:</p>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 text-2xl md:text-3xl font-bold hover:text-red-400 transition-colors group"
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 15, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Phone className="w-8 h-8" />
                </motion.div>
                <span className="relative">
                  {formatPhoneNumber(process.env.NEXT_PUBLIC_MOBILE_NUMBER)}
                  <motion.span
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-red-500"
                  />
                </span>
              </motion.a>
              <p className="text-sm mt-3 opacity-75">Available Mon-Sat, 9 AM - 7 PM</p>

              {/* Decorative corners for contact box */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-white/50" />
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/50" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white/50" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-white/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
