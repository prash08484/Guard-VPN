import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    try {
      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }

      // Generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email,
          plan: user.plan 
        },
        process.env.JWT_SECRET!,
        { expiresIn: '7d' }
      )

      // Create session
      const session = await prisma.session.create({
        data: {
          sessionToken: token,
          userId: user.id,
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days
        }
      })

      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          plan: user.plan
        },
        token,
        sessionId: session.id
      })
    } catch (error) {
      console.error('Login error:', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
