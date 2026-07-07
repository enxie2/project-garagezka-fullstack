import Link from 'next/link'
import { notFound } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import {
  ArrowLeftIcon,
  MotorcycleIcon,
  WrenchIcon,
  GearIcon,
  LightningIcon,
  ClockIcon,
} from '@/components/icons'

/* ─── Icons lokal ────────────────────────────────── */
const CheckBadgeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
)

const PrintIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const CalendarDetailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const UserMiniIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

/* ─── Mock Database Riwayat ──────────────────────── */
const database: Record<string, {
  id: number; kodeServis: string; date: string; waktu: string
  label: string; motor: string; plate: string; mekanik: string
  bengkel: string; status: 'Selesai' | 'Diproses' | 'Menunggu'
  iconType: string; items: { nama: string; qty: number; harga: number }[]
  catatan?: string
}> = {
  '1': {
    id: 1, kodeServis: 'SRV-231024-001',
    date: '24 Oktober 2023', waktu: '09:00 WIB',
    label: 'Servis Lengkap', motor: 'Honda Vario 160', plate: 'B 4522 TZU',
    mekanik: 'Budi Santoso', bengkel: 'Garagezka — Jakarta Selatan',
    status: 'Selesai', iconType: 'motorcycle',
    items: [
      { nama: 'Jasa Servis Lengkap', qty: 1, harga: 200000 },
      { nama: 'Oli Mesin (1L)',       qty: 1, harga: 85000  },
      { nama: 'Filter Udara',         qty: 1, harga: 55000  },
      { nama: 'Busi NGK',             qty: 1, harga: 35000  },
      { nama: 'Biaya Admin',          qty: 1, harga: 10000  },
    ],
    catatan: 'Kondisi mesin prima. Disarankan servis berikutnya pada 3 bulan atau 2.000 KM.',
  },
  '2': {
    id: 2, kodeServis: 'SRV-231107-002',
    date: 'Hari Ini, 07 Nov 2023', waktu: '09:15 WIB',
    label: 'Ganti Oli & Cek Rem', motor: 'Yamaha XSR 155', plate: 'B 6021 SSA',
    mekanik: 'Rizky Pratama', bengkel: 'Garagezka — Jakarta Selatan',
    status: 'Diproses', iconType: 'wrench',
    items: [
      { nama: 'Jasa Ganti Oli',   qty: 1, harga: 50000  },
      { nama: 'Oli Mesin (0.8L)', qty: 1, harga: 70000  },
      { nama: 'Cek Rem Depan',    qty: 1, harga: 0       },
      { nama: 'Cek Rem Belakang', qty: 1, harga: 0       },
      { nama: 'Biaya Admin',      qty: 1, harga: 10000   },
    ],
  },
  '3': {
    id: 3, kodeServis: 'SRV-231012-003',
    date: '12 Oktober 2023', waktu: '10:30 WIB',
    label: 'Tune Up', motor: 'Kawasaki W175', plate: 'B 3321 KKA',
    mekanik: 'Agus Setiawan', bengkel: 'Garagezka — Jakarta Selatan',
    status: 'Menunggu', iconType: 'clock',
    items: [
      { nama: 'Jasa Tune Up',       qty: 1, harga: 150000 },
      { nama: 'Setel Karburator',   qty: 1, harga: 75000  },
      { nama: 'Bersih Injektor',    qty: 1, harga: 90000  },
      { nama: 'Biaya Admin',        qty: 1, harga: 10000  },
    ],
    catatan: 'Motor dalam antrian. Estimasi mulai dikerjakan pukul 11:00.',
  },
  '4': {
    id: 4, kodeServis: 'SRV-231005-004',
    date: '05 Oktober 2023', waktu: '08:00 WIB',
    label: 'Kelistrikan - Cek ECU & Aki', motor: 'Kawasaki Ninja ZX-25R', plate: 'B 4522 TZU',
    mekanik: 'Doni Kusuma', bengkel: 'Garagezka — Jakarta Selatan',
    status: 'Selesai', iconType: 'lightning',
    items: [
      { nama: 'Jasa Cek ECU',       qty: 1, harga: 250000 },
      { nama: 'Jasa Cek Aki',       qty: 1, harga: 50000  },
      { nama: 'Aki GS 12V',         qty: 1, harga: 480000 },
      { nama: 'Relay Starter',      qty: 1, harga: 60000  },
      { nama: 'Biaya Admin',        qty: 1, harga: 10000  },
    ],
    catatan: 'ECU dan sistem kelistrikan sudah normal. Aki baru dipasang.',
  },
  '5': {
    id: 5, kodeServis: 'SRV-230920-005',
    date: '20 September 2023', waktu: '14:00 WIB',
    label: 'Servis Ringan', motor: 'Honda Vario 160', plate: 'B 4522 TZU',
    mekanik: 'Budi Santoso', bengkel: 'Garagezka — Jakarta Selatan',
    status: 'Selesai', iconType: 'gear',
    items: [
      { nama: 'Jasa Servis Ringan', qty: 1, harga: 75000  },
      { nama: 'Setel Klep',         qty: 1, harga: 35000  },
      { nama: 'Cek CVT',            qty: 1, harga: 30000  },
      { nama: 'Biaya Admin',        qty: 1, harga: 10000  },
    ],
  },
}

