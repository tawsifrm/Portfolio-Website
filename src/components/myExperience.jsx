import { motion, AnimatePresence } from "framer-motion";
import React, { useMemo, useState } from "react";
import WorkExperiences, { experiences } from "./Experiences";
import { scrollAnimation } from "./Pages/Home";
import Projects, { projects } from "./Projects";
import { FiCode, FiTool, FiBriefcase, FiLayers } from "react-icons/fi";

const tabCounts = {
  work: experiences.length,
  projects: projects.length,
};

export default function Experiences() {
  const [tab, setTab] = useState("work");

  const tabs = useMemo(() => ({
    work: WorkExperiences,
    projects: Projects,
  }));

  // Tab navigation for each panel: work, projects
  const TabNavigation = () => {
    return (
      <motion.div 
        className="flex flex-wrap justify-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg w-full max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <TabNavButton name="work" title="Work Experience" icon={<FiBriefcase className="mr-2" />} />
        <TabNavButton name="projects" title="Projects" icon={<FiLayers className="mr-2" />} />
      </motion.div>
    );
  };

  const TabNavButton = ({ name, title, icon }) => (
    <motion.button
      className={`${
        tab === name
          ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
          : "bg-white/5 text-gray-300 hover:bg-white/10"
      } flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-95`}
      onClick={() => setTab(name)}
      key={name + "button"}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon}
      <span>{title}</span>
      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
        tab === name ? "bg-white/20" : "bg-black/10"
      }`}>
        {tabCounts[name]}
      </span>
    </motion.button>
  );

  const Tab = ({ name }) => tabs[name]();

  return (
    <section id="experience" className="bg-white py-16 md:py-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My Journey
            <span className="text-fuchsia-400">.</span>
          </h2>
          <div className="h-1 w-16 bg-fuchsia-400 rounded-full mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my professional experience and personal projects that highlight my skills and growth as a developer.
          </p>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-6 mb-12 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="space-y-6">
            {/* Languages */}
            <div>
              <div className="flex items-center mb-3">
                <FiCode className="text-indigo-600 text-lg mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'SQL', 'Objective-C', 'HTML/CSS'].map((item, index) => (
                  <span 
                    key={`lang-${index}`}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <div className="flex items-center mb-3">
                <FiLayers className="text-purple-600 text-lg mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'React Native', 'Next.js', 'Node', 'Express', 'Vue', 'Angular', 'Flask', 'OpenCV', 'Tailwind', 'D3.js', 'Three.js'].map((item, index) => (
                  <span 
                    key={`framework-${index}`}
                    className="px-3 py-1.5 bg-purple-50 text-purple-700 text-sm rounded-full border border-purple-100 hover:bg-purple-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <div className="flex items-center mb-3">
                <FiTool className="text-amber-600 text-lg mr-2" />
                <h3 className="text-lg font-semibold text-gray-800">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Unity', 'Azure Kinect SDK', 'PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'GraphQL', 'Git', 'Jira'].map((item, index) => (
                  <span 
                    key={`tool-${index}`}
                    className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm rounded-full border border-amber-100 hover:bg-amber-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative">
          <TabNavigation />
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <Tab name={tab} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
