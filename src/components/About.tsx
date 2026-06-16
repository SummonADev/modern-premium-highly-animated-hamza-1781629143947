import { motion } from 'framer-motion';
import { CheckCircle2, Award, Heart, Wallet, Sofa, Phone } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

const reasons: { title: string; desc: string; icon: any }[] = [
  { title: 'Experienced Dentists', desc: 'Board-certified specialists with decades of combined experience.', icon: Award },
  { title: 'Modern Equipment', desc: 'State-of-the-art digital imaging, lasers and 3D scanning.', icon: CheckCircle2 },
  { title: 'Personalized Care', desc: 'Treatment plans designed around your unique smile.', icon: Heart },
  { title: 'Affordable Plans', desc: 'Flexible financing and transparent, upfront pricing.', icon: Wallet },
  { title: 'Comfortable Environment', desc: 'Spa-inspired interiors and sedation options available.', icon: Sofa },
  { title: 'Emergency Support', desc: '24/7 hotline with same-day urgent appointments.', icon: Phone },
];

export default function About() {
  const c1 = useCountUp(10000);
  const c2 = useCountUp(25000);
  const c3 = useCountUp(15);
  const c4 = useCountUp(99);

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl h-48">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80" alt="Modern dental clinic" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80" alt="Dentist examining patient" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=600&q=80" alt="Smiling patient" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-48">
                  <img src="https://images.unsplash.com/photo-1581585504064-21b3f3e0ed7e?w=600&q=80" alt="Dental equipment" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold gradient-text">15+ Years</div>
                  <div className="text-xs text-slate-500">of Excellence</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Our Story of <span className="gradient-text">Caring Smiles</span>
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              At Bright Smile Dental, we believe great dental care starts with great relationships. Since 2009, our team has been committed to delivering compassionate, evidence-based care in a calm, welcoming environment — combining timeless craftsmanship with cutting-edge technology.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              Our mission is simple: help every patient achieve the smile they deserve, with honesty, expertise and warmth at every visit.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{r.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{r.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div ref={c1.ref} className="text-center p-8 rounded-3xl bg-gradient-to-br from-teal-500 to-sky-400 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl font-bold">{c1.value.toLocaleString()}+</div>
            <div className="text-sm mt-1 text-white/90">Patients Served</div>
          </div>
          <div ref={c2.ref} className="text-center p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text">{c2.value.toLocaleString()}+</div>
            <div className="text-sm mt-1 text-slate-500">Treatments Completed</div>
          </div>
          <div ref={c3.ref} className="text-center p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl font-bold gradient-text">{c3.value}+</div>
            <div className="text-sm mt-1 text-slate-500">Years in Practice</div>
          </div>
          <div ref={c4.ref} className="text-center p-8 rounded-3xl bg-gradient-to-br from-sky-500 to-teal-400 text-white shadow-xl hover:scale-105 transition-transform">
            <div className="text-4xl font-bold">{c4.value}%</div>
            <div className="text-sm mt-1 text-white/90">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
