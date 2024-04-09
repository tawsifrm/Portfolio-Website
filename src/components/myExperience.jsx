import { motion } from "framer-motion";
import React, { useMemo, useState } from "react";
import WorkExperiences, { experiences } from "./Experiences";
import { scrollAnimation } from "./Pages/Home";
import Projects, { projects } from "./Projects";

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
      <motion.div className="flex flex-col md:flex-row justify-center px-6 space-y-3 md:space-y-0 md:space-x-4 rounded-md w-full">
        <TabNavButton name="work" title="Work" />
        <TabNavButton name="projects" title="Projects" />
      </motion.div>
    );
  };

  const TabNavButton = ({ name, title }) => (
    <motion.button
      className={`${
        tab === name
          ? "bg-indigo-500 text-white font-semibold"
          : "bg-white text-gray-500 hover:bg-slate-50 active:bg-indigo-50"
      } flex px-8 py-1 rounded-xl font-light drop-shadow-md hover:scale-105 active:scale-95 active:drop-shadow-sm transition-all duration-200`}
      onClick={() => setTab(name)}
      key={name + "button"}
    >
      <div>
        {title}{" "}
        <span
          className={`font-light text-xs self-end ${
            tab !== name ? "text-slate-400" : "text-white"
          }`}
        >
          {tabCounts[name]}
        </span>
      </div>
    </motion.button>
  );

  const Tab = ({ name }) => tabs[name]();

  return (
    <section className="bg-white">
      <div
        id="experiences"
        className="flex flex-col items-center px-8 py-16 md:p-16 space-y-8 text-gray-500"
      >
        <div className="flex flex-col text-center space-y-4 w-full">
          <motion.h1
            initial={scrollAnimation.initial}
            whileInView={scrollAnimation.whileInView}
            viewport={{ once: true }}
            className="text-3xl text-center font-semibold text-gray-700 mb-6"
          >
            My Experience.
          </motion.h1>
          <motion.p
            initial={scrollAnimation.initial}
            whileInView={scrollAnimation.whileInView}
            viewport={{ once: true }}
          >
            <span className="font-medium">My Tech Stack: </span>
            <span className="sm:gradient-text text-indigo-500 italic font-medium">
              Java, TypeScript, Python, HTML, CSS, JavaScript,
              ReactJS, NodeJS, ExpressJS, VueJS, AngularJS
            </span>
            <br />
            <span className="font-medium">Tools I've Used: </span>
            <span className="sm:gradient-text text-indigo-500 italic font-medium">
              Git and GitHub, Visual Studio, Figma, Android Studio, Jira, MS Office Suite, Azure
            </span>
          </motion.p>
          <TabNavigation />
        </div>

        <motion.div className="space-y-6">
          <Tab name={tab} />
        </motion.div>
      </div>
    </section>
  );
}
