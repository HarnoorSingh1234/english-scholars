"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutFounder = () => {
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
        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div
            whileHover="hover"
            className="relative group"
          >
            <motion.div
              variants={{
                hover: { scale: 1.02 },
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-white p-8 md:p-10 border-2 border-[#011e48] shadow-lg overflow-hidden"
            >
              {/* Background Fill Animation */}
              <motion.div
                initial={{ x: "-100%" }}
                variants={{
                  hover: { x: "0%" },
                }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-[#011e48] to-[#023e73]"
              />

              {/* Quote Content */}
              <div className="relative z-10">
                <svg
                  className="w-12 h-12 text-red-500 mb-4 mx-auto group-hover:text-white transition-colors duration-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-xl md:text-2xl font-serif italic text-[#011e48] group-hover:text-white transition-colors duration-400 mb-4">
                  Team as a whole is an entity which intensifies the results and outcomes.
                </p>
                <p className="text-base font-semibold text-gray-600 group-hover:text-white/80 transition-colors duration-400">
                  ~ Gurdit Singh Grover
                </p>
              </div>
            </motion.div>

            {/* Decorative Corners */}
            <motion.div
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#011e48]"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#011e48]"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#011e48]"
            />
            <motion.div
              initial={{ scale: 0 }}
              variants={{
                hover: { scale: 1 },
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#011e48]"
            />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
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
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#011e48] relative">
                  {/* Founder Image */}
                  <Image
                    src="/founder.png"
                    alt="Mr. Gurdit Singh Grover - Founder & Principal Faculty"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#011e48]/80 via-[#011e48]/40 to-transparent z-10"
                  />

                  {/* Text overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    variants={{
                      hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white"
                  >
                    <p className="text-lg font-semibold">Mr. Gurdit Singh Grover</p>
                    <p className="text-sm opacity-90">Founder & Principal Faculty</p>
                    <motion.div
                      initial={{ width: 0 }}
                      variants={{
                        hover: { width: "60px" },
                      }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="h-0.5 bg-red-500 mt-2"
                    />
                  </motion.div>
                </div>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-red-500"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-red-500"
                />
              </motion.div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-red-500/20 to-[#011e48]/20 rounded-2xl -z-10 blur-xl"
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#011e48] mb-6">
                About the Founder
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                className="h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-gray-700 leading-relaxed"
            >
              <p>
                The founder and Principal Faculty of <strong>English Scholars</strong> is{" "}
                <strong>Mr. Gurdit Singh Grover</strong> – a Commerce graduate of the Calcutta
                University – and has been teaching English for more than eighteen years.
              </p>

              <p>
                He had the good fortune to be educated in a Convent school in Calcutta and taught
                by dedicated mentors from Scotland/U.K. As a result, he acquired a great passion
                for the English language at a very young age.
              </p>

              <p>
                This passion kept on increasing incessantly and motivated him to finally enter the
                field of education for emanating the knowledge and unravelling the intricacies of
                the language to the students who were lacking in English.
              </p>

              <p>
                Presently, his way of teaching the language with devotion and dedication has been
                successful in turning out a large number of satisfied students – the{" "}
                <strong>Testimonials</strong> bear witness to this fact.
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 mt-8 mb-8"
            >
              <motion.div
                whileHover="hover"
                className="group relative"
              >
                <motion.div
                  variants={{
                    hover: { scale: 1.05 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white p-4 border-2 border-[#011e48] overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{
                      hover: { x: "0%" },
                    }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-[#011e48]"
                  />
                  <div className="relative z-10">
                    <p className="text-3xl font-bold text-[#011e48] group-hover:text-white transition-colors duration-400">
                      18+
                    </p>
                    <p className="text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-400">
                      Years Experience
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover="hover"
              whileTap="tap"
              className="mt-6"
            >
              <motion.div
                variants={{
                  hover: { scale: 1.05 },
                  tap: { scale: 0.98 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative inline-block"
              >
                <Link
                  href="/about"
                  className="relative group inline-flex items-center space-x-2 px-8 py-4 border-2 border-[#011e48] overflow-hidden"
                >
                  <motion.div
                    initial={{ x: "-100%" }}
                    variants={{ hover: { x: "0%" } }}
                    transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
                    className="absolute inset-0 bg-[#011e48]"
                  />
                  <span className="relative z-10 text-[#011e48] group-hover:text-white transition-colors duration-400 font-semibold">
                    Learn More About Us
                  </span>
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    className="relative z-10 text-[#011e48] group-hover:text-white transition-colors duration-400"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>

                {/* Decorative Corners */}
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[#011e48]"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  variants={{ hover: { scale: 1 } }}
                  transition={{ duration: 0.3, delay: 0.25 }}
                  className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[#011e48]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
