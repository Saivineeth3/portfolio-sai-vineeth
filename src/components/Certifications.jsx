import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

const certificates = [
  {
    title: 'Introduction to Python',
    issuer: 'Online Course',
    status: 'Completed',
    year: '2024',
    desc: 'Fundamentals of Python programming including data types, control structures, functions, and basic data manipulation for analytics workflows.',
  },
  {
    title: 'Deloitte Data Analytics Job Simulation',
    issuer: 'Forage',
    status: 'Completed',
    year: '2025',
    desc: 'Interpreted business datasets, created dashboard-based reports, and applied analytical thinking to evaluate trends and business performance indicators.',
  },
  {
    title: 'Oracle Cloud Infrastructure 2025',
    issuer: 'Oracle',
    status: 'Completed',
    year: '2025',
    desc: 'Cloud infrastructure fundamentals including compute, storage, networking services, and cloud-native application deployment.',
  },
  {
    title: 'Python Certified',
    issuer: 'Online',
    status: 'Completed',
    year: '',
    desc: 'Built Python fundamentals useful for data analysis and problem solving.',
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  return (
    <section id="certifications" className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Certifications
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg max-w-2xl mx-auto"
        >
          Continuously learning and validating my skills
        </motion.p>
      </div>

      <div className="relative max-w-5xl mx-auto flex items-center justify-center h-[400px]">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-colors backdrop-blur-md hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-20 p-3 rounded-full bg-white/5 border border-white/10 hover:border-accent hover:text-accent transition-colors backdrop-blur-md hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="w-full h-full relative flex justify-center items-center perspective-[1000px]">
          <AnimatePresence mode="popLayout">
            {certificates.map((cert, index) => {
              const isActive = index === currentIndex;
              const isPrev = index === (currentIndex === 0 ? certificates.length - 1 : currentIndex - 1);
              const isNext = index === (currentIndex === certificates.length - 1 ? 0 : currentIndex + 1);
              
              if (!isActive && !isPrev && !isNext) return null;

              return (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    x: isNext ? 200 : isPrev ? -200 : 0, 
                    scale: 0.8,
                    rotateY: isNext ? -20 : isPrev ? 20 : 0,
                    zIndex: 0
                  }}
                  animate={{ 
                    opacity: isActive ? 1 : 0.4, 
                    x: isActive ? 0 : isNext ? '60%' : '-60%', 
                    scale: isActive ? 1 : 0.85,
                    rotateY: isActive ? 0 : isNext ? -15 : 15,
                    zIndex: isActive ? 10 : 0
                  }}
                  exit={{ 
                    opacity: 0, 
                    x: isActive ? 0 : isNext ? 200 : -200, 
                    scale: 0.8,
                    rotateY: isNext ? -20 : isPrev ? 20 : 0,
                    zIndex: 0
                  }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  className={`absolute w-full max-w-md ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={() => {
                    if (isNext) nextSlide();
                    if (isPrev) prevSlide();
                  }}
                >
                  <div className={`p-8 rounded-2xl border transition-colors duration-300 ${isActive ? 'bg-background border-accent shadow-[0_0_30px_rgba(255,223,0,0.15)]' : 'bg-white/5 border-white/10 backdrop-blur-md'}`}>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white/5 rounded-xl text-accent">
                        <Award className="w-6 h-6" />
                      </div>
                      <span className="text-accent text-sm font-mono tracking-widest font-bold">
                        {String(index + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-2 mb-4 text-sm text-white/70">
                      <span className="font-medium">{cert.issuer}</span>
                      <span>•</span>
                      <span className="text-accent">{cert.status}</span>
                      {cert.year && (
                        <>
                          <span>•</span>
                          <span>{cert.year}</span>
                        </>
                      )}
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        
        {/* Mobile Nav */}
        <div className="absolute bottom-0 flex justify-center w-full gap-4 md:hidden mt-8">
           <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/5 border border-white/10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
