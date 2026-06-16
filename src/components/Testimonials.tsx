import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

type Review = {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
};

const reviews: Review[] = [
  {
    name: 'Sarah Johnson',
    role: 'Invisalign Patient',
    rating: 5,
    text: 'Absolutely the best dental experience I have ever had! The team is professional, kind, and made me feel completely at ease. My new smile is incredible.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
  },
  {
    name: 'Michael Park',
    role: 'Dental Implants',
    rating: 5,
    text: 'After years of avoiding dentists, Dr. Chen restored my confidence. The implant procedure was painless and the result feels completely natural.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    name: 'Priya Patel',
    role: 'Cosmetic Veneers',
    rating: 5,
    text: 'I cannot stop smiling! Dr. Hassan designed veneers that look so natural — my friends keep asking what changed. Highly recommended.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
  {
    name: 'James O\'Connor',
    role: 'Family Patient',
    rating: 5,
    text: 'Our whole family is treated here. The kids look forward to their visits — that says it all! Friendly, modern and gentle care.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    name: 'Amara Williams',
    role: 'Whitening Treatment',
    rating: 5,
    text: 'Quick, comfortable and a noticeable difference in just one session. The clinic itself feels more like a spa than a dental office!',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);
  const current = reviews[index];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-sky-500 to-teal-600" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 text-white"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur text-white text-xs font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold">
            Loved by 10,000+ Patients
          </h2>
          <div className="mt-4 inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/15 backdrop-blur">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
              ))}
            </div>
            <span className="text-sm font-semibold">4.9/5</span>
            <span className="text-sm text-white/80">• 1,284 Google Reviews</span>
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 sm:p-12 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-teal-500 opacity-30 mb-4" />
              <p className="text-lg sm:text-xl text-slate-800 dark:text-white leading-relaxed italic">
                “{current.text}”
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div className="flex-1">
                  <div className="font-bold text-slate-900 dark:text-white">{current.name}</div>
                  <div className="text-sm text-slate-500">{current.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${i === index ? 'bg-white w-8' : 'bg-white/40 w-2'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur text-white flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
