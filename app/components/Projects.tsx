"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa"
import { useState } from "react"

interface Project {
  title: string
  description: string
  image: string
  techStack: string[]
  githubLink?: string
  demoLink: string
}

const projects: Project[] = [
  {
    title: "WebMind - AI-Powered Web Search Assistant",
    description: "Built an LLM-powered search assistant combining DeepSeek/Llama with real-time web results. Implemented streaming APIs on Next.js for responsive, serverless delivery, and added query optimization with transparent reasoning via lightweight web scraping.",
    image: "/WebMind.png",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Together AI API (DeepSeek/Llama)", "Brave Search API", "Cheerio", "Vercel"],
    demoLink: "https://webmind-production.onrender.com/",
  },
  {
    title: "Idea Evaluator - AI Business Analysis Tool",
    description: "Shipped an AI tool using Google Gemini Pro to evaluate business ideas with structured reports. Generated charts with QuickChart and delivered a responsive UI with Tailwind/Framer, exposing secure REST APIs for AI orchestration and data processing.",
    image: "/Idea Evaluator.png",
    techStack: ["Next.js 14", "React", "Tailwind CSS", "Framer Motion", "Google Gemini Pro AI", "Node.js", "Nodemailer", "QuickChart API"],
    githubLink: "https://github.com/hxbeeb11/idea-evaluator",
    demoLink: "https://idea-evaluator-beryl.vercel.app/",
  },
  {
    title: "PromptVision - AI Chatbot & Image Generation Platform",
    description: "Built a dual-AI app: Cohere chat + Stability AI image generation in one interface. Implemented Clerk auth with role-based access and JWT in a type-safe TypeScript codebase, and delivered a polished UI with Shadcn and Framer Motion.",
    image: "/PromptVision.png",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Clerk Authentication", "Cohere API", "Stability AI", "Framer Motion", "Shadcn/UI"],
    githubLink: "https://github.com/hxbeeb11/PromptVision",
    demoLink: "https://prompt-vision.vercel.app/",
  },
  {
    title: "GATE AI - Advanced Adaptive Learning Platform",
    description: "Built an adaptive GATE prep platform powered by BERT and fine-tuned LLMs. Implemented dynamic difficulty progression and explanatory question generation, and delivered a scalable Flask REST API deployed with Gunicorn.",
    image: "/Gate AI.png",
    techStack: ["Python", "Flask", "HTML/CSS/JavaScript", "BERT", "Together AI/OpenAI APIs", "Supabase", "Render", "Gunicorn"],
    githubLink: "https://github.com/hxbeeb11/gate-ai",
    demoLink: "https://gate-ai.onrender.com/",
  },
]

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const toggleDescription = (title: string) => {
    setExpandedProject(prev => prev === title ? null : title)
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`flex flex-col lg:flex-row gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Preview Container */}
                <motion.div 
                  className="lg:w-1/2 relative h-[300px] rounded-xl overflow-hidden group-hover:shadow-2xl 
                  group-hover:shadow-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay with Live Preview Button */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent 
                    opacity-60 transition-opacity duration-300 group-hover:opacity-80 flex items-center justify-center">
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-500/90 hover:bg-blue-600/90 rounded-full 
                        flex items-center gap-2 text-white font-medium transform translate-y-4 
                        opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPlay className="text-sm" />
                      View Live Demo
                    </motion.a>
                  </div>
                </motion.div>

                {/* Content Container */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    whileHover={{ x: 10 }}
                  >
                    {project.title}
                  </motion.h3>

                  <div 
                    onClick={() => toggleDescription(project.title)}
                    className="cursor-pointer"
                  >
                    <p className={`text-gray-300 mb-6 leading-relaxed ${expandedProject === project.title ? '' : 'line-clamp-3'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700
                        hover:border-blue-500/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.githubLink && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 
                        border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <FaGithub className="text-xl" />
                        <span>Code</span>
                      </motion.a>
                    )}
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 
                      transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

