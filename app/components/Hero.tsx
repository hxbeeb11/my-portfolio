"use client"

import { useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import { FaDownload, FaChevronDown } from "react-icons/fa"
import type { Engine } from "tsparticles-engine"

interface TypedOptions {
  strings: string[]
  typeSpeed: number
  backSpeed: number
  loop: boolean
}

interface TypedJS {
  new (element: string, options: TypedOptions): unknown
}

declare global {
  interface Window {
    Typed: TypedJS
  }
}

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      new window.Typed("#typed-text", {
        strings: ["an AI Engineer", "a Web Developer", "a Freelancer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/Habeeb.pdf"
    link.download = "Habeeb.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToNextSection = () => {
    const experienceSection = document.getElementById("experience")
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
              },
              onHover: {
                enable: false,
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent bg-gradient-moving motion-safe:animate-shimmer"
        >
          Hi, I&apos;m Habeeb
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl mb-12"
        >
          I&apos;m  <span id="typed-text" className="text-blue-500"></span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-white font-semibold 
            hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center mx-auto"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          delay: 0.6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNextSection}
      >
        <FaChevronDown className="text-3xl text-blue-500 animate-bounce" />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
    </section>
  )
}

export default Hero

