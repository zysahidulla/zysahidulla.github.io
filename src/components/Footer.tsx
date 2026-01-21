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
            zy.sahidulla
          </motion.a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built by <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Zy Sahidulla
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
