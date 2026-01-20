import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
const roles = ['Software Engineer', 'Computer Engineer', 'UI/UX Designer', 'Prompt Engineer'];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 1.5,
      ease: 'easeOut'
    }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 1.5,
      delay: 0.3,
      ease: 'easeOut'
    }} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gradient-white">Hi, I'm</span>{' '}
            <span className="text-gradient-primary glow-text">Zy Sahidulla</span>
          </motion.h1>

          {/* Roles */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-8">
            {roles.map((role, index) => <motion.span key={role} initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }} whileHover={{
            scale: 1.05,
            borderColor: 'hsl(var(--primary))'
          }} className="px-4 py-2 rounded-full glass-card text-sm md:text-base text-muted-foreground hover:text-primary transition-all duration-300">
                {role}
              </motion.span>)}
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">Basta info about me</motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.a href="#projects" className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg flex items-center gap-2 hover:glow-primary transition-all duration-300" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </motion.a>
            <motion.a href="#contact" className="px-8 py-4 rounded-full glass-card border-gradient font-semibold text-lg text-foreground hover:bg-muted/20 transition-all duration-300" whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
            {[{
            icon: Github,
            href: '#',
            label: 'GitHub'
          }, {
            icon: Linkedin,
            href: '#',
            label: 'LinkedIn'
          }, {
            icon: Mail,
            href: '#',
            label: 'Email'
          }].map(({
            icon: Icon,
            href,
            label
          }) => <motion.a key={label} href={href} aria-label={label} className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary hover:glow-primary transition-all duration-300" whileHover={{
            scale: 1.1,
            y: -4
          }} whileTap={{
            scale: 0.95
          }}>
                <Icon className="w-6 h-6" />
              </motion.a>)}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 1.5,
        repeat: Infinity
      }} className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>;
};
export default HeroSection;