import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Image from 'next/image'
import { Shield, LogOut, User, Settings, Server } from 'lucide-react'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Image 
                src="/images/logo.png" 
                alt="Guard-VPN Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <h1 className="text-white text-xl font-bold">Guard-VPN</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm">
                Welcome, {session.user?.name || session.user?.email}
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-8">Dashboard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <User className="text-blue-400 w-6 h-6" />
                <h3 className="text-white text-lg font-semibold">Profile</h3>
              </div>
              <p className="text-gray-300 text-sm mb-2">Name: {session.user?.name || 'Not provided'}</p>
              <p className="text-gray-300 text-sm">Email: {session.user?.email}</p>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Server className="text-green-400 w-6 h-6" />
                <h3 className="text-white text-lg font-semibold">VPN Status</h3>
              </div>
              <p className="text-gray-300 text-sm mb-2">Status: Disconnected</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Connect
              </button>
            </div>

            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="text-yellow-400 w-6 h-6" />
                <h3 className="text-white text-lg font-semibold">Settings</h3>
              </div>
              <p className="text-gray-300 text-sm mb-2">Server: Auto-select</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Configure
              </button>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-6 border border-white/20">
            <h3 className="text-white text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="text-gray-300">
              <p className="text-sm">No recent VPN connections</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
