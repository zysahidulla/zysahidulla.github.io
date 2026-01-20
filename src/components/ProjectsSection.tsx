import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder, Code, Palette, Smartphone, Bot } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that leverages artificial intelligence to prioritize and organize your daily workflow. Features include automated scheduling, natural language processing for task creation, and intelligent deadline predictions.',
    tags: ['React', 'TypeScript', 'OpenAI', 'Tailwind', 'Node.js'],
    icon: Bot,
    github: '#',
    live: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive analytics dashboard for e-commerce platforms featuring real-time data visualization, machine learning predictions, and automated reporting. Built with a focus on performance and user experience.',
    tags: ['Next.js', 'PostgreSQL', 'Chart.js', 'Stripe', 'Redis'],
    icon: Code,
    github: '#',
    live: '#',
  },
  {
    title: 'Design System Library',
    description: 'A complete design system and component library for faster UI development. Includes fully customizable components, comprehensive documentation, and seamless integration with modern frameworks.',
    tags: ['Figma', 'React', 'Storybook', 'CSS', 'TypeScript'],
    icon: Palette,
    github: '#',
    live: '#',
  },
  {
    title: 'Mobile Fitness App',
    description: 'A cross-platform fitness tracking application with personalized workout plans, progress analytics, and social features. Utilizes machine learning for exercise form detection and adaptive training recommendations.',
    tags: ['React Native', 'Firebase', 'Redux', 'TensorFlow', 'Node.js'],
    icon: Smartphone,
    github: '#',
    live: '#',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="grid md:grid-cols-2 gap-8 items-center mb-20 last:mb-0"
    >
      {/* Left side - Icon Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
        className={`relative aspect-[4/3] rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center group hover-lift ${
          index % 2 === 1 ? 'md:order-2' : ''
        }`}
      >
        {/* Inner glow border */}
        <div className="absolute inset-4 rounded-xl border border-primary/10" />
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-500"
        >
          <Icon className="w-10 h-10 text-primary" />
        </motion.div>

        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
      </motion.div>

      {/* Right side - Content */}
      <div className={index % 2 === 1 ? 'md:order-1' : ''}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
          className="text-primary font-medium tracking-wider text-sm uppercase"
        >
          Featured Project
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="font-display text-2xl md:text-3xl font-bold mt-3 mb-6 text-foreground"
        >
          {project.title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
          className="glass-card rounded-xl p-6 border border-primary/10 mb-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
          className="flex items-center gap-4"
        >
          <motion.a
            href={project.github}
            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.live}
            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Live"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Things I've Built
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
