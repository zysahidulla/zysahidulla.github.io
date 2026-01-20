import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
const navItems = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Experience',
  href: '#experience'
}, {
  name: 'Achievements',
  href: '#achievements'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Contact',
  href: '#contact'
}];
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.a href="#home" className="font-display text-2xl font-bold text-gradient-primary" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>zy.sahidulla</motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map(item => <li key={item.name}>
              <a href={item.href} className={`font-medium text-sm transition-all duration-300 animated-underline ${activeSection === item.href.slice(1) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {item.name}
              </a>
            </li>)}
        </ul>

        <motion.a href="#contact" className="hidden md:block px-5 py-2 rounded-full glass-card border-gradient text-sm font-medium text-primary hover:glow-primary transition-all duration-300" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          Let's Talk
        </motion.a>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>;
};
export default Navbar;