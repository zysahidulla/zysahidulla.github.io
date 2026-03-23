import { motion } from 'framer-motion';
import {
  Download,
  ArrowLeft,
  Mail,
  MapPin,
  Github,
  Star,
  Trophy,
  Crown,
  Medal,
  Award,
  Sparkles,
  Bot,
  Code,
  Palette,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const personalInfo = {
  name: 'Zy Sahidulla',
  title: 'Web Developer',
  email: 'zysahidulla@gmail.com',
  location: 'Manila, Philippines',
  summary:
    'Passionate web developer and Computer Engineering student with 2+ years of experience building modern, responsive web applications. Skilled in React, TypeScript, and full-stack development with a strong eye for UI/UX design.',
};

const education = [
  {
    institution: 'De La Salle University',
    degree: 'Bachelor of Science in Computer Engineering',
    period: '2022 – Present',
  },
  {
    institution: 'Malate Catholic School',
    degree: 'Senior High School – STEM Track',
    period: '2020 – 2022',
  },
];

const experience = [
  {
    role: 'Batch Legislator',
    organization: 'De La Salle University Student Government',
    period: '2023 – Present',
    bullets: [
      'Represented student body in legislative processes and policy discussions.',
      'Collaborated with teams to organize university-wide events and initiatives.',
    ],
  },
  {
    role: 'Class Representative',
    organization: 'De La Salle University',
    period: '2022 – 2023',
    bullets: [
      'Served as liaison between students and faculty.',
      'Led organization of class activities and academic support programs.',
    ],
  },
];

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  Frontend: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML/CSS'],
  'Backend & DB': ['Node.js', 'MongoDB', 'PostgreSQL'],
  'Tools & Design': ['Git', 'VS Code', 'Figma', 'Photoshop'],
};

const projects = [
  {
    title: 'The Adoption Pawtal',
    description:
      'A PHP/MySQL-powered web platform that digitizes Philippine animal shelter operations by centralizing pet records, medical tracking, and adoption workflows.',
    tags: ['SQL', 'PHP'],
    icon: Bot,
  },
  {
    title: 'Digital Clock',
    description:
      'A digital clock with a living background that mirrors the real world, cycling through sunrise, midday, and starry night animations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Code,
  },
  {
    title: 'A.R.T Money Changer Tracker',
    description:
      'A real-time financial dashboard that simplifies currency conversion and market tracking for USD, JPY, and PHP.',
    tags: ['HTML', 'CSS', 'Figma', 'JavaScript'],
    icon: Palette,
  },
  {
    title: 'Weather Analytics Dashboard',
    description:
      'A responsive web-based weather analytics dashboard visualizing real-time weather conditions, geographic data, and forecasts.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: Smartphone,
  },
];

const achievements = [
  {
    title: 'Class Salutatorian',
    description: 'Top 2 in the batch with academic excellence recognition',
    icon: Star,
    year: '2023',
  },
  {
    title: 'With Honors',
    description:
      'Consistent honor student throughout Elementary and High School',
    icon: Trophy,
    year: '2013-2019',
  },
  {
    title: 'With High Honors',
    description:
      'Consistent high honor student throughout Senior High School',
    icon: Crown,
    year: '2020-2023',
  },
  {
    title: 'Journalism Excellence',
    description:
      'Outstanding contributor to school publications as the Managing Editor',
    icon: Medal,
    year: '2023',
  },
  {
    title: 'Best in Conduct',
    description:
      'Maintained good conduct and discipline record throughout school years',
    icon: Award,
    year: '2019-2023',
  },
  {
    title: 'Best in Computer Subject',
    description:
      'Best in Computer Subject in Grade School, showcasing early passion for technology',
    icon: Sparkles,
    year: '2016',
  },
];

const handlePrint = () => {
  window.print();
};

const CV = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Toolbar */}
      <div className="print:hidden sticky top-0 z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm"
          >
            <Download size={16} />
            Download / Print CV
          </motion.button>
        </div>
      </div>

      {/* CV Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-[850px] mx-auto bg-card rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 px-10 py-10 border-b">
            <h1 className="text-4xl font-bold mb-1">{personalInfo.name}</h1>
            <p className="text-xl text-primary font-semibold mb-4">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Mail size={14} />
                {personalInfo.email}
              </span>

              <span className="flex items-center gap-2">
                <MapPin size={14} />
                {personalInfo.location}
              </span>

              <span className="flex items-center gap-2">
                <Github size={14} />
                github.com/zysahidulla
              </span>
            </div>
          </div>

          <div className="px-10 py-8 space-y-8">
            {/* Summary */}
            <section>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.summary}
              </p>
            </section>

            {/* Skills */}
            <section>
              <SectionTitle>Technical Skills</SectionTitle>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm">{category}</h4>
                    <p className="text-sm text-muted-foreground">
                      {items.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>Education</SectionTitle>
              {education.map((edu, i) => (
                <div key={i} className="flex justify-between">
                  <div>
                    <h4 className="font-semibold">{edu.institution}</h4>
                    <p className="text-sm text-muted-foreground">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
              ))}
            </section>

            {/* Experience */}
            <section>
              <SectionTitle>Leadership & Experience</SectionTitle>
              {experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold">{exp.role}</h4>
                      <p className="text-sm text-primary">
                        {exp.organization}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="list-disc ml-5 text-sm text-muted-foreground">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Projects */}
            <section>
              <SectionTitle>Notable Projects</SectionTitle>

              <div className="space-y-4">
                {projects.map((project, i) => {
                  const Icon = project.icon;

                  return (
                    <div key={i} className="flex gap-3">
                      <Icon size={18} className="text-primary mt-1" />

                      <div>
                        <h4 className="font-semibold">{project.title}</h4>

                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>

                        <div className="flex gap-2 mt-1 flex-wrap">
                          {project.tags.map((tag, j) => (
                            <span
                              key={j}
                              className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle>Awards & Achievements</SectionTitle>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => {
                  const Icon = a.icon;

                  return (
                    <div key={i} className="flex gap-3">
                      <Icon size={18} className="text-primary mt-1" />

                      <div>
                        <p className="font-semibold text-sm">
                          {a.title}{' '}
                          <span className="text-xs text-muted-foreground">
                            ({a.year})
                          </span>
                        </p>

                        <p className="text-sm text-muted-foreground">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-2 mb-3">
    {children}
  </h3>
);

export default CV;