/* ─── Helper ─────────────────────────────────────── */
function getIcon(type: string) {
  if (type === 'wrench')    return <WrenchIcon />
  if (type === 'gear')      return <GearIcon />
  if (type === 'lightning') return <LightningIcon />
  if (type === 'clock')     return <ClockIcon />
  return <MotorcycleIcon />
}

function formatRupiah(n: number) {
  if (n === 0) return 'Gratis'
  return 'Rp ' + n.toLocaleString('id-ID').replace(/\./g, '.')
}

function getStatusStyle(status: string) {
  if (status === 'Diproses') return { bg: 'bg-[#0c1e30] text-[#60a5fa] border-[#163a5f]', dot: 'bg-[#60a5fa]' }
  if (status === 'Menunggu') return { bg: 'bg-[#2a1d0f] text-[#fbbf24] border-[#553b1b]', dot: 'bg-[#fbbf24]' }
  return { bg: 'bg-[#0f241a] text-[#4ade80] border-[#1e462e]', dot: 'bg-[#4ade80]' }
}

/* ─── Page ───────────────────────────────────────── */
export default function RiwayatDetailPage({ params }: { params: { id: string } }) {
  const data = database[params.id]
  if (!data) notFound()

  const subtotal = data.items.reduce((s, i) => s + i.harga, 0)
  const style    = getStatusStyle(data.status)

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      <Sidebar activePage="riwayat" />

      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8 max-w-5xl">

          {/* ── Header ── */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/riwayat"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] text-gray-400 transition hover:border-[#444444] hover:text-white"
              >
                <ArrowLeftIcon />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white">
                  Detail Servis
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  Kode: <span className="font-mono text-gray-400">{data.kodeServis}</span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center gap-2 rounded-xl border border-[#2c2c2c] px-4 py-2.5 text-sm font-semibold text-gray-400 transition hover:border-[#444444] hover:text-white">
                <PrintIcon />
                Cetak
              </button>
              <button className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700">
                <DownloadIcon />
                Unduh PDF
              </button>
            </div>
          </div>

          {/* ── Struk / Invoice Card ── */}
          <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] overflow-hidden">

            {/* Struk Header */}
            <div className="flex items-start justify-between border-b border-[#1e1e1e] px-8 py-7">
              <div>
                <span className="text-[1rem] font-black tracking-[0.18em] text-red-500">
                  GARAGEZKA
                </span>
                <p className="mt-1 text-xs text-gray-500">Bengkel Motor Presisi & Performa</p>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${style.bg}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                  {data.status}
                </div>
                <p className="mt-2 text-[0.65rem] text-gray-500">No. Struk</p>
                <p className="text-sm font-bold font-mono text-gray-200">{data.kodeServis}</p>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-0 border-b border-[#1e1e1e] md:grid-cols-4">
              {[
                { icon: <CalendarDetailIcon />, label: 'Tanggal', value: data.date },
                { icon: <UserMiniIcon />,       label: 'Mekanik', value: data.mekanik },
                { icon: <MotorcycleIcon />,     label: 'Kendaraan', value: `${data.motor} (${data.plate})` },
                { icon: <MapPinIcon />,         label: 'Bengkel', value: data.bengkel },
              ].map((cell, idx) => (
                <div
                  key={cell.label}
                  className={`px-6 py-5 ${idx < 3 ? 'border-r border-[#1e1e1e]' : ''}`}
                >
                  <div className="mb-2 flex items-center gap-2 text-gray-500">
                    {cell.icon}
                    <span className="text-[0.6rem] font-bold uppercase tracking-wider">{cell.label}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-200 leading-snug">{cell.value}</p>
                </div>
              ))}
            </div>

            {/* Service Label */}
            <div className="border-b border-[#1e1e1e] px-8 py-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#222222] text-red-500">
                  {getIcon(data.iconType)}
                </div>
                <div>
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">Jenis Layanan</p>
                  <p className="mt-0.5 text-lg font-extrabold text-white">{data.label}</p>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="px-8 py-6">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                Rincian Biaya
              </p>

              {/* Table Header */}
              <div className="mb-2 grid grid-cols-[1fr_60px_120px] gap-4 border-b border-[#222222] pb-3">
                {['Item / Layanan', 'Qty', 'Harga'].map((h, i) => (
                  <span
                    key={h}
                    className={`text-[0.6rem] font-bold uppercase tracking-wider text-gray-600 ${i === 2 ? 'text-right' : ''}`}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Table Rows */}
              {data.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-[1fr_60px_120px] gap-4 py-3.5 ${
                    idx < data.items.length - 1 ? 'border-b border-[#1a1a1a]' : ''
                  }`}
                >
                  <span className="text-sm text-gray-200">{item.nama}</span>
                  <span className="text-sm text-gray-500">{item.qty}x</span>
                  <span className={`text-right text-sm font-semibold ${item.harga === 0 ? 'text-green-500' : 'text-gray-200'}`}>
                    {formatRupiah(item.harga)}
                  </span>
                </div>
              ))}

              {/* Total */}
              <div className="mt-4 border-t border-[#222222] pt-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Total Biaya</span>
                  <span className="text-2xl font-black text-red-500">{formatRupiah(subtotal)}</span>
                </div>
              </div>
            </div>

            {/* Catatan (jika ada) */}
            {data.catatan && (
              <div className="border-t border-[#1e1e1e] px-8 py-5">
                <p className="mb-2 text-[0.6rem] font-bold uppercase tracking-wider text-gray-500">
                  Catatan Mekanik
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">{data.catatan}</p>
              </div>
            )}

            {/* Footer Status: hanya tampil jika Selesai */}
            {data.status === 'Selesai' && (
              <div className="border-t border-[#1e1e1e] bg-[#0f241a]/40 px-8 py-5">
                <div className="flex items-center gap-3">
                  <span className="text-green-500"><CheckBadgeIcon /></span>
                  <div>
                    <p className="text-sm font-bold text-green-400">Servis Selesai Dikerjakan</p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Kendaraan Anda siap diambil. Terima kasih telah mempercayakan servis Anda kepada Garagezka.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Kembali ke Riwayat */}
          <div className="mt-6">
            <Link
              href="/riwayat"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-gray-300"
            >
              <ArrowLeftIcon />
              Kembali ke Riwayat Servis
            </Link>
          </div>

        </div>
      </main>
    </div>
  )
}
