import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const personalInfo = {
  name: 'Zy Sahidulla',
  title: 'Web Developer',
  email: 'zysahidulla@gmail.com',
  location: 'Manila, Philippines',
  summary:
    'Passionate Web Developer & Design and Computer Engineering student with 2+ years of experience building modern, responsive web applications. Skilled in HTML, CSS, JavaScript and full-stack development with a strong eye for UI/UX design.',
};

const education = [
  {
    institution: 'De La Salle University',
    degree: 'Bachelor of Science in Computer Engineering',
    period: '2022 – Present',
  },
  {
    institution: 'Malate Catholic School',
    degree: 'Senior High School – STEM',
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
      'Collaborated with USG & College Government to organize university-wide events and initiatives.',
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
  Frontend: ['HTML/CSS', 'React'],
  'Backend & DB': ['Node.js', 'MongoDB', 'PostgreSQL'],
  'Tools & Design': ['Git', 'VS Code', 'Figma', 'Photoshop', 'Canva'],
};

const projects = [
  {
    name: 'The Adoption Pawtal',
    tech: 'SQL, PHP',
    description:
      'A PHP/MySQL-powered web platform that digitizes Philippine animal shelter operations by centralizing pet records, medical tracking, and adoption workflows.',
  },
  {
    name: 'Digital Clock',
    tech: 'HTML, CSS, JavaScript',
    description:
      'A digital clock with a living background that mirrors the real world, cycling through sunrise, midday, and starry night animations.',
  },
  {
    name: 'A.R.T Money Changer Tracker',
    tech: 'HTML, CSS, Figma, JavaScript',
    description:
      'A real-time financial dashboard that simplifies currency conversion and market tracking for USD, JPY, and PHP.',
  },
  {
    name: 'Weather Analytics Dashboard',
    tech: 'HTML, CSS, JavaScript',
    description:
      'A responsive web-based weather analytics dashboard visualizing real-time weather conditions, geographic data, and forecasts.',
  },
];

const achievements = [
  'Class Salutatorian – Academic Excellence (2023)',
  'With Honors – Consistent honor student throughout Elementary and High School (2013–2019)',
  'With High Honors – Senior High School (2020–2023)',
  'Journalism Excellence – Managing Editor, School Publications (2023)',
  'Best in Conduct – Maintained discipline record throughout school years (2019–2023)',
  'Best in Computer Subject – Grade School (2016)',
];

const handlePrint = () => {
  window.print();
};

const CV = () => {
  return (
    <div className="min-h-screen bg-background">

      {/* Toolbar */}
      <div className="print:hidden sticky top-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="font-medium">Back to Portfolio</span>
          </Link>

          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download / Print CV
          </motion.button>

        </div>
      </div>

      {/* CV Content */}
      <div className="container mx-auto px-6 py-12 print:p-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[850px] mx-auto bg-card print:bg-white rounded-2xl print:rounded-none shadow-2xl print:shadow-none overflow-hidden"
        >

          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 print:from-gray-100 print:to-gray-100 px-10 py-10 print:py-8 border-b border-border print:border-gray-300">

            <h1 className="text-4xl print:text-3xl font-display font-bold text-foreground print:text-gray-900 mb-1">
              {personalInfo.name}
            </h1>

            <p className="text-xl print:text-lg text-primary print:text-gray-700 font-semibold mb-4">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground print:text-gray-600">

              <span className="flex items-center gap-1.5">
                <Mail size={14}/> {personalInfo.email}
              </span>

              <span className="flex items-center gap-1.5">
                <MapPin size={14}/> {personalInfo.location}
              </span>

              <span className="flex items-center gap-1.5 print:hidden">
                <Github size={14}/> github.com/zysahidulla
              </span>

            </div>
          </div>

          <div className="px-10 py-8 space-y-8 print:space-y-6 print:text-gray-800">

            {/* Summary */}
            <section>
              <SectionTitle>Professional Summary</SectionTitle>
              <p className="text-muted-foreground print:text-gray-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </section>

            {/* Skills */}
            <section>
              <SectionTitle>Technical Skills</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:gap-2">

                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>

                    <h4 className="font-semibold text-foreground print:text-gray-900 text-sm mb-1">
                      {category}
                    </h4>

                    <p className="text-sm text-muted-foreground print:text-gray-600">
                      {items.join(' · ')}
                    </p>

                  </div>
                ))}

              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>Education</SectionTitle>

              <div className="space-y-4 print:space-y-3">

                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start gap-4">

                    <div>
                      <h4 className="font-semibold text-foreground print:text-gray-900">
                        {edu.institution}
                      </h4>

                      <p className="text-sm text-muted-foreground print:text-gray-600">
                        {edu.degree}
                      </p>
                    </div>

                    <span className="text-sm text-muted-foreground print:text-gray-500 whitespace-nowrap">
                      {edu.period}
                    </span>

                  </div>
                ))}

              </div>
            </section>

            {/* Experience */}
            <section>
              <SectionTitle>Leadership & Experience</SectionTitle>

              <div className="space-y-5 print:space-y-4">

                {experience.map((exp, i) => (
                  <div key={i}>

                    <div className="flex justify-between items-start gap-4 mb-1">

                      <div>
                        <h4 className="font-semibold text-foreground print:text-gray-900">
                          {exp.role}
                        </h4>

                        <p className="text-sm text-primary print:text-gray-600 font-medium">
                          {exp.organization}
                        </p>
                      </div>

                      <span className="text-sm text-muted-foreground print:text-gray-500 whitespace-nowrap">
                        {exp.period}
                      </span>

                    </div>

                    <ul className="list-disc list-inside text-sm text-muted-foreground print:text-gray-700 space-y-1 ml-1">

                      {exp.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}

                    </ul>

                  </div>
                ))}

              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionTitle>Notable Projects</SectionTitle>

              <div className="space-y-4 print:space-y-3">

                {projects.map((project, i) => (
                  <div key={i}>

                    <div className="flex items-baseline gap-2">

                      <h4 className="font-semibold text-foreground print:text-gray-900">
                        {project.name}
                      </h4>

                      <span className="text-xs text-primary print:text-gray-500 font-medium">
                        {project.tech}
                      </span>

                    </div>

                    <p className="text-sm text-muted-foreground print:text-gray-700">
                      {project.description}
                    </p>

                  </div>
                ))}

              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle>Awards & Achievements</SectionTitle>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 print:gap-y-1 text-sm text-muted-foreground print:text-gray-700">

                {achievements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary print:text-gray-400 mt-1">•</span>
                    {a}
                  </li>
                ))}

              </ul>

            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-lg font-display font-bold text-foreground print:text-gray-900 mb-3 pb-2 border-b border-border print:border-gray-300 uppercase tracking-wider text-sm">
    {children}
  </h3>
);

export default CV;