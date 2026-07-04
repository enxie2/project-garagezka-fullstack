'use client'

import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import {
  ArrowLeftIcon,
  MotorcycleIcon,
  ChevronDownIcon,
} from '@/components/icons'

export default function TambahKendaraanPage() {
  const [merk, setMerk] = useState('')
  const [model, setModel] = useState('')
  const [tahun, setTahun] = useState('')
  const [plat, setPlat] = useState('')
  const [warna, setWarna] = useState('')
  const [isOpenMerk, setIsOpenMerk] = useState(false)

  const daftarMerk = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Vespa', 'Ducati']

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <Sidebar activePage="kendaraan" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8">
          
          {/* Header & Back Button */}
          <div className="mb-2 flex items-center gap-3">
            <Link
              href="/kendaraan"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent text-gray-400 transition hover:border-[#444444] hover:text-white"
            >
              <ArrowLeftIcon />
            </Link>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Tambah Kendaraan Baru
            </h1>
          </div>

          <p className="mb-8 mt-2 text-sm text-gray-400 max-w-2xl leading-relaxed">
            Masukkan data lengkap kendaraan Anda untuk mendapatkan rekomendasi servis yang presisi dan pemantauan kondisi mesin yang akurat.
          </p>

          {/* Form & Preview Container */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr]">
            
            {/* Form Card (Kiri) */}
            <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 shadow-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  
                  {/* Merk Motor (Dropdown) */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Merk Motor
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsOpenMerk(!isOpenMerk)}
                      className="flex w-full items-center justify-between rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-300 transition hover:border-[#3a3a3a] outline-none"
                    >
                      <span>{merk || 'Pilih Merk'}</span>
                      <span className="text-gray-500">
                        <ChevronDownIcon />
                      </span>
                    </button>
                    
                    {isOpenMerk && (
                      <div className="absolute left-0 right-0 z-10 mt-1 rounded-xl border border-[#2a2a2a] bg-[#111111] p-1.5 shadow-xl">
                        {daftarMerk.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setMerk(item)
                              setIsOpenMerk(false)
                            }}
                            className="w-full rounded-lg px-4 py-2.5 text-left text-sm text-gray-300 hover:bg-[#fa1818]/10 hover:text-red-400"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Model Motor */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Model Motor
                    </label>
                    <input
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder="Contoh: CBR250RR"
                      className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  
                  {/* Tahun Kendaraan */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Tahun Kendaraan
                    </label>
                    <input
                      type="text"
                      value={tahun}
                      onChange={(e) => setTahun(e.target.value)}
                      placeholder="2023"
                      className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                    />
                  </div>

                  {/* Plat Nomor */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Plat Nomor
                    </label>
                    <input
                      type="text"
                      value={plat}
                      onChange={(e) => setPlat(e.target.value)}
                      placeholder="B 1234 GKA"
                      className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                    />
                  </div>

                </div>

                {/* Warna Kendaraan */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                    Warna Kendaraan
                  </label>
                  <input
                    type="text"
                    value={warna}
                    onChange={(e) => setWarna(e.target.value)}
                    placeholder="Contoh: Matte Black"
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-300 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                  />
                </div>

                {/* Divider Line */}
                <div className="border-t border-[#222222] my-4" />

                {/* Form Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-[0.98]"
                  >
                    Simpan Kendaraan
                  </button>
                  <Link
                    href="/kendaraan"
                    className="flex items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent px-6 py-3.5 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white"
                  >
                    Batal
                  </Link>
                </div>

              </form>
            </div>

            {/* Preview Card (Kanan) */}
            <div className="flex flex-col items-center justify-center rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fa1818]/10 text-red-500 shadow-[0_0_20px_rgba(250,24,24,0.15)]">
                <MotorcycleIcon />
              </div>
              <h2 className="mt-6 text-xl font-bold tracking-tight text-white">
                Preview
              </h2>
              <p className="mt-3 text-sm text-gray-400 max-w-[200px] leading-relaxed">
                Identitas Kendaraan Anda akan muncul secara otomatis di Dashboard setelah data berhasil disimpan.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
