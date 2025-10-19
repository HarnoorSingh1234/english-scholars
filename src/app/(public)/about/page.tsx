import Link from "next/link";
import { Award, Users, TrendingUp, Target, BookOpen, Heart } from "lucide-react";

export default function AboutPage() {
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
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About English Scholars
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-main-300)]">
            Inspiring minds ~ Transforming lives
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-6">
              Our Journey
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                <strong>ENGLISH SCHOLARS</strong> has been providing personalized coaching to
                students for improving their level of English. It is a result-oriented institute
                catering to the needs of students for <strong>SPOKEN ENGLISH, IELTS, ENGLISH GRAMMAR</strong>{" "}
                and <strong>BUSINESS ENGLISH</strong>.
              </p>
              
              <p>
                The institute is the brainchild of <strong>Mr. Gurdit Singh Grover</strong> and has
                been functioning under his able guidance, supervision and active participation for
                over 15 years. His dedication and innovative teaching methodologies have shaped
                thousands of successful students.
              </p>
              
              <p>
                As the name implies, it is our endeavor to provide the highest level of English
                education to produce a plethora of &apos;Scholars of English&apos; as English is the most
                widely used language all over the world. Our comprehensive approach ensures that
                every student receives personalized attention and achieves their language goals.
              </p>

              {/* Stats Highlight Box */}
              <div className="bg-[var(--color-main-300)] rounded-xl p-8 my-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-[var(--color-main-200)]">15+</p>
                    <p className="text-sm text-[var(--color-main-400)] mt-1">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[var(--color-main-200)]">5000+</p>
                    <p className="text-sm text-[var(--color-main-400)] mt-1">Successful Students</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[var(--color-main-200)]">95%</p>
                    <p className="text-sm text-[var(--color-main-400)] mt-1">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20 bg-[var(--color-main-300)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-[var(--color-main-400)] to-[var(--color-main-500)] flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-40 h-40 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-8xl">👨‍🏫</span>
                    </div>
                    <p className="text-lg font-semibold">Mr. Gurdit Singh Grover</p>
                    <p className="text-sm opacity-75 mt-2">Photo placeholder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-2">
                Mr. Gurdit Singh Grover
              </h2>
              <p className="text-xl text-[var(--color-main-500)] mb-6">Founder & Head Trainer</p>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  With over 15 years of experience in English language training, Mr. Gurdit Singh
                  Grover has dedicated his career to helping students achieve their language goals.
                  His innovative teaching methodologies and personalized approach have helped
                  thousands of students succeed in IELTS and improve their English proficiency.
                </p>
                
                <p>
                  Mr. Grover personally oversees all batches and ensures that every student receives
                  individual attention and customized learning plans. His expertise in IELTS writing
                  module coaching is particularly renowned among students.
                </p>
              </div>

              {/* Qualifications */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[var(--color-main-500)]" />
                  <span className="text-gray-700">Master&apos;s in English Literature</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[var(--color-main-500)]" />
                  <span className="text-gray-700">IELTS Certified Trainer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-[var(--color-main-500)]" />
                  <span className="text-gray-700">15+ Years Teaching Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <div className="bg-[var(--color-main-400)] text-white rounded-2xl p-10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-[var(--color-main-500)] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="leading-relaxed">
                  To provide world-class English language education through personalized coaching,
                  helping students achieve their academic and professional goals with confidence and
                  excellence.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            </div>

            {/* Vision */}
            <div className="bg-[var(--color-main-500)] text-white rounded-2xl p-10 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="leading-relaxed">
                  To be the most trusted and result-oriented English coaching institute, creating a
                  community of confident English speakers who excel globally.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[var(--color-main-300)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-main-400)] mb-4">
              Our Core Values
            </h2>
            <div className="w-20 h-1 bg-[var(--color-main-500)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--color-main-200)]/10 p-4 rounded-lg flex-shrink-0">
                  <Users className="w-8 h-8 text-[var(--color-main-200)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-2">
                    Personalization
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every student is unique. We customize our approach to match individual learning
                    needs and goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--color-main-200)]/10 p-4 rounded-lg flex-shrink-0">
                  <Award className="w-8 h-8 text-[var(--color-main-200)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-2">
                    Excellence
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We are committed to delivering the highest quality of education and achieving
                    outstanding results.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--color-main-200)]/10 p-4 rounded-lg flex-shrink-0">
                  <Heart className="w-8 h-8 text-[var(--color-main-200)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-2">
                    Integrity
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Honest feedback and transparent teaching methodologies form the foundation of our
                    institute.
                  </p>
                </div>
              </div>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-[var(--color-main-200)]/10 p-4 rounded-lg flex-shrink-0">
                  <BookOpen className="w-8 h-8 text-[var(--color-main-200)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-main-400)] mb-2">
                    Innovation
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Constantly evolving our teaching methods to incorporate the latest IELTS trends and
                    patterns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
