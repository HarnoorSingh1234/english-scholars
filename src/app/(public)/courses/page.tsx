"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GraduationCap,
  MessageCircle,
  BookOpen,
  Briefcase,
  Check,
  Download,
  Clock,
  Users,
  Calendar,
  Video,
  Sunrise,
  FileText,
  Target,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatPhoneNumber } from "@/lib/mobilenumber";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const courses = [
    {
      id: "ielts",
      icon: GraduationCap,
      badge: "Most Popular",
      title: "IELTS Comprehensive Training",
      tagline: "Your pathway to Band 8.0+",
      duration: "6-8 Weeks",
      format: "Small Batch (Max 10 students)",
      schedule: "Morning/Evening batches available",
      mode: "In-person/Online",
      highlights: [
        "Personalized attention in small batches",
        "All 4 modules: Listening, Reading, Writing, Speaking",
        "Exclusive Writing Module Coaching",
        "20+ Full-length mock tests",
        "One-on-one speaking practice sessions",
        "Regular grammar classes",
        "Comprehensive study material",
        "Daily assignments and feedback",
        "Exam strategies and time management",
        "Score improvement guarantee",
      ],
      syllabus: [
        { week: "Week 1-2", content: "Foundation & Listening Module" },
        { week: "Week 3-4", content: "Reading Module & Speed Techniques" },
        { week: "Week 5-6", content: "Writing Task 1 & Task 2 Mastery" },
        { week: "Week 7-8", content: "Speaking Module & Full Mock Tests" },
      ],
      idealFor: [
        "Students planning to study abroad",
        "Professionals seeking PR/Immigration",
        "First-time IELTS test-takers",
        "Students targeting Band 7.0+",
      ],
      pricing: "₹15,000",
      priceNote: "Includes all materials and tests",
    },
    {
      id: "spoken",
      icon: MessageCircle,
      title: "Spoken English Mastery",
      tagline: "Speak with confidence and fluency",
      duration: "4-6 Weeks",
      format: "Small Batch (8-10 students)",
      schedule: "Flexible timings",
      mode: "In-person/Online",
      highlights: [
        "Focus on fluency and pronunciation",
        "Interactive group discussions",
        "Real-world conversation scenarios",
        "Accent training and intonation",
        "Public speaking confidence building",
        "Vocabulary enhancement",
        "Personality development",
        "Interview preparation",
      ],
      syllabus: [
        { week: "Week 1", content: "Basics of Pronunciation & Fluency" },
        { week: "Week 2", content: "Conversation Skills & Vocabulary" },
        { week: "Week 3-4", content: "Advanced Speaking & Public Speaking" },
        { week: "Week 5-6", content: "Interview Skills & Real-world Practice" },
      ],
      idealFor: [
        "Working professionals",
        "College students",
        "Job seekers",
        "Anyone wanting to improve spoken English",
      ],
      pricing: "₹10,000",
      priceNote: "Includes all practice materials",
    },
    {
      id: "grammar",
      icon: BookOpen,
      title: "English Grammar Foundation",
      tagline: "Build a strong English foundation",
      duration: "4 Weeks",
      format: "Intensive course",
      schedule: "Weekend/Weekday batches",
      mode: "In-person/Online",
      highlights: [
        "From basics to advanced grammar",
        "Tenses mastery",
        "Articles and prepositions",
        "Sentence structure and syntax",
        "Common errors correction",
        "Practice exercises and worksheets",
        "Regular assessments",
        "Doubt clearing sessions",
      ],
      syllabus: [
        { week: "Week 1", content: "Tenses & Basic Grammar Rules" },
        { week: "Week 2", content: "Articles, Prepositions & Conjunctions" },
        { week: "Week 3", content: "Sentence Structure & Active/Passive Voice" },
        { week: "Week 4", content: "Advanced Grammar & Error Correction" },
      ],
      idealFor: [
        "School/College students",
        "IELTS aspirants needing grammar foundation",
        "Anyone wanting to strengthen English basics",
      ],
      pricing: "₹8,000",
      priceNote: "Includes workbooks and exercises",
    },
    {
      id: "business",
      icon: Briefcase,
      title: "Business English Professional",
      tagline: "Excel in corporate communication",
      duration: "6 Weeks",
      format: "Professional batches",
      schedule: "Evening/Weekend slots",
      mode: "In-person/Online",
      highlights: [
        "Corporate communication skills",
        "Professional email writing",
        "Business vocabulary building",
        "Presentation skills",
        "Meeting management",
        "Report and proposal writing",
        "Negotiation language",
        "Cross-cultural communication",
      ],
      syllabus: [
        { week: "Week 1-2", content: "Business Email & Communication Basics" },
        { week: "Week 3-4", content: "Presentations & Meeting Skills" },
        { week: "Week 5-6", content: "Advanced Business Writing & Negotiations" },
      ],
      idealFor: [
        "Working professionals",
        "Business owners",
        "Corporate executives",
        "Entrepreneurs",
      ],
      pricing: "₹12,000",
      priceNote: "Includes case studies and templates",
    },
  ];

  const faqs = [
    {
      question: "What is the batch size for IELTS courses?",
      answer:
        "We maintain small batches of maximum 10 students to ensure personalized attention to each student.",
    },
    {
      question: "Do you provide study material?",
      answer:
        "Yes, comprehensive study material including practice tests, sample answers, and grammar worksheets are provided to all students.",
    },
    {
      question: "Can I attend classes online?",
      answer:
        "Yes, we offer both in-person and online classes. You can choose based on your preference.",
    },
    {
      question: "How many mock tests are included?",
      answer:
        "The IELTS course includes 20+ full-length mock tests along with unlimited sectional practice tests.",
    },
    {
      question: "Is there a demo class available?",
      answer:
        "Yes, we offer a free demo class so you can experience our teaching methodology before enrolling.",
    },
    {
      question: "What is the average band score achieved by students?",
      answer:
        "Our students achieve an average band score of 7.5-8.0 with dedicated preparation.",
    },
    {
      question: "Do you help with exam registration?",
      answer: "Yes, we guide students through the entire IELTS registration process.",
    },
    {
      question: "Are there any flexible payment options?",
      answer:
        "Yes, we offer installment payment options. Please contact us for details.",
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
            <span className="text-white">Courses</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Our Specialized Programs
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
            />
            <p className="text-xl md:text-2xl text-white/80">
              Comprehensive courses designed for your success
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

      {/* Courses Section */}
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
          <div className="space-y-16 max-w-6xl mx-auto">
            {courses.map((course, courseIndex) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: courseIndex * 0.2 }}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={{
                      hover: { scale: 1.01, y: -4 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-[#011e48] p-8 shadow-lg relative overflow-hidden">
                      {/* Subtle background gradient on hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        variants={{
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-br from-[#011e48]/5 to-transparent"
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Course Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                          <div className="flex items-start space-x-4 mb-4 md:mb-0">
                            <motion.div
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                              className="bg-gradient-to-br from-[#011e48] to-[#023e73] p-4"
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <div>
                              <h2 className="text-3xl font-bold text-[#011e48] mb-1">
                                {course.title}
                              </h2>
                              <p className="text-red-500 text-lg">{course.tagline}</p>
                            </div>
                          </div>
                          {course.badge && (
                            <motion.div
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", delay: 0.3 }}
                            >
                              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 text-sm">
                                {course.badge}
                              </Badge>
                            </motion.div>
                          )}
                        </div>

                        {/* Course Details Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-gray-50 border border-[#011e48]/10">
                          {[
                            { icon: Clock, label: "Duration", value: course.duration },
                            { icon: Users, label: "Format", value: course.format },
                            { icon: Calendar, label: "Schedule", value: course.schedule },
                            { icon: Video, label: "Mode", value: course.mode },
                          ].map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start space-x-2"
                            >
                              <detail.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                              <div>
                                <p className="text-xs text-gray-600">{detail.label}</p>
                                <p className="font-semibold text-[#011e48] text-sm">
                                  {detail.value}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Left Column - Main Content */}
                          <div className="lg:col-span-2 space-y-8">
                            {/* Course Highlights */}
                            <div>
                              <h3 className="text-xl font-bold text-[#011e48] mb-4 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Course Highlights
                              </h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {course.highlights.map((highlight, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-start space-x-2"
                                  >
                                    <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700 text-sm">{highlight}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Syllabus Breakdown */}
                            <div>
                              <h3 className="text-xl font-bold text-[#011e48] mb-4 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Syllabus Breakdown
                              </h3>
                              <div className="space-y-3">
                                {course.syllabus.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start space-x-3 p-4 bg-white border-l-4 border-red-500 shadow-sm"
                                  >
                                    <div className="bg-[#011e48] text-white font-bold px-3 py-1 text-sm flex-shrink-0">
                                      {idx + 1}
                                    </div>
                                    <div>
                                      <p className="font-semibold text-[#011e48]">{item.week}</p>
                                      <p className="text-gray-700 text-sm">{item.content}</p>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            {/* Ideal For */}
                            <div>
                              <h3 className="text-xl font-bold text-[#011e48] mb-4 flex items-center">
                                <span className="w-1 h-6 bg-red-500 mr-3"></span>
                                Ideal For
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {course.idealFor.map((item, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <Badge
                                      variant="outline"
                                      className="border-[#011e48] text-[#011e48] px-4 py-2 hover:bg-[#011e48] hover:text-white transition-colors"
                                    >
                                      {item}
                                    </Badge>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right Column - Pricing & CTA */}
                          <div className="lg:col-span-1">
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 }}
                              whileHover="hoverCard"
                              className="relative group/price"
                            >
                              <motion.div
                                variants={{
                                  hoverCard: { scale: 1.02 },
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                className="relative"
                              >
                                <div className="bg-gradient-to-br from-[#011e48] to-[#023e73] border-2 border-[#011e48] p-6 text-white sticky top-24 overflow-hidden">
                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    variants={{
                                      hoverCard: { opacity: 1 },
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"
                                  />

                                  <div className="relative z-10">
                                    <div className="text-center mb-6">
                                      <p className="text-sm opacity-90 mb-2">Course Fee</p>
                                      <p className="text-5xl font-bold mb-1">{course.pricing}</p>
                                      <p className="text-sm opacity-75">{course.priceNote}</p>
                                    </div>

                                    <div className="space-y-3">
                                      <motion.div whileHover="hover" whileTap="tap">
                                        <motion.div
                                          variants={{
                                            hover: { scale: 1.05 },
                                            tap: { scale: 0.95 },
                                          }}
                                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                          className="relative"
                                        >
                                          <Link
                                            href="/contact"
                                            className="relative group/btn w-full inline-flex items-center justify-center space-x-2 px-6 py-4 border-2 border-white overflow-hidden"
                                          >
                                            <motion.div
                                              initial={{ x: "-100%" }}
                                              variants={{ hover: { x: "0%" } }}
                                              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                                              className="absolute inset-0 bg-white"
                                            />
                                            <span className="relative z-10 text-white group-hover/btn:text-[#011e48] transition-colors duration-400 font-bold">
                                              Enroll Now
                                            </span>
                                            <motion.span
                                              variants={{ hover: { x: 4 } }}
                                              className="relative z-10 text-white group-hover/btn:text-[#011e48] transition-colors duration-400"
                                            >
                                              <ChevronRight className="w-5 h-5" />
                                            </motion.span>
                                          </Link>

                                          {/* Decorative Corners */}
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            variants={{ hover: { scale: 1 } }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                            className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-white"
                                          />
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            variants={{ hover: { scale: 1 } }}
                                            transition={{ duration: 0.3, delay: 0.15 }}
                                            className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-white"
                                          />
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            variants={{ hover: { scale: 1 } }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                            className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-white"
                                          />
                                          <motion.div
                                            initial={{ scale: 0 }}
                                            variants={{ hover: { scale: 1 } }}
                                            transition={{ duration: 0.3, delay: 0.25 }}
                                            className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-white"
                                          />
                                        </motion.div>
                                      </motion.div>

                                      <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full border-2 border-white/50 text-white hover:bg-white/10 py-4 transition-colors flex items-center justify-center space-x-2"
                                      >
                                        <Download className="w-4 h-4" />
                                        <span>Download Syllabus</span>
                                      </motion.button>

                                      <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full border-2 border-white/50 text-white hover:bg-white/10 py-4 transition-colors"
                                      >
                                        Book Free Demo Class
                                      </motion.button>
                                    </div>
                                  </div>
                                </div>

                                {/* Decorative Corners */}
                                <motion.div
                                  initial={{ scale: 0 }}
                                  variants={{ hoverCard: { scale: 1 } }}
                                  transition={{ duration: 0.3, delay: 0.05 }}
                                  className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#011e48]"
                                />
                                <motion.div
                                  initial={{ scale: 0 }}
                                  variants={{ hoverCard: { scale: 1 } }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                  className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#011e48]"
                                />
                                <motion.div
                                  initial={{ scale: 0 }}
                                  variants={{ hoverCard: { scale: 1 } }}
                                  transition={{ duration: 0.3, delay: 0.15 }}
                                  className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#011e48]"
                                />
                                <motion.div
                                  initial={{ scale: 0 }}
                                  variants={{ hoverCard: { scale: 1 } }}
                                  transition={{ duration: 0.3, delay: 0.2 }}
                                  className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#011e48]"
                                />
                              </motion.div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Decorative Corners */}
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#011e48]"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#011e48]"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#011e48]"
                    />
                    <motion.div
                      initial={{ scale: 0 }}
                      variants={{ hover: { scale: 1 } }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#011e48]"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Features Bar */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            {[
              { icon: Users, text: "Small Batch Size" },
              { icon: Sunrise, text: "Early Morning Batches" },
              { icon: Clock, text: "Flexible Timings" },
              { icon: FileText, text: "Free Study Material" },
              { icon: Target, text: "Mock Tests Included" },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex items-center space-x-2 bg-gray-50 px-6 py-3 border border-[#011e48]/10"
              >
                <feature.icon className="w-6 h-6 text-red-500" />
                <span className="text-[#011e48] font-semibold">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-br from-[#011e48] to-[#023e73] relative overflow-hidden">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful students at English Scholars
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-red-500 overflow-hidden"
                  >
                    <motion.div
                      initial={{ x: "-100%" }}
                      variants={{ hover: { x: "0%" } }}
                      transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                      className="absolute inset-0 bg-red-500"
                    />
                    <span className="relative z-10 text-red-500 group-hover:text-white transition-colors duration-400 font-bold text-lg">
                      Book Your Free Demo Class Today
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

              <motion.a
                href={`tel:${process.env.NEXT_PUBLIC_MOBILE_NUMBER}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/50 hover:bg-white/10 font-bold text-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call: {formatPhoneNumber(process.env.NEXT_PUBLIC_MOBILE_NUMBER)}</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
