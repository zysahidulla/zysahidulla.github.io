import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

        <div className="hidden md:flex items-center gap-3">
          <Link to="/cv">
            <motion.span className="flex items-center gap-1.5 px-4 py-2 rounded-full glass-card border-gradient text-sm font-medium text-foreground hover:text-primary transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <FileText size={14} /> CV
            </motion.span>
          </Link>
          <motion.a href="#contact" className="px-5 py-2 rounded-full glass-card border-gradient text-sm font-medium text-primary hover:glow-primary transition-all duration-300" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden absolute top-full left-0 right-0 glass border-t border-primary/10"
        >
          <div className="container mx-auto px-6 py-6">
            <ul className="flex flex-col gap-4 mb-6">
              {navItems.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 font-medium text-sm transition-all duration-300 ${
                      activeSection === item.href.slice(1) 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col gap-3">
              <Link to="/cv" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.span className="flex items-center justify-center gap-1.5 px-4 py-3 rounded-full glass-card border-gradient text-sm font-medium text-foreground hover:text-primary transition-all duration-300" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <FileText size={14} /> CV
                </motion.span>
              </Link>
              <motion.a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-5 py-3 rounded-full glass-card border-gradient text-sm font-medium text-primary hover:glow-primary transition-all duration-300 text-center" 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>;
};
export default Navbar;