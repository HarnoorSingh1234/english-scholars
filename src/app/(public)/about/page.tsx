"use client";

import Link from "next/link";
import { Award, Users, TrendingUp, Target, BookOpen, Heart, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Personalization",
      description:
        "Every student is unique. We customize our approach to match individual learning needs and goals.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality of education and achieving outstanding results.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest feedback and transparent teaching methodologies form the foundation of our institute.",
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description:
        "Constantly evolving our teaching methods to incorporate the latest IELTS trends and patterns.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

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
            <span className="text-white">About Us</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              About English Scholars
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
            />
            <p className="text-xl md:text-2xl text-white/80">
              Inspiring minds ~ Transforming lives
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

      {/* Our Story */}
      <section className="py-20 bg-white relative overflow-hidden">
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
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-6">
                Our Journey
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-gray-700 leading-relaxed text-lg"
            >
              <p>
                <strong>ENGLISH SCHOLARS</strong> has been providing personalized coaching to
                students for improving their level of English. It is a result-oriented institute
                catering to the needs of students for{" "}
                <strong>SPOKEN ENGLISH, IELTS, ENGLISH GRAMMAR</strong> and{" "}
                <strong>BUSINESS ENGLISH</strong>.
              </p>

              <p>
                The institute is the brainchild of <strong>Mr. Gurdit Singh Grover</strong> and has
                been functioning under his able guidance, supervision and active participation for
                over 18 years. His dedication and innovative teaching methodologies have shaped
                thousands of successful students.
              </p>

              <p>
                As the name implies, it is our endeavor to provide the highest level of English
                education to produce a plethora of &apos;Scholars of English&apos; as English is
                the most widely used language all over the world. Our comprehensive approach ensures
                that every student receives personalized attention and achieves their language
                goals.
              </p>

              {/* Stats Highlight Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover="hover"
                className="relative group my-8"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.02 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#011e48] to-[#023e73] border-2 border-[#011e48] p-8 md:p-10 relative overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0 }}
                      variants={{
                        hover: { opacity: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"
                    />

                    <div className="grid grid-cols-3 gap-6 text-center relative z-10">
                      <div>
                        <p className="text-4xl md:text-5xl font-bold text-red-500">18+</p>
                        <p className="text-sm text-white/80 mt-2">Years of Excellence</p>
                      </div>
                      <div>
                        <p className="text-4xl md:text-5xl font-bold text-red-500">5000+</p>
                        <p className="text-sm text-white/80 mt-2">Successful Students</p>
                      </div>
                      <div>
                        <p className="text-4xl md:text-5xl font-bold text-red-500">95%</p>
                        <p className="text-sm text-white/80 mt-2">Success Rate</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corners */}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder's Quote */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover="hover"
            className="max-w-4xl mx-auto relative group"
          >
            <motion.div
              variants={{
                hover: { scale: 1.02 },
              }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white p-8 md:p-12 border-2 border-[#011e48] shadow-lg overflow-hidden">
                {/* Background Fill */}
                <motion.div
                  initial={{ x: "-100%" }}
                  variants={{
                    hover: { x: "0%" },
                  }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 bg-gradient-to-r from-[#011e48] to-[#023e73]"
                />

                <div className="relative z-10">
                  <svg
                    className="w-12 h-12 text-red-500 group-hover:text-white mb-4 transition-colors duration-400"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-2xl md:text-3xl font-serif italic text-[#011e48] group-hover:text-white transition-colors duration-400 mb-6">
                    Team as a whole is an entity which intensifies the results and outcomes.
                  </p>
                  <p className="text-lg font-semibold text-gray-600 group-hover:text-white/80 transition-colors duration-400">
                    ~ Gurdit Singh Grover
                  </p>
                </div>
              </div>

              {/* Decorative Corners */}
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
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover="hover"
                className="relative group"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.02, y: -8 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="relative"
                >
                  <div className="aspect-[4/5] rounded-none overflow-hidden border-2 border-[#011e48] shadow-2xl">
                    <Image
                      src="/founder.png"
                      alt="Mr. Gurdit Singh Grover"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  {/* Decorative Corners */}
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-red-500"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-red-500"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-red-500"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-red-500"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-2">
                About the Founder
              </h2>
              <p className="text-xl text-red-500 mb-6">Mr. Gurdit Singh Grover</p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
              />

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The founder and Principal Faculty of English Scholars is Mr. Gurdit Singh Grover
                  – a Commerce graduate of the Calcutta University – and has been teaching English
                  for more than eighteen years.
                </p>

                <p>
                  He had the good fortune to be educated in a Convent school in Calcutta and taught
                  by dedicated mentors from Scotland/U.K. As a result, he acquired a great passion
                  for the English language at a very young age.
                </p>

                <p>
                  This passion kept on increasing incessantly and motivated him to finally enter
                  the field of education for emanating the knowledge and unravelling the
                  intricacies of the language to the students who were lacking in English.
                </p>

                <p>
                  Presently, his way of teaching the language with devotion and dedication has been
                  successful in turning out a large number of satisfied students – the Testimonials
                  bear witness to this fact.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
              Mission & Vision
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.02, y: -8 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#011e48] to-[#023e73] border-2 border-[#011e48] text-white p-10 relative overflow-hidden shadow-lg">
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent"
                  />

                  <div className="relative z-10">
                    <div className="bg-red-500 w-16 h-16 flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="leading-relaxed">
                      To provide world-class English language education through personalized
                      coaching, helping students achieve their academic and professional goals with
                      confidence and excellence.
                    </p>
                  </div>
                </div>

                {/* Decorative Corners */}
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

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.02, y: -8 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
              >
                <div className="bg-red-500 border-2 border-red-500 text-white p-10 relative overflow-hidden shadow-lg">
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"
                  />

                  <div className="relative z-10">
                    <div className="bg-white/20 w-16 h-16 flex items-center justify-center mb-6">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="leading-relaxed">
                      To be the most trusted and result-oriented English coaching institute,
                      creating a community of confident English speakers who excel globally.
                    </p>
                  </div>
                </div>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-red-500"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-4">
              Our Core Values
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
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="group relative"
                >
                  <motion.div
                    variants={{
                      hover: { y: -8, scale: 1.02 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="relative"
                  >
                    <div className="bg-white border-2 border-[#011e48] p-8 shadow-sm relative overflow-hidden">
                      {/* Background Fill */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        variants={{
                          hover: { x: "0%" },
                        }}
                        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute inset-0 bg-[#011e48]"
                      />

                      <div className="flex items-start space-x-4 relative z-10">
                        <motion.div
                          variants={{
                            hover: {
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.1,
                            },
                          }}
                          transition={{ duration: 0.5 }}
                          className="bg-red-500 group-hover:bg-white p-4 flex-shrink-0"
                        >
                          <Icon className="w-8 h-8 text-white group-hover:text-[#011e48] transition-colors duration-400" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-[#011e48] group-hover:text-white transition-colors duration-400 mb-2">
                            {value.title}
                          </h3>
                          <p className="text-gray-700 group-hover:text-white/90 transition-colors duration-400 leading-relaxed">
                            {value.description}
                          </p>
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#011e48] to-[#023e73] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of successful students who achieved their English language goals with
              English Scholars
            </p>

            <motion.div whileHover="hover" whileTap="tap">
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-block"
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
                    Book Free Demo Class
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
