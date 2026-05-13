export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Monitor API Response Schemas for{' '}
          <span className="text-[#58a6ff]">Unexpected Changes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Automatically detect schema drift — new fields, removed fields, and type changes — before they silently break your integrations.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Started — $15/mo
        </a>
        <ul className="mt-10 flex flex-col sm:flex-row gap-4 justify-center text-sm text-[#8b949e]">
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Continuous endpoint polling</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Schema baseline snapshots</li>
          <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Instant drift alerts</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay ahead of API changes</p>
          <div className="mb-6">
            <span className="text-5xl font-bold text-white">$15</span>
            <span className="text-[#8b949e] ml-1">/mo</span>
          </div>
          <ul className="text-sm text-left space-y-3 mb-8">
            {[
              'Monitor up to 50 endpoints',
              'Schema history & diff viewer',
              'Email & webhook alerts',
              'Polling intervals from 1 min',
              'JSON & REST API support',
              'Priority support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What counts as schema drift?</h3>
            <p className="text-[#8b949e] text-sm">Any change to the structure of an API response — added or removed fields, changed data types, renamed keys, or altered nesting — is flagged as drift so you can review it before it causes issues.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does monitoring work?</h3>
            <p className="text-[#8b949e] text-sm">You register your API endpoints and set a polling interval. The service fetches each endpoint on schedule, extracts the response schema, and compares it against the stored baseline. Deviations trigger an alert immediately.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I monitor authenticated APIs?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can configure custom request headers — including Authorization tokens and API keys — so the monitor can access protected endpoints just like your own services do.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#484f58]">
        © {new Date().getFullYear()} API Schema Drift Monitor. All rights reserved.
      </footer>
    </main>
  )
}
