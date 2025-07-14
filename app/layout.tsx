import './globals.css'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <header className="p-4 border-b flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">RankCraft</Link>
          <nav className="space-x-4">
            {session ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-black">Dashboard</Link>
                <Link href="/api/auth/signout" className="text-red-500 hover:text-red-700">Sign Out</Link>
              </>
            ) : (
              <Link href="/signin" className="text-blue-600 hover:text-blue-800">Sign In</Link>
            )}
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  )
}
