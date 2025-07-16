import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Guard-VPN</h3>
            <p className="text-gray-400 mb-4">
              Secure web-based VPN service with browser-native encryption 
              and global server network.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white">Security</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/docs" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="/status" className="text-gray-400 hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Guard-VPN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
