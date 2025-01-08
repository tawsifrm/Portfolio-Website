import { motion } from "framer-motion";
import React from "react";
import { scrollAnimation } from "./Pages/Home";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center space-y-8 md:space-x-14 min-h-[25rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-500 px-8 py-16 md:p-16 z-[0]"
    >
      <motion.div
        initial={scrollAnimation.initial}
        whileInView={scrollAnimation.whileInView}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="max-w-5xl space-y-8 text-slate-50">
          <h1 className="font-bold text-3xl text-slate-100">About Me.</h1>
          <div className="text-lg space-y-6 font-light">
            <p>
              Hey there! 👋 I’m Tawsif Mayaz, a Computer Engineering student at the University of Waterloo, passionate about leveraging technology to solve real-world challenges and create impactful software solutions.
            </p>
            <p>
              With hands-on experience in full-stack development, firmware programming, and web design, I enjoy working on projects that bridge the gap between innovative technology and practical application. My journey has led me to develop intuitive user interfaces, optimize backend systems, and even build dynamic real-time software for microcontrollers.
            </p>
            <p>
              I’m skilled in languages like JavaScript, Python, C++, and Java, and I’ve worked with frameworks such as ReactJS, ThreeJS, and TensorFlow. Whether it’s creating animations with Framer Motion, prototyping in Figma, or optimizing databases with PostgreSQL, I’m always excited to learn new tools and push the boundaries of what’s possible.
            </p>
            <p className="text-xl font-semibold text-slate-100">
              For me, engineering is all about creativity, curiosity, and collaboration—and I can’t wait to see what’s next on this journey!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
