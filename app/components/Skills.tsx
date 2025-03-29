"use client"

import { motion } from "framer-motion"
import { 
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, 
  SiPython, SiTensorflow, SiScikitlearn, SiPandas,
  SiNumpy, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub, SiVercel, SiFirebase,
  SiNodedotjs, SiVite, SiBootstrap, SiFlask,
  SiC, SiPytorch, SiJupyter, SiMongodb,
  SiMysql, SiPostgresql, SiSupabase, 
  SiGooglecolab, SiR, SiHuggingface,
  SiRender, SiRailway
} from "react-icons/si"
import { BiLogoVisualStudio } from "react-icons/bi"
import { FaJava } from "react-icons/fa"

interface Skill {
  name: string
  icon: React.ReactNode
  category: "frontend" | "backend" | "ml" | "databases" | "tools"
}

const skills: Skill[] = [
  // Frontend
  { name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
  { name: "React", icon: <SiReact />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript />, category: "frontend" },
  { name: "HTML5", icon: <SiHtml5 />, category: "frontend" },
  { name: "CSS3", icon: <SiCss3 />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
  { name: "Bootstrap", icon: <SiBootstrap />, category: "frontend" },
  { name: "Vite", icon: <SiVite />, category: "frontend" },

  // Backend & Languages
  { name: "Python", icon: <SiPython />, category: "backend" },
  { name: "Java", icon: <FaJava />, category: "backend" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "backend" },
  { name: "Flask", icon: <SiFlask />, category: "backend" },
  { name: "C", icon: <SiC />, category: "backend" },
  { name: "R", icon: <SiR />, category: "backend" },

  // Machine Learning
  { name: "TensorFlow", icon: <SiTensorflow />, category: "ml" },
  { name: "PyTorch", icon: <SiPytorch />, category: "ml" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, category: "ml" },
  { name: "Pandas", icon: <SiPandas />, category: "ml" },
  { name: "NumPy", icon: <SiNumpy />, category: "ml" },
  { name: "Hugging Face", icon: <SiHuggingface />, category: "ml" },

  // Databases
  { name: "MongoDB", icon: <SiMongodb />, category: "databases" },
  { name: "MySQL", icon: <SiMysql />, category: "databases" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "databases" },
  { name: "Supabase", icon: <SiSupabase />, category: "databases" },
  { name: "Firebase", icon: <SiFirebase />, category: "databases" },

  // Development Tools
  { name: "Git", icon: <SiGit />, category: "tools" },
  { name: "GitHub", icon: <SiGithub />, category: "tools" },
  { name: "VS Code", icon: <BiLogoVisualStudio /> , category: "tools" },
  { name: "Jupyter", icon: <SiJupyter />, category: "tools" },
  { name: "Google Colab", icon: <SiGooglecolab />, category: "tools" },
  { name: "Vercel", icon: <SiVercel />, category: "tools" },
  { name: "Render", icon: <SiRender />, category: "tools" },
  { name: "Railway", icon: <SiRailway />, category: "tools" },
]

const categories = [
  { id: "frontend", name: "Frontend Development" },
  { id: "backend", name: "Backend & Languages" },
  { id: "ml", name: "Machine Learning & AI" },
  { id: "databases", name: "Databases" },
  { id: "tools", name: "Development Tools" },
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

