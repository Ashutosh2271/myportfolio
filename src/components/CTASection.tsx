import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="py-24 bg-green-600 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-green-200 font-semibold tracking-wide uppercase text-sm mb-4">
          Available For Hire
        </h2>
        <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 leading-tight">
          Let's Create & Launch <br/> Your Next Big Idea
        </h3>
        <Link to="/contact" className="inline-block px-8 py-4 rounded-full bg-white text-green-700 font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl hover:scale-105 active:scale-95 transform duration-200">
          Contact Me
        </Link>
      </div>
    </section>
  )
}
