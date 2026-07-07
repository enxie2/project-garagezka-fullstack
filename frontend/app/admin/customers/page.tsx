'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/AdminSidebar'

/* ─── Mock Data Customers ────────────────────────── */
const initialCustomers = [
  { id: 1, name: 'Azka Gans',     email: 'alex.rivano@example.com', hp: '+62 812 3456 7890', totalMotor: 2, totalServis: 5 },
  { id: 2, name: 'Rian Hidayat',  email: 'rian.hid@example.com',     hp: '+62 899 1234 5678', totalMotor: 1, totalServis: 2 },
  { id: 3, name: 'Dani Prasetyo', email: 'dani.pras@example.com',    hp: '+62 856 9912 3341', totalMotor: 1, totalServis: 1 },
  { id: 4, name: 'Siti Aminah',   email: 'siti.am@example.com',      hp: '+62 878 1122 3344', totalMotor: 2, totalServis: 4 },
  { id: 5, name: 'Bambang U.',    email: 'bambang.u@example.com',    hp: '+62 811 4455 6677', totalMotor: 1, totalServis: 3 },
  { id: 6, name: 'Kevin Sanjaya', email: 'kevin.s@example.com',      hp: '+62 822 9900 1122', totalMotor: 3, totalServis: 8 },
]

export default function AdminCustomers() {
  const [search, setSearch] = useState('')

  const filteredCustomers = initialCustomers.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="customers" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
          <div>
            <h1 className="text-xl font-bold">Data Pelanggan</h1>
            <p className="text-xs text-gray-500 mt-1">Daftar semua pemilik kendaraan yang terdaftar di sistem</p>
          </div>
        </header>

        {/* Content Container */}
        <div className="px-8 py-8 space-y-6">

          {/* Search & Stats Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e1e1e] pb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama atau email..."
              className="w-full max-w-sm rounded-xl border border-[#2a2a2a] bg-[#191919] px-4 py-2.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
            />
            <p className="text-xs text-gray-500 font-medium">
              Total {filteredCustomers.length} pelanggan ditemukan
            </p>
          </div>

          {/* Customers Table Card */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#222] text-[0.7rem] font-bold uppercase tracking-wider text-gray-500">
                    <th className="pb-3">ID</th>
                    <th className="pb-3">Nama</th>
                    <th className="pb-3">Kontak</th>
                    <th className="pb-3 text-center">Jumlah Motor</th>
                    <th className="pb-3 text-center">Jumlah Servis</th>
                    <th className="pb-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredCustomers.map((c) => (
                    <tr key={c.id} className="border-b border-[#1f1f1f] last:border-0">
                      <td className="py-4 font-mono font-semibold text-gray-500">#{String(c.id).padStart(3, '0')}</td>
                      <td className="py-4 font-bold text-white">{c.name}</td>
                      <td className="py-4">
                        <p className="text-xs text-gray-300">{c.email}</p>
                        <p className="text-[0.65rem] text-gray-500 mt-0.5">{c.hp}</p>
                      </td>
                      <td className="py-4 text-center font-bold text-gray-200">{c.totalMotor} Unit</td>
                      <td className="py-4 text-center font-bold text-red-500">{c.totalServis}x</td>
                      <td className="py-4 text-right">
                        <button className="rounded-lg border border-[#2c2c2c] px-3 py-1.5 text-xs font-semibold text-gray-400 hover:border-[#444444] hover:text-white transition">
                          Detail Pelanggan
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
