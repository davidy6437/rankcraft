// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'  // adjust if not using path aliases

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
