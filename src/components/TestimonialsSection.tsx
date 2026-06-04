export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Testimonials
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join countless happy clients who have grown their businesses with my solutions.
          </p>
        </div>
        
        {/* Placeholder for Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition-all">
            <p className="text-gray-300 italic mb-6">"Ashutosh is an exceptional engineer. He completely revamped our deployment pipeline, resulting in zero downtime and much faster releases."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full"></div>
              <div>
                <h5 className="font-bold text-white">Jane Doe</h5>
                <span className="text-sm text-gray-500">CTO, TechCorp</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-sm hover:bg-white/10 transition-all">
            <p className="text-gray-300 italic mb-6">"The best full stack developer we've worked with. Delivered our complex web application ahead of schedule and with perfect quality."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full"></div>
              <div>
                <h5 className="font-bold text-white">John Smith</h5>
                <span className="text-sm text-gray-500">Founder, StartupInc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
