import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Cpu, Sparkles, MapPin, Calendar, GraduationCap, Mail } from 'lucide-react';

const specializations = [
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Building robust, scalable applications with clean architecture and modern technologies.',
  },
  {
    icon: Cpu,
    title: 'Computer Engineering',
    description: 'Understanding hardware-software integration and system-level programming.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
  },
  {
    icon: Sparkles,
    title: 'Prompt Engineering',
    description: 'Crafting precise AI prompts to unlock powerful generative capabilities.',
  },
];

const bioInfo = [
  { icon: Calendar, label: 'Age', value: '20 Years Old' },
  { icon: MapPin, label: 'Location', value: 'City, Country' },
  { icon: GraduationCap, label: 'Education', value: 'BS in Computer Science' },
  { icon: Mail, label: 'Email', value: 'your@email.com' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            My Journey & Background
          </h2>
        </motion.div>

        {/* --- NEW BIO & PHOTO SECTION --- */}
        {/* --- AESTHETIC BIO & PHOTO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-center">
          
          {/* Left Side: Glowing Photo Orbit */}
          <motion.div 
            className="lg:col-span-5 relative flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative p-2">
              {/* The "Orbit" Ring - Matches your image */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full border-t-2 border-primary/60 scale-110 blur-[2px] animate-[spin_3s_linear_infinite]" />
              
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-transparent shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0c] border-4 border-[#0a0a0c]">
                  <img 
                    src="/your-photo.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Dark Info Grid */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
               <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">Who am I?</span>
               <h3 className="text-4xl md:text-5xl font-bold font-display text-white">About Me</h3>
            </div>

            <h4 className="text-lg font-semibold mb-6 text-white/90">Personal Information</h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {bioInfo.map((info, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#0f0f13]/80 border border-white/5 backdrop-blur-md transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)]">
                    <info.icon size={22} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-0.5">
                      {info.label}
                    </span>
                    <span className="text-sm md:text-base font-medium text-white/90">
                      {info.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8 border-gradient">
              <h3 className="text-2xl font-bold mb-4 font-display">Bridging Code & Creativity</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a student passionate about technology and design, I'm on a mission to create 
                digital experiences that make a difference. My journey spans across multiple 
                disciplines, from writing efficient algorithms to designing pixel-perfect interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe that the best technology is invisible—it just works. Currently exploring the intersection of AI and human-centered design.
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Specializations */}
          <div className="grid sm:grid-cols-2 gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-xl p-6 border-gradient group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <spec.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {spec.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;