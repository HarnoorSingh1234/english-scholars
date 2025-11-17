// Landing Page Types

export interface HeroSection {
  title: string;
  subtitle: string;
  primaryCta: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
}

export interface SuccessStory {
  id: string;
  studentName: string;
  score: string;
  course: string;
  testimonial: string;
  image?: string;
  achievement: string;
}

export interface LandingPageData {
  hero: HeroSection;
  features: Feature[];
  testimonials: Testimonial[];
  successStories: SuccessStory[];
  stats: {
    studentsEnrolled: number;
    successRate: number;
    yearsOfExperience: number;
    averageScore: number;
  };
}
