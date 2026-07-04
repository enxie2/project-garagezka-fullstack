import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import {
  PlusCircleIcon,
  CalendarCardIcon,
  ClockCardIcon,
  MotorcycleIcon,
  AlertCircleIcon,
  ExternalLinkIcon,
  GearIcon,
  OilIcon,
  WrenchIcon,
  ClockHistoryIcon,
} from '@/components/icons'

/* ─── Data ────────────────────────────────────────────── */
const riwayat = [
  { icon: <GearIcon />,   label: 'Servis Lengkap', date: '12 Sep 2023', price: 'Rp 250.000' },
  { icon: <OilIcon />,    label: 'Ganti Oli',       date: '15 Jul 2023', price: 'Rp 100.000' },
  { icon: <WrenchIcon />, label: 'Tune Up',          date: '02 Jun 2023', price: 'Rp 150.000' },
]

/* ─── Page ────────────────────────────────────────────── */
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      <Sidebar activePage="dashboard" />

      {/* ── Main ── */}
      <main className="flex flex-1 flex-col">

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-7">
          <p className="text-[0.95rem] text-gray-400">Selamat Datang, Azka.</p>
          <Link
            href="/booking"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-95"
          >
            <PlusCircleIcon />
            Booking Servis Sekarang
          </Link>
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
