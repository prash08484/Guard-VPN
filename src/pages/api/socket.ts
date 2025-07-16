import { Server } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'
import { Server as NetServer } from 'http'

interface NextApiResponseServerIO extends NextApiResponse {
  socket: {
    server: NetServer & {
      io: Server
    }
  }
}

const SocketHandler = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      console.log('Client connected:', socket.id)

      socket.on('vpn-connect', (data) => {
        console.log('VPN connection request:', data)
        // Handle VPN connection logic here
        socket.emit('vpn-status', { status: 'connecting' })
        
        // Simulate connection process
        setTimeout(() => {
          socket.emit('vpn-status', { 
            status: 'connected',
            server: data.server,
            timestamp: new Date().toISOString()
          })
        }, 2000)
      })

      socket.on('vpn-disconnect', () => {
        console.log('VPN disconnection request')
        socket.emit('vpn-status', { status: 'disconnected' })
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected:', socket.id)
      })
    })
  }
  res.end()
}

export default SocketHandler
