import { motion } from 'framer-motion'
import { User, Mail, Phone, Calendar, Briefcase, MessageSquare, MapPin } from 'lucide-react'
import { SiGithub, SiInstagram, SiPatreon } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export function ContactSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    placeholder="Your Email *" 
                    className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Phone Number */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm"
                  />
                </div>

                {/* Book a Meeting */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Book a Meeting" 
                    className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm cursor-pointer"
                    onFocus={(e) => e.target.type = 'date'}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                  />
                </div>
              </div>

              {/* Select Services */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Briefcase className="w-5 h-5" />
                </div>
                <select className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm appearance-none">
                  <option value="" disabled selected>Select Services *</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="design">UI/UX Design</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>

              {/* Your Message */}
              <div className="relative">
                <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <textarea 
                  rows={6} 
                  placeholder="Your Message *" 
                  className="w-full bg-[#111111] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm resize-none"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3 mt-2">
                <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-600 bg-[#111111] checked:bg-cyan-500 focus:ring-cyan-500 focus:ring-offset-black accent-cyan-500" />
                <label htmlFor="terms" className="text-gray-400 text-sm">
                  I agree to the <a href="#" className="text-cyan-500 hover:underline">Terms of Use</a> and <a href="#" className="text-cyan-500 hover:underline">Privacy Policy</a>.
                </label>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button 
                  type="submit" 
                  className="bg-transparent border border-white/20 text-white font-medium px-8 py-3 rounded-full hover:bg-white/5 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#161616] rounded-[2rem] p-8 lg:p-10 shadow-xl border border-white/5"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/50 border border-white/5 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-gray-300 text-sm font-medium">Available For Hire</span>
            </div>

            {/* Profile Avatar */}
            <div className="mb-6 relative w-24 h-24">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-40"></div>
             
              <div className="absolute inset-0 z-0 text-blue-600 opacity-80" style={{ transform: 'scale(1.3)' }}>
                {/* Brush strokes mockup using SVG or pure CSS */}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                   <path d="M20,30 Q40,10 70,25 T90,60 T60,85 T15,70 Z" />
                </svg>
              </div>
            </div>

            {/* Intro Text */}
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              I would love to hear from you. Feel free to contact me and I'll get back to you.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">ashumaurya074@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">ashok nagar new delhi</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <SiPatreon className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href="https://github.com/Ashutosh2271" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <SiGithub className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/ashu._dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
