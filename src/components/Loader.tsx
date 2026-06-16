import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-24 h-24 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full bg-teal-500/20 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-500 to-sky-400 shadow-2xl shadow-teal-500/40 flex items-center justify-center">
            <Sparkles className="text-white w-10 h-10" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold gradient-text">Bright Smile Dental</h1>
          <p className="text-slate-500 text-sm mt-1">Preparing your smile journey…</p>
        </motion.div>
        <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full w-1/2 bg-gradient-to-r from-teal-500 to-sky-400"
          />
        </div>
      </div>
    </div>
  );
}
