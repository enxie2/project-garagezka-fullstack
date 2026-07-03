'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-dark flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-block">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase">
            PRESISI. PERFORMA. PROFESIONAL
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Servis Motor Jadi
          <br />
          Lebih Mudah
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Booking servis tanpa antri. Dapatkan perawatan mesin standar kompetisi untuk performa motor maksimal langsung melalui ponsel Anda.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <Link 
            href="/booking"
            className="bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            Booking Sekarang
          </Link>
          <Link 
            href="#services"
            className="border-2 border-gray-600 hover:border-primary text-white px-8 py-3 rounded-lg font-semibold transition duration-300 inline-block"
          >
            Lihat Layanan
          </Link>
        </div>
      </div>
    </section>
  )
}
