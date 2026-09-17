import { motion } from 'framer-motion';
import { Download, ArrowLeft, Mail, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const personalInfo = {
  name: 'Zy Sahidulla',
  title: 'Software Engineer • Web Developer • UI/UX Designer',
  email: 'zysahidulla@gmail.com',
  location: 'Manila, Philippines',
  summary:
    'A Computer Engineering student focused on software engineering, web development, and user-centered design. Builds responsive interfaces and digital experiences that combine usability, performance, and clean visual design.',
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
    role: 'Assistant Vice President for Alliances',
    organization: 'De La Salle University - ACCESS',
    period: '2026 – Present',
    bullets: [
      'Established partnerships and collaborative opportunities to expand organizational reach and engagement.',
      'Facilitated cross-organizational relationships that supported member participation and network-building.',
    ],
  },
  {
    role: 'Director for Student Services & Welfare',
    organization: 'De La Salle University - Engineering College Government (ECG)',
    period: '2025 – 2026',
    bullets: [
      'Led student welfare and service initiatives to improve the college experience.',
      'Coordinated with stakeholders to address student concerns and implement campus support programs.',
    ],
  },
  {
    role: 'Batch Legislator',
    organization: 'De La Salle University - University Student Government',
    period: '2023 – 2025',
    bullets: [
      'Represented the student body in legislative discussions and policy development.',
      'Collaborated with student leaders to improve campus life and institutional support initiatives.',
    ],
  },
  {
    role: 'Class Representative',
    organization: 'De La Salle University',
    period: '2022 – 2023',
    bullets: [
      'Served as a liaison between students and faculty to support communication and academic coordination.',
      'Organized class activities and promoted student engagement and participation.',
    ],
  },
];

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
  Frontend: ['HTML/CSS', 'Tailwind CSS', 'Responsive Web Design'],
  'Backend & Data': ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  'UI/UX & Tools': ['Figma', 'Wireframing', 'Prototyping', 'Git', 'GitHub', 'VS Code'],
};

const projects = [
  {
    name: 'The Adoption Pawtal',
    tech: 'PHP, MySQL, UI/UX',
    description:
      'Built a full-stack shelter management platform that centralized pet records, adoption workflows, and health tracking for easier operations.',
  },
  {
    name: 'A.R.T Money Changer Tracker',
    tech: 'HTML, CSS, JavaScript, Figma',
    description:
      'Created a real-time financial dashboard focused on clear data presentation and intuitive currency conversion tools.',
  },
];

const achievements = [
  'Class Salutatorian – Academic Excellence (2023)',
  'With Honors – Consistent academic excellence (2013–2019)',
  'With High Honors – Senior High School (2020–2023)',
  'Student Leadership – University governance and service initiatives (2023–Present)',
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
          <div className="bg-gradient-to-r from-primary/20 to-purple-600/20 print:from-gray-100 print:to-gray-100 px-10 py-8 print:py-6 border-b border-border print:border-gray-300">

            <h1 className="text-4xl print:text-3xl font-display font-bold text-foreground print:text-gray-900 mb-1">
              {personalInfo.name}
            </h1>

            <p className="text-xl print:text-lg text-primary print:text-gray-700 font-semibold mb-3">
              {personalInfo.title}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-muted-foreground print:text-gray-600">

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

          <div className="px-10 py-6 space-y-6 print:space-y-4 print:text-gray-800">

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
  <h3 className="text-base font-display font-bold text-foreground print:text-gray-900 mb-2 pb-1.5 border-b border-border print:border-gray-300 uppercase tracking-wider text-xs">
    {children}
  </h3>
);

export default CV;