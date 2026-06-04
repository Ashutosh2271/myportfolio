import { Server, LayoutTemplate, Sparkles } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      title: 'DevOps & Cloud',
      description: 'I engineer enterprise-grade cloud infrastructure ensuring high availability, zero-downtime deployments, and scalable orchestration tailored for peak performance.',
      icon: Server,
      tags: ['Docker', 'Terraform', 'Github Actions', 'AWS', 'K8s']
    },
    {
      title: 'Full Stack Development',
      description: 'I build responsive, modern, and high-performance web applications utilizing headless architectures, bespoke APIs, scalable databases, and premium UI/UX design.',
      icon: LayoutTemplate,
      tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind']
    },
    {
      title: 'AI Products Development',
      description: 'I integrate cutting-edge AI capabilities into your applications, engineering custom RAG pipelines, training private LLMs, and deploying autonomous agentic workflows.',
      icon: Sparkles,
      tags: ['Gemini API', 'OpenAI', 'LangChain', 'RAG', 'PyTorch']
    }
  ]

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
            My Services
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I Can Do For You?
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            I provide entire digital solutions, such as building websites from the ground up, deploying them with zero downtime deployments, creating e-commerce stores, developing mobile apps for iOS and Android, designing WordPress websites, and SEO services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-900/30 rounded-xl flex items-center justify-center mb-6 text-green-400">
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a href="/contact" className="text-green-400 font-medium text-sm hover:underline flex items-center gap-1">
                Acquire Service &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
