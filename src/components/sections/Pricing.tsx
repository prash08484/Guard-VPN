import React from 'react'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      features: [
        "1 device connection",
        "3 server locations", 
        "5GB monthly bandwidth",
        "Basic encryption",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      features: [
        "5 device connections",
        "50+ server locations",
        "Unlimited bandwidth",
        "Advanced encryption",
        "24/7 priority support",
        "WebRTC leak protection"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29.99", 
      period: "/month",
      features: [
        "Unlimited devices",
        "100+ server locations",
        "Unlimited bandwidth",
        "Enterprise encryption",
        "Dedicated support",
        "Custom configurations",
        "Advanced analytics"
      ],
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for you. All plans include our core security features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-lg ${
                plan.popular 
                  ? 'bg-blue-600 text-white shadow-xl transform scale-105' 
                  : 'bg-white text-gray-900 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
