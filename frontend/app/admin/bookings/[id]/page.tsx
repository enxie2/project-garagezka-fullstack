'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import AdminSidebar from '@/components/AdminSidebar'
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  PlusIcon,
  TrashIcon,
} from '@/components/icons'

/* ─── Mock Database Booking Detail ───────────────── */
const mockBookingsDb: Record<string, {
  id: string; customer: string; hp: string; motor: string; plate: string; service: string
  date: string; time: string; status: 'Menunggu' | 'Diproses' | 'Selesai'
  mechanic: string; notes: string
  parts: { nama: string; qty: number; harga: number }[]
}> = {
  'GZ-8829': {
    id: 'GZ-8829', customer: 'Azka Gans', hp: '+62 812 3456 7890',
    motor: 'Yamaha MT-09', plate: 'B 1234 GZ', service: 'Servis Lengkap',
    date: '24 Oktober 2023', time: '09:00 WIB', status: 'Selesai',
    mechanic: 'Budi Santoso',
    notes: 'Kondisi oli sangat keruh, sudah diganti baru. Filter udara sedikit berdebu tapi sudah dibersihkan.',
    parts: [
      { nama: 'Jasa Servis Lengkap', qty: 1, harga: 200000 },
      { nama: 'Oli Mesin Motul 1L',   qty: 1, harga: 150000 },
      { nama: 'Filter Oli K&N',       qty: 1, harga: 110000 },
      { nama: 'Biaya Admin',          qty: 1, harga: 10000  },
    ],
  },
  'GZ-3321': {
    id: 'GZ-3321', customer: 'Rian Hidayat', hp: '+62 899 1234 5678',
    motor: 'Honda Vario 160', plate: 'B 6021 SSA', service: 'Ganti Oli & Rem',
    date: 'Hari Ini', time: '10:30 WIB', status: 'Diproses',
    mechanic: 'Rizky Pratama',
    notes: '',
    parts: [
      { nama: 'Jasa Ganti Oli',    qty: 1, harga: 50000 },
      { nama: 'Oli SPX2 0.8L',      qty: 1, harga: 60000 },
      { nama: 'Kampas Rem Depan',   qty: 1, harga: 40000 },
      { nama: 'Biaya Admin',        qty: 1, harga: 10000 },
    ],
  },
  'GZ-1244': {
    id: 'GZ-1244', customer: 'Dani Prasetyo', hp: '+62 856 9912 3341',
    motor: 'Kawasaki W175', plate: 'B 3321 KKA', service: 'Tune Up',
    date: 'Hari Ini', time: '11:15 WIB', status: 'Menunggu',
    mechanic: '',
    notes: '',
    parts: [
      { nama: 'Jasa Tune Up', qty: 1, harga: 150000 },
      { nama: 'Biaya Admin',  qty: 1, harga: 10000  },
    ],
  },
}

const daftarMekanik = [
  'Budi Santoso',
  'Rizky Pratama',
  'Agus Setiawan',
  'Doni Kusuma',
  'Heri Wahyudi',
]

