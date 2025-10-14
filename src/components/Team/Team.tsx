import { motion } from 'framer-motion';
import './Team.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const titleVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Team() {
  return (
    <motion.div
      className="min-h-screen p-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 glitch"
          data-text="MEET OUR TEAM"
          variants={titleVariants}
        >
          MEET OUR TEAM
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
          variants={containerVariants}
        >
          {/* Team Member 1 */}
          <motion.div
            className="border-2 border-yellow-400  p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400 ">
              <img
                src="https://i.pravatar.cc/150?u=jax"
                alt="JAX"
                className="w-32 h-32 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2">JAX</h2>
              <p className="text-yellow-400 mb-4">LEAD DEVELOPER</p>
              <p className="">
                The architect of our digital fortress. Jax's code is clean, mean, and always on the cutting edge. He drinks neon-colored energy drinks and dreams in binary.
              </p>
            </div>
          </motion.div>
          {/* Team Member 2 */}
          <motion.div
            className="border-2 border-yellow-400 p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400">
              <img
                src="https://i.pravatar.cc/150?u=cyra"
                alt="CYRA"
                className="w-32 h-32 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2">CYRA</h2>
              <p className="text-yellow-400 mb-4">UI/UX DESIGNER</p>
              <p>
                The visionary who paints with pixels and light. Cyra crafts interfaces that are not only beautiful but also intuitive. She's the reason our tech feels alive.
              </p>
            </div>
          </motion.div>
          {/* Team Member 3 */}
          <motion.div
            className="border-2 border-yellow-400 p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400">
              <img
                src="https://i.pravatar.cc/150?u=zero"
                alt="ZERO"
                className="w-32 h-32 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2">ZERO</h2>
              <p className="text-yellow-400 mb-4">SYSTEMS ANALYST</p>
              <p>
                The ghost in the machine. Zero sees the patterns others miss, ensuring our systems are secure and efficient. He's a master of data and a whisper in the network.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

