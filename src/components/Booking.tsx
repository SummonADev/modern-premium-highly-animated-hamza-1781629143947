import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle2, Stethoscope } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
};

const services = [
  'General Dentistry',
  'Teeth Cleaning',
  'Dental Implants',
  'Teeth Whitening',
  'Root Canal Treatment',
  'Orthodontics',
  'Invisalign',
  'Pediatric Dentistry',
  'Cosmetic Dentistry',
  'Veneers',
  'Crowns & Bridges',
  'Emergency Dental Care',
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
];

export default function Booking() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Store locally so it persists across refresh
    try {
      const existing = JSON.parse(localStorage.getItem('bs-bookings') || '[]');
      existing.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('bs-bookings', JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', date: '', time: '', notes: '' });
    }, 4000);
  };

  return (
    <section id="booking" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/40 to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
              Book a Visit
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Schedule Your <span className="gradient-text">Appointment</span>
            </h2>
            <p className="mt-5 text-slate-600 dark:text-slate-300 leading-relaxed">
              Booking with Bright Smile is quick and easy. Choose a time that suits you and our team will confirm your visit shortly.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: CheckCircle2, title: 'Flexible Scheduling', desc: 'Evening and weekend slots available.' },
                { icon: Stethoscope, title: 'Specialist Matching', desc: 'We match you with the right dentist for your needs.' },
                { icon: Clock, title: 'Same-Day Confirmation', desc: 'Receive confirmation within hours of booking.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-400/20 to-sky-400/20 blur-2xl rounded-3xl" />
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">Appointment Requested!</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    We will confirm your appointment shortly.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Quick Booking</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        required
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  <div className="relative mt-4">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div className="relative mt-4">
                    <Stethoscope className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <input
                        required
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <div className="relative">
                      <Clock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                      <select
                        required
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none"
                      >
                        <option value="">Pick a time…</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="relative mt-4">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Any notes for the dentist?"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-sky-400 text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    Request Appointment
                  </button>
                  <p className="mt-3 text-xs text-slate-500 text-center">
                    By booking, you agree to our terms and privacy policy.
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
