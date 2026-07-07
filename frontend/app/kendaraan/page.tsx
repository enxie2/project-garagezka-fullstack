'use client'

import { useState } from 'react'
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'
import {
  MotorcycleIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
} from '@/components/icons'

/* ─── Mock Data Kendaraan ────────────────────────── */
const initialKendaraan = [
  { id: 1, name: 'Honda Vario 160',  plate: 'B 1234 ABC', year: '2022' },
  { id: 2, name: 'Yamaha XSR 155',   plate: 'B 5678 XYZ', year: '2021' },
]

/* ─── Delete Confirmation Modal ──────────────────── */
function DeleteModal({
  name, onCancel, onConfirm,
}: {
  name: string; onCancel: () => void; onConfirm: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-[380px] rounded-2xl border border-[#2a2a2a] bg-[#191919] p-7 shadow-2xl">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
          <TrashIcon />
        </div>
        <h3 className="text-lg font-extrabold text-white">Hapus Kendaraan?</h3>
        <p className="mt-2 text-sm text-gray-400 leading-relaxed">
          Kendaraan <span className="font-semibold text-white">{name}</span> akan dihapus
          secara permanen. Tindakan ini tidak dapat dibatalkan.
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
export default function KendaraanPage() {
  const [kendaraan, setKendaraan] = useState(initialKendaraan)
  const [toDelete, setToDelete] = useState<{ id: number; name: string } | null>(null)

  const handleConfirmDelete = () => {
    if (!toDelete) return
    setKendaraan((prev) => prev.filter((m) => m.id !== toDelete.id))
    setToDelete(null)
  }

  return (
    <>
      {/* Delete Modal */}
      {toDelete && (
        <DeleteModal
          name={toDelete.name}
          onCancel={() => setToDelete(null)}
          onConfirm={handleConfirmDelete}
        />
      )}

      <div className="flex min-h-screen bg-[#111111] font-sans text-white">
        <Sidebar activePage="kendaraan" />

        <main className="flex flex-1 flex-col overflow-y-auto">
          <div className="px-8 py-8">

            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-semibold tracking-tight text-white">
                Kendaraan Saya
              </h1>
            </div>

            {/* Grid Kendaraan */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

              {kendaraan.map((motor) => (
                <div
                  key={motor.id}
                  className="flex flex-col justify-between rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 shadow-sm transition hover:border-[#2a2a2a]"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#222222] text-[#fa1818]">
                        <MotorcycleIcon />
                      </div>
                      <div>
                        <h3 className="text-[1.05rem] font-bold text-white leading-snug">
                          {motor.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">
                          {motor.plate}
                        </p>
                      </div>
                    </div>

                    {/* Tahun Produksi */}
                    <div className="mt-6 inline-block rounded-xl bg-[#111111]/70 px-4 py-3 border border-[#222222] min-w-[100px]">
                      <p className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-500">
                        TAHUN PRODUKSI
                      </p>
                      <p className="mt-1 text-base font-extrabold text-white">
                        {motor.year}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer (Actions) */}
                  <div className="mt-8 flex gap-2 border-t border-[#222222] pt-4">
                    <Link
                      href={`/kendaraan/edit/${motor.id}`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2c2c2c] bg-transparent text-gray-400 transition hover:border-[#444444] hover:text-white active:scale-95"
                    >
                      <PencilIcon />
                    </Link>
                    <button
                      onClick={() => setToDelete({ id: motor.id, name: motor.name })}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#2c2c2c] bg-transparent text-gray-400 transition hover:border-red-500/50 hover:text-red-400 active:scale-95"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              ))}

              {/* Card: Tambah Kendaraan Baru */}
              <Link
                href="/kendaraan/tambah"
                className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-[#262626] bg-[#111111]/30 p-6 text-center transition hover:border-red-500/40 hover:bg-[#fa1818]/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#222222] text-gray-400">
                  <PlusIcon />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">
                  Tambah Kendaraan Baru
                </h3>
                <p className="mt-1.5 text-xs text-gray-500">
                  Daftarkan motor lainnya
                </p>
              </Link>

            </div>

            {/* Info Row (bawah) */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Total Kendaraan */}
              <div className="w-[200px] rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm">
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                  TOTAL KENDARAAN
                </p>
                <p className="mt-2 text-3xl font-extrabold text-white">
                  {String(kendaraan.length).padStart(2, '0')}
                </p>
              </div>

              {/* Status Bengkel */}
              <div className="relative w-[240px] overflow-hidden rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm">
                <div className="absolute -bottom-4 -right-4 opacity-5 text-white">
                  <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                  </svg>
                </div>
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                  STATUS BENGKEL
                </p>
                <div className="mt-3.5 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                  <span className="text-sm font-bold text-green-500">
                    Tersedia untuk Booking
                  </span>
                </div>
              </div>

            </div>

          </div>
        </main>
      </div>
    </>
  )
}
