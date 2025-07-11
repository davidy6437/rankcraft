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

      <section id="pricing" className="py-20 bg-gray-50 text-center">
  <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
  <p className="text-gray-600 mb-10">Choose a plan that fits your needs</p>

  <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
    {[
      {
        name: 'Free',
        price: '£0',
        features: ['1 Site Check per Day', 'Basic SEO Metrics'],
        highlight: false,
      },
      {
        name: 'Pro',
        price: '£19/mo',
        features: ['Unlimited Site Checks', 'Keyword Tracking', 'PDF Reports'],
        highlight: true,
      },
      {
        name: 'Agency',
        price: '£49/mo',
        features: ['Unlimited Everything', 'Team Access', 'White Labelling'],
        highlight: false,
      },
    ].map(({ name, price, features, highlight }) => (
      <div
        key={name}
        className={`flex-1 p-6 rounded-xl border ${
          highlight ? 'bg-white shadow-lg border-black' : 'bg-white border-gray-200'
        }`}
      >
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-3xl font-bold mb-4">{price}</p>
        <ul className="text-left space-y-2 mb-6">
          {features.map((f, i) => (
            <li key={i}>✅ {f}</li>
          ))}
        </ul>
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Choose {name}
        </button>
      </div>
    ))}
  </div>
</section>

      <footer className="p-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankCraft. All rights reserved.
      </footer>
    </main>
  );
}
