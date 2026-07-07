'use client'

import { useState } from 'react'
import Link from 'next/link'
import AdminSidebar from '@/components/AdminSidebar'
import {
  ArrowLeftIcon,
  WrenchIcon,
  ChevronDownIcon,
} from '@/components/icons'

export default function AdminTambahMekanikPage() {
  const [name, setName] = useState('')
  const [spec, setSpec] = useState('')
  const [hp, setHp] = useState('')
  const [status, setStatus] = useState('Tersedia')
  const [isOpenSpec, setIsOpenSpec] = useState(false)
  const [saved, setSaved] = useState(false)

  const daftarSpec = [
    'Spesialis Mesin & CVT',
    'Spesialis Kelistrikan',
    'Tune Up & Karburator',
    'Sistem ECU & Diagnostic',
    'Kaki-kaki & Suspensi',
  ]

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
      window.location.href = '/admin/mechanics'
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="mechanics" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8 max-w-4xl space-y-6">

          {/* Header & Back Button */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/mechanics"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent text-gray-400 transition hover:border-[#444444] hover:text-white"
            >
              <ArrowLeftIcon />
            </Link>
            <h1 className="text-2xl font-extrabold tracking-tight text-white">
              Tambah Mekanik Baru
            </h1>
          </div>

          <p className="text-xs text-gray-500 max-w-xl leading-relaxed">
            Daftarkan mekanik operasional baru ke dalam sistem untuk penugasan booking motor pelanggan.
          </p>

          {/* Success Banner */}
          {saved && (
            <div className="flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3.5 max-w-2xl">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <span className="text-sm font-semibold text-green-400">
                Mekanik baru berhasil didaftarkan! Mengalihkan...
              </span>
            </div>
          )}

          {/* Form & Preview Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr] max-w-4xl">

            {/* Form Card (Kiri) */}
            <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 shadow-sm">
              <form onSubmit={handleSave} className="space-y-6">
                
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Nama Mekanik
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3.5 text-xs text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                  />
                </div>

                {/* Spesialisasi (Dropdown) */}
                <div className="relative">
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Spesialisasi Keahlian
                  </label>
                  <button
                    type="button"
                    onClick={() => setIsOpenSpec(!isOpenSpec)}
                    className="flex w-full items-center justify-between rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3.5 text-xs text-gray-300 transition hover:border-[#3a3a3a] outline-none"
                  >
                    <span>{spec || 'Pilih Spesialisasi'}</span>
                    <span className="text-gray-500">
                      <ChevronDownIcon />
                    </span>
                  </button>
                  
                  {isOpenSpec && (
                    <div className="absolute left-0 right-0 z-10 mt-1 rounded-xl border border-[#2a2a2a] bg-[#111] p-1.5 shadow-xl">
                      {daftarSpec.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setSpec(item)
                            setIsOpenSpec(false)
                          }}
                          className="w-full rounded-lg px-4 py-2 text-left text-xs text-gray-300 hover:bg-[#fa1818]/10 hover:text-red-400"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Nomor HP */}
                <div>
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Nomor Handphone
                  </label>
                  <input
                    type="tel"
                    value={hp}
                    onChange={(e) => setHp(e.target.value)}
                    placeholder="Contoh: +62 812 3456 7890"
                    className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3.5 text-xs text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                  />
                </div>

                {/* Status Awal Dropdown */}
                <div>
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Status Operasional Awal
                  </label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3.5 text-xs text-gray-200 outline-none appearance-none cursor-pointer focus:border-red-500/50"
                    >
                      <option value="Tersedia">Tersedia</option>
                      <option value="Sibuk">Sibuk</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#222222] my-4" />

                {/* Form Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-[0.98]"
                  >
                    Daftarkan Mekanik
                  </button>
                  <Link
                    href="/admin/mechanics"
                    className="flex items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent px-6 py-3.5 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white"
                  >
                    Batal
                  </Link>
                </div>

              </form>
            </div>

            {/* Preview Card (Kanan) */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 text-center shadow-sm h-fit">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fa1818]/10 text-red-500 shadow-[0_0_20px_rgba(250,24,24,0.15)]">
                <WrenchIcon />
              </div>
              <h2 className="mt-4 text-base font-bold text-white">
                {name || 'Nama Mekanik'}
              </h2>
              <span className="text-[0.65rem] text-gray-500 font-semibold tracking-wider block mt-1 uppercase">
                Preview Kartu
              </span>

              <div className="mt-5 w-full rounded-xl border border-[#222] bg-[#111]/40 px-4 py-3 text-left">
                <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600">Spesialisasi</p>
                <p className="mt-1 text-xs font-semibold text-gray-300">{spec || '—'}</p>
              </div>

              <div className="mt-3 w-full rounded-xl border border-[#222] bg-[#111]/40 px-4 py-3 text-left flex justify-between items-center">
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600">Status</p>
                  <p className="mt-1 text-xs font-bold text-white">{status}</p>
                </div>
                <span className={`h-2.5 w-2.5 rounded-full ${status === 'Tersedia' ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-yellow-500 shadow-[0_0_8px_#fbbf24]'}`} />
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
