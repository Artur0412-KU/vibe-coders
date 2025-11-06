import { motion } from 'framer-motion';
import './Team.css';
import IlyaImg from '../../assets/IMAGE 2025-10-14 22:23:18.jpg'
import AndriiImg from '../../assets/IMAGE 2025-10-14 22:29:38.jpg'
import ArturImg from '../../assets/IMAGE 2025-10-14 22:31:06.jpg'
import RomanImg from '../../assets/photo_2025-11-06 17.43.48.jpeg'

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
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
          variants={containerVariants}
        >
          {/* Team Member 1 */}
          <motion.div
            className="border-2 border-yellow-400  p-6 bg-opacity-50 hover:bg-black hover:text-yellow-400 transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400 ">
              <img
                src={IlyaImg}
                alt="JAX"
                className="w-32 h-48 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Vasylenko Illia</h2>
              <p className="text-yellow-400 mb-4 uppercase">Team leader</p>
              <div>
                <p>
                Born too late to explore the earth Born too soon to explore the galaxy
                </p>
                <p>Born just in time to be vibe coder</p> 
              </div>
              
            </div>
          </motion.div>
          {/* Team Member 2 */}
          <motion.div
            className="border-2 border-yellow-400  hover:text-yellow-400 p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400">
              <img
                src={AndriiImg}
                alt="CYRA"
                className="w-32 h-48 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Andrii Moroz</h2>
              <p className="text-yellow-400 mb-4 uppercase">Web developer</p>
              <p>
                The visionary who paints with pixels and light. Cyra crafts interfaces that are not only beautiful but also intuitive. She's the reason our tech feels alive.
              </p>
            </div>
          </motion.div>
          {/* Team Member 3 */}
          <motion.div
            className="border-2 border-yellow-400 hover:text-yellow-400 p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400">
              <img
                src={ArturImg}
                alt="ZERO"
                className="w-32 h-48 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Artur Kudyrko</h2>
              <p className="text-yellow-400 mb-4 uppercase">Web developer</p>
              <p>
                Worked as a React native developer. Developer and supported app called Mandi.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="border-2 border-yellow-400 hover:text-yellow-400 p-6 bg-opacity-50 hover:bg-black transition-all duration-300 transform hover:-translate-y-2"
            variants={itemVariants}
          >
            <div className="text-center hover:text-yellow-400">
              <img
                src={RomanImg}
                alt="ZERO"
                className="w-36 h-48 mx-auto mb-4 rounded-tl-lg"
              />
              <h2 className="text-2xl font-bold mb-2 uppercase">Roman Dotsenko</h2>
              <p className="text-yellow-400 mb-4 uppercase">.NET Engineer</p>
              <p>
                Developer who cuts the bullshit and gets things done.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

