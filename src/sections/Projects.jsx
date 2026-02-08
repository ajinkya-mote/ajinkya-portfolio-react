import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="glass-glow rounded-2xl p-6 relative"
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 rounded-t-2xl" />

            {/* Icon */}
            <div className="text-3xl mb-3">🚀</div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* Tech */}
            <p className="text-sm text-blue-600 mb-3">
              {project.tech}
            </p>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
