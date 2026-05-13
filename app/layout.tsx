import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Schema Drift Monitor — Catch Breaking Changes Before They Break You',
  description: 'Continuously monitors API responses to detect schema changes, new fields, removed fields, or type changes that could break downstream applications.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="964a7179-61b9-4ddd-b335-8738ed64edda"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
