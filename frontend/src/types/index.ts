export interface User {
  id: string
  email: string
  name?: string
  plan: 'FREE' | 'PRO' | 'ENTERPRISE'
  createdAt: Date
  updatedAt: Date
}

export interface VpnServer {
  id: string
  name: string
  location: string
  ipAddress: string
  port: number
  publicKey: string
  isActive: boolean
  load: number
  activeConnections?: number
  loadPercentage?: number
}

export interface VpnConnection {
  id: string
  userId: string
  serverId: string
  clientKey: string
  status: 'CONNECTED' | 'DISCONNECTED' | 'CONNECTING' | 'ERROR'
  connectedAt?: Date
  disconnectedAt?: Date
  bytesIn: number
  bytesOut: number
}

export interface AuthResponse {
  user: User
  token: string
  sessionId: string
}

export interface ApiError {
  error: string
  message?: string
}
