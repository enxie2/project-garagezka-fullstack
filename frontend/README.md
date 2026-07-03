# GARAGEZKA - Halaman Utama

Halaman utama website GARAGEZKA - Platform servis motor modern dengan standarisasi industri tinggi.

## 🎯 Fitur

- **Header/Navbar** - Navigasi lengkap dengan menu dan tombol autentikasi
- **Hero Section** - Landing page dengan call-to-action yang menarik
- **Features Section** - Menampilkan 3 keunggulan utama (Cepat, Terpercaya, Profesional)
- **CTA Section** - Section untuk mendorong user mendaftar
- **Footer** - Informasi brand dan navigasi tambahan

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Node Version**: 18+

## 📁 Struktur Project

```
FE-garagezka/
├── app/
│   ├── layout.tsx          # Layout utama aplikasi
│   ├── page.tsx            # Halaman utama
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigasi header
│   ├── HeroSection.tsx     # Section hero/landing
│   ├── FeaturesSection.tsx # Section fitur (3 cards)
│   ├── CTASection.tsx      # Call-to-action section
│   └── Footer.tsx          # Footer
├── package.json            # Dependencies
├── next.config.js          # Konfigurasi Next.js
├── tsconfig.json           # Konfigurasi TypeScript
├── tailwind.config.js      # Konfigurasi Tailwind CSS
└── postcss.config.js       # Konfigurasi PostCSS
```

## 🛠️ Instalasi

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Jalankan development server**
   ```bash
   npm run dev
   ```

3. **Akses di browser**
   Buka [http://localhost:3000](http://localhost:3000)

## 📦 Build untuk Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Warna
Semua warna berada di `tailwind.config.js`:
- **Primary**: `#FF2D2D` (Merah)
- **Dark**: `#0A0A0A` (Background gelap)
- **Dark Card**: `#1A1A1A` (Card background)

### Font dan Typography
Ubah di `app/globals.css` untuk font yang berbeda.

### Konten
Ubah konten langsung di setiap component:
- `Header.tsx` - Menu dan tombol
- `HeroSection.tsx` - Judul dan deskripsi utama
- `FeaturesSection.tsx` - Fitur-fitur
- `CTASection.tsx` - Call-to-action
- `Footer.tsx` - Informasi footer

## 📱 Responsive Design

Project ini fully responsive dan mendukung:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📝 Notes

- Semua components menggunakan `'use client'` directive untuk interaktifitas
- Menggunakan Next.js Link component untuk navigasi optimal
- Styling menggunakan Tailwind CSS untuk konsistensi
- TypeScript untuk type safety

---

**Author**: Frontend Development  
**Version**: 0.1.0  
**Updated**: 2026-07-02
