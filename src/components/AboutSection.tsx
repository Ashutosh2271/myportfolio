import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export function AboutSection() {
  const highlights = [
    "Full Stack Web Development",
    "Cloud Infrastructure & DevOps",
    "Database Architecture & Scaling",
    "API Design & Integration"
  ]

  return (
    <section className="py-24 bg-black relative border-t border-white/5">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.2)_0,transparent_60%)] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Text Content */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
              About Me
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              A passionate engineer crafting digital experiences.
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              I specialize in building robust, scalable applications from the ground up. Whether it's architecting a complex backend, deploying scalable infrastructure on AWS, or creating a beautiful React interface, I take pride in delivering high-quality, maintainable code.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              My goal is to bridge the gap between complex technical problems and elegant, user-friendly solutions. I am constantly exploring new technologies to ensure I bring the best tools to every project.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left max-w-2xl mx-auto">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 transition-colors group">
              View Full Resume 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
