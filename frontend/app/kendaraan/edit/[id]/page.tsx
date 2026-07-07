'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Sidebar from '@/components/Sidebar'
import {
  ArrowLeftIcon,
  MotorcycleIcon,
  ChevronDownIcon,
  TrashIcon,
} from '@/components/icons'

/* ─── Mock Data (simulasi fetch by ID) ───────────── */
const mockDatabase: Record<string, {
  merk: string; model: string; tahun: string; plat: string; warna: string
}> = {
  '1': { merk: 'Honda',  model: 'Vario 160',  tahun: '2022', plat: 'B 1234 ABC', warna: 'Matte White'    },
  '2': { merk: 'Yamaha', model: 'XSR 155',    tahun: '2021', plat: 'B 5678 XYZ', warna: 'Midnight Black' },
}

const daftarMerk = ['Honda', 'Yamaha', 'Suzuki', 'Kawasaki', 'Vespa', 'Ducati']

/* ─── DeleteModal ────────────────────────────────── */
function DeleteModal({ name, onCancel, onConfirm }: {
  name: string
  onCancel: () => void
  onConfirm: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[380px] rounded-2xl border border-[#2a2a2a] bg-[#191919] p-7 shadow-2xl">
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
          <TrashIcon />
        </div>
        <h3 className="text-lg font-extrabold text-white">Hapus Kendaraan?</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          Kendaraan <span className="font-semibold text-white">{name}</span> akan dihapus secara permanen.
          Tindakan ini tidak dapat dibatalkan.
        </p>
        <div className="mt-7 flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-[#2c2c2c] py-3 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ───────────────────────────────────────── */
export default function EditKendaraanPage() {
  const params = useParams()
  const id = params?.id as string

  const defaultData = mockDatabase[id] ?? { merk: '', model: '', tahun: '', plat: '', warna: '' }

  const [merk, setMerk]     = useState(defaultData.merk)
  const [model, setModel]   = useState(defaultData.model)
  const [tahun, setTahun]   = useState(defaultData.tahun)
  const [plat, setPlat]     = useState(defaultData.plat)
  const [warna, setWarna]   = useState(defaultData.warna)
  const [isOpenMerk, setIsOpenMerk] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [saved, setSaved]   = useState(false)

  const namaKendaraan = `${merk} ${model}`.trim() || 'Kendaraan'

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <>
      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <DeleteModal
          name={namaKendaraan}
          onCancel={() => setShowDeleteModal(false)}
          onConfirm={() => { setShowDeleteModal(false); window.location.href = '/kendaraan' }}
        />
      )}

      <div className="flex min-h-screen bg-[#111111] font-sans text-white">
        <Sidebar activePage="kendaraan" />

        <main className="flex flex-1 flex-col overflow-y-auto">
          <div className="px-8 py-8">

            {/* Header */}
            <div className="mb-2 flex items-center gap-3">
              <Link
                href="/kendaraan"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent text-gray-400 transition hover:border-[#444444] hover:text-white"
              >
                <ArrowLeftIcon />
              </Link>
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-white">
                  Edit Kendaraan
                </h1>
              </div>
            </div>

            <p className="mb-8 mt-2 text-sm text-gray-400 max-w-2xl leading-relaxed">
              Perbarui data kendaraan Anda. Pastikan informasi yang dimasukkan sudah benar sebelum menyimpan.
            </p>

            {/* Save Success Toast */}
            {saved && (
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3.5">
                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                <span className="text-sm font-semibold text-green-400">
                  Data kendaraan berhasil disimpan!
                </span>
              </div>
            )}

            {/* Grid: Form + Preview */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr]">

              {/* ── Form Card ── */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 shadow-sm">
                <form onSubmit={handleSave} className="space-y-6">

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                    {/* Merk Motor (Dropdown) */}
                    <div className="relative">
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Merk Motor
                      </label>
                      <button
                        type="button"
                        onClick={() => setIsOpenMerk(!isOpenMerk)}
                        className="flex w-full items-center justify-between rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-200 transition hover:border-[#3a3a3a] outline-none"
                      >
                        <span>{merk || 'Pilih Merk'}</span>
                        <span className="text-gray-500"><ChevronDownIcon /></span>
                      </button>
                      {isOpenMerk && (
                        <div className="absolute left-0 right-0 z-10 mt-1 rounded-xl border border-[#2a2a2a] bg-[#111111] p-1.5 shadow-xl">
                          {daftarMerk.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => { setMerk(item); setIsOpenMerk(false) }}
                              className={`w-full rounded-lg px-4 py-2.5 text-left text-sm transition hover:bg-[#fa1818]/10 hover:text-red-400 ${merk === item ? 'text-red-400' : 'text-gray-300'}`}
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
                        className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
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
                        className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
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
                        className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
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
                      className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] px-4 py-3.5 text-sm text-gray-200 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                    />
                  </div>

                  {/* Divider */}
                  <div className="border-t border-[#222222]" />

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-3">
                      <button
                        type="submit"
                        className="rounded-xl bg-red-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:bg-red-700 active:scale-[0.98]"
                      >
                        Simpan Perubahan
                      </button>
                      <Link
                        href="/kendaraan"
                        className="flex items-center justify-center rounded-xl border border-[#2c2c2c] bg-transparent px-6 py-3.5 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white"
                      >
                        Batal
                      </Link>
                    </div>

                    {/* Hapus Kendaraan */}
                    <button
                      type="button"
                      onClick={() => setShowDeleteModal(true)}
                      className="flex items-center gap-2 rounded-xl border border-red-500/30 px-4 py-3.5 text-sm font-semibold text-red-500 transition hover:border-red-500/60 hover:bg-red-500/5"
                    >
                      <TrashIcon />
                      Hapus
                    </button>
                  </div>

                </form>
              </div>

              {/* ── Preview Card ── */}
              <div className="flex flex-col items-center justify-center rounded-3xl border border-[#1e1e1e] bg-[#191919] p-8 text-center shadow-sm">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#fa1818]/10 text-red-500 shadow-[0_0_20px_rgba(250,24,24,0.15)]">
                  <MotorcycleIcon />
                </div>
                <h2 className="mt-6 text-xl font-bold tracking-tight text-white">
                  {namaKendaraan}
                </h2>
                <p className="mt-1.5 text-xs text-gray-500 font-medium tracking-wide">{plat || '—'}</p>
                <div className="mt-5 w-full rounded-xl border border-[#222222] bg-[#111111]/60 px-4 py-3 text-left">
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600">Tahun Produksi</p>
                  <p className="mt-1 text-lg font-extrabold text-white">{tahun || '—'}</p>
                </div>
                {warna && (
                  <div className="mt-3 w-full rounded-xl border border-[#222222] bg-[#111111]/60 px-4 py-3 text-left">
                    <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600">Warna</p>
                    <p className="mt-1 text-sm font-semibold text-white">{warna}</p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </main>
      </div>
    </>
  )
}
