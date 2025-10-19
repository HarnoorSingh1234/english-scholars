"use client";

import { Award, Users, TrendingUp, Target } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

const SuccessStats = () => {
  const stats = useMemo(() => [
    { icon: Award, number: 15, suffix: "+", label: "Years of Excellence" },
    { icon: Users, number: 5000, suffix: "+", label: "Students Trained" },
    { icon: TrendingUp, number: 95, suffix: "%", label: "Success Rate" },
    { icon: Target, number: 8.0, suffix: "+", label: "Average Band Score" },
  ], []);

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.number / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = stat.number;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const newCounts = [...prev];
                  newCounts[index] = current;
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stats]);

  return (
    <section ref={sectionRef} className="py-20 bg-main-300 relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-main-400 mb-4">
            Our Success in Numbers
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
            className="h-1 bg-gradient-to-r from-main-200 to-main-100 mx-auto rounded-full"
          />
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
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const displayValue = stat.number % 1 !== 0 
              ? counts[index].toFixed(1) 
              : Math.floor(counts[index]);
            
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
                    },
                  },
                }}
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={{
                    hover: {
                      y: -8,
                      scale: 1.05,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 17,
                  }}
                  className="text-center p-6 bg-white rounded-xl shadow-md border-2 border-main-400/10 relative overflow-hidden h-full"
                >
                  {/* Top border accent */}
                  <motion.div
                    initial={{ width: "0%" }}
                    variants={{
                      hover: { width: "100%" },
                    }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-main-200 to-main-100"
                  />

                  {/* Background gradient on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-main-400/5 to-transparent"
                  />

                  <div className="flex justify-center mb-3 relative z-10">
                    <motion.div
                      variants={{
                        hover: {
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1,
                        },
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="bg-main-500/10 p-4 rounded-full relative overflow-hidden"
                    >
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        variants={{
                          hover: {
                            scale: 1.5,
                            opacity: 0.2,
                          },
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 bg-main-200 rounded-full"
                      />
                      <Icon className="w-8 h-8 text-main-500 relative z-10" />
                    </motion.div>
                  </div>
                  
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-main-200 mb-2 relative z-10">
                    {displayValue}{stat.suffix}
                  </p>
                  <p className="text-base md:text-lg text-main-400 font-medium relative z-10">
                    {stat.label}
                  </p>

                  {/* Decorative Corners */}
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-main-200"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-main-200"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-main-200"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{
                      hover: { scale: 1 },
                    }}
                    transition={{ duration: 0.2, delay: 0.2 }}
                    className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-main-200"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStats;
