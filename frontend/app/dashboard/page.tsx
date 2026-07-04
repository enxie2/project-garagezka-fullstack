import Link from 'next/link'

/* ─── SVG Icons ──────────────────────────────────────── */
const GridIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" rx="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" />
  </svg>
)

const CalendarNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const BikeNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5.5" cy="17.5" r="3" />
    <circle cx="18.5" cy="17.5" r="3" />
    <polyline points="15,6 15,14 9,14" />
    <path d="M9 14 5.5 17.5" />
    <path d="M15 6h4l2 4h-5" />
    <path d="M9 14l3.5-8" />
  </svg>
)

const HistoryNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,4 1,10 7,10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    <polyline points="12,7 12,12 15,15" />
  </svg>
)

const BellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const UserNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16,17 21,12 16,7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

const PlusCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
)

const CalendarCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5C3.9 4 3 4.9 3 6v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z"/>
  </svg>
)

const ClockCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
  </svg>
)

const MotorcycleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 7c0-1.1-.9-2-2-2h-3l2 4h1.8l1.2-1.18V7zm-5.2 4l-2-4H7l-2 3 1.5 3H8c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h1v-3h-3.2zM11 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
)

const AlertCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
  </svg>
)

const OilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 21v-2h2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v14h2v2H3zm4-4h10V5H7v12zm2-8h6v2H9V9zm0 4h6v2H9v-2z"/>
  </svg>
)

const WrenchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
  </svg>
)

const ClockHistoryIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1,4 1,10 7,10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.95" />
    <polyline points="12,7 12,12 15,15" />
  </svg>
)

const UserAvatarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
)

/* ─── Nav Items ──────────────────────────────────────── */
const navItems = [
  { label: 'Dashboard', icon: <GridIcon />, active: true },
  { label: 'Booking Servis', icon: <CalendarNavIcon /> },
  { label: 'Kendaraan Saya', icon: <BikeNavIcon /> },
  { label: 'Riwayat Servis', icon: <HistoryNavIcon /> },
  { label: 'Notifikasi', icon: <BellIcon /> },
  { label: 'Profil', icon: <UserNavIcon /> },
]

/* ─── Riwayat Data ───────────────────────────────────── */
const riwayat = [
  { icon: <GearIcon />, label: 'Servis Lengkap', date: '12 Sep 2023', price: 'Rp 250.000' },
  { icon: <OilIcon />,  label: 'Ganti Oli',      date: '15 Jul 2023', price: 'Rp 100.000' },
  { icon: <WrenchIcon />, label: 'Tune Up',      date: '02 Jun 2023', price: 'Rp 150.000' },
]

/* ─── Page ───────────────────────────────────────────── */
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">

      {/* ── Sidebar ── */}
      <aside className="flex w-[220px] flex-shrink-0 flex-col border-r border-[#1e1e1e] bg-[#161616]">
        {/* Logo */}
        <div className="px-6 py-7">
          <span className="text-[1.1rem] font-black tracking-[0.2em] text-red-500">
            GARAGEZKA
          </span>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-0.5 px-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>

        {/* User */}
        <div className="border-t border-[#1e1e1e] px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2a2a] text-gray-300">
                <UserAvatarIcon />
              </div>
              <span className="text-sm font-medium text-gray-200">Azka Gans</span>
            </div>
            <button className="text-gray-500 transition hover:text-red-400">
              <LogoutIcon />
            </button>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <main className="flex flex-1 flex-col">

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-7">
          <p className="text-[0.95rem] text-gray-400">Selamat Datang, Azka.</p>
          <button className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-95">
            <PlusCircleIcon />
            Booking Servis Sekarang
          </button>
        </header>

        {/* Content */}
        <div className="flex-1 space-y-5 px-8 pb-8">

          {/* Row 1: Jadwal + Notifikasi */}
          <div className="grid grid-cols-[1fr_300px] gap-5">

            {/* Jadwal Servis */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-3">
                <span className="rounded-full border border-red-500/50 px-3 py-1 text-xs font-medium text-red-400">
                  Mendatang
                </span>
              </div>
              <h2 className="mb-5 text-base font-semibold text-white">
                Jadwal Servis Berikutnya
              </h2>

              {/* Tanggal & Waktu */}
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-4 rounded-xl bg-[#111111] p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#222222] text-red-500">
                    <CalendarCardIcon />
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-gray-500">Tanggal</p>
                    <p className="text-sm font-semibold leading-tight">24 Oktober 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-xl bg-[#111111] p-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#222222] text-red-500">
                    <ClockCardIcon />
                  </div>
                  <div>
                    <p className="mb-1 text-xs text-gray-500">Waktu</p>
                    <p className="text-sm font-semibold leading-tight">09:00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Motor Info */}
              <div className="flex items-center justify-between rounded-xl bg-[#111111] px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center text-red-500">
                    <MotorcycleIcon />
                  </div>
                  <span className="text-sm font-semibold">Ducati Panigale V4</span>
                  <span className="rounded-full bg-[#242424] px-2.5 py-0.5 text-xs text-gray-400">
                    Servis Rutin
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Estimasi Biaya</p>
                  <p className="mt-0.5 text-base font-bold text-red-500">Rp 250.000</p>
                </div>
              </div>
            </div>

            {/* Notifikasi */}
            <div className="flex flex-col rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Notifikasi
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow shadow-red-500/50" />
              </div>

              <div className="flex-1 rounded-xl bg-[#111111] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-red-500">
                    <AlertCircleIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Servis Selesai</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                      Motor Anda siap diambil di bengkel.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl border border-[#2a2a2a] py-3 text-sm font-medium text-gray-300 transition hover:border-red-500/50 hover:text-red-400">
                Lihat Semua Notifikasi
              </button>
            </div>
          </div>

          {/* Row 2: Riwayat Servis */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold">Riwayat Servis</h3>
              <a
                href="#"
                className="flex items-center gap-1.5 text-sm font-medium text-red-400 transition hover:text-red-300"
              >
                Lihat Semua
                <ExternalLinkIcon />
              </a>
            </div>

            {/* Table Header */}
            <div className="mb-1 grid grid-cols-[1fr_140px_120px_110px] gap-4 border-b border-[#1e1e1e] px-2 pb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gray-600">
              <span>Layanan</span>
              <span>Tanggal</span>
              <span className="text-center">Status</span>
              <span className="text-right">Biaya</span>
            </div>

            {/* Table Rows */}
            {riwayat.map((item, idx) => (
              <div
                key={item.label}
                className={`grid grid-cols-[1fr_140px_120px_110px] items-center gap-4 px-2 py-4 ${
                  idx < riwayat.length - 1 ? 'border-b border-[#1a1a1a]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-sm text-gray-400">{item.date}</span>
                <div className="flex justify-center">
                  <span className="rounded-full bg-[#0d2433] px-3 py-1 text-xs font-medium text-cyan-300">
                    Selesai
                  </span>
                </div>
                <span className="text-right text-sm text-gray-200">{item.price}</span>
              </div>
            ))}
          </div>

          {/* Row 3: Terakhir Servis */}
          <div className="w-[320px] rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Terakhir Servis</p>
                <p className="mt-2 text-2xl font-bold">42 Hari Lalu</p>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#222222] text-red-500">
                <ClockHistoryIcon />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
