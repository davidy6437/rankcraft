export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ===== Hero Section ===== */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          SEO tools that actually move the needle
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Run audits, track keywords, and deliver beautiful reports — without the fluff.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800">
          Try it Free →
        </button>
      </section>

      {/* ===== Why Use RankCraft ===== */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold mb-4">Why RankCraft?</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Most SEO tools overwhelm you with data. RankCraft simplifies everything:
          clear insights, smart actions, no noise.
        </p>
      </section>

      {/* ===== Features Section ===== */}
      <section id="features" className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray-600 mb-10">All the tools you need to rank better</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              title: 'Instant SEO Health Checks',
              desc: 'Scan any site in seconds and get clear, actionable insights.',
              icon: '🔍',
            },
            {
              title: 'Keyword Tracking',
              desc: 'See exactly where you rank, what’s moving, and what needs fixing.',
              icon: '📈',
            },
            {
              title: 'White-Label PDF Reports',
              desc: 'Generate stunning SEO reports you can send to clients or teams.',
              icon: '📄',
            },
          ].map(({ title, desc, icon }, i) => (
            <div key={i} className="p-6 rounded-xl border bg-white">
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Testimonials / Logos ===== */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-4">Trusted by Pros</h2>
        <p className="text-gray-600 mb-8">Used by marketers, agencies, and SEO experts</p>
        <div className="flex justify-center gap-10 flex-wrap max-w-4xl mx-auto">
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
          {[
            {
              name: 'Free',
              price: '£0',
              features: ['1 Site Audit per Day', 'Basic Keyword Tracking'],
              highlight: false,
            },
            {
              name: 'Pro',
              price: '£19/mo',
              features: ['Unlimited Site Audits', '10 Keywords', 'PDF Export'],
              highlight: true,
            },
            {
              name: 'Agency',
              price: '£49/mo',
              features: ['Unlimited Everything', 'Team Accounts', 'White Labelling'],
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

      <section id="contact" className="py-20 bg-gray-100 text-center">
  <h2 className="text-4xl font-bold mb-4">Request Early Access</h2>
  <p className="text-gray-600 mb-6">Get notified as soon as RankCraft is live.</p>

  <form
    action="https://formsubmit.co/info@rankcraft.io"
    method="POST"
    className="max-w-md mx-auto space-y-4"
  >
    <input
      type="email"
      name="email"
      required
      placeholder="Enter your email"
      className="w-full px-4 py-3 border rounded-lg"
    />
    <button
      type="submit"
      className="w-full px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
    >
      Join Waitlist
    </button>
  </form>
</section>

      {/* ===== Footer ===== */}
      <footer className="p-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankCraft. All rights reserved.
      </footer>
    </main>
  );
}
