import { Globe, GraduationCap } from 'lucide-react'

export function ToolsSection() {
  const tools = [
    {
      title: 'Domain Name Checker',
      description: 'Instantly check if your dream domain name is available. Find the perfect name for your next website or project — completely free.',
      icon: Globe,
      type: 'Developer'
    },
    {
      title: 'Percentage to CGPA',
      description: 'Convert your percentage marks to CGPA using standard conversion formulas for different educational boards.',
      icon: GraduationCap,
      type: 'Academic'
    },
    {
      title: 'CGPA to Percentage',
      description: 'Convert your CGPA to percentage marks for job applications, higher studies, and academic requirements.',
      icon: GraduationCap,
      type: 'Academic'
    }
  ]

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Explore My Tools
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explore All-in-One Toolkits
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col h-full border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all group cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center text-green-400">
                  <tool.icon size={20} />
                </div>
                <span className="text-xs font-semibold px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded uppercase tracking-wider">
                  {tool.type}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                {tool.title}
              </h4>
              <p className="text-gray-400 text-sm flex-grow mb-6">
                {tool.description}
              </p>
              <a href={`/tools/${tool.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold text-green-400 flex items-center gap-1">
                Try Now &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/tools" className="px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/10 backdrop-blur-xl transition-all">
            View All Tools
          </a>
        </div>
      </div>
    </section>
  )
}
