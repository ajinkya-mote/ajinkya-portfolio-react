import { skills } from "../data/skills";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white"
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.12 }}
            className="
              glass-glow
              px-6 py-3
              rounded-full
              font-medium
              text-gray-800
              flex items-center gap-2
            "
          >
            <span className="text-blue-500 text-sm">●</span>
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
