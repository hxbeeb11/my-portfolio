import "./globals.css"
import { Inter } from "next/font/google"
import NavBar from "./components/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Habeeb - Portfolio",
  description: "Professional portfolio showcasing my projects and skills",
  icons: {
    icon: '/cool.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} bg-gray-900 text-white overflow-x-hidden`}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

