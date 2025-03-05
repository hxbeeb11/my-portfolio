"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiMail, FiSend } from "react-icons/fi"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohdhabeeburrahman/",
      icon: <FaLinkedin className="text-2xl" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/hxbeeb11",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      name: "Email",
      url: "mailto:mohdhabeeburrahman11@gmail.com",
      icon: <FiMail className="text-2xl" />,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 
                  focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                  transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 
                  focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                  transition-all duration-300 backdrop-blur-sm"
                />
              </div>
              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700/50 
                  focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none
                  transition-all duration-300 backdrop-blur-sm resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-green-500
                text-white font-semibold flex items-center justify-center gap-2 
                hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300
                disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend className="text-lg" />
                  </>
                )}
              </motion.button>
              {submitStatus === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-12 space-y-8"
          >
            <div className="prose prose-invert">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Let&apos;s Connect</h3>
              <p className="text-gray-300">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 
                    group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 
                    transition-all duration-300">
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

