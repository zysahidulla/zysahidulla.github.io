import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Cpu, Sparkles, MapPin, Calendar, GraduationCap, Mail, ExternalLink } from 'lucide-react';

const bioInfo = [
  { icon: Calendar, label: 'Age', value: '21 Years' },
  { icon: MapPin, label: 'Based in', value: 'Manila, PH' },
  { icon: GraduationCap, label: 'Studying', value: 'CompEng' },
  { icon: Mail, label: 'Email', value: 'hello@dev.com' },
];

const specializations = [
  { icon: Code2, title: 'Software', color: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Cpu, title: 'Hardware', color: 'from-orange-500/20 to-red-500/20' },
  { icon: Palette, title: 'Design', color: 'from-pink-500/20 to-rose-500/20' },
  { icon: Sparkles, title: 'AI Prompt', color: 'from-purple-500/20 to-indigo-500/20' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden bg-background">
      {/* --- AESTHETIC BACKGROUND ELEMENTS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT COLUMN: THE VISUAL HUB --- */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-20"
            >
              {/* Main Image Container */}
              <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-500/30 rounded-3xl rotate-6 scale-95 opacity-50 blur-sm group-hover:rotate-12 transition-transform duration-500" />
                <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/your-photo.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  {/* Glass Overlay on Image Bottom */}
                  <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <p className="text-white/80 text-sm italic font-light">"Code is my canvas, logic is my brush."</p>
                  </div>
                </div>

                {/* Floating Aesthetic Badges */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute -top-6 -right-6 p-4 glass-card rounded-2xl border-white/20 shadow-xl hidden md:block"
                >
                  <Sparkles className="text-yellow-400 w-6 h-6" />
                </motion.div>
                
                <motion.div 
                   animate={{ y: [0, 10, 0] }}
                   transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                   className="absolute -bottom-4 -left-8 p-4 glass-card rounded-2xl border-white/20 shadow-xl hidden md:block"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-xs font-medium uppercase tracking-tighter text-muted-foreground">Available for work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: THE CONTENT --- */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-2">Portfolio 2026</h4>
              <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 tracking-tight">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Myself</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                I'm a multidisciplinary developer focused on crafting <span className="text-foreground font-medium underline decoration-primary/30">high-fidelity</span> digital products. I bridge the gap between complex engineering and human-centric design.
              </p>
            </motion.div>

            {/* Bio Info Grid (Bento Style) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {bioInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * i }}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] transition-colors group text-center"
                >
                  <info.icon className="w-5 h-5 mx-auto mb-2 text-primary/60 group-hover:text-primary transition-colors" />
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-sm font-semibold truncate">{info.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Specialization Pills */}
            <div className="flex flex-wrap gap-3">
              {specializations.map((spec, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-gradient-to-r ${spec.color} backdrop-blur-md`}
                >
                  <spec.icon size={14} className="text-foreground" />
                  <span className="text-xs font-bold uppercase tracking-wider">{spec.title}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA / Resume Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="pt-6 flex flex-wrap gap-6 items-center"
            >
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all flex items-center gap-2 group">
                Download Resume
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                    {i === 3 ? '+15' : 'JS'}
                  </div>
                ))}
                <span className="pl-6 text-sm text-muted-foreground self-center italic">Technologies mastered</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;