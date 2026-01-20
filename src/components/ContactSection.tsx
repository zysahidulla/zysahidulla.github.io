import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="glass-card rounded-2xl p-8 border-gradient h-full">
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-2">
                Contact Information <Heart className="w-5 h-5 text-primary fill-primary" />
              </h3>
              
              <div className="space-y-6 mb-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">hello@yourname.dev</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Your City, Country</p>
                  </div>
                </motion.div>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: '#', label: 'GitHub' },
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg glass text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border-gradient">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  type="submit"
                  className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:glow-primary transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
