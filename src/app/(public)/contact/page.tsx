"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Download,
  Calendar,
  FileText,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/mobilenumber";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    time: "",
    level: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Demo class booking request received! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      time: "",
      level: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "You can enroll by filling the form on this page, calling us, or visiting our institute directly. Our admission counselors will guide you through the process.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "Yes, a nominal registration fee of ₹1,000 is charged at enrollment, which is adjustable against the course fee.",
    },
    {
      question: "What documents do I need for enrollment?",
      answer:
        "You need a government-issued ID proof (Aadhar Card/Passport) and 2 passport-size photographs.",
    },
    {
      question: "Can I switch batches after enrollment?",
      answer:
        "Yes, you can switch batches subject to availability in your desired batch. Please inform us at least 24 hours in advance.",
    },
    {
      question: "What is your refund policy?",
      answer:
        "Refund requests are processed if submitted within 7 days of enrollment with valid reasons. Registration fees are non-refundable.",
    },
    {
      question: "Do you provide course completion certificates?",
      answer:
        "Yes, all students receive a certificate upon successful course completion, which includes attendance and performance records.",
    },
  ];

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
            <span className="text-white">Contact Us</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Get In Touch With Us
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
            />
            <p className="text-xl md:text-2xl text-white/80">
              Start your journey to English excellence today
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

      {/* Contact Form + Info */}
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#011e48] mb-2">
                Book Your Free Demo Class
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <label className="block text-sm font-semibold text-[#011e48] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {focusedField === "name" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500 pointer-events-none"
                        />
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative group"
                >
                  <label className="block text-sm font-semibold text-[#011e48] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {focusedField === "email" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500 pointer-events-none"
                        />
                      </>
                    )}
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative group"
                >
                  <label className="block text-sm font-semibold text-[#011e48] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+91-XXXXXXXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    {focusedField === "phone" && (
                      <>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.05 }}
                          className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-red-500 pointer-events-none"
                        />
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.15 }}
                          className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-red-500 pointer-events-none"
                        />
                      </>
                    )}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Course */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-[#011e48] mb-2">
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("course")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 outline-none"
                    >
                      <option value="">Select a course</option>
                      <option value="ielts">IELTS Comprehensive Training</option>
                      <option value="spoken">Spoken English Mastery</option>
                      <option value="grammar">English Grammar Foundation</option>
                      <option value="business">Business English Professional</option>
                      <option value="unsure">Not Sure (Need Guidance)</option>
                    </select>
                  </motion.div>

                  {/* Preferred Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-[#011e48] mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 outline-none"
                    >
                      <option value="">Select time</option>
                      <option value="morning">Morning (6-10 AM)</option>
                      <option value="midday">Mid-day (10 AM-2 PM)</option>
                      <option value="evening">Evening (4-8 PM)</option>
                      <option value="weekend">Weekend</option>
                    </select>
                  </motion.div>
                </div>

                {/* Current Level */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label className="block text-sm font-semibold text-[#011e48] mb-2">
                    Current English Level <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    {["beginner", "intermediate", "advanced"].map((level) => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="level"
                          value={level}
                          checked={formData.level === level}
                          onChange={handleChange}
                          required
                          className="w-4 h-4 text-red-500 accent-red-500"
                        />
                        <span className="capitalize">{level}</span>
                      </label>
                    ))}
                  </div>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label className="block text-sm font-semibold text-[#011e48] mb-2">
                    Message/Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Any specific questions or requirements?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-2 border-[#011e48]/30 focus:border-red-500 rounded-none px-4 py-3 outline-none resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    variants={{
                      hover: { scale: 1.02 },
                      tap: { scale: 0.98 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <button
                      type="submit"
                      className="relative group w-full inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-red-500 overflow-hidden"
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
              </form>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Details */}
              <motion.div
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.02, y: -4 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative"
                >
                  <div className="bg-white border-2 border-[#011e48] p-6 shadow-sm relative overflow-hidden">
                    {/* Background Fill */}
                    <motion.div
                      initial={{ y: "100%" }}
                      variants={{
                        hover: { y: "0%" },
                      }}
                      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute inset-0 bg-gradient-to-br from-[#011e48] to-[#023e73]"
                    />

                    <div className="relative z-10">
                      <h3 className="font-bold text-[#011e48] group-hover:text-white transition-colors duration-400 mb-4 text-lg">
                        Contact Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-400">
                              123 Education Street
                              <br />
                              City, State - 123456
                              <br />
                              India
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-400 flex-shrink-0 mt-1" />
                          <div>
                            <a
                              href={`tel:${process.env.NEXT_PUBLIC_MOBILE_NUMBER}`}
                              className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-400"
                            >
                              {formatPhoneNumber(process.env.NEXT_PUBLIC_MOBILE_NUMBER)}
                            </a>
                            <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-400">
                              Available: Mon-Sat, 9 AM - 7 PM
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Mail className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-400 flex-shrink-0 mt-1" />
                          <a
                            href="mailto:info@english-scholars.com"
                            className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-400"
                          >
                            info@english-scholars.com
                          </a>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-400 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-400">
                              Monday - Saturday
                              <br />
                              9:00 AM - 7:00 PM
                            </p>
                            <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-400 mt-1">
                              Sunday: Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corners */}
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48]"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48]"
                  />
                </motion.div>
              </motion.div>

              {/* Social Media */}
              <div className="bg-white border-2 border-[#011e48] p-6 shadow-sm">
                <h3 className="font-bold text-[#011e48] mb-4 text-lg">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Facebook, href: "#", color: "bg-[#1877F2]" },
                    { icon: Instagram, href: "#", color: "bg-[#E4405F]" },
                    { icon: Linkedin, href: "#", color: "bg-[#0077B5]" },
                    { icon: Youtube, href: "#", color: "bg-[#FF0000]" },
                    { icon: MessageCircle, href: "https://wa.me/919876543210", color: "bg-[#25D366]" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${social.color} text-white p-3 shadow-md transition-shadow hover:shadow-lg`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white border-2 border-[#011e48] p-6 shadow-sm">
                <h3 className="font-bold text-[#011e48] mb-4 text-lg">Quick Links</h3>
                <div className="space-y-3">
                  {[
                    { icon: Download, text: "Download Course Brochure" },
                    { icon: FileText, text: "View Fee Structure" },
                    { icon: Calendar, text: "Batch Schedule" },
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-2 text-sm text-gray-700 hover:text-red-500 transition-colors group"
                    >
                      <link.icon className="w-4 h-4 group-hover:text-red-500" />
                      <span>{link.text}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
              Visit Our Institute
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative group"
          >
            <div className="w-full h-[500px] border-2 border-[#011e48] overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.964032049385!2d74.83888257561725!3d31.662203774149408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965d2dd9f4517%3A0x5753b1d04539818f!2sEnglish%20Scholars!5e0!3m2!1sen!2sin!4v1760900787512!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="English Scholars Location"
              />
            </div>

            {/* Decorative Corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#011e48]" />
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#011e48]" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#011e48]" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#011e48]" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
                Frequently Asked Questions
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
              />
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-2 border-[#011e48]/20 px-6 bg-white hover:border-red-500 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold text-[#011e48] hover:text-red-500 hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
