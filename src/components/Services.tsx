import { motion } from 'framer-motion';
import {
  Stethoscope, Sparkles, Activity, Smile, Syringe, Move,
  AlignCenter, Baby, Gem, Crown, Layers, Zap, ArrowRight
} from 'lucide-react';

type Service = {
  title: string;
  desc: string;
  icon: any;
  color: string;
};

const services: Service[] = [
  { title: 'General Dentistry', desc: 'Comprehensive routine care to maintain a healthy, vibrant smile.', icon: Stethoscope, color: 'from-teal-500 to-sky-400' },
  { title: 'Teeth Cleaning', desc: 'Professional cleanings that remove plaque and brighten teeth.', icon: Sparkles, color: 'from-sky-500 to-cyan-400' },
  { title: 'Dental Implants', desc: 'Permanent, natural-looking tooth replacement solutions.', icon: Activity, color: 'from-emerald-500 to-teal-400' },
  { title: 'Teeth Whitening', desc: 'Safe whitening treatments for a noticeably brighter smile.', icon: Smile, color: 'from-amber-400 to-orange-400' },
  { title: 'Root Canal Treatment', desc: 'Gentle, pain-free endodontic therapy that saves teeth.', icon: Syringe, color: 'from-rose-500 to-pink-400' },
  { title: 'Orthodontics', desc: 'Modern braces and aligners that straighten with confidence.', icon: Move, color: 'from-indigo-500 to-blue-400' },
  { title: 'Invisalign', desc: 'Nearly invisible clear aligners for discreet treatment.', icon: AlignCenter, color: 'from-cyan-500 to-blue-400' },
  { title: 'Pediatric Dentistry', desc: 'Caring, kid-friendly dental experiences from age 1+.', icon: Baby, color: 'from-pink-500 to-rose-400' },
  { title: 'Cosmetic Dentistry', desc: 'Personalized smile makeovers for a confident new you.', icon: Gem, color: 'from-purple-500 to-fuchsia-400' },
  { title: 'Veneers', desc: 'Ultra-thin porcelain shells that transform smiles instantly.', icon: Layers, color: 'from-violet-500 to-purple-400' },
  { title: 'Crowns & Bridges', desc: 'Restorative solutions to rebuild and protect your teeth.', icon: Crown, color: 'from-yellow-500 to-amber-400' },
  { title: 'Emergency Dental Care', desc: 'Same-day appointments when you need urgent relief.', icon: Zap, color: 'from-red-500 to-orange-400' },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Comprehensive Dental Care<br />
            <span className="gradient-text">Tailored to You</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            From routine check-ups to advanced cosmetic treatments, we offer a complete spectrum of dental services with the highest standards of care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-30 group-hover:scale-150 transition-all duration-700`} />

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.desc}
                </p>

                <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-teal-600 dark:text-teal-400 group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
