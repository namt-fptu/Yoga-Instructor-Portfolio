import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from 'lucide-react';
import { testimonials } from '../data';

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-rotation every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const activeTestimonial = testimonials[currentIdx];

  return (
    <div id="testimonials-section" className="bg-white border border-art-border-light rounded-2xl p-6 sm:p-12 lg:p-16 shadow-[0_4px_24px_rgba(74,93,78,0.02)] overflow-hidden relative">
      
      {/* Absolute Decorative Elements */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-art-taupe-bg rounded-bl-full opacity-30 pointer-events-none" />
      <div className="absolute bottom-4 left-6 text-art-divider pointer-events-none opacity-40">
        <Quote className="w-24 h-24 stroke-1 rotate-180" />
      </div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-art-taupe bg-art-cream px-4 py-1.5 border border-art-divider rounded-full shadow-2xs inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-art-green" />
          LỜI CẢM NHẬN TỪ HỌC VIÊN
        </span>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif mt-3 text-art-green tracking-tight font-normal italic">
          Hành Trình Phục Hồi Nối Dài
        </h3>
        <p className="text-xs sm:text-sm text-art-text-muted mt-2.5 leading-relaxed">
          Sự thay đổi tích cực về sức khỏe thể chất và nét an yên trong tâm hồn của mỗi học viên là món quà quý giá nhất trong sứ mệnh của Trung Tâm Sen Yoga.
        </p>
      </div>

      {/* Main Testimonial Stage */}
      <div className="max-w-3xl mx-auto relative z-10 min-h-[340px] sm:min-h-[280px] flex flex-col justify-between">
        
        <div className="relative flex-grow flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full text-center space-y-6 flex flex-col items-center"
            >
              {/* Star Ratings */}
              <div className="flex gap-1 justify-center">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl font-serif text-art-green leading-relaxed text-center px-4 sm:px-8 max-w-2xl relative block">
                <span className="text-3xl text-art-taupe font-serif absolute -top-4 -left-1 opacity-25">“</span>
                {activeTestimonial.text}
                <span className="text-3xl text-art-taupe font-serif absolute -bottom-8 -right-3 opacity-25">”</span>
              </blockquote>

              {/* Student details */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-3.5 justify-center">
                <div className="relative">
                  {/* Decorative circle ornament behind avatar */}
                  <div className="absolute -inset-1 bg-art-taupe-bg rounded-full border border-art-divider scale-105 pointer-events-none" />
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover relative z-10 border border-white max-sm:mx-auto"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-sm font-sans font-bold text-art-green">
                    {activeTestimonial.name}
                  </h4>
                  <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 mt-0.5">
                    <span className="text-xs text-art-text-muted">{activeTestimonial.role}</span>
                    <span className="hidden sm:inline text-art-divider">•</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-art-taupe bg-art-cream px-2 py-0.5 rounded border border-art-divider/60">
                      {activeTestimonial.classType}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Nav Controls */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-art-cream">
          
          <button
            onClick={handlePrev}
            id="prev-testimonial-btn"
            className="w-10 h-10 rounded-full border border-art-divider bg-white hover:bg-art-cream hover:text-art-green text-art-text-muted flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Lời cảm nhận trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIdx ? 1 : -1);
                  setCurrentIdx(i);
                }}
                id={`dot-testimonial-btn-${i}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIdx === i ? 'w-6 bg-art-green' : 'w-2 bg-art-divider hover:bg-art-taupe'
                }`}
                aria-label={`Đi tới slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            id="next-testimonial-btn"
            className="w-10 h-10 rounded-full border border-art-divider bg-white hover:bg-art-cream hover:text-art-green text-art-text-muted flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            aria-label="Lời cảm nhận sau"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

      </div>
    </div>
  );
}
