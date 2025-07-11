export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">RankCraft</h1>
        <p className="text-lg text-gray-600 mb-6">
          SEO tools built for results — not dashboards.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800">
          Try it Free →
        </button>
      </section>

      {/* ===== Why Use RankCraft ===== */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Why RankCraft?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Short paragraph explaining your value — fast, accurate, client-ready SEO reports in 60 seconds.
        </p>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600 mb-10">All the tools you need to rank better</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Example Feature Block */}
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Feature {i + 1}</h3>
              <p className="text-gray-600">Brief feature description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials / Logos ===== */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Trusted by Pros</h2>
        <p className="text-gray-600 mb-8">Used by marketers, agencies, and SEO experts</p>
        <div className="flex justify-center gap-10 flex-wrap max-w-4xl mx-auto">
          {/* Placeholder Logos */}
          {['logo1', 'logo2', 'logo3', 'logo4'].map((logo, i) => (
            <div key={i} className="w-32 h-16 bg-gray-200 rounded"></div>
          ))}
        </div>
      </section>

      {/* ===== Pricing Section ===== */}
      <section id="pricing" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-600 mb-10">Choose a plan that fits your needs</p>

        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex-1 p-6 rounded-xl border bg-gray-50">
              <h3 className="text-2xl font-semibold mb-2">Plan {i + 1}</h3>
              <p className="text-3xl font-bold mb-4">£XX/mo</p>
              <ul className="text-left space-y-2 mb-6">
                <li>✅ Feature A</li>
                <li>✅ Feature B</li>
              </ul>
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="p-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankCraft. All rights reserved.
      </footer>
    </main>
  );
}
