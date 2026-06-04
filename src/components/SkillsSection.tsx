import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiRedux, 
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiPostgresql, SiMongodb, 
  SiGithubactions, SiTerraform, SiNginx, SiGit, SiLinux, SiFigma, 
  SiPostman, SiJest, SiVite 
} from 'react-icons/si'

export function SkillsSection() {
  const skills = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-white" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
    { name: "Django", icon: SiDjango, color: "text-[#092E20]" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
    { name: "Terraform", icon: SiTerraform, color: "text-[#7B42BC]" },
    { name: "Nginx", icon: SiNginx, color: "text-[#009639]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Linux", icon: SiLinux, color: "text-[#FCC624]" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
    { name: "Jest", icon: SiJest, color: "text-[#C21325]" },
    { name: "Vite", icon: SiVite, color: "text-[#646CFF]" }
  ]

  return (
    <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.1)_0,transparent_60%)] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-16">
        <div className="text-center">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
            My Skills
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Arsenal
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of the technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="w-full relative py-8 overflow-hidden flex">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex whitespace-nowrap gap-6 sm:gap-10 w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40
          }}
        >
          {/* Double the array to ensure seamless looping */}
          {[...skills, ...skills].map((skill, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-5 min-w-[200px] hover:bg-white/10 hover:scale-105 transition-all shadow-lg"
            >
              <skill.icon className={`w-8 h-8 flex-shrink-0 ${skill.color}`} />
              <span className="text-lg font-bold text-gray-200">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
