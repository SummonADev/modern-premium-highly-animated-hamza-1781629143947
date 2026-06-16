import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

type Dentist = {
  name: string;
  qualification: string;
  specialty: string;
  years: number;
  image: string;
};

const dentists: Dentist[] = [
  {
    name: 'Dr. Olivia Bennett',
    qualification: 'DDS, MS Orthodontics',
    specialty: 'Orthodontist & Invisalign Specialist',
    years: 14,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
  },
  {
    name: 'Dr. Marcus Chen',
    qualification: 'DMD, Implantology',
    specialty: 'Implant & Restorative Dentistry',
    years: 18,
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=600&q=80',
  },
  {
    name: 'Dr. Aaliyah Hassan',
    qualification: 'BDS, Cosmetic Dentistry',
    specialty: 'Smile Design & Veneers',
    years: 11,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80',
  },
  {
    name: 'Dr. Liam Rodriguez',
    qualification: 'DDS, Pediatric Dentistry',
    specialty: 'Children & Family Dentistry',
    years: 9,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
  },
];

export default function Dentists() {
  return (
    <section id="dentists" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
            Our Team
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Meet Our <span className="gradient-text">Expert Dentists</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            A team of board-certified specialists committed to caring for your smile with skill, gentleness and heart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dentists.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white">
                    <div className="text-xs uppercase tracking-wider text-teal-300">{d.years} years experience</div>
                    <h3 className="mt-1 text-xl font-bold">{d.name}</h3>
                    <p className="text-sm text-white/80">{d.qualification}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-16 group-hover:translate-x-0 transition-transform duration-500">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                    <button
                      key={idx}
                      className="w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-teal-600 hover:bg-teal-500 hover:text-white transition-colors"
                      aria-label="Social link"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="p-5 bg-white dark:bg-slate-900">
                <div className="text-sm font-semibold text-teal-600 dark:text-teal-400">{d.specialty}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
