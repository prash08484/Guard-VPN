import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function AuthError() {
  const router = useRouter()
  const { error } = router.query

  const getErrorMessage = (error: string | string[] | undefined) => {
    if (typeof error !== 'string') return 'An unknown error occurred'
    
    switch (error) {
      case 'Configuration':
        return 'There is a problem with the server configuration.'
      case 'AccessDenied':
        return 'Access denied. You do not have permission to sign in.'
      case 'Verification':
        return 'The verification token has expired or has already been used.'
      case 'Default':
        return 'An error occurred during authentication.'
      default:
        return error
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/images/logo.png" 
                alt="Guard-VPN Logo" 
                width={80} 
                height={80} 
                className="rounded-xl"
              />
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Authentication Error</h2>
            <p className="text-gray-300 mb-6">Something went wrong during sign in</p>
            
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
              <p className="text-red-200 text-sm">{getErrorMessage(error)}</p>
            </div>

            <div className="space-y-4">
              <Link 
                href="/auth/signin"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 block text-center"
              >
                Try Again
              </Link>
              
              <Link 
                href="/"
                className="w-full bg-white/10 border border-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 block text-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
