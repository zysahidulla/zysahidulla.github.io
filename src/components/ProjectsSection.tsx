import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Code, Palette, Smartphone, Bot } from 'lucide-react';

const projects = [
  {
    slug: 'logos-logic-simulator',
    title: 'Logos: Logic Simulator',
    description: 'A web-based logic circuit simulator that allows users to design, simulate, and visualize digital circuits using a variety of logic gates and components.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Bot,
    images: ['/logos1.png','/logos2.png'],
    github: 'https://github.com/zysahidulla/logos-sim',
    live: 'https://zysahidulla.github.io/logos-sim/',
  },
  {
    slug: 'digital-clock',
    title: 'Digital Clock',
    description: 'A digital clock that features a living background that mirrors the real world, cycling through sunrise, midday, and starry night animations based on the actual time of day.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Code,
    images: ['/projects/digital-clock.png'],
    github: 'https://github.com/zysahidulla',
    live: 'test',
  },
  {
    slug: 'art-money-changer-tracker',
    title: 'A.R.T Money Changer Tracker',
    description: 'A user-friendly, real-time financial dashboard that simplifies currency conversion and market tracking for USD, JPY, and PHP through live updates and interactive historical charts.',
    tags: ['HTML', 'CSS', 'Figma', 'JavaScript'],
    icon: Palette,
    images: ['/projects/art-money-changer.png'],
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'weather-analytics-dashboard',
    title: 'Weather Analytics Dashboard',
    description: 'A responsive web-based weather analytics dashboard that visualizes real-time weather conditions, geographic data, and environmental trends through interactive maps, charts, and forecasts for multiple Philippine cities.',
    tags: ['HTMl', 'CSS', 'JavaScript'],
    icon: Smartphone,
    images: ['/projects/weather-dashboard.png'],
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
];

const otherProjects = [
  {
    slug: 'mini-portfolio-builder',
    title: 'Mini Portfolio Builder',
    description: 'A lightweight portfolio generator for showcasing case studies and personal projects quickly.',
    tags: ['React', 'Tailwind'],
    icon: Code,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'ui-exploration-kit',
    title: 'UI Exploration Kit',
    description: 'A set of reusable design patterns and interface experiments focused on cleaner interactions.',
    tags: ['Figma', 'UI'],
    icon: Palette,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'local-weather-widgets',
    title: 'Local Weather Widgets',
    description: 'Small utility widgets for weather snapshots, quick checks, and city-based summaries.',
    tags: ['JavaScript', 'API'],
    icon: Smartphone,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'bot-experiments',
    title: 'Bot Experiments',
    description: 'Side experiments around workflow automation, chat interactions, and small task helpers.',
    tags: ['Automation', 'AI'],
    icon: Bot,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'analytics-snippets',
    title: 'Analytics Snippets',
    description: 'Compact dashboard widgets used to test visualizations and metrics layouts.',
    tags: ['Charts', 'CSS'],
    icon: Smartphone,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
  {
    slug: 'creative-landing-page',
    title: 'Creative Landing Page',
    description: 'A concept landing page exploring editorial layouts, motion, and polished branding.',
    tags: ['HTML', 'CSS'],
    icon: Palette,
    image: '/profile.png',
    github: 'https://github.com/zysahidulla',
    live: '#',
  },
];

export const allProjects = [...projects, ...otherProjects];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const Icon = project.icon;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = project.images ?? [];
  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const showPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
        className={`relative aspect-[4/3] rounded-2xl border border-primary/20 overflow-hidden group hover-lift ${
          index % 2 === 1 ? 'md:order-2' : ''
        }`}
      >
        {hasImages ? (
          <img
            src={images[currentImageIndex]}
            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
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
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={`Previous image for ${project.title}`}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/65 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              aria-label={`Next image for ${project.title}`}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/45 text-white flex items-center justify-center hover:bg-black/65 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, imageIndex) => (
                <button
                  key={`${project.title}-dot-${imageIndex}`}
                  type="button"
                  onClick={() => setCurrentImageIndex(imageIndex)}
                  aria-label={`Go to image ${imageIndex + 1} for ${project.title}`}
                  className={`h-2 rounded-full transition-all ${
                    imageIndex === currentImageIndex ? 'w-5 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
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
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View Live"
          >
            <ExternalLink className="w-6 h-6" />
          </motion.a>
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
          >
            View project
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

const OtherProjectCard = ({ project, index }: { project: (typeof otherProjects)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = project.icon;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full rounded-2xl border border-primary/10 bg-card/50 p-5 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)] hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
    >
      {project.image ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-primary/10 bg-primary/5">
          <img
            src={project.image}
            alt={`${project.title} thumbnail`}
            className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="mb-4 flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label={`View GitHub for ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        {!project.image && (
          <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Icon className="w-5 h-5" />
          </div>
        )}

        <div className="flex items-center gap-2 ml-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            aria-label={`View GitHub for ${project.title}`}
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            aria-label={`View live demo for ${project.title}`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="mb-3 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
      >
        View details →
      </Link>

      <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full border border-primary/15 bg-primary/5 text-[11px] uppercase tracking-[0.08em] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
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
            Works & Experiments
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Featured Projects
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-24 max-w-6xl mx-auto"
        >
          <div className="mb-10 text-center md:text-left">
            <span className="text-primary font-medium text-sm tracking-widest uppercase mb-3 block">
              Other Projects
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Small side builds
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {otherProjects.map((project, index) => (
              <OtherProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
