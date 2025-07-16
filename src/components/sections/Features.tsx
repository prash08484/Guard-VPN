import React from 'react'

const Features: React.FC = () => {
  const features = [
    {
      title: "Browser-Native Encryption",
      description: "Advanced encryption that works directly in your browser without any software installation.",
      icon: "🔐"
    },
    {
      title: "Global Server Network",
      description: "Connect to servers worldwide for optimal speed and access to geo-restricted content.",
      icon: "🌍"
    },
    {
      title: "Real-time Monitoring", 
      description: "Track your connection status, data usage, and security metrics in real-time.",
      icon: "📊"
    },
    {
      title: "Zero Logging Policy",
      description: "We don't track, store, or monitor your online activities. Your privacy is guaranteed.",
      icon: "🛡️"
    },
    {
      title: "WebRTC Protection",
      description: "Built-in protection against WebRTC leaks to ensure your real IP stays hidden.",
      icon: "🔒"
    },
    {
      title: "Cross-Platform",
      description: "Works on any device with a modern web browser. Desktop, mobile, tablet compatible.",
      icon: "📱"
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for secure, private browsing in a modern web interface.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
