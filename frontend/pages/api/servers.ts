import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const servers = await prisma.vpnServer.findMany({
        where: {
          isActive: true
        },
        select: {
          id: true,
          name: true,
          location: true,
          load: true,
          _count: {
            select: {
              connections: {
                where: {
                  status: 'CONNECTED'
                }
              }
            }
          }
        },
        orderBy: {
          load: 'asc'
        }
      })

      const serversWithLoad = servers.map(server => ({
        ...server,
        activeConnections: server._count.connections,
        loadPercentage: Math.min(server.load, 100)
      }))

      res.status(200).json(serversWithLoad)
    } catch (error) {
      console.error('Error fetching servers:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
