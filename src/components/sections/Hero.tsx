import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Image 
            src="/images/logo.png" 
            alt="Guard-VPN Logo" 
            width={120} 
            height={120} 
            className="rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Secure Web-Based <span className="text-blue-600">VPN</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Access the internet securely with our browser-native VPN. 
          No downloads required - just instant, encrypted browsing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/signup" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Free Trial
          </Link>
          <Link href="/auth/signin" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
