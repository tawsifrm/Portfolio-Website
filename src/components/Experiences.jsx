import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export const experiences = [
  {
    title: "Software Developer Intern",
    company: "Cineplex Digital Media",
    stack: ["Unity", "C#", "Azure Kinect SDK", "React", "Flask", "Python", "D3.js", "Three.js", "SQLite"],
    detail:
      "Engineered Unity C# systems with Azure Kinect sensors for precise customer interaction tracking and built interactive 3D configuration platforms for retail spaces.",
    date: "May 2025 - Aug 2025",
    achievements: [
      "Enabled precise customer interaction tracking with Unity C# system and Azure Kinect sensors",
      "Cut product placement setup time by 60% through interactive 3D configuration platform",
      "Reduced layout inconsistencies by 25+ manual actions with ray-casting and grid-based placement",
      "Built full-stack analytics pipeline with React frontend and Flask REST API for 10,000+ events per session",
      "Automated data parsing with Python and generated 2D/3D interaction maps using D3.js and Three.js"
    ]
  },
  {
    title: "Full-stack Developer",
    company: "Electrium Mobility",
    stack: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
    detail:
      "Developed and deployed a scalable e-commerce platform for electric vehicle rentals with secure authentication and responsive design.",
    date: "Sep 2024 - Apr 2025",
    achievements: [
      "Developed and deployed scalable Next.js and Supabase e-commerce platform for electric vehicle rentals",
      "Architected secure authentication and authorization flows with Supabase Auth",
      "Designed responsive interface with Tailwind CSS, improving accessibility compliance",
      "Streamlined collaboration with Git/GitHub workflows, enabling faster iteration cycles"
    ]
  },
  {
    title: "Full-stack Development Intern",
    company: "Mhapy",
    stack: ["React", "TailwindCSS", "NestJS", "Express", "PostgreSQL", "Figma"],
    detail:
      "Integrated core functionalities for a patient-therapist matching website using React and Tailwind, driving a 30% increase in user engagement.",
    date: "Jan 2024 - Aug 2024",
    achievements: [
      "Integrated core features with React and Tailwind, boosting user engagement by 30%",
      "Boosted therapist recommendation accuracy by 25% with personalized matching flows using NestJS and Express",
      "Designed, maintained, and optimized PostgreSQL databases for 1,000+ active users",
      "Created interactive prototypes in Figma, accelerating iteration cycles on accessibility improvements",
      "Collaborated in Agile team of 7, delivering 10+ features through regular sprints"
    ]
  },
  {
    title: "Firmware Team Member",
    company: "UWOrbital",
    stack: ["C", "FreeRTOS", "I2C", "UART"],
    detail:
      "Developed real-time software and drivers for TI RM46 microcontroller in C and FreeRTOS.",
    date: "Jul 2023 - May 2024",
    achievements: [
      "Developed real-time software for TI RM46 microcontroller",
      "Implemented interrupt handling for temperature sensors",
      "Designed I2C-based sensor functions",
      "Developed UART data transmission systems"
    ]
  },
];

const WorkCard = ({ experience, index }) => {
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
        <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with title and company */}
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                {experience.company}
              </h3>
              <h4 className="text-lg text-gray-300">{experience.title}</h4>
            </div>
            {experience.link && (
              <a 
                href={experience.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="View Company"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          
          {/* Date */}
          <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full mb-4 w-fit">
            {experience.date}
          </span>
          
          {/* Description */}
          <p className="text-gray-300 mb-4 line-clamp-3">
            {experience.detail}
          </p>
          
          {/* Key Achievements */}
          <div className="mb-4">
            <h5 className="text-sm font-medium text-blue-300 mb-2">Key Achievements:</h5>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {experience.stack.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-xs font-mono text-blue-300 bg-white/5 rounded-full border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Animated border bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </motion.div>
  );
};

export default function Experiences() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <AnimatePresence>
        {experiences.map((experience, index) => (
          <WorkCard 
            key={`${experience.company}-${index}`}
            experience={experience}
            index={index % 3}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
