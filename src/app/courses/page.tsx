"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
      <section className="bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[var(--color-main-300)] hover:text-white">
              Home
            </Link>
            <span className="text-[var(--color-main-300)] mx-2">›</span>
            <span className="text-white">Courses</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Specialized Programs
          </h1>
          <p className="text-xl text-white/90">
            Comprehensive courses designed for your success
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  id={course.id}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Course Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      <div className="bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] p-4 rounded-xl">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-[var(--color-main-400)] mb-1">
                          {course.title}
                        </h2>
                        <p className="text-[var(--color-main-500)] text-lg">{course.tagline}</p>
                      </div>
                    </div>
                    {course.badge && (
                      <Badge className="bg-[var(--color-main-200)] text-white px-4 py-2 text-sm">
                        {course.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Course Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-6 bg-[var(--color-main-300)] rounded-xl">
                    <div className="flex items-start space-x-2">
                      <Clock className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600">Duration</p>
                        <p className="font-semibold text-[var(--color-main-400)]">{course.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Users className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600">Format</p>
                        <p className="font-semibold text-[var(--color-main-400)] text-sm">{course.format}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600">Schedule</p>
                        <p className="font-semibold text-[var(--color-main-400)] text-sm">{course.schedule}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Video className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-600">Mode</p>
                        <p className="font-semibold text-[var(--color-main-400)]">{course.mode}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Course Highlights */}
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-4">
                          Course Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Syllabus Breakdown */}
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-4">
                          Syllabus Breakdown
                        </h3>
                        <div className="space-y-3">
                          {course.syllabus.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                            >
                              <div className="bg-[var(--color-main-500)] text-white font-bold px-3 py-1 rounded text-sm flex-shrink-0">
                                {idx + 1}
                              </div>
                              <div>
                                <p className="font-semibold text-[var(--color-main-400)]">
                                  {item.week}
                                </p>
                                <p className="text-gray-700 text-sm">{item.content}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div>
                        <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-4">
                          Ideal For
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {course.idealFor.map((item, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="border-[var(--color-main-500)] text-[var(--color-main-400)] px-4 py-2"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Pricing & CTA */}
                    <div className="lg:col-span-1">
                      <div className="bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] rounded-xl p-6 text-white sticky top-24">
                        <div className="text-center mb-6">
                          <p className="text-sm opacity-90 mb-2">Course Fee</p>
                          <p className="text-4xl font-bold mb-1">{course.pricing}</p>
                          <p className="text-sm opacity-75">{course.priceNote}</p>
                        </div>

                        <div className="space-y-3">
                          <Button
                            asChild
                            className="w-full bg-white text-[var(--color-main-400)] hover:bg-[var(--color-main-300)] font-semibold py-6"
                          >
                            <Link href="/contact">Enroll Now</Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-2 border-white text-white hover:bg-white/10 py-6"
                          >
                            <Link href="/contact">
                              <Download className="w-4 h-4 mr-2" />
                              Download Syllabus
                            </Link>
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="w-full border-2 border-white text-white hover:bg-white/10 py-6"
                          >
                            <Link href="/contact">Book Free Demo Class</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Features Bar */}
      <section className="py-8 bg-[var(--color-main-300)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Users className="w-6 h-6 text-[var(--color-main-500)]" />
              <span className="text-[var(--color-main-400)] font-semibold">Small Batch Size</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sunrise className="w-6 h-6 text-[var(--color-main-500)]" />
              <span className="text-[var(--color-main-400)] font-semibold">Early Morning Batches</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-[var(--color-main-500)]" />
              <span className="text-[var(--color-main-400)] font-semibold">Flexible Timings</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="w-6 h-6 text-[var(--color-main-500)]" />
              <span className="text-[var(--color-main-400)] font-semibold">Free Study Material</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-[var(--color-main-500)]" />
              <span className="text-[var(--color-main-400)] font-semibold">Mock Tests Included</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-[var(--color-main-500)] mx-auto rounded-full"></div>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-[var(--color-main-400)] hover:text-[var(--color-main-500)] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-200)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students at English Scholars
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[var(--color-main-400)] hover:bg-[var(--color-main-300)] font-semibold px-8 py-6 text-lg"
            >
              <Link href="/contact">Book Your Free Demo Class Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5 mr-2" />
                Call: +91-98765-43210
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
