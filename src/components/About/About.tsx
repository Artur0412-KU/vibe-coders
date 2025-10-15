import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      id='about'
      className="m-8 p-8 bg-black text-yellow-400 border border-yellow-400 shadow-[0_0_10px_#fef08a,0_0_20px_#fef08a,0_0_30px_#fef08a]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-8">
        <motion.h1
          className="text-5xl uppercase tracking-[0.5rem] text-yellow-400"
          style={{ textShadow: '0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15' }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Vibe Coders
        </motion.h1>
      </div>
      <div className="text-justify">
        <motion.p
          className="text-xl leading-relaxed mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          United not by choice, but by pure luck our team is ready to vibe some good quality code.
Our ideas range from tic tac toe game to state-of-the-art diffusion models, the only limit is imagination (and a number of free trials of new LLMs)
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
