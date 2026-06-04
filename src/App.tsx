import { Navbar } from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects, About, Contact, Tools } from './pages/PlaceholderPages'
import { ReactLenis } from 'lenis/react'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()

  return (
    <ReactLenis root>
      <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-green-500/30 relative">
        {/* Global Background Grid */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
          
              </Routes>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </ReactLenis>
  )
}

export default App
