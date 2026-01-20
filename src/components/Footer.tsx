import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#home"
            className="font-display text-xl font-bold text-gradient-primary"
            whileHover={{ scale: 1.05 }}
          >
            &lt;DEV/&gt;
          </motion.a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built with <Heart className="w-4 h-4 text-primary fill-primary" /> by Your Name
          </p>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
