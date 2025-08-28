"use client"

import { motion } from "framer-motion"
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,
  SiPython, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub, SiFirebase,
  SiNodedotjs, SiVite, SiBootstrap, SiFlask,
  SiC, SiMongodb,
  SiPostgresql, SiSupabase,
  SiLinux, SiDocker, SiDjango, SiCreatereactapp
} from "react-icons/si"
import { FaJava, FaAws } from "react-icons/fa"

interface Skill {
  name: string
  icon: React.ReactNode
  category: "frontend" | "frameworks" | "languages" | "devops" | "databases"
}

const skills: Skill[] = [
  // Front-End
  { name: "HTML", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS", icon: <SiCss3 />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "React.js", icon: <SiReact />, category: "frontend" },

  // Frameworks & Libraries
  { name: "Node.js", icon: <SiNodedotjs />, category: "frameworks" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "frameworks" },
  { name: "Vite", icon: <SiVite />, category: "frameworks" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frameworks" },
  { name: "Bootstrap", icon: <SiBootstrap />, category: "frameworks" },
  { name: "Create React App", icon: <SiCreatereactapp />, category: "frameworks" },
  { name: "Flask", icon: <SiFlask />, category: "frameworks" },
  { name: "Django", icon: <SiDjango />, category: "frameworks" },

  // Programming Languages
  { name: "Python", icon: <SiPython />, category: "languages" },
  { name: "Java", icon: <FaJava />, category: "languages" },
  { name: "C", icon: <SiC />, category: "languages" },
  { name: "JavaScript", icon: <SiJavascript />, category: "languages" },

  // DevOps
  { name: "Linux", icon: <SiLinux />, category: "devops" },
  { name: "AWS", icon: <FaAws />, category: "devops" },
  { name: "Docker", icon: <SiDocker />, category: "devops" },
  { name: "Git", icon: <SiGit />, category: "devops" },
  { name: "GitHub", icon: <SiGithub />, category: "devops" },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, category: "databases" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "databases" },
  { name: "Supabase", icon: <SiSupabase />, category: "databases" },
  { name: "Firebase", icon: <SiFirebase />, category: "databases" },
]

const categories = [
  { id: "frontend", name: "Front-End" },
  { id: "frameworks", name: "Frameworks & Libraries" },
  { id: "languages", name: "Programming Languages" },
  { id: "devops", name: "DevOps" },
  { id: "databases", name: "Databases" },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={category.id}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8 text-blue-400"
              >
                {category.name}
              </motion.h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                      hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className="text-4xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <h4 className="text-base font-medium text-white group-hover:text-blue-300 transition-colors duration-300">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