export default function AdminBookingDetailPage() {
  const params = useParams()
  const id = params?.id as string

  // Fetch or fallback
  const originalData = mockBookingsDb[id] ?? {
    id: id || 'GZ-XXXX', customer: 'Umum / Walk-in', hp: '—',
    motor: '—', plate: '—', service: 'Servis Ringan',
    date: 'Hari Ini', time: '09:00 WIB', status: 'Menunggu',
    mechanic: '', notes: '', parts: [{ nama: 'Biaya Admin', qty: 1, harga: 10000 }],
  }

  const [status, setStatus] = useState(originalData.status)
  const [mechanic, setMechanic] = useState(originalData.mechanic)
  const [notes, setNotes] = useState(originalData.notes)
  const [parts, setParts] = useState(originalData.parts)
  const [newItemName, setNewItemName] = useState('')
  const [newItemPrice, setNewItemPrice] = useState('')
  const [saved, setSaved] = useState(false)

  // Calculate bill totals
  const totalBill = parts.reduce((sum, p) => sum + p.harga * p.qty, 0)

  const handleAddPart = () => {
    if (!newItemName.trim() || !newItemPrice) return
    const price = parseInt(newItemPrice, 10)
    if (isNaN(price)) return
    setParts((prev) => [...prev, { nama: newItemName, qty: 1, harga: price }])
    setNewItemName('')
    setNewItemPrice('')
  }

  const handleRemovePart = (index: number) => {
    setParts((prev) => prev.filter((_, idx) => idx !== index))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  const formatRupiah = (n: number) => {
    return 'Rp ' + n.toLocaleString('id-ID')
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="bookings" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8 max-w-5xl">
          
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link
                href="/admin/bookings"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] text-gray-400 transition hover:border-[#444444] hover:text-white"
              >
                <ArrowLeftIcon />
              </Link>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-white">
                  Work Order & Lembar Kerja
                </h1>
                <p className="text-xs text-gray-500 mt-0.5">
                  ID Booking: <span className="font-mono text-gray-400">{id}</span>
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Link
                href="/admin/bookings"
                className="rounded-xl border border-[#2c2c2c] px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-[#444] hover:text-white"
              >
                Batal
              </Link>
              <button
                onClick={handleSave}
                className="rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700"
              >
                Simpan & Update Status
              </button>
            </div>
          </div>

          {/* Success Banner */}
          {saved && (
            <div className="mb-6 flex items-center gap-3 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3.5">
              <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <span className="text-sm font-semibold text-green-400">
                Work Order / Detail Booking berhasil disimpan & disinkronkan ke pelanggan!
              </span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr]">
            
            {/* Left Column: Forms & Billing */}
            <div className="space-y-6">
              
              {/* Customer & Vehicle Info */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Informasi Customer & Kendaraan</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-gray-500">Nama Pelanggan</p>
                    <p className="mt-1 font-bold text-white">{originalData.customer}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{originalData.hp}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Kendaraan (Motor)</p>
                    <p className="mt-1 font-bold text-white">{originalData.motor}</p>
                    <p className="text-xs text-red-500 font-mono mt-0.5 font-bold">{originalData.plate}</p>
                  </div>
                </div>
              </div>

              {/* Billing and Parts Add Form */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Rincian Part & Estimasi Jasa</h3>
                
                {/* Table of items */}
                <div className="space-y-3">
                  <div className="grid grid-cols-[1fr_60px_100px_40px] gap-3 border-b border-[#222] pb-2 text-[0.65rem] font-bold uppercase text-gray-500">
                    <span>Nama Layanan / Part</span>
                    <span>Qty</span>
                    <span className="text-right">Harga</span>
                    <span></span>
                  </div>

                  {parts.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-[1fr_60px_100px_40px] gap-3 items-center text-sm py-2 border-b border-[#1f1f1f] last:border-0">
                      <span className="text-gray-200">{item.nama}</span>
                      <span className="text-gray-500">{item.qty}x</span>
                      <span className="text-right font-semibold text-gray-200">{formatRupiah(item.harga)}</span>
                      <div className="text-right">
                        <button
                          onClick={() => handleRemovePart(idx)}
                          className="text-gray-600 hover:text-red-500 transition"
                          title="Hapus baris"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add new Item Form */}
                <div className="bg-[#111111]/60 p-4 rounded-xl border border-[#222] flex gap-3 items-end">
                  <div className="flex-1">
                    <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Tambah Suku Cadang / Jasa</label>
                    <input
                      type="text"
                      value={newItemName}
                      onChange={(e) => setNewItemName(e.target.value)}
                      placeholder="Contoh: Oli Motul 1L / Jasa Pasang Ban"
                      className="w-full rounded-lg border border-[#2c2c2c] bg-[#191919] px-3 py-2 text-xs text-gray-300 outline-none transition focus:border-red-500/50"
                    />
                  </div>
                  <div className="w-[120px]">
                    <label className="block text-[0.6rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">Harga (Rp)</label>
                    <input
                      type="text"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      placeholder="85000"
                      className="w-full rounded-lg border border-[#2c2c2c] bg-[#191919] px-3 py-2 text-xs text-gray-300 outline-none transition focus:border-red-500/50"
                    />
                  </div>
                  <button
                    onClick={handleAddPart}
                    type="button"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    <PlusIcon />
                  </button>
                </div>

                {/* Grand Total */}
                <div className="border-t border-[#222] pt-4 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-400">Total Biaya Saat Ini:</span>
                  <span className="text-xl font-extrabold text-red-500">{formatRupiah(totalBill)}</span>
                </div>
              </div>

              {/* Mechanic Notes */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Catatan / Rekomendasi Mekanik</h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Tuliskan rekomendasi pengerjaan, masalah pada motor, atau saran servis berikutnya..."
                  className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] p-4 text-xs text-gray-300 placeholder-gray-600 outline-none transition focus:border-red-500/50"
                />
              </div>

            </div>

            {/* Right Column: Status & Assignment */}
            <div className="space-y-6">
              
              {/* Booking Status Card */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Status & Jadwal Kedatangan</h3>
                
                <div>
                  <p className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">Tanggal & Waktu</p>
                  <p className="text-sm font-bold text-white">{originalData.date}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{originalData.time}</p>
                </div>

                <div className="border-t border-[#222]/50 my-2" />

                <div>
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">Status Pengerjaan</label>
                  <div className="relative">
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value as any)}
                      className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3 text-xs text-gray-200 outline-none appearance-none cursor-pointer focus:border-red-500/50"
                    >
                      <option value="Menunggu">Menunggu</option>
                      <option value="Diproses">Diproses</option>
                      <option value="Selesai">Selesai</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>
              </div>

              {/* Mechanic Assignment Card */}
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Penugasan Mekanik</h3>
                
                <div>
                  <label className="block text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-2">Pilih Mekanik Lapangan</label>
                  <div className="relative">
                    <select
                      value={mechanic}
                      onChange={(e) => setMechanic(e.target.value)}
                      className="w-full rounded-xl border border-[#2c2c2c] bg-[#111] px-4 py-3 text-xs text-gray-200 outline-none appearance-none cursor-pointer focus:border-red-500/50"
                    >
                      <option value="">-- Belum Ditugaskan --</option>
                      {daftarMekanik.map((mek) => (
                        <option key={mek} value={mek}>{mek}</option>
                      ))}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                      <ChevronDownIcon />
                    </span>
                  </div>
                </div>
                
                <p className="text-[0.65rem] leading-relaxed text-gray-500">
                  Mekanik yang ditugaskan akan melihat form pengerjaan ini pada layar bengkel mereka untuk memulai pengerjaan fisik.
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
