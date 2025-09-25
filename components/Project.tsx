import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  project: {
    image: string;
    title: string;
    techstack: string;
    description: string;
    github: string;
    deployed?: string;
  };
}

export default function Project({ project }: ProjectProps) {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const},
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="text-white"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={cardVariants}
    >
      <div className="flex flex-col bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
        {/* Image (assuming it's a URL or placeholder) */}
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-mono mb-2 text-teal-400">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <p className="text-sm text-gray-300 mb-3">
          <span className="font-semibold">Tech Stack: </span>
          {project.techstack}
        </p>

        {/* Description */}
        <p className="text-gray-200 text-sm mb-4">{project.description}</p>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
          >
            GitHub
          </a>
          {project.deployed && (
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}