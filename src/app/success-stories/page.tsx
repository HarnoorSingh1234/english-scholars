"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SuccessStoriesPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const testimonials = [
    {
      name: "Priya Sharma",
      score: 8.0,
      photo: "👩",
      quote:
        "English Scholars transformed my English skills completely. The personalized attention and expert guidance from Mr. Grover helped me achieve my target score. The writing module coaching was exceptional!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
      type: "Academic",
      destination: "University of Toronto, Canada",
      year: 2024,
    },
    {
      name: "Rahul Kumar",
      score: 7.5,
      photo: "👨",
      quote:
        "I was struggling with the writing module until I joined English Scholars. The small batch size and individual feedback helped me improve significantly. Highly recommended!",
      modules: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Melbourne, Australia",
      year: 2024,
    },
    {
      name: "Sneha Patel",
      score: 8.0,
      photo: "👩",
      quote:
        "The mock tests and detailed feedback were game-changers for me. Mr. Grover's teaching methods are practical and effective. I achieved my dream score in the first attempt!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.5 },
      type: "General Training",
      destination: "PR Canada",
      year: 2024,
    },
    {
      name: "Amit Singh",
      score: 7.5,
      photo: "👨",
      quote:
        "English Scholars provided me with the confidence and skills needed for IELTS. The grammar classes were particularly helpful. Thank you for the amazing support!",
      modules: { L: 7.5, R: 8.0, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Manchester, UK",
      year: 2024,
    },
    {
      name: "Kavya Reddy",
      score: 8.5,
      photo: "👩",
      quote:
        "Outstanding coaching! The one-on-one speaking sessions made all the difference. I'm now pursuing my master's degree in Canada thanks to English Scholars.",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
      type: "Academic",
      destination: "McGill University, Canada",
      year: 2024,
    },
    {
      name: "Rohan Mehta",
      score: 7.0,
      photo: "👨",
      quote:
        "The early morning batches fit perfectly with my work schedule. The comprehensive study material and regular assessments kept me on track throughout my preparation.",
      modules: { L: 7.5, R: 7.0, W: 6.5, S: 7.0 },
      type: "General Training",
      destination: "PR Australia",
      year: 2023,
    },
    {
      name: "Anjali Verma",
      score: 8.0,
      photo: "👩",
      quote:
        "The writing task 2 coaching was phenomenal! Mr. Grover's techniques helped me structure my essays perfectly. Got my desired score in just 6 weeks!",
      modules: { L: 8.0, R: 8.5, W: 7.5, S: 8.0 },
      type: "Academic",
      destination: "University of Sydney, Australia",
      year: 2023,
    },
    {
      name: "Vikram Joshi",
      score: 7.5,
      photo: "👨",
      quote:
        "Excellent coaching center! The mock tests were very close to the actual exam. The feedback after each test helped me identify and improve my weak areas.",
      modules: { L: 8.0, R: 7.5, W: 7.0, S: 7.5 },
      type: "General Training",
      destination: "PR Canada",
      year: 2023,
    },
    {
      name: "Divya Krishnan",
      score: 8.5,
      photo: "👩",
      quote:
        "Best IELTS coaching in town! The personalized study plan and regular progress tracking kept me motivated. Achieved 8.5 overall in my first attempt!",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
      type: "Academic",
      destination: "University of British Columbia, Canada",
      year: 2023,
    },
    {
      name: "Siddharth Malhotra",
      score: 7.0,
      photo: "👨",
      quote:
        "The speaking practice sessions with multiple trainers helped me overcome my nervousness. Great learning environment and supportive staff!",
      modules: { L: 7.5, R: 7.0, W: 6.5, S: 7.5 },
      type: "Academic",
      destination: "Deakin University, Australia",
      year: 2023,
    },
    {
      name: "Neha Gupta",
      score: 8.0,
      photo: "👩",
      quote:
        "Joining English Scholars was the best decision for my IELTS preparation. The comprehensive approach covering all modules helped me achieve Band 8!",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
      type: "General Training",
      destination: "PR New Zealand",
      year: 2022,
    },
    {
      name: "Arjun Nair",
      score: 7.5,
      photo: "👨",
      quote:
        "The reading techniques taught here are amazing! Improved my speed and accuracy significantly. Highly professional and result-oriented institute.",
      modules: { L: 7.5, R: 8.5, W: 7.0, S: 7.5 },
      type: "Academic",
      destination: "University of Auckland, New Zealand",
      year: 2022,
    },
  ];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const scoreMatch =
      selectedFilter === "all" ||
      (selectedFilter === "7.0-7.5" && testimonial.score >= 7.0 && testimonial.score <= 7.5) ||
      (selectedFilter === "8.0" && testimonial.score === 8.0) ||
      (selectedFilter === "8.5+" && testimonial.score >= 8.5);
    
    const typeMatch = selectedType === "all" || testimonial.type === selectedType;
    
    return scoreMatch && typeMatch;
  });

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-[var(--color-main-300)] py-16">
        <div className="container mx-auto px-4">
          <nav className="text-sm mb-4">
            <Link href="/" className="text-[var(--color-main-400)]/70 hover:text-[var(--color-main-400)]">
              Home
            </Link>
            <span className="text-[var(--color-main-400)]/70 mx-2">›</span>
            <span className="text-[var(--color-main-400)] font-semibold">Success Stories</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-main-400)] mb-4">
            Success Stories from Our Scholars
          </h1>
          <p className="text-xl text-[var(--color-main-400)]/80">
            Real students, real results, real dreams achieved
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Band Score Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Filter by Band Score:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedFilter("all")}
                  variant={selectedFilter === "all" ? "default" : "outline"}
                  size="sm"
                  className={selectedFilter === "all" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  All
                </Button>
                <Button
                  onClick={() => setSelectedFilter("7.0-7.5")}
                  variant={selectedFilter === "7.0-7.5" ? "default" : "outline"}
                  size="sm"
                  className={selectedFilter === "7.0-7.5" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  7.0-7.5
                </Button>
                <Button
                  onClick={() => setSelectedFilter("8.0")}
                  variant={selectedFilter === "8.0" ? "default" : "outline"}
                  size="sm"
                  className={selectedFilter === "8.0" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  8.0
                </Button>
                <Button
                  onClick={() => setSelectedFilter("8.5+")}
                  variant={selectedFilter === "8.5+" ? "default" : "outline"}
                  size="sm"
                  className={selectedFilter === "8.5+" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  8.5+
                </Button>
              </div>
            </div>

            {/* Test Type Filter */}
            <div>
              <p className="text-sm font-semibold text-gray-600 mb-2">Filter by Test Type:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={() => setSelectedType("all")}
                  variant={selectedType === "all" ? "default" : "outline"}
                  size="sm"
                  className={selectedType === "all" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  All
                </Button>
                <Button
                  onClick={() => setSelectedType("Academic")}
                  variant={selectedType === "Academic" ? "default" : "outline"}
                  size="sm"
                  className={selectedType === "Academic" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  Academic
                </Button>
                <Button
                  onClick={() => setSelectedType("General Training")}
                  variant={selectedType === "General Training" ? "default" : "outline"}
                  size="sm"
                  className={selectedType === "General Training" ? "bg-[var(--color-main-500)] text-white" : ""}
                >
                  General Training
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[var(--color-main-500)]"
              >
                {/* Student Photo */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 rounded-full border-4 border-[var(--color-main-500)] bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] flex items-center justify-center text-4xl mb-3">
                    {testimonial.photo}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-main-400)] text-center">
                    {testimonial.name}
                  </h3>
                  <Badge className="bg-gradient-to-r from-[var(--color-main-200)] to-[var(--color-main-100)] text-white px-4 py-1 rounded-full mt-2 text-base font-bold">
                    Band {testimonial.score.toFixed(1)}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[var(--color-main-500)] text-[var(--color-main-500)] mt-2 text-xs"
                  >
                    {testimonial.type}
                  </Badge>
                </div>

                {/* Module Breakdown */}
                <div className="flex justify-around text-xs text-gray-600 mb-4 pb-4 border-b">
                  <div className="text-center">
                    <p className="font-semibold text-[var(--color-main-400)]">{testimonial.modules.L}</p>
                    <p className="text-gray-500">L</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[var(--color-main-400)]">{testimonial.modules.R}</p>
                    <p className="text-gray-500">R</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[var(--color-main-400)]">{testimonial.modules.W}</p>
                    <p className="text-gray-500">W</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[var(--color-main-400)]">{testimonial.modules.S}</p>
                    <p className="text-gray-500">S</p>
                  </div>
                </div>

                {/* Quote */}
                <p className="text-gray-700 italic leading-relaxed text-sm mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Destination */}
                {testimonial.destination && (
                  <p className="text-xs text-[var(--color-main-500)] font-semibold mb-4">
                    📍 {testimonial.destination}
                  </p>
                )}

                {/* Star Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[var(--color-main-200)] text-[var(--color-main-200)]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Track Record Speaks for Itself
            </h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-3">
                <Users className="w-12 h-12 mx-auto mb-2" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">5000+</p>
              <p className="text-lg opacity-90">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-3">
                <TrendingUp className="w-12 h-12 mx-auto mb-2" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">95%</p>
              <p className="text-lg opacity-90">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-3">
                <Target className="w-12 h-12 mx-auto mb-2" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">8.0+</p>
              <p className="text-lg opacity-90">Average Band Score</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-3">
                <Award className="w-12 h-12 mx-auto mb-2" />
              </div>
              <p className="text-4xl md:text-5xl font-bold mb-2">15+</p>
              <p className="text-lg opacity-90">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-4">
            YOUR SUCCESS STORY STARTS HERE
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of successful students who have achieved their dreams
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[var(--color-main-200)] hover:bg-[var(--color-main-100)] text-white font-semibold px-12 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Link href="/contact">Book Your Free Demo Class</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
