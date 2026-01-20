import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Award, Users, School } from 'lucide-react';

const education = [
  {
    level: 'College',
    school: 'De La Salle University',
    period: '2022 - Present',
    description: 'Bachelor of Science in Computer Engineering with focus on software development, UI/UX design, and emerging technologies.',
    icon: GraduationCap,
  },
  {
    level: 'Senior High School',
    school: 'Malate Catholic School',
    period: '2020 - 2022',
    description: 'Completed Senior High School education with STEM track, developing strong foundations in science and technology.',
    icon: School,
  },
  {
    level: 'Junior High School',
    school: 'Malate Catholic School',
    period: '2016 - 2020',
    description: 'Completed Junior High School with academic excellence and active participation in extracurricular activities.',
    icon: School,
  },
  {
    level: 'Elementary',
    school: 'Malate Catholic School',
    period: '2010 - 2016',
    description: 'Built foundational knowledge and developed a passion for learning and technology.',
    icon: School,
  },
];

const experiences = [
  {
    title: 'Batch Legislator',
    organization: 'De La Salle University - Student Government',
    period: '2023 - Present',
    description: 'Serving as a legislative representative for the batch, advocating for student welfare and organizing academic initiatives.',
    icon: Users,
  },
  {
    title: 'Class Representative',
    organization: 'De La Salle University',
    period: '2022 - 2023',
    description: 'Elected as class representative in first year, bridging communication between students and faculty while organizing class activities.',
    icon: Award,
  },
  {
    title: 'Journalism Club Member',
    organization: 'Malate Catholic School',
    period: '2019 - 2022',
    description: 'Active member of the journalism club, contributing to school publications and developing writing and communication skills.',
    icon: Briefcase,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" 
      />
      <motion.div 
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" 
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
            Education & Experience
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            My Journey
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6" />
              Education
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
              
              {education.map((edu, index) => {
                const Icon = edu.icon;
                return (
                  <motion.div
                    key={edu.level}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1, type: 'spring' }}
                      className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary glow-primary"
                    />
                    
                    <motion.div
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      className="glass-card rounded-xl p-5 border-gradient hover-lift"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-medium text-primary uppercase tracking-wider">
                            {edu.period}
                          </span>
                          <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                            {edu.level}
                          </h4>
                          <p className="text-sm text-secondary font-medium mt-0.5">
                            {edu.school}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-2xl font-semibold text-primary mb-8 flex items-center gap-3"
            >
              <Briefcase className="w-6 h-6" />
              Leadership & Activities
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-primary to-transparent" />
              
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="relative pl-16 pb-8 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1, type: 'spring' }}
                      className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-secondary to-primary glow-secondary"
                    />
                    
                    <motion.div
                      whileHover={{ x: 10, transition: { duration: 0.2 } }}
                      className="glass-card rounded-xl p-5 border-gradient hover-lift"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div className="flex-1">
                          <span className="text-xs font-medium text-secondary uppercase tracking-wider">
                            {exp.period}
                          </span>
                          <h4 className="font-display text-lg font-semibold text-foreground mt-1">
                            {exp.title}
                          </h4>
                          <p className="text-sm text-primary font-medium mt-0.5">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;