import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Code2, Palette, Cpu, Sparkles, MapPin, Calendar, GraduationCap, Mail, ExternalLink } from 'lucide-react';

const images = [
  "photo1.jpg", // Replace with your image paths
  "photo2.jpg",
  "photo3.jpg"
];

const specializations = [
  { icon: Code2, title: 'Software Engineering', description: 'Building robust, scalable applications with clean architecture.' },
  { icon: Cpu, title: 'Computer Engineering', description: 'Understanding hardware-software integration and system-level programming.' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating intuitive, beautiful interfaces that users love.' },
  { icon: Sparkles, title: 'Prompt Engineering', description: 'Crafting precise AI prompts to unlock powerful generative capabilities.' },
];

const bioInfo = [
  { icon: Calendar, label: 'Age', value: '21 Years Old', color: 'from-blue-500/20' },
  { icon: MapPin, label: 'Location', value: 'Manila, PH', color: 'from-red-500/20' },
  { icon: GraduationCap, label: 'Education', value: 'BS CpE', color: 'from-purple-500/20' },
  { icon: Mail, label: 'Email', value: 'zysahidulla@gmail.com', color: 'from-emerald-500/20' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentImg, setCurrentImg] = useState(0);

  // Auto-change photo every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tight">
            About <span className="text-primary italic">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: PHOTO CAROUSEL */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
              {/* Animated Border Gradient */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-purple-500/20 to-transparent rounded-[2rem] blur-2xl group-hover:opacity-75 transition duration-1000" />
              
              <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden border border-white/10 shadow-2xl glass-card">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg}
                    src={images[currentImg]}
                    initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Photo Overlay indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 transition-all duration-500 rounded-full ${i === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: NARRATIVE & BENTO INFO */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <span className="h-8 w-1 bg-primary rounded-full" />
                The Creative Engineer
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I bridge the gap between <span className="text-foreground font-semibold">complex hardware systems</span> and 
                <span className="text-foreground font-semibold"> elegant software solutions</span>. Based in Manila, I focus 
                on crafting interfaces that aren't just usable—they're memorable.
              </p>
            </motion.div>

            {/* Aesthetic Bio Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {bioInfo.map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className={`group relative p-5 rounded-2xl bg-gradient-to-br ${info.color} to-transparent border border-white/5 overflow-hidden`}
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-background/50 backdrop-blur-md border border-white/10 text-primary shadow-sm group-hover:scale-110 transition-transform">
                      <info.icon size={22} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">{info.label}</p>
                      <p className="text-foreground font-semibold text-lg">{info.value}</p>
                    </div>
                  </div>
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} className="text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM: SPECIALIZATIONS */}
        <div className="mt-24 grid md:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="p-8 rounded-3xl border border-white/5 bg-secondary/20 hover:bg-primary/5 transition-colors group text-center md:text-left"
            >
              <spec.icon className="w-10 h-10 text-primary mb-6 mx-auto md:mx-0 group-hover:rotate-12 transition-transform" />
              <h4 className="text-xl font-bold mb-3">{spec.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;