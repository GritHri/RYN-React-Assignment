// src/components/ExpertiseSection.tsx
import React from 'react';
import ExpertiseCard from '../components/ExpertiseCards';
import Headings from '../components/Headings';
import BlogImage1 from '../assets/dummy_1.svg';
import BlogImage2 from '../assets/dummy_2.svg';
import BlogImage3 from '../assets/dummy_3.svg';
import BlogPost from '../components/BlogPost';
import WorkCard from '../components/WorkCard';
import ExperienceCard from '../components/ExperienceCard';
import FaqItem from '../components/FaqItem';
import ReviewCard from '../components/ReviewCard';
import ReviewImage1 from '../assets/review-person.svg';
import HeroImage1 from '../assets/hero-1.svg';
import HeroImage2 from '../assets/hero-2.svg';
import Client1 from '../assets/client-1.svg';
import Client2 from '../assets/client-2.svg';
import Client3 from '../assets/client-3.svg';

const cards = [
  {
    title: 'Branding',
    description: `I create efficient, adaptable, and engaging websites. No predefined patterns.
      No sluggish, complex code. Webflow forms the foundation of my web development approach.
      I employ it to provide safe, top-notch bespoke websites.`
  },
  {
    title: 'UI Design',
    description: `I create efficient, adaptable, and engaging websites. No predefined patterns.
      No sluggish, complex code. Webflow forms the foundation of my web development approach.
      I employ it to provide safe, top-notch bespoke websites.`
  },
  {
    title: 'UX Design',
    description: `I comprehend and resolve digital product issues using a user-focused
      methodology. Investigation, compassion, and visual conveyance are a few techniques
      I apply to captivate and involve your users while fulfilling your business requirements.`
  },
  {
    title: 'Development',
    description: `I create user-friendly, adaptive, engaging websites. No cookie-cutters.
      No cumbersome, complex coding. Webflow forms the foundation of my web
      development approach; I employ it to produce safe, top-notch personalized websites.`
  }
];

const blogs = [
  {
    image: BlogImage1,
    title: 'How UX works in Web',
    date: 'Nov 9, 2023',
    tags: ['UI', 'UX']
  },
  {
    image: BlogImage2,
    title: 'Case study - Analysis Application.',
    date: 'Aug 18, 2023',
    tags: ['DESIGN', 'PRINT']
  },
  {
    image: BlogImage3,
    title: '3 ways to develop your skill',
    date: 'Feb 16, 2023',
    tags: ['FIGMA', 'WEB']
  }
]

const workProjects = [
  {
    title: 'Analysis Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: BlogImage1,
    tags: ['FIGMA', 'UX'],
    link: '#'
  },
  {
    title: 'Fortknox Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: BlogImage2,
    tags: ['MOBILE', 'WEB'],
    link: '#'
  },
  {
    title: 'Zenocide Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    image: BlogImage3,
    tags: ['APP', 'WEB'],
    link: '#'
  }
];

const experiences = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    startDate: 'Mar 2022',
    endDate: 'Oct 2023',
  }
];

const reviews = [
  {
    name: 'Floyd Miles',
    role: 'eBay',
    content: 'Synergy\'s resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy\'s resume builder is fantastic. It helped me create a professional resume that stood out to employers.',
    image: ReviewImage1,
  },
];

const faqs = [
  {
    question: 'What is your design process?',
    answer: 'My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.'
  },
  {
    question: 'What tools and software do you use for UX design?',
    answer: 'I use a variety of tools including Figma for interface design, Adobe Creative Suite for visual design, Miro for collaboration and brainstorming, and various user testing platforms to validate designs.'
  },
  {
    question: 'How do you measure the success of your UX designs?',
    answer: 'I measure success through both quantitative metrics (conversion rates, task completion rates, time on task) and qualitative feedback (user testing, surveys). The key is aligning these metrics with business goals and user needs.'
  }
];

const ExpertiseSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-0 sm:px-6 lg:px-8">
        <div className="text-center font-syne font-extrabold text-white text-3xl sm:text-4xl md:text-6xl leading-snug">
          <span>I AM A </span>
          <img src={HeroImage1} alt="Hero 1" className="inline-block w-16 sm:w-24 h-auto mx-2 sm:mx-4" />
          <span>FREELANCE DESIGNER</span>
          <img src={HeroImage2} alt="Hero 2" className="inline-block w-16 sm:w-24 h-auto mx-2 sm:mx-4" />
          <span>FROM SAN FRANCISCO</span>
        </div>

        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row gap-10 lg:gap-32 items-center">
          <div className="flex flex-row justify-center gap-8 flex-wrap lg:flex-nowrap">
            <img src={Client3} alt="Client 3" className="w-24 h-auto" />
            <img src={Client2} alt="Client 2" className="w-24 h-auto" />
            <img src={Client1} alt="Client 1" className="w-24 h-auto" />
          </div>
          <p className="text-sm md:text-base max-w-md text-center lg:text-left text-[#CBCBCB]">
            Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Headings title="Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
            {cards.map((card) => (
              <ExpertiseCard key={card.title} title={card.title}>{card.description}</ExpertiseCard>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <Headings title="Work" />
            <a href="#" className="underline hover:no-underline text-sm sm:text-base">view all</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {workProjects.map((project, index) => (
              <WorkCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <Headings title="Experience" />
            <a href="#" className="underline hover:no-underline text-sm sm:text-base">view all</a>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="pb-4 border-b border-[#2A2A2A] last:border-none last:pb-0">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <Headings title="Blog" />
            <a href="#" className="underline hover:no-underline text-sm sm:text-base">view all</a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {blogs.map((blog) => (
              <BlogPost key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Headings title="Frequently Asked Questions" />
          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <Headings title="What people say about me" />
        <div className="relative mt-8">
          <div className="min-h-[300px]">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                active={index === currentIndex}
                {...review}
              />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevReview}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              aria-label="Previous review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1E1E] flex items-center justify-center hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              aria-label="Next review"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ExpertiseSection, ReviewsSection };
export default ExpertiseSection;
