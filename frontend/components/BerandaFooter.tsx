'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-darkCard border-t border-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">GARAGEZKA</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Bengkel motor modern dengan standarisasi industri hidup. Solusi perawatan presisi untuk setiap mesin.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-6">NAVIGASI</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#beranda" 
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="#tentang" 
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link 
                  href="#layanan" 
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link 
                  href="#kontak" 
                  className="text-gray-400 hover:text-primary transition duration-300"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 text-sm">
            © {currentYear} GARAGEZKA. Presisi dalam Performa.
          </p>
        </div>
      </div>
    </footer>
  )
}
