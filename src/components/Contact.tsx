import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('bs-messages') || '[]');
      existing.push({ ...form, createdAt: new Date().toISOString() });
      localStorage.setItem('bs-messages', JSON.stringify(existing));
    } catch {}
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-sky-50/50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-300 text-xs font-semibold tracking-wider uppercase">
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Have a question or want to learn more? Reach out — we usually respond within a few hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-4"
          >
            {[
              { icon: MapPin, title: 'Visit Us', text: '123 Smile Avenue, Suite 200\nNew York, NY 10001' },
              { icon: Phone, title: 'Call Us', text: '+1 (555) 123-4567\nMon–Sat • 8:00–19:00' },
              { icon: Mail, title: 'Email Us', text: 'hello@brightsmile.com\ncare@brightsmile.com' },
              { icon: Clock, title: 'Hours', text: 'Mon–Fri: 8AM–7PM\nSat: 9AM–5PM • Sun: Closed' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-teal-500 to-sky-400 flex items-center justify-center shadow-md">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{item.title}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 whitespace-pre-line mt-0.5">
                      {item.text}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
              <div className="h-64 w-full">
                <iframe
                  title="Bright Smile Dental Location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.0080%2C40.7100%2C-73.9900%2C40.7200&layer=mapnik"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
              <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-slate-900">
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                    <p className="mt-1 text-sm text-slate-500">We will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-4 mt-5">
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <input
                        required
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      rows={5}
                      className="mt-4 w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                    />
                    <button
                      type="submit"
                      className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-400 text-white font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:scale-[1.02] transition-all"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
