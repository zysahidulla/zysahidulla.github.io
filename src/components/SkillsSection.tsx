import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const skills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', level: 70 },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', level: 80 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', level: 95 },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', level: 70 },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', level: 80 },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', level: 50 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', level: 75 },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', level: 80 },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', level: 100 },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg', level: 100 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', level: 75 },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', level: 100 },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', level: 80 },
  { name: 'MyPhpAdmin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', level: 75 },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', level: 70 },
  { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg', level: 75 },
  { name: 'Roblox Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/roblox/roblox-original.svg', level: 100 },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg', level: 100 },
  { name: 'Github', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', level: 75 },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const handleTouch = () => {
    setIsTouched(!isTouched);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.96 }}
      transition={{
        duration: 0.35,
        delay: index * 0.04,
        ease: 'easeOut'
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
        rotate: [0, -2, 2, 0],
        transition: { duration: 0.35, ease: 'easeOut' }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTouchStart={handleTouch}
      className="relative group"
      style={{ willChange: 'transform' }}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl glass-card border-gradient flex items-center justify-center p-4 transition-all duration-300 group-hover:glow-primary">
        <img 
          src={skill.icon} 
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Percentage tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={(isHovered || isTouched) ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute -top-16 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="glass rounded-xl px-4 py-2 border border-primary/30 glow-primary">
          <p className="text-foreground font-medium text-sm whitespace-nowrap">{skill.name}</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={(isHovered || isTouched) ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
              />
            </div>
            <span className="text-primary font-bold text-xs">{skill.level}%</span>
          </div>
        </div>
        <div className="w-3 h-3 bg-primary/20 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-primary/30" />
      </motion.div>

      {/* Floating particles on hover/touch */}
      {(isHovered || isTouched) && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: [0, (i - 1) * 18],
                y: [0, -20 - i * 8]
              }}
              transition={{ duration: 0.52, delay: i * 0.06, ease: 'easeOut' }}
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </>
      )}
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          y: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-8 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.12, 0.2, 0.12],
          y: [0, 12, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-16 right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={isInView ? { opacity: 1, letterSpacing: '0.2em' } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block"
          >
            Skills & Technologies
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Tools of the Trade
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Hover over the icons to see my proficiency level
          </p>
        </motion.div>

        {/* Skills grid with icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Decorative floating elements */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-4 h-4 rounded-full bg-primary/30 blur-sm"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-secondary/30 blur-sm"
        />
      </div>
    </section>
  );
};

export default SkillsSection;