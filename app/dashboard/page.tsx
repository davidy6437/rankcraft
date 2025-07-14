import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return <div className="p-10 text-center"><h1 className="text-2xl">Please sign in to view the dashboard.</h1></div>
  }
  return <div className="p-10"><h1 className="text-3xl font-bold">Welcome back, {session.user?.email}!</h1></div>
}
