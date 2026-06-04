import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Bio Column */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold text-white mb-4 block">Ashutosh</span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Hello, this is Ashutosh. I'm a DevOps and Full Stack Engineer with 4 years of freelance experience, building and deploying complete applications with zero-downtime deployments.
            </p>
            <a href="mailto:contact@ashutosh.com" className="text-green-400 hover:underline text-sm font-medium">
              contact@ashutosh.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-green-400 transition-colors">Blogs</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-green-400 transition-colors">Projects</Link></li>
              <li><Link to="/tools" className="hover:text-green-400 transition-colors">Tools</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Me</Link></li>
            </ul>
          </div>

          {/* Site Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Site Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Me</Link></li>
              <li><Link to="/resume" className="hover:text-green-400 transition-colors">Resume</Link></li>
              <li><Link to="/policy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookies-policy" className="hover:text-green-400 transition-colors">Cookies Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-green-400 transition-colors">Disclaimer</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-green-400 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Latest Blogs */}
          <div>
            <h3 className="text-white font-semibold mb-4">Latest Blogs</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/blogs" className="group flex flex-col gap-1">
                  <span className="text-gray-200 group-hover:text-green-400 transition-colors line-clamp-2">How to Setup a CI/CD Pipeline</span>
                  <span className="text-xs text-gray-400">May 12, 2026</span>
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="group flex flex-col gap-1">
                  <span className="text-gray-200 group-hover:text-green-400 transition-colors line-clamp-2">Mastering Docker for Deployment</span>
                  <span className="text-xs text-gray-400">April 28, 2026</span>
                </Link>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ashutosh. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/Ashutosh2271" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/ashu._dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
