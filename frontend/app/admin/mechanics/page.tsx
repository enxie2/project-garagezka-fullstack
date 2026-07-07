'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminSidebar from '@/components/AdminSidebar'
import { WrenchIcon, PlusIcon } from '@/components/icons'

/* ─── Mock Data Mechanics ────────────────────────── */
const initialMechanics = [
  { id: 1, name: 'Budi Santoso',    spec: 'Spesialis Mesin & CVT',  status: 'Tersedia', avatarColor: 'bg-green-600/10 text-green-500' },
  { id: 2, name: 'Rizky Pratama',   spec: 'Spesialis Kelistrikan', status: 'Tersedia', avatarColor: 'bg-green-600/10 text-green-500' },
  { id: 3, name: 'Agus Setiawan',   spec: 'Tune Up & Karburator',   status: 'Sibuk',    avatarColor: 'bg-yellow-600/10 text-yellow-500' },
  { id: 4, name: 'Doni Kusuma',     spec: 'Sistem ECU & Diagnostic',status: 'Tersedia', avatarColor: 'bg-green-600/10 text-green-500' },
  { id: 5, name: 'Heri Wahyudi',    spec: 'Kaki-kaki & Suspensi',    status: 'Sibuk',    avatarColor: 'bg-yellow-600/10 text-yellow-500' },
]

export default function AdminMechanics() {
  const [mechanics, setMechanics] = useState(initialMechanics)

  const toggleStatus = (id: number) => {
    setMechanics((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: m.status === 'Tersedia' ? 'Sibuk' : 'Tersedia' }
          : m
      )
    )
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="mechanics" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
          <div>
            <h1 className="text-xl font-bold">Data Mekanik</h1>
            <p className="text-xs text-gray-500 mt-1">Kelola daftar mekanik aktif dan status penugasan mereka</p>
          </div>
          
          {/* Add Mechanic Button */}
          <Link
            href="/admin/mechanics/tambah"
            className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-red-600/20 hover:bg-red-700 transition active:scale-95"
          >
            <PlusIcon />
            Tambah Mekanik Baru
          </Link>
        </header>

        {/* Content Container */}
        <div className="px-8 py-8 space-y-6">

          {/* Grid Layout of Mechanic Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mechanics.map((m) => {
              const isAvailable = m.status === 'Tersedia'
              
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6 flex flex-col justify-between shadow-sm hover:border-[#2a2a2a] transition"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#222] text-red-500">
                          <WrenchIcon />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-white leading-snug">{m.name}</h3>
                          <span className="text-[0.65rem] text-gray-500 uppercase tracking-wider font-semibold block mt-0.5">
                            ID: MEK-{String(m.id).padStart(3, '0')}
                          </span>
                        </div>
                      </div>
                      
                      {/* Availability status */}
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.65rem] font-bold ${
                        isAvailable
                          ? 'bg-green-600/10 text-green-500 border border-green-500/20'
                          : 'bg-yellow-600/10 text-yellow-500 border border-yellow-500/20'
                      }`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-yellow-500'}`} />
                        {m.status}
                      </span>
                    </div>

                    {/* Body: Spec */}
                    <div className="rounded-xl border border-[#222] bg-[#111]/40 px-4 py-3 text-left">
                      <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600">Spesialisasi</p>
                      <p className="mt-1 text-xs font-semibold text-gray-300">{m.spec}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#222] flex items-center justify-between">
                    <span className="text-[0.65rem] text-gray-500 font-medium">Ubah ketersediaan:</span>
                    <button
                      onClick={() => toggleStatus(m.id)}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                        isAvailable
                          ? 'border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/5 hover:border-yellow-500/60'
                          : 'border-green-500/30 text-green-500 hover:bg-green-500/5 hover:border-green-500/60'
                      }`}
                    >
                      Set {isAvailable ? 'Sibuk' : 'Tersedia'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </main>
    </div>
  )
}
