import { motion } from 'framer-motion'
import { ChevronRight, Sparkles } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      title: "Profertility Plus",
      description: "Fertility care platform providing advanced clinical treatments and telehealth consultations.",
      image: "/profertility.png",
      tags: ["HealthTech", "React", "Tailwind"],
      github: "#",
      demo: "https://www.profertilityplus.com/"
    },
    {
      title: "Appadvent",
      description: "Digital transformation and IT consulting services platform.",
      image: "/appadvent.png",
      tags: ["Next.js", "Tailwind", "Vercel"],
      github: "#",
      demo: "https://appadvent.in/"
    },
    {
      title: "Profertility Dashboard",
      description: "Secure patient and administration dashboard for Profertility Plus.",
      image: "/profertility_dashboard.png",
      tags: ["Dashboard", "React", "Authentication"],
      github: "#",
      demo: "https://account.profertility.com/"
    },
    {
      title: "Rehoboth Digitech Solution",
      description: "Professional IT services and digital solutions agency.",
      image: "/rehoboth.png",
      tags: ["Agency", "Next.js", "Framer Motion"],
      github: "#",
      demo: "https://www.rehobothdigitechsolution.com/"
    },
    {
      title: "Sky-SK Appadvent",
      description: "Specialized project instance by Appadvent.",
      image: "/skysk.png",
      tags: ["React", "IT Solutions"],
      github: "#",
      demo: "https://sky-sk.appadvent.in/"
    }
  ]

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08)_0,transparent_60%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-cyan-400 font-medium tracking-wide mb-4"
        >
          <Sparkles className="w-5 h-5" /> Happy Clients
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-4xl leading-tight"
        >
          Companies Chooses Me to Build & Deploy Their Products
        </motion.h2>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative py-4 overflow-hidden flex z-10">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-8 sm:w-24 lg:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 sm:w-24 lg:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex gap-6 sm:gap-8 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
          whileHover={{ animationPlayState: "paused" }} // Optionally pause on hover, though framer-motion doesn't support this natively with `animate`. We'll just let it slide.
        >
          {/* Double the array for seamless loop */}
          {[...projects, ...projects, ...projects].map((project, idx) => (
            <a 
              href={project.demo !== '#' ? project.demo : undefined}
              key={idx}
              className="group block bg-black rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 w-[280px] sm:w-[350px] md:w-[400px]"
            >
              {/* Image Container */}
              <div className="relative h-[220px] sm:h-[260px] w-full overflow-hidden rounded-3xl mb-5 border border-white/10 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className="flex items-start justify-between px-2">
                <div>
                  <h4 className="text-xl font-bold text-cyan-400 mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-medium">
                    {project.tags[0]}
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="text-gray-400 group-hover:text-cyan-400 transition-all group-hover:translate-x-1 duration-300 transform mt-1">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
