import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Medal, Star, Award, Crown, Sparkles } from 'lucide-react';

const achievements = [
  {
    title: 'Dean\'s List',
    description: 'Academic excellence recognition for outstanding GPA',
    icon: Star,
    year: '2023',
    color: 'primary',
  },
  {
    title: 'Best UI/UX Design',
    description: 'First place in university hackathon design category',
    icon: Trophy,
    year: '2023',
    color: 'secondary',
  },
  {
    title: 'Leadership Award',
    description: 'Recognized for exceptional leadership as Class Representative',
    icon: Crown,
    year: '2023',
    color: 'primary',
  },
  {
    title: 'Journalism Excellence',
    description: 'Outstanding contributor to school publications',
    icon: Medal,
    year: '2022',
    color: 'secondary',
  },
  {
    title: 'Academic Scholar',
    description: 'Maintained scholarship status throughout Senior High',
    icon: Award,
    year: '2020-2022',
    color: 'primary',
  },
  {
    title: 'Tech Competition Finalist',
    description: 'Regional technology and innovation competition',
    icon: Sparkles,
    year: '2022',
    color: 'secondary',
  },
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = achievement.icon;
  const isPrimary = achievement.color === 'primary';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-6 border-gradient hover-lift h-full relative overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`absolute inset-0 ${isPrimary ? 'bg-primary/5' : 'bg-secondary/5'} rounded-2xl`}
        />
        
        {/* Sparkle effects */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className={`absolute top-4 right-4 w-6 h-6 ${isPrimary ? 'text-primary/30' : 'text-secondary/30'}`}
        >
          <Sparkles className="w-full h-full" />
        </motion.div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-14 h-14 rounded-xl ${isPrimary ? 'bg-primary/10' : 'bg-secondary/10'} flex items-center justify-center mb-4 ${isPrimary ? 'group-hover:glow-primary' : 'group-hover:glow-secondary'} transition-all duration-300`}
          >
            <Icon className={`w-7 h-7 ${isPrimary ? 'text-primary' : 'text-secondary'}`} />
          </motion.div>

          {/* Year badge */}
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${isPrimary ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} mb-3`}>
            {achievement.year}
          </span>

          {/* Title */}
          <h3 className="font-display text-xl font-semibold text-foreground mb-2">
            {achievement.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Bottom gradient line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-0 left-0 right-0 h-1 ${isPrimary ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-gradient-to-r from-secondary to-primary'} origin-left`}
        />
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" 
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
            Achievements
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Awards & Recognition
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Milestones and accomplishments throughout my academic journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Floating trophy decoration */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 text-primary/20"
        >
          <Trophy className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 text-secondary/20"
        >
          <Medal className="w-12 h-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;