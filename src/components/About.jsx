import { motion } from "framer-motion";
import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function About() {

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              filter: 'blur(60px)',
              opacity: 0.1,
              animation: `pulse ${Math.random() * 10 + 10}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left column - Profile picture and title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative group w-fit mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur"></div>
              <div className="relative">
                <img 
                  src="/PFP.jpg" 
                  alt="Tawsif Mayaz" 
                  className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover border-4 border-white/10 group-hover:border-fuchsia-400/30 transition-all duration-300"
                />
              </div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-fuchsia-300">
                About Me
                <span className="text-fuchsia-400">.</span>
              </h1>
              <div className="h-1 w-16 bg-fuchsia-400 rounded-full mt-2 mx-auto lg:mx-0"></div>
              <p className="text-lg text-gray-300 mt-3">
                Computer Engineering Student @ University of Waterloo
              </p>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6 text-gray-300 leading-relaxed"
          >
            <div className="space-y-6 text-lg">
              <p>
                <span className="text-white font-medium">Hey there! 👋 I'm Tawsif Mayaz,</span> a Computer Engineering student at the University of Waterloo, passionate about leveraging technology to solve real-world challenges and create impactful software solutions.
              </p>
              <p>
                With hands-on experience in <span className="text-fuchsia-300 font-medium">full-stack development</span>, <span className="text-blue-300 font-medium">firmware programming</span>, and <span className="text-purple-300 font-medium">game design</span>, I enjoy working on projects that bridge the gap between innovative technology and practical application.
              </p>
              <p>
                I'm always excited to learn new tools and push the boundaries of what's possible. For me, engineering is all about <span className="text-white font-medium">creativity</span>, <span className="text-white font-medium">curiosity</span>, and <span className="text-white font-medium">collaboration</span>—and I can't wait to see what's next on this journey!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FiMail /> Get in Touch
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/Resume-public/Tawsif_Resume.pdf"
                download="Tawsif_Mayaz_Resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <FiDownload /> Download CV
              </motion.a>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/tawsifrm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FiGithub className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/tawsifrm" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.1; }
          100% { transform: scale(1.2); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
