export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 border-b flex justify-between items-center">
        <h1 className="text-2xl font-bold">RankCraft</h1>
        <nav className="space-x-4">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold mb-4">The Ultimate SEO Tool</h2>
        <p className="text-lg text-gray-600 mb-6">Optimize. Rank. Grow.</p>
        <button className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800">
          Try it Free
        </button>
      </section>

      <footer className="p-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankCraft. All rights reserved.
      </footer>
    </main>
  );
}
