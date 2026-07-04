'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import {
  ChevronDownIcon,
  ClockIcon,
  DropletIcon,
  TuneUpIcon,
  ServisLengkapIcon,
  LightningIcon,
  MotorcycleSmallIcon,
} from '@/components/icons'

/* ─── Data ────────────────────────────────────────────── */
const serviceCategories = [
  {
    id: 'ganti-oli',
    label: 'Ganti Oli',
    sub: 'Pelumasan Mesin',
    icon: <DropletIcon />,
    price: 110000,
    duration: 1.5,
  },
  {
    id: 'tune-up',
    label: 'Tune Up',
    sub: 'Performa Mesin',
    icon: <TuneUpIcon />,
    price: 150000,
    duration: 2,
  },
  {
    id: 'servis-lengkap',
    label: 'Servis Lengkap',
    sub: 'Perawatan 360',
    icon: <ServisLengkapIcon />,
    price: 250000,
    duration: 3,
  },
  {
    id: 'kelistrikan',
    label: 'Kelistrikan',
    sub: 'Sistem ECU & Aki',
    icon: <LightningIcon />,
    price: 180000,
    duration: 2,
  },
]

const timeSlots = ['08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const formatRupiah = (num: number) =>
  'Rp ' + num.toLocaleString('id-ID').replace(/\./g, '.')

/* ─── Page ────────────────────────────────────────────── */
export default function BookingServisPage() {
  const [selectedService, setSelectedService] = useState('ganti-oli')
  const [selectedTime, setSelectedTime] = useState('10:00')
  const [selectedDate, setSelectedDate] = useState('')

  const active = serviceCategories.find((s) => s.id === selectedService)!
  const adminFee = 10000
  const total = active.price + adminFee

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      <Sidebar activePage="booking" />

      {/* ── Main ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="flex flex-1 gap-6 px-8 py-8">

          {/* ── Kiri: Form ── */}
          <div className="flex flex-1 flex-col gap-5">

            {/* Judul Halaman */}
            <div className="mb-2">
              <h1 className="text-3xl font-extrabold tracking-tight">Booking Servis</h1>
              <p className="mt-2 text-sm text-gray-400">
                Atur jadwal servis motor Anda dengan cepat dan mudah di Garagezka.
              </p>
            </div>

            {/* Step 1 — Pilih Kendaraan */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
                  Pilih Kendaraan
                </span>
              </div>
              <div className="relative">
                <div className="flex cursor-pointer items-center justify-between rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 transition hover:border-[#3a3a3a]">
                  <div className="flex items-center gap-3 text-gray-200">
                    <span className="text-red-500">
                      <MotorcycleSmallIcon />
                    </span>
                    <span className="text-sm font-medium">Kawasaki ZX-25R (B 9101 LOR)</span>
                  </div>
                  <span className="text-gray-500">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 — Kategori Layanan */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold">
                  2
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
                  Kategori Layanan
                </span>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {serviceCategories.map((svc) => {
                  const isSelected = selectedService === svc.id
                  return (
                    <button
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`flex flex-col items-center rounded-2xl border p-5 text-center transition-all ${
                        isSelected
                          ? 'border-red-500 bg-red-500/5 text-red-400'
                          : 'border-[#242424] bg-[#111111] text-gray-400 hover:border-[#333333] hover:text-gray-200'
                      }`}
                    >
                      <span className={`mb-3 ${isSelected ? 'text-red-500' : 'text-gray-500'}`}>
                        {svc.icon}
                      </span>
                      <p className={`text-sm font-semibold ${isSelected ? 'text-white' : 'text-gray-200'}`}>
                        {svc.label}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">{svc.sub}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3 — Jadwal Kedatangan */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
                  Jadwal Kedatangan
                </span>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {/* Tanggal */}
                <div>
                  <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Pilih Tanggal
                  </p>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3 text-sm text-gray-300 outline-none transition focus:border-red-500/50 focus:ring-1 focus:ring-red-500/20 [color-scheme:dark]"
                  />
                </div>
                {/* Jam */}
                <div>
                  <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Pilih Jam
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time
                      return (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-xl py-2.5 text-sm font-medium transition-all ${
                            isSelected
                              ? 'bg-red-600 text-white shadow shadow-red-600/30'
                              : 'border border-[#242424] bg-[#111111] text-gray-400 hover:border-[#333333] hover:text-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Kanan: Ringkasan ── */}
          <div className="w-[260px] flex-shrink-0">
            <div className="sticky top-8 rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <p className="mb-5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gray-400">
                Ringkasan Booking
              </p>

              {/* Detail */}
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs text-gray-500">Kendaraan</span>
                  <span className="text-right text-xs font-medium text-gray-200">Kawasaki Zu-25R</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs text-gray-500">Layanan</span>
                  <span className="text-right text-xs font-medium text-gray-200">{active.label}</span>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs text-gray-500">Jadwal</span>
                  <span className="text-right text-xs font-medium text-gray-200">
                    {selectedDate
                      ? new Date(selectedDate).toLocaleDateString('id-ID', {
                          day: '2-digit',
                          month: 'short',
                          year: 'numeric',
                        })
                      : '24 Okt 2023'}
                    {', '}
                    {selectedTime}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 border-t border-[#222222]" />

              {/* Harga */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Biaya Jasa Servis</span>
                  <span className="text-xs text-gray-200">{formatRupiah(active.price)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Biaya Admin</span>
                  <span className="text-xs text-gray-200">{formatRupiah(adminFee)}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-sm font-semibold text-white">Total Biaya</span>
                  <span className="text-base font-bold text-red-500">{formatRupiah(total)}</span>
                </div>
              </div>

              {/* Estimasi Durasi */}
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
                <span className="text-red-500">
                  <ClockIcon />
                </span>
                <span className="text-xs font-medium text-red-400">
                  Estimasi Durasi: {active.duration} Jam
                </span>
              </div>

              {/* Tombol CTA */}
              <button className="mt-5 w-full rounded-xl bg-red-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-95">
                Lanjut Booking
              </button>

              <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-gray-600">
                Dengan mengklik tombol di atas, Anda menyetujui syarat dan ketentuan layanan GARAGEZKA.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
