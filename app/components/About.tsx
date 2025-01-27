"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="prose prose-invert mx-auto"
        >
          <p>
            I&apos;m a passionate developer with a strong foundation in both web development and machine learning. Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning, I&apos;ve developed a deep understanding of modern technologies and their practical applications.
          </p>
          <p>
            My journey in tech has led me to explore various domains, from building responsive web applications to implementing machine learning models. I&apos;m particularly interested in creating solutions that combine both fields, leveraging AI to enhance web applications.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge my skills and creativity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

