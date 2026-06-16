import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

type Item = {
  title: string;
  before: string;
  after: string;
  category: string;
};

const items: Item[] = [
  {
    title: 'Teeth Whitening',
    category: 'Cosmetic',
    before: 'https://images.unsplash.com/photo-1581585504064-21b3f3e0ed7e?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
  },
  {
    title: 'Porcelain Veneers',
    category: 'Veneers',
    before: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=800&q=80',
  },
  {
    title: 'Smile Makeover',
    category: 'Makeovers',
    before: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
  },
  {
    title: 'Orthodontic Result',
    category: 'Orthodontics',
    before: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=800&q=80',
    after: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80',
  },
];

function CompareSlider({ before, after }: { before: string; after: string }) {
  const [pos, setPos] = useState<number>(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef<boolean>(false);

  const updateFromClientX = (clientX: number) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full h-80 rounded-2xl overflow-hidden select-none cursor-ew-resize"
      onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onMouseMove={(e) => { if (dragging.current) updateFromClientX(e.clientX); }}
      onTouchStart={(e: any) => { dragging.current = true; updateFromClientX(e.touches[0].clientX); }}
      onTouchEnd={() => { dragging.current = false; }}
      onTouchMove={(e: any) => { if (dragging.current) updateFromClientX(e.touches[0].clientX); }}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt="Before" className="absolute inset-0 h-full object-cover" style={{ width: ref.current ? ref.current.clientWidth : '100%' }} />
      </div>
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <span className="w-1 h-3 bg-teal-500 rounded-full" />
            <span className="w-1 h-3 bg-teal-500 rounded-full" />
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white text-xs font-semibold">BEFORE</div>
      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-teal-500 text-white text-xs font-semibold">AFTER</div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section id="results" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
            Before & After
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Real Results, <span className="gradient-text">Real Smiles</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Drag the slider to compare patient transformations from our top procedures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:shadow-2xl transition-all"
            >
              <CompareSlider before={item.before} after={item.after} />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{item.category}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 font-semibold">View Case</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
