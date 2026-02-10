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
            Discovery
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
        </motion.div>

        {/* --- NEW BIO & PHOTO SECTION --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-center">
          {/* Photo Column */}
          <motion.div 
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Decorative Animated Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background glass-card shadow-2xl">
                <img 
                  src="/your-photo.jpg" // REPLACE WITH YOUR IMAGE PATH
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Bio Info Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Personal Information</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {bioInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{info.label}</p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* --- END NEW SECTION --- */}

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