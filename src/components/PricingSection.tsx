import { Check } from 'lucide-react'

export function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      description: 'Cost-effective self-hosting setup.',
      features: [
        'VPS & Bare-Metal Setup',
        'Coolify/Panel Configuration',
        'Docker Compose Environments',
        'Domain & SSL Configuration',
        'Basic Server Maintenance',
        'Self-Hosted DB Deployment',
        'Standard Uptime Monitoring',
        'Cost-Effective Architecture',
        '2 Weeks Delivery',
        '15 Days Technical Support'
      ]
    },
    {
      name: 'Business',
      description: 'Scalable cloud architecture.',
      popular: true,
      features: [
        'Scalable AWS/Azure Architecture',
        'Microservices Deployment',
        'Automated Deployment Pipelines',
        'Database Replication Setup',
        'Load Balancing & CDN Setup',
        'Serverless Infrastructure',
        'Security Group Hardening',
        'Cost Optimization Audit',
        '1 Month Delivery',
        '1 Month Managed Support'
      ]
    },
    {
      name: 'Enterprise',
      description: 'Enterprise-grade cloud infrastructure.',
      features: [
        'Enterprise Cloud Migration',
        'Kubernetes (K8s) Orchestration',
        'Jenkins & GitHub Actions CI/CD',
        'Terraform Infrastructure as Code',
        'High Availability (HA) Setup',
        'Kubernetes (K8s) Services',
        'Zero-Downtime Deployments',
        'Advanced Security & IAM',
        '24/7 Infrastructure Monitoring',
        '2 Months SLA Support'
      ]
    }
  ]

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-400 font-semibold tracking-wide uppercase text-sm mb-2">
            Pricing Plans
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Discover My Services With the Best Pricing
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select from best plan, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white/5 backdrop-blur-xl rounded-2xl p-8 border ${plan.popular ? 'border-green-500 shadow-xl shadow-green-500/10 relative' : 'border-white/10 shadow-sm'}`}>
              {plan.popular && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </span>
              )}
              <h4 className="text-2xl font-bold text-white mb-2">{plan.name}</h4>
              <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-white/5">
                {plan.description}
              </p>
              <p className="text-sm font-semibold text-white mb-4">What you will get</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact" className={`block w-full text-center py-3 rounded-xl font-medium transition-colors border border-white/10 ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-white/5 text-white hover:bg-white/10'}`}>
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
