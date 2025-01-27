"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/80 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Mohammed Habeeb ur Rahman
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.label.toLowerCase())}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/* Mobile menu */}
          <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.label.toLowerCase())
                    setIsOpen(false)
                  }}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

