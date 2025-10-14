import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-black text-yellow-400 p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>&copy; 2025 Vibe Coders. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;