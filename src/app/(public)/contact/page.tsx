"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
} from "lucide-react";
import { toast } from "sonner";
import { formatPhoneNumber } from "@/lib/mobilenumber";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
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
        "You can enroll by filling the form on this page, calling us at {process.env.NEXT_PUBLIC_MOBILE_NUMBER}, or visiting our institute directly. Our admission counselors will guide you through the process.",
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
      <section className="bg-[var(--color-main-400)] py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[var(--color-main-300)] hover:text-white">
              Home
            </Link>
            <span className="text-[var(--color-main-300)] mx-2">›</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-xl text-white/90">
            Start your journey to English excellence today
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
            {/* Left Column - Form (60%) */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-main-400)] mb-6">
                Book Your Free Demo Class
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+91-XXXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3"
                  />
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Course Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3 outline-none"
                  >
                    <option value="">Select a course</option>
                    <option value="ielts">IELTS Comprehensive Training</option>
                    <option value="spoken">Spoken English Mastery</option>
                    <option value="grammar">English Grammar Foundation</option>
                    <option value="business">Business English Professional</option>
                    <option value="unsure">Not Sure (Need Guidance)</option>
                  </select>
                </div>

                {/* Preferred Time */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Preferred Time for Demo <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3 outline-none"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (6-10 AM)</option>
                    <option value="midday">Mid-day (10 AM-2 PM)</option>
                    <option value="evening">Evening (4-8 PM)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>

                {/* Current Level */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Current English Level <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="level"
                        value="beginner"
                        checked={formData.level === "beginner"}
                        onChange={handleChange}
                        required
                        className="w-4 h-4 text-[var(--color-main-500)]"
                      />
                      <span>Beginner</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="level"
                        value="intermediate"
                        checked={formData.level === "intermediate"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--color-main-500)]"
                      />
                      <span>Intermediate</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="level"
                        value="advanced"
                        checked={formData.level === "advanced"}
                        onChange={handleChange}
                        className="w-4 h-4 text-[var(--color-main-500)]"
                      />
                      <span>Advanced</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[var(--color-main-400)] mb-2">
                    Message/Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    placeholder="Any specific questions or requirements?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border-2 border-[var(--color-main-500)]/30 focus:border-[var(--color-main-500)] rounded-lg px-4 py-3 outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[var(--color-main-200)] hover:bg-[var(--color-main-100)] text-white font-bold py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-md"
                >
                  Book Free Demo Class
                </Button>
              </form>
            </div>

            {/* Right Column - Contact Info (40%) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[var(--color-main-400)] mb-4 text-lg">
                  Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-700">
                        123 Education Street<br />
                        City, State - 123456<br />
                        India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-1" />
                    <div>
                      <a
                        href="tel:+919876543210"
                        className="text-sm text-gray-700 hover:text-[var(--color-main-500)]"
                      >
                        {formatPhoneNumber(process.env.NEXT_PUBLIC_MOBILE_NUMBER)}
                      </a>
                      <p className="text-xs text-gray-500">Available: Mon-Sat, 9 AM - 7 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-1" />
                    <a
                      href="mailto:info@english-scholars.com"
                      className="text-sm text-gray-700 hover:text-[var(--color-main-500)]"
                    >
                      info@english-scholars.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-[var(--color-main-500)] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm text-gray-700">
                        Monday - Saturday<br />
                        9:00 AM - 7:00 PM
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[var(--color-main-400)] mb-4 text-lg">
                  Connect With Us
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-400)] text-white p-3 rounded-full transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-400)] text-white p-3 rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-400)] text-white p-3 rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[var(--color-main-500)] hover:bg-[var(--color-main-400)] text-white p-3 rounded-full transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold text-[var(--color-main-400)] mb-4 text-lg">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[var(--color-main-500)] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Course Brochure</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[var(--color-main-500)] transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Fee Structure</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[var(--color-main-500)] transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Batch Schedule</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-main-300 py-0">
        <div className="container mx-auto px-4">
          <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.964032049385!2d74.83888257561725!3d31.662203774149408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391965d2dd9f4517%3A0x5753b1d04539818f!2sEnglish%20Scholars!5e0!3m2!1sen!2sin!4v1760900787512!5m2!1sen!2sin" 
              className="w-full h-full border-0"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="English Scholars Location"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-4">
                Common Questions Before Enrollment
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

    </>
  );
}
