// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 text-slate-900">
      {/* Header */}
      <header className="w-full px-6 py-4 flex items-center justify-between border-b bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-30">
        <span className="font-bold text-xl tracking-tight">RankCraft</span>
        <nav className="space-x-4">
          <a href="#features" className="hover:text-blue-600 font-medium">Features</a>
          <a href="#pricing" className="hover:text-blue-600 font-medium">Pricing</a>
          <a href="#contact" className="hover:text-blue-600 font-medium">Contact</a>
          <a href="/signin" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition font-semibold">Sign In</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-2xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">SEO Tools that Actually Move the Needle</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Run audits, track keywords, and deliver beautiful reports—without the fluff.<br />
          RankCraft gives you the competitive edge for the UK & US markets.
        </p>
        <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-2xl shadow transition text-lg">
          Try It Free &rarr;
        </a>
        <div className="mt-4 text-xs text-gray-500">No credit card required</div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 py-12 px-4">
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-2">Accurate Keyword Tracking</h3>
          <p className="text-gray-600">Daily updates, UK & US localization, and SERP features.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-2">One-Click SEO Audits</h3>
          <p className="text-gray-600">Instant site analysis with actionable, easy-to-understand advice.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="font-semibold mb-2">Beautiful Reports</h3>
          <p className="text-gray-600">PDF & live report links for clients or stakeholders, branded for you.</p>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-2xl mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Simple, Honest Pricing</h2>
        <p className="mb-8 text-gray-700">Switches currency for UK (£) or US ($) users. All plans include a free trial.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow p-8">
            <div className="text-2xl font-semibold mb-2">Starter</div>
            <div className="text-4xl font-bold mb-2">£29 <span className="text-lg font-normal text-gray-500">/mo</span></div>
            <ul className="text-left text-sm text-gray-600 space-y-1 mb-4">
              <li>✔ 100 keywords</li>
              <li>✔ Weekly audits</li>
              <li>✔ 1 user</li>
            </ul>
            <a href="/signup" className="block bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium">Start Free</a>
          </div>
          <div className="bg-blue-600 text-white rounded-xl shadow p-8 border-2 border-blue-700">
            <div className="text-2xl font-semibold mb-2">Pro</div>
            <div className="text-4xl font-bold mb-2">$49 <span className="text-lg font-normal text-blue-100">/mo</span></div>
            <ul className="text-left text-sm space-y-1 mb-4">
              <li>✔ 500 keywords</li>
              <li>✔ Daily audits</li>
              <li>✔ Unlimited users</li>
              <li>✔ Priority support</li>
            </ul>
            <a href="/signup" classNam
