import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Sparkles, Phone } from 'lucide-react';
import { cn, scrollToId } from '@/lib/utils';

type NavbarProps = { dark: boolean; setDark: (v: boolean) => void };

const links: { label: string; id: string }[] = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Dentists', id: 'dentists' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Results', id: 'results' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'glass shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:scale-110 transition-transform duration-300">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-slate-900 dark:text-white leading-none">Bright Smile</span>
            <span className="text-[10px] tracking-[0.2em] text-teal-600 dark:text-teal-400 font-medium">DENTAL CLINIC</span>
          </div>
        </button>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="relative px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-sky-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            {dark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => handleNav('booking')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-sky-400 text-white text-sm font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-105 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Book Appointment
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass border-t border-slate-200 dark:border-slate-800"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="w-full text-left px-3 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-teal-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('booking')}
                  className="w-full mt-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-500 to-sky-400 text-white text-sm font-semibold"
                >
                  Book Appointment
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
