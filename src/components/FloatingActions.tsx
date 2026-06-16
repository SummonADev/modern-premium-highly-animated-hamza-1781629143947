import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp, X } from 'lucide-react';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState<boolean>(false);
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 480);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Bottom right stack */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              key="top"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <a
          href="tel:+15551234567"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 shadow-xl flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-sky-400 shadow-2xl shadow-teal-500/40 flex items-center justify-center text-white hover:scale-110 transition-transform"
          aria-label="Open chat"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!chatOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white text-[10px] font-bold text-white flex items-center justify-center">1</span>
          )}
        </button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-5 z-40 w-[320px] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
          >
            <div className="p-4 bg-gradient-to-r from-teal-500 to-sky-400 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Bright Smile Support</div>
                  <div className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                    Online — replies in a few minutes
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-3 max-h-72 overflow-y-auto bg-slate-50 dark:bg-slate-950">
              <div className="max-w-[80%] p-3 rounded-2xl bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                Hi! 👋 How can we help you today?
              </div>
              <div className="max-w-[80%] p-3 rounded-2xl bg-white dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                You can book an appointment, ask about pricing, or get advice on a procedure.
              </div>
            </div>
            <div className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input
                placeholder="Type a message…"
                className="flex-1 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-sky-400 text-white text-sm font-semibold">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
