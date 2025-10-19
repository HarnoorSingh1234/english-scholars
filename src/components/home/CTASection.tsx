"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Phone, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - For now just log
    console.log("Form submitted:", formData);
    // Show success toast
    toast.success("Demo class booking request received! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", course: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-main-400 via-main-400 to-main-200 relative overflow-hidden">
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
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              YOUR JOURNEY TO SUCCESS STARTS WHEN YOU JOIN ENGLISH SCHOLARS !!!
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="h-1 bg-white mx-auto rounded-full mb-4"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 opacity-90"
          >
            Book your FREE demo class today and experience the English Scholars difference
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
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
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white text-main-400 px-4 py-6 rounded-lg border-2 border-transparent focus:border-main-200 transition-all duration-300 placeholder:text-gray-400"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white text-main-400 px-4 py-6 rounded-lg border-2 border-transparent focus:border-main-200 transition-all duration-300 placeholder:text-gray-400"
                />
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
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white text-main-400 px-4 py-6 rounded-lg border-2 border-transparent focus:border-main-200 transition-all duration-300 placeholder:text-gray-400"
                />
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full bg-white text-main-400 px-4 py-3 rounded-lg border-2 border-transparent outline-none focus:border-main-200 transition-all duration-300 h-[52px]"
                >
                  <option value="">Select Preferred Course *</option>
                  <option value="ielts">IELTS Comprehensive Training</option>
                  <option value="spoken">Spoken English Mastery</option>
                  <option value="grammar">English Grammar Foundation</option>
                  <option value="business">Business English Professional</option>
                  <option value="unsure">Not Sure (Need Guidance)</option>
                </select>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-block w-full md:w-auto"
              >
                <button
                  type="submit"
                  className="relative group w-full md:w-auto inline-flex items-center justify-center space-x-2 px-12 py-4 border-2 border-main-200 overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-main-200"
                  />
                  <span className="relative z-10 text-main-200 group-hover:text-white transition-colors duration-400 font-bold text-lg">
                    Book Free Demo Class
                  </span>
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    className="relative z-10 text-main-200 group-hover:text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </button>

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
          </motion.form>

          {/* Alternative Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 pt-8 border-t border-white/20"
          >
            <p className="text-lg mb-3">Or call us directly:</p>
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center space-x-3 text-2xl md:text-3xl font-bold hover:text-main-300 transition-colors group"
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
                +91-98765-43210
                <motion.span
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-main-300"
                />
              </span>
            </motion.a>
            <p className="text-sm mt-2 opacity-75">Available Mon-Sat, 9 AM - 7 PM</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
