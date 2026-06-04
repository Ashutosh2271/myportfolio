export function Blogs() { return <div className="pt-24 min-h-screen text-center"><h1 className="text-3xl font-bold">Blogs Page</h1></div> }
export function Services() { return <div className="pt-24 min-h-screen text-center"><h1 className="text-3xl font-bold">Services Page</h1></div> }
import { AboutSection } from '../components/AboutSection'

export function About() { 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <AboutSection />
    </motion.div>
  )
}
import { ContactSection } from '../components/ContactSection'

export function Contact() { 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <ContactSection />
    </motion.div>
  )
}
import { motion } from 'framer-motion'
import { ProjectsSection } from '../components/ProjectsSection'
import { ToolsSection } from '../components/ToolsSection'

export function Projects() { 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <ProjectsSection />
    </motion.div>
  )
}

export function Tools() { 
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-20 min-h-screen"
    >
      <ToolsSection />
    </motion.div>
  )
}
