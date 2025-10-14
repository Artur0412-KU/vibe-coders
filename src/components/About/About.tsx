import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      id='about'
      className="m-8 p-8 bg-black text-yellow-400 border border-yellow-400 shadow-[0_0_10px_#fef08a,0_0_20px_#fef08a,0_0_30px_#fef08a]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center mb-8">
        <motion.h1
          className="text-5xl uppercase tracking-[0.5rem] text-yellow-400"
          style={{ textShadow: '0 0 5px #facc15, 0 0 10px #facc15, 0 0 15px #facc15' }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Vibe Coders
        </motion.h1>
      </div>
      <div className="text-justify">
        <motion.p
          className="text-xl leading-relaxed mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We are the Vibe Coders, a team of digital rebels navigating the neon-drenched streets of the net. We sling code like spells, weaving intricate systems and dismantling digital fortresses. Our philosophy is simple: innovate, disrupt, and stay ahead of the curve.
        </motion.p>
        <motion.p
          className="text-xl leading-relaxed mb-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          In the sprawling metropolis of the web, we are the architects of the future, building tomorrow's reality one line of code at a time. Our ideas are born in the glow of monitor screens, fueled by synthwave beats and the relentless pursuit of perfection.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;
