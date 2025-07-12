import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'RankCraft',
  description: 'AI-powered SEO tools to rank higher, faster.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <header className="p-4 border-b flex justify-between items-center">
          <a href="/" className="text-xl font-bold">RankCraft</a>
          <nav className="space-x-4">
            {session ? (
              <>
                <a href="/dashboard" className="text-gray-700 hover:text-black">Dashboard</a>
                <a href="/api/auth/signout" className="text-red-500 hover:text-red-700">Sign Out</a>
              </>
            ) : (
              <a href="/signin" className="text-blue-600 hover:text-blue-800">Sign In</a>
            )}
          </nav>
        </header>
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
