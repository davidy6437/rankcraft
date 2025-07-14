// app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import { authOptions } from "@/lib/auth"

authOptions.providers = [
  EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
  }),
]

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
