// src/lib/auth.ts

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import EmailProvider from 'next-auth/providers/email'
import { PrismaClient } from '@prisma/client'
import { NextAuthOptions } from 'next-auth'

// Reuse Prisma client in development to avoid hot reload issues
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

const prisma = globalForPrisma.prisma ?? new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

if (!process.env.EMAIL_SERVER || !process.env.EMAIL_FROM) {
  throw new Error('Missing EMAIL_SERVER or EMAIL_FROM in environment variables')
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: {
    strategy: 'database',
  },
}
