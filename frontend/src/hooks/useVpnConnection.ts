import { useState } from 'react'

interface VpnServer {
  id: string
  name: string
  location: string
  loadPercentage: number
  activeConnections: number
}

interface ConnectionState {
  isConnected: boolean
  currentServer: VpnServer | null
  connectionTime: number
  bytesTransferred: number
}

export const useVpnConnection = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>({
    isConnected: false,
    currentServer: null,
    connectionTime: 0,
    bytesTransferred: 0
  })

  const [isConnecting, setIsConnecting] = useState(false)

  const connectToServer = async (server: VpnServer) => {
    setIsConnecting(true)
    try {
      // Simulate connection process
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setConnectionState({
        isConnected: true,
        currentServer: server,
        connectionTime: Date.now(),
        bytesTransferred: 0
      })
    } catch (error) {
      console.error('Connection failed:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = async () => {
    setIsConnecting(true)
    try {
      // Simulate disconnection process
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setConnectionState({
        isConnected: false,
        currentServer: null,
        connectionTime: 0,
        bytesTransferred: 0
      })
    } catch (error) {
      console.error('Disconnection failed:', error)
    } finally {
      setIsConnecting(false)
    }
  }

  return {
    connectionState,
    isConnecting,
    connectToServer,
    disconnect
  }
}
