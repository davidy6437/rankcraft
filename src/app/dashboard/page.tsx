import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to RankCraft</h1>
      <p className="mb-6">Automate your SEO workflow. Production SaaS for UK & US markets.</p>
      <Link href="/signin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </Link>
    </main>
  );
}
