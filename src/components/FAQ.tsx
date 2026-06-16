import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  {
    q: 'How often should I visit the dentist?',
    a: 'We recommend a routine check-up and cleaning every six months. Some patients with specific needs may benefit from more frequent visits.',
  },
  {
    q: 'Do you accept dental insurance?',
    a: 'Yes — we accept most major dental insurance plans and will help you maximize your benefits. Please call us with your provider details.',
  },
  {
    q: 'Are your treatments painful?',
    a: 'Modern dentistry is very comfortable. We use gentle techniques, advanced anesthesia and sedation options to ensure a pain-free experience.',
  },
  {
    q: 'How long do dental implants last?',
    a: 'With proper care, dental implants can last a lifetime. The crown attached to the implant typically lasts 10–15+ years before needing replacement.',
  },
  {
    q: 'Do you offer financing or payment plans?',
    a: 'Absolutely. We offer flexible, interest-free financing plans so you can get the care you need without financial stress.',
  },
  {
    q: 'Is teeth whitening safe?',
    a: 'Yes, when performed by a dental professional. Our in-office whitening is FDA-approved and tailored to your enamel sensitivity.',
  },
  {
    q: 'What should I do in a dental emergency?',
    a: 'Call our 24/7 emergency hotline immediately. We provide same-day urgent appointments for severe pain, trauma or swelling.',
  },
  {
    q: 'Are children welcome at your clinic?',
    a: 'Definitely! We have dedicated pediatric dentists and a kid-friendly environment designed to make young patients feel relaxed.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white dark:bg-slate-950" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Quick answers to the questions our patients ask most often.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                >
                  <div className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center transition-colors ${isOpen ? 'bg-gradient-to-br from-teal-500 to-sky-400 text-white' : 'bg-teal-50 dark:bg-slate-800 text-teal-600 dark:text-teal-300'}`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="flex-1 font-semibold text-slate-900 dark:text-white">{item.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-teal-500' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-[72px] text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
