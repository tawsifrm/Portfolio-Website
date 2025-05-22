import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export const projects = [
  {
    title: "TerraCustos",
    stack: ["React", "Mapbox", "Supabase", "GraphQL"],
    date: "Jan 2025",
    detail: "A real-time disaster reporting and visualization application with interactive map features. Integrated Supabase for authentication and real-time data synchronization, and utilized an external GraphQL API for live disaster event data.",
    link: "https://github.com/tawsifrm/OEC2025",
    github: "https://github.com/tawsifrm/OEC2025"
  },
  {
    title: "Handwriting Recognition API",
    stack: ["C++", "OpenCV", "Boost", "RESTful API"],
    date: "Oct 2024",
    detail: "A RESTful API for handwritten text recognition. Implemented token-based authentication, rate limiting with token bucket algorithm, and endpoints for image upload and text recognition with support for JSON and plain text formats.",
    link: "https://github.com/tawsifrm/Handwriting-Recognition-API",
    github: "https://github.com/tawsifrm/Handwriting-Recognition-API"
  },
  {
    title: "PTCG Dex",
    stack: ["React Native", "Pokemon TCG API"],
    date: "Sep 2024",
    detail: "A React Native mobile app that displays Pokemon trading cards using the Pokemon TCG API. Ensured seamless cross-platform functionality with React Native CLI for both Android and iOS platforms.",
    link: "https://github.com/tawsifrm/PTCG-Dex",
    github: "https://github.com/tawsifrm/PTCG-Dex"
  },
  {
    title: "Dynamic World Generation - WEC",
    stack: ["Python", "Turtle", "BFS"],
    date: "Jul 2024",
    detail: "Secured 1st place out of 124 participants at the Waterloo Engineering Competition by developing a Python-based world generation algorithm that utilized Breadth-First Search (BFS) and Dijkstra's algorithm for efficient pathfinding. Implemented Turtle graphics for an interactive visualization of the pathfinding process.",
    link: "https://github.com/tawsifrm/WEC-2024",
    github: "https://github.com/tawsifrm/WEC-2024"
  },
  {
    title: "Bricks Be Gone",
    stack: ["Java", "XML", "Android Studio"],
    date: "Jan 2024",
    detail: "A classic brick breaker game developed for Android using Java and Android Studio. Features dynamic gameplay, collision detection, scoring system, and smooth animations.",
    link: "https://github.com/tawsifrm/Bricks-Be-Gone",
    github: "https://github.com/tawsifrm/Bricks-Be-Gone"
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div 
        className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 transition-all duration-300 hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-500/10 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient highlight on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with title and links */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">
              {project.title}
            </h3>
            <div className="flex space-x-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                aria-label="View Project"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Date */}
          <span className="inline-block px-3 py-1 text-xs font-medium text-fuchsia-400 bg-fuchsia-500/10 rounded-full mb-4 w-fit">
            {project.date}
          </span>
          
          {/* Description */}
          <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
            {project.detail}
          </p>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {Array.isArray(project.stack) ? (
              project.stack.slice(0, 4).map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2.5 py-1 text-xs font-mono text-fuchsia-300 bg-white/5 rounded-full border border-white/5"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="px-2.5 py-1 text-xs font-mono text-fuchsia-300 bg-white/5 rounded-full border border-white/5">
                {project.stack}
              </span>
            )}
            {Array.isArray(project.stack) && project.stack.length > 4 && (
              <span className="px-2.5 py-1 text-xs font-mono text-gray-400 bg-white/5 rounded-full">
                +{project.stack.length - 4} more
              </span>
            )}
          </div>
        </div>
        
        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index % 3} // Stagger animation in groups of 3
            />
          ))}
        </AnimatePresence>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
    </section>
  );
}
