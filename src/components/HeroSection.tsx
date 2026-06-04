import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import computer from "../assets/animaion.json";
import { Hand, Settings, Briefcase } from 'lucide-react'

export function HeroSection() {
  const lottieContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lottieContainer.current) {
      const animation = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: computer,
      });
      return () => animation.destroy();
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="max-w-7xl mx-auto pt-30 pb-32 px-8 sm:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-16 relative min-h-[85vh]">

      {/* Left Column - Text Content */}
      <motion.div
        className="w-full md:w-[55%] flex flex-col items-start text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-xl shadow-sm">
          <Hand className="w-4 h-4 text-green-400" />
          <span className="text-gray-300 text-xs font-medium">Hi, I'm Ashutosh</span>
        </div>

        <motion.h1 
          className="text-2xl sm:text-2xl md:text-[1.75rem] lg:text-[3.25rem] xl:text-[2.75rem] font-bold text-white tracking-tight mb-6 leading-[1.2]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={textVariants} className="whitespace-nowrap inline-block">Ashutosh <span className="text-green-400">Full Stack Developer</span></motion.span>
          <br className="hidden md:block" />
          <motion.span variants={textVariants} className="text-3xl sm:text-4xl md:text-4xl lg:text-[2.75rem] text-gray-200 mt-2 block leading-[1.2]">Building Scalable & Reliable Systems</motion.span>
        </motion.h1>

        <motion.p 
          className="text-lg text-gray-400 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Hello, <strong className="text-white">I'm Ashutosh</strong>. I've been working as a Freelance Full Stack Developer for over 2 years building real-world web applications & handling everything from development to deployment. I enjoy working on systems that need to run smoothly, scale when traffic grows, & stay stable without downtime.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Link
            to="/about"
            className="px-8 py-3.5 rounded-full bg-transparent border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors shadow-sm"
          >
            Know More About Me
          </Link>
          <Link
            to="/projects"
            className="px-8 py-3.5 rounded-full bg-transparent border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            View My Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 transition-colors shadow-sm flex items-center gap-2"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Right Column - Image & Badges */}
      <motion.div
        className="w-full md:w-[45%] relative flex justify-center items-center mt-12 md:mt-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Background Blob / Brush stroke mock */}
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-[radial-gradient(circle_at_center,rgba(5,150,105,0.4)_0,transparent_60%)] z-0"></div>

        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-[0_0_40px_rgba(34,197,94,0.1)] flex items-center justify-center">
          <div ref={lottieContainer} className="w-full h-full object-cover scale-150" />
        </div>

        {/* Floating Badges */}
        <motion.div
          className="absolute top-4 left-0 sm:-left-4 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-xl z-20 backdrop-blur-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-2xl font-black text-green-400">2</span>
          <span className="text-xs text-gray-400 font-medium leading-tight">Years of<br />Experience</span>
        </motion.div>

        <motion.div
          className="absolute top-16 right-0 sm:-right-8 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3 shadow-xl z-20 backdrop-blur-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-2xl font-black text-white">10+</span>
          <span className="text-xs text-gray-400 font-medium leading-tight">Projects<br />Delivered</span>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-4 bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-20 backdrop-blur-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="text-xs text-gray-300 font-medium">Available for hire</span>
        </motion.div>

        <motion.div
          className="absolute bottom-4 right-12 bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-xl z-20 backdrop-blur-xl"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Settings className="w-4 h-4 text-green-400" />
          <Briefcase className="w-4 h-4 text-emerald-400" />
          <span className="text-xs text-gray-400">& more</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
