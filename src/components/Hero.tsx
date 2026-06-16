import { motion } from 'framer-motion';
import { Calendar, Phone, Star, Users, Award, ShieldCheck, Sparkles, Heart, Stethoscope } from 'lucide-react';
import { scrollToId } from '@/lib/utils';
import { useCountUp } from '@/hooks/useCountUp';

export default function Hero() {
  const patients = useCountUp(10000);
  const years = useCountUp(15);
  const rating = useCountUp(49);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-teal-300/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, -40, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-teal-100 dark:border-slate-700 shadow-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                Same-day emergency care available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white"
            >
              Creating <span className="gradient-text">Healthy</span>,<br />
              Beautiful <span className="gradient-text">Smiles</span><br />
              for Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              Advanced dental care with experienced professionals using the latest technology to keep your smile healthy and confident.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollToId('booking')}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-teal-500 to-sky-400 text-white font-semibold shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Appointment
              </button>
              <a
                href="tel:+15551234567"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <span className="relative w-3 h-3">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 pulse-ring" />
                  <span className="relative block w-3 h-3 rounded-full bg-emerald-500" />
                </span>
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div ref={patients.ref} className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">{patients.value.toLocaleString()}+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Happy Patients</div>
              </div>
              <div ref={years.ref} className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">{years.value}+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Years Experience</div>
              </div>
              <div ref={rating.ref} className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">{(rating.value / 10).toFixed(1)}/5</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Patient Rating</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Emergency Care</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-[520px]"
          >
            {/* Main circular image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[420px] h-[420px] max-w-full">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-teal-300/60"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-6 rounded-full border-2 border-dashed border-sky-300/60"
                />
                <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl shadow-teal-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80"
                    alt="Smiling patient at dental clinic"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 -left-2 glass rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">4.9/5</div>
                <div className="text-[10px] text-slate-500">1,284 Google Reviews</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-12 -right-2 glass rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-[220px]"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">10,000+</div>
                <div className="text-[10px] text-slate-500">Patients treated this year</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -right-4 glass rounded-2xl p-3 shadow-xl flex items-center gap-2"
            >
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <div className="text-xs font-semibold text-slate-900 dark:text-white">Certified Safe</div>
            </motion.div>

            {/* Floating icons */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-20 right-6">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-teal-500" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.7 }} className="absolute bottom-32 left-4">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-rose-400" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 5.5, repeat: Infinity, delay: 1.2 }} className="absolute top-0 right-1/3">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-sky-500" />
              </div>
            </motion.div>
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.3 }} className="absolute bottom-4 left-1/3">
              <div className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-500" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
