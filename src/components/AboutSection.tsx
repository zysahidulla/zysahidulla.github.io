import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Cpu, Sparkles } from 'lucide-react';

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

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial opacity-50" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Bridging Code & Creativity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="glass-card rounded-2xl p-8 border-gradient hover-lift">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As a student passionate about technology and design, I'm on a mission to create 
                digital experiences that make a difference. My journey spans across multiple 
                disciplines, from writing efficient algorithms to designing pixel-perfect interfaces.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe that the best technology is invisible—it just works. That's why I focus 
                on creating solutions that are not only technically sound but also intuitive and 
                delightful to use.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently exploring the intersection of AI and human-centered design, working on 
                projects that push the boundaries of what's possible.
              </p>

              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </motion.div>
                <div className="w-px h-12 bg-border" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Exp.</div>
                </motion.div>
                <div className="w-px h-12 bg-border" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-center"
                >
                  <div className="text-3xl font-display font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </motion.div>
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
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-xl p-6 border-gradient group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <spec.icon className="w-6 h-6 text-primary" />
                </motion.div>
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
