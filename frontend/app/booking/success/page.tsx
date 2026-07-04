import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import {
  CheckCircleIcon,
  MotorcycleSmallIcon,
  WrenchIcon,
} from '@/components/icons'

export default function BookingSuccessPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <Sidebar activePage="booking" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-[560px] rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Success Header */}
          <div className="flex flex-col items-center text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fa1818]/10 text-red-500 shadow-[0_0_20px_rgba(250,24,24,0.2)]">
              <CheckCircleIcon />
            </div>
            <h1 className="mt-6 text-2xl font-bold tracking-tight text-white">
              Booking Berhasil!
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Nomor antrean Anda telah dikonfirmasi dan jadwal telah dipesan.
            </p>
          </div>

          {/* Booking Code Card */}
          <div className="mt-8 rounded-xl bg-[#111111] p-4 flex items-center justify-between border border-[#222222]">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              KODE BOOKING
            </span>
            <span className="text-2xl font-black tracking-wider text-white">
              GZ-8829
            </span>
          </div>

          {/* Date & Time Grid */}
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-[#222222] bg-[#111111]/40 p-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                TANGGAL
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-200">
                24 Oktober 2023
              </p>
            </div>
            <div className="rounded-xl border border-[#222222] bg-[#111111]/40 p-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                WAKTU
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-200">
                09:00 WIB
              </p>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="mt-4 rounded-xl border border-[#222222] bg-[#111111]/40 p-4 flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <MotorcycleSmallIcon />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                KENDARAAN
              </p>
              <p className="mt-0.5 text-sm font-semibold text-gray-200">
                Yamaha MT-09 (B 1234 GZ)
              </p>
            </div>
          </div>

          {/* Service Info */}
          <div className="mt-4 rounded-xl border border-[#222222] bg-[#111111]/40 p-4 flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-500">
              <WrenchIcon />
            </div>
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                JENIS LAYANAN
              </p>
              <p className="mt-0.5 text-sm font-semibold text-gray-200">
                Servis Lengkap
              </p>
            </div>
          </div>

          {/* Pricing Info */}
          <div className="mt-6 space-y-3 border-t border-[#222222] pt-5">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Biaya Jasa Servis</span>
              <span className="font-semibold text-gray-200">Rp 740.000</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span>Biaya Admin</span>
              <span className="font-semibold text-gray-200">Rp 10.000</span>
            </div>
            <div className="my-2 border-t border-[#222222]/50" />
            <div className="flex items-center justify-between pt-1">
              <span className="text-sm font-bold text-white">Total Bayar</span>
              <span className="text-lg font-extrabold text-red-500">Rp 750.000</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8">
            <Link
              href="/dashboard"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-[0.98]"
            >
              Kembali ke Dashboard
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Bottom Notes */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 font-medium">
              Mohon tiba 15 menit sebelum jadwal.
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Tunjukkan kode booking kepada kru bengkel saat kedatangan.
            </p>
          </div>

        </div>
      </main>
    </div>
  )
}
