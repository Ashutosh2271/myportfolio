import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 relative">
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 p-[2px]">
              <div className="w-full h-full bg-black rounded-full overflow-hidden">
                {/* Placeholder for user image */}
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-xs">Me</div>
              </div>
            </div>
            <span className="font-bold text-xl text-white tracking-wide">Ashutosh</span>
          </div>
          
          {/* Centered Navigation Links */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`transition-colors px-3 py-2 text-sm font-medium ${link.name === 'Home' ? 'text-green-400' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="hidden md:flex items-center">
            <Link 
              to="/contact" 
              className="px-5 py-2.5 rounded-full bg-transparent border border-gray-700 text-white font-medium text-sm hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
              Let's Connect
            </Link>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 rounded-full bg-green-600 text-white font-medium text-base hover:bg-green-700 transition-colors shadow-sm"
              >
                Let's Connect
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
