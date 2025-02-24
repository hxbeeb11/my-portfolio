"use client"

import { motion } from "framer-motion"
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"

interface ExperienceItem {
  title: string
  organization: string
  duration: string
  description: string
  type: "education" | "work"
  side: "left" | "right"
}

const experiences: ExperienceItem[] = [
  {
    title: "B.Tech in AI and Machine Learning",
    organization: "Usha Rama College of Engineering and Technology",
    duration: "2021 - 2025",
    description: "GPA: 7.45/10",
    type: "education",
    side: "left"
  },
  {
    title: "Data Science Intern",
    organization: "Zidio Development",
    duration: "Aug 2024 - Jul 2024",
    description: "Gained hands-on experience in data analysis, visualization, and machine learning using Python libraries like NumPy, Pandas, and Matplotlib, while exploring algorithms such as KNN and regression for predictive modeling.",
    type: "work",
    side: "right"
  },
  {
    title: "Machine Learning Intern",
    organization: "GGS Information Services India Pvt. Ltd.",
    duration: "Dec 2024 - Jan 2025",
    description: "Worked on the '3D Optimization' project, developing a system that converts engineering diagrams into fully-fledged 3D figures with precise measurements, and implemented a text-to-3D model generation system using machine learning techniques to enhance efficiency and accuracy in 3D modeling.",
    type: "work",
    side: "left"
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line - Hidden on mobile, shown on larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />
          
          {/* Experience items */}
          <div className="relative space-y-8 md:space-y-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-start mb-8 md:mb-16 ${
                  exp.side === "left" ? "md:justify-end" : "md:justify-start"
                } relative w-full`}
              >
                {/* Mobile timeline dot - Only shown on mobile */}
                <div className="absolute left-0 md:hidden flex items-center h-full">
                  <div className={`w-3 h-3 rounded-full ${
                    exp.type === "education" ? "bg-green-500" : "bg-purple-500"
                  }`} />
                  <div className="w-0.5 h-full bg-gray-700 absolute top-3 left-1.5 -z-10" />
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 pl-8 md:pl-0 ${
                  exp.side === "left" ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-xl backdrop-blur-lg bg-gray-800/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                    border border-gray-700/50 transition-all duration-300"
                    style={{
                      borderColor: exp.type === "education" ? "rgba(34, 197, 94, 0.5)" : "rgba(168, 85, 247, 0.5)"
                    }}
                  >
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                        ${exp.type === "education" ? "bg-green-500/20 text-green-400" : "bg-purple-500/20 text-purple-400"}`}>
                        {exp.type === "education" ? <FaGraduationCap size={20} /> : <FaBriefcase size={20} />}
                      </div>
                      <span className="text-sm font-medium text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{exp.title}</h3>
                    <p className={`${exp.type === "education" ? "text-green-400" : "text-purple-400"} mb-3 font-medium`}>
                      {exp.organization}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </motion.div>
                </div>

                {/* Desktop timeline dot - Only shown on larger screens */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${exp.type === "education" ? "bg-green-500" : "bg-purple-500"}`} />
                  <div className={`absolute w-8 h-8 rounded-full ${
                    exp.type === "education" ? "bg-green-500" : "bg-purple-500"
                  } opacity-20 animate-ping`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 