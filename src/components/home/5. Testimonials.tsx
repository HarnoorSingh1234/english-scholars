"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import NavigationButton from "@/components/shared/navigationbutton";

const Testimonials = () => {
  // Single testimonials dictionary
  const testimonials = [
    {
      name: "Student Testimonial",
      type: "video" as const,
      videoId: "xIJdaXViWYo",
      title: "IELTS Success Story",
      quote: "English Scholars helped me achieve my dream IELTS score!",
    },
    {
      name: "Priya Sharma",
      score: "8.0",
      type: "image" as const,
      reportCard: "/testimonials/1.png",
      photo: "/testimonials/1-photo.png",
      quote:
        "English Scholars transformed my English skills completely. The personalized attention and expert guidance from Mr. Grover helped me achieve my target score.",
      modules: { L: 8.5, R: 8.0, W: 7.5, S: 8.0 },
    },
    {
      name: "Junior Student",
      type: "video" as const,
      videoId: "ocMqAImLkLU",
      title: "Spoken English for Juniors - A student shares her views",
      quote: "I learned so much about speaking English confidently!",
    },
    {
      name: "Kavya Reddy",
      score: "8.5",
      type: "image" as const,
      reportCard: "/testimonials/2.png",
      photo: "/testimonials/2-photo.png",
      quote:
        "Outstanding coaching! The one-on-one speaking sessions made all the difference. I'm now pursuing my master's degree in Canada.",
      modules: { L: 9.0, R: 8.5, W: 8.0, S: 8.5 },
    },
    {
      name: "Junior Batch Student",
      type: "video" as const,
      videoId: "tnCoe5un5XE",
      title: "Junior English - Batch for kids",
      quote: "My English improved so much in Mr. Grover's classes!",
    },
    {
      name: "Student Review",
      type: "video" as const,
      videoId: "BB4ZC09dvuY",
      title: "17 August 2020",
      quote: "Thank you English Scholars for the amazing experience!",
    },
    {
      name: "IELTS Achiever",
      type: "video" as const,
      videoId: "rsB_hKYY8K8",
      title: "Success Story",
      quote: "I'm grateful for the dedication and support from the entire team!",
    },
    {
      name: "Spoken English Student",
      type: "video" as const,
      videoId: "A7bTKPzgj4E",
      title: "Spoken English Journey",
      quote: "My confidence in speaking English has grown tremendously!",
    },
    {
      name: "Happy Student",
      type: "video" as const,
      videoId: "47YxH_DgHGk",
      title: "Views of our Spoken English pupil",
      quote: "The teaching methodology is practical and effective!",
    },
    {
      name: "Satisfied Student",
      type: "video" as const,
      videoId: "CGDBdRlhlnY",
      title: "Student Review",
      quote: "English Scholars is the best place to learn English in Delhi!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); 
      } else {
        setItemsPerPage(3); 
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
    setPlayingVideo(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, testimonials.length - itemsPerPage)
        : prev - itemsPerPage
    );
    setPlayingVideo(null);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
            Success Stories from Our Scholars
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
          />
          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Real results from real students - see their report cards and hear their stories
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
          {/* Navigation Arrows - Positioned on sides (hidden on mobile, shown on tablet+) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block absolute left-0 top-32 z-10"
          >
            <NavigationButton
              direction="left"
              onClick={prevSlide}
              ariaLabel="Previous testimonials"
              size="md"
              variant="outline"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:block absolute right-0 top-32 z-10"
          >
            <NavigationButton
              direction="right"
              onClick={nextSlide}
              ariaLabel="Next testimonials"
              size="md"
              variant="outline"
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8"
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={currentIndex + index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={{
                      hover:
                        testimonial.type === "video"
                          ? {} // No scaling for video cards
                          : { y: -8, scale: 1.02 },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-[#011e48] relative overflow-hidden h-full flex flex-col shadow-sm">
                      {/* Background Fill Animation */}
                      <motion.div
                        initial={{ y: "100%" }}
                        variants={{
                          hover: { y: "0%" },
                        }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-gradient-to-br from-[#011e48] to-[#023e73] z-0"
                      />

                      {/* Content Container */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Media Section - Image or Video */}
                        <div className="relative w-full aspect-video bg-gray-100">
                          {testimonial.type === "image" ? (
                            <>
                              {/* Report Card Image */}
                              <div className="relative w-full h-full">
                                <Image
                                  src={testimonial.reportCard}
                                  alt={`${testimonial.name}'s IELTS Report Card`}
                                  fill
                                  className="object-contain p-2"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                              {/* Student Photo Overlay */}
                              {testimonial.photo && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.3, type: "spring" }}
                                  className="absolute bottom-3 right-3 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden"
                                >
                                  <Image
                                    src={testimonial.photo}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                  />
                                </motion.div>
                              )}
                            </>
                          ) : (
                            <>
                              {/* Video Thumbnail or Embed */}
                              {playingVideo === currentIndex + index ? (
                                <div className="relative w-full h-full">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1&rel=0`}
                                    title={testimonial.title || `${testimonial.name} Video Testimonial`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="absolute inset-0 w-full h-full"
                                  />
                                </div>
                              ) : (
                                <div className="relative w-full h-full cursor-pointer group/video">
                                  {/* YouTube Thumbnail */}
                                  <Image
                                    src={`https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`}
                                    alt={testimonial.title || `${testimonial.name} Video Testimonial`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    unoptimized
                                  />
                                  {/* Play Button Overlay */}
                                  <motion.button
                                    onClick={() => setPlayingVideo(currentIndex + index)}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover/video:bg-black/50 transition-colors"
                                  >
                                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center shadow-lg">
                                      <Play className="w-8 h-8 text-white ml-1" />
                                    </div>
                                  </motion.button>
                                </div>
                              )}
                            </>
                          )}
                        </div>

                        {/* Info Section */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Student Info */}
                          <div className="text-center mb-4">
                            <h3 className="text-lg font-bold text-[#011e48] group-hover:text-white transition-colors duration-400 mb-2">
                              {testimonial.name}
                            </h3>
                            {testimonial.score && (
                              <Badge className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full">
                                Band {testimonial.score}
                              </Badge>
                            )}
                            {testimonial.title && !testimonial.score && (
                              <p className="text-sm text-gray-600 group-hover:text-white/70 transition-colors duration-400">
                                {testimonial.title}
                              </p>
                            )}
                          </div>

                          {/* Module Breakdown - Only for image type */}
                          {testimonial.type === "image" && testimonial.modules && (
                            <div className="flex justify-around text-xs text-gray-600 group-hover:text-white/80 transition-colors duration-400 mb-4 pb-4 border-b border-gray-200 group-hover:border-white/30">
                              <div className="text-center">
                                <p className="font-semibold">{testimonial.modules.L}</p>
                                <p className="text-[10px] opacity-70">Listening</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">{testimonial.modules.R}</p>
                                <p className="text-[10px] opacity-70">Reading</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">{testimonial.modules.W}</p>
                                <p className="text-[10px] opacity-70">Writing</p>
                              </div>
                              <div className="text-center">
                                <p className="font-semibold">{testimonial.modules.S}</p>
                                <p className="text-[10px] opacity-70">Speaking</p>
                              </div>
                            </div>
                          )}

                          {/* Quote */}
                          <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-400 italic leading-relaxed text-sm mb-4 flex-1">
                            &quot;{testimonial.quote}&quot;
                          </p>

                          {/* Star Rating */}
                          <div className="flex justify-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                  delay: 0.5 + i * 0.1,
                                  type: "spring",
                                }}
                              >
                                <Star className="w-4 h-4 fill-red-500 text-red-500 group-hover:fill-white group-hover:text-white transition-colors duration-400" />
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corners */}
                      <motion.div
                        initial={{ scale: 0 }}
                        variants={{
                          hover: { scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48] group-hover:border-white z-20"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        variants={{
                          hover: { scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48] group-hover:border-white z-20"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        variants={{
                          hover: { scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.15 }}
                        className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48] group-hover:border-white z-20"
                      />
                      <motion.div
                        initial={{ scale: 0 }}
                        variants={{
                          hover: { scale: 1 },
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48] group-hover:border-white z-20"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Navigation Buttons - Shown only on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex md:hidden justify-center space-x-4 mb-6"
          >
            <NavigationButton
              direction="left"
              onClick={prevSlide}
              ariaLabel="Previous testimonials"
              size="md"
              variant="outline"
            />

            <NavigationButton
              direction="right"
              onClick={nextSlide}
              ariaLabel="Next testimonials"
              size="md"
              variant="outline"
            />
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center space-x-2 mt-4"
          >
            {Array.from({
              length: Math.ceil(testimonials.length / itemsPerPage),
            }).map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setCurrentIndex(i * itemsPerPage);
                  setPlayingVideo(null);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i * itemsPerPage
                    ? "w-8 bg-[#011e48]"
                    : "w-2 bg-gray-300 hover:bg-[#011e48]/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
