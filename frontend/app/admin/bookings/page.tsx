'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminSidebar from '@/components/AdminSidebar'
import { ChevronDownIcon } from '@/components/icons'

/* ─── Mock Data Bookings ─────────────────────────── */
const initialBookings = [
  { id: 'GZ-8829', customer: 'Azka Gans',     motor: 'Yamaha MT-09',         service: 'Servis Lengkap',  date: '24 Okt 2023', time: '09:00 WIB', status: 'Selesai' },
  { id: 'GZ-3321', customer: 'Rian Hidayat',  motor: 'Honda Vario 160',      service: 'Ganti Oli & Rem', date: 'Hari Ini',    time: '10:30 WIB', status: 'Diproses' },
  { id: 'GZ-1244', customer: 'Dani Prasetyo', motor: 'Kawasaki W175',        service: 'Tune Up',         date: 'Hari Ini',    time: '11:15 WIB', status: 'Menunggu' },
  { id: 'GZ-9912', customer: 'Siti Aminah',   motor: 'Vespa Sprint 150',     service: 'Servis Ringan',   date: 'Besok',       time: '13:00 WIB', status: 'Menunggu' },
  { id: 'GZ-4412', customer: 'Bambang U.',    motor: 'Honda Beat',           service: 'Ganti Ban',       date: 'Besok',       time: '14:30 WIB', status: 'Menunggu' },
  { id: 'GZ-7711', customer: 'Alex Rivano',   motor: 'Honda CB650R',         service: 'Sistem ECU',      date: '28 Agu 2023', time: '08:20 WIB', status: 'Selesai' },
  { id: 'GZ-5531', customer: 'Kevin Sanjaya', motor: 'Kawasaki Ninja ZX-25R',service: 'Detailing',       date: '15 Agu 2023', time: '09:15 WIB', status: 'Selesai' },
]

type StatusType = 'Semua' | 'Menunggu' | 'Diproses' | 'Selesai'

export default function AdminBookings() {
  const [bookings, setBookings] = useState(initialBookings)
  const [filter, setFilter] = useState<StatusType>('Semua')
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null)

  const filteredBookings = bookings.filter((b) => filter === 'Semua' || b.status === filter)

  const handleStatusChange = (id: string, newStatus: 'Menunggu' | 'Diproses' | 'Selesai') => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: newStatus } : b))
    )
    setActiveMenuId(null)
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="bookings" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
          <div>
            <h1 className="text-xl font-bold">Booking Masuk</h1>
            <p className="text-xs text-gray-500 mt-1">Kelola status dan jadwal kedatangan semua servis motor</p>
          </div>
          
          {/* Quick Counter */}
          <div className="rounded-xl border border-[#222] bg-[#191919] px-4 py-2 flex gap-4 text-xs font-semibold text-gray-400">
            <div>
              <span>Menunggu: </span>
              <span className="text-yellow-500">{bookings.filter((b) => b.status === 'Menunggu').length}</span>
            </div>
            <div>
              <span>Diproses: </span>
              <span className="text-blue-500">{bookings.filter((b) => b.status === 'Diproses').length}</span>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="px-8 py-8 space-y-6">

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e1e1e] pb-4">
            <div className="flex gap-2">
              {(['Semua', 'Menunggu', 'Diproses', 'Selesai'] as StatusType[]).map((tab) => {
                const isActive = filter === tab
                let activeStyle = 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                if (!isActive) {
                  activeStyle = 'border border-[#2c2c2c] text-gray-400 hover:border-[#444444] hover:text-white'
                }
                return (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${activeStyle}`}
                  >
                    {tab} ({tab === 'Semua' ? bookings.length : bookings.filter((b) => b.status === tab).length})
                  </button>
                )
              })}
            </div>

            <p className="text-xs text-gray-500 font-medium">
              Menampilkan {filteredBookings.length} booking
            </p>
          </div>

          {/* Bookings Table Card */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#222] text-[0.7rem] font-bold uppercase tracking-wider text-gray-500">
                    <th className="pb-3">Kode</th>
                    <th className="pb-3">Pelanggan</th>
                    <th className="pb-3">Motor (Plat)</th>
                    <th className="pb-3">Layanan</th>
                    <th className="pb-3">Jadwal</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((b) => {
                    let statusStyle = 'text-green-500 bg-green-500/10 border-green-500/20'
                    if (b.status === 'Diproses') statusStyle = 'text-blue-500 bg-blue-500/10 border-blue-500/20'
                    if (b.status === 'Menunggu') statusStyle = 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'

                    return (
                      <tr key={b.id} className="border-b border-[#1f1f1f] last:border-0 relative">
                        {/* Kode */}
                        <td className="py-4 font-mono font-bold">
                          <Link href={`/admin/bookings/${b.id}`} className="text-red-500 hover:text-red-400 hover:underline">
                            {b.id}
                          </Link>
                        </td>
                        {/* Pelanggan */}
                        <td className="py-4 font-medium text-white">{b.customer}</td>
                        {/* Motor */}
                        <td className="py-4">
                          <p className="text-xs text-gray-200">{b.motor}</p>
                          <p className="text-[0.65rem] text-gray-500 mt-0.5">{b.id === 'GZ-8829' ? 'B 4522 TZU' : 'B 1234 ABC'}</p>
                        </td>
                        {/* Layanan */}
                        <td className="py-4 text-xs text-gray-300">{b.service}</td>
                        {/* Jadwal */}
                        <td className="py-4">
                          <p className="text-xs text-gray-200">{b.date}</p>
                          <p className="text-[0.65rem] text-gray-500 mt-0.5">{b.time}</p>
                        </td>
                        {/* Status */}
                        <td className="py-4">
                          <span className={`inline-flex rounded-full border px-3 py-1 text-[0.65rem] font-bold ${statusStyle}`}>
                            {b.status}
                          </span>
                        </td>
                        {/* Actions (Dropdown status changer & Edit Work Order) */}
                        <td className="py-4 text-right">
                          <div className="flex justify-end gap-2 relative">
                            <Link
                              href={`/admin/bookings/${b.id}`}
                              className="rounded-lg border border-[#2c2c2c] px-3 py-1.5 text-xs font-semibold text-gray-300 hover:border-red-500/50 hover:text-red-400 transition"
                            >
                              Detail Kerja
                            </Link>
                            
                            <button
                              onClick={() => setActiveMenuId(activeMenuId === b.id ? null : b.id)}
                              className="flex items-center gap-1.5 rounded-lg border border-[#2c2c2c] px-3 py-1.5 text-xs font-semibold text-gray-400 hover:border-[#444444] hover:text-white transition"
                            >
                              Ubah Status
                              <ChevronDownIcon />
                            </button>

                            {/* Dropdown Menu */}
                            {activeMenuId === b.id && (
                              <div className="absolute right-0 z-20 mt-1 w-36 rounded-xl border border-[#2a2a2a] bg-[#111111] p-1.5 shadow-xl text-left">
                                {(['Menunggu', 'Diproses', 'Selesai'] as const).map((st) => (
                                  <button
                                    key={st}
                                    onClick={() => handleStatusChange(b.id, st)}
                                    className={`w-full rounded-lg px-3 py-2 text-left text-xs transition ${
                                      b.status === st
                                        ? 'bg-red-600/10 text-red-500'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                    }`}
                                  >
                                    {st}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
