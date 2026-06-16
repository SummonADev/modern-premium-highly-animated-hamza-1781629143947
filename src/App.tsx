import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Dentists from '@/components/Dentists';
import BeforeAfter from '@/components/BeforeAfter';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import Loader from '@/components/Loader';

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const stored = localStorage.getItem('bs-dark');
    if (stored === '1') setDark(true);
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bs-dark', '1');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bs-dark', '0');
    }
  }, [dark]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Services />
        <About />
        <Dentists />
        <Testimonials />
        <BeforeAfter />
        <Booking />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
