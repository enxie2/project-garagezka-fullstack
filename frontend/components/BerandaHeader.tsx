'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-dark border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl">
          GARAGEZKA
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          <li>
            <Link 
              href="#beranda" 
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link 
              href="#tentang" 
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link 
              href="#layanan" 
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link 
              href="#kontak" 
              className="text-gray-300 hover:text-primary transition duration-300"
            >
              Kontak
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-300"
          >
            Daftar
          </Link>
        </div>
      </nav>
    </header>
  )
}
