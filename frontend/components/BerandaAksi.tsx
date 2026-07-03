'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Red Accent Line */}
        <div className="flex gap-4 mb-12">
          <div className="w-1 bg-primary rounded-full"></div>
        </div>

        {/* CTA Card */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap untuk performa terbaik?
            </h2>
          </div>
          <Link 
            href="/register"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-bold whitespace-nowrap transition duration-300"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </section>
  )
}
