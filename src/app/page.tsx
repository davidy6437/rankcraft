export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to RankCraft 🧠</h1>
      <p className="text-lg text-gray-600 mb-8">
        Run your first SEO check in seconds – no account required.
      </p>
      <a
        href="/seo-check"
        className="bg-orange-600 text-white px-6 py-3 rounded-2xl text-lg shadow hover:bg-orange-700 transition"
      >
        Start SEO Check
      </a>
    </main>
  );
}
