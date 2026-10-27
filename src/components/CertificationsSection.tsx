import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';

type Certification = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  imageUrl?: string;
};

// The CV imports this list so both views stay in sync.
// eslint-disable-next-line react-refresh/only-export-components
export const certifications: Certification[] = [
  {
    name: 'Sample: Web Development Fundamentals',
    issuer: 'Replace with certificate provider',
    date: 'Year',
    description: 'Placeholder entry — replace with your actual certificate details.',
    imageUrl: '/certificates/your-certificate.jpg',
    credentialUrl: 'https://...', // optional
  },
  {
    name: 'Sample: UI/UX Design Essentials',
    issuer: 'Replace with certificate provider',
    date: 'Year',
    description: 'Placeholder entry — replace with your actual certificate details.',
    imageUrl: '/certificates/your-certificate.jpg',
    credentialUrl: 'https://...', // optional
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Certifications
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Learning & Credentials
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Professional certifications and courses
          </p>
        </motion.div>

        {certifications.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((certification, index) => (
              <motion.article
                key={`${certification.name}-${certification.issuer}`}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card border-gradient rounded-2xl overflow-hidden"
              >
                {certification.imageUrl && (
                  <img
                    src={certification.imageUrl}
                    alt={`${certification.name} certificate`}
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-primary text-sm font-medium mb-2">{certification.date}</p>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {certification.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{certification.issuer}</p>
                  {certification.description && (
                    <p className="text-muted-foreground text-sm leading-relaxed mt-4">
                      {certification.description}
                    </p>
                  )}
                  {certification.credentialUrl && (
                    <a
                      href={certification.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-4"
                    >
                      View credential <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto text-center glass-card border-gradient rounded-2xl p-8">
            <Award className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">
              Certifications will be added here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificationsSection;
