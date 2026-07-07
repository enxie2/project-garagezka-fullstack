'use client'

import { useState } from 'react'
import AdminSidebar from '@/components/AdminSidebar'

/* ─── Mock Data Transaksi Pembayaran ──────────────── */
const initialTransactions = [
  { id: 'TX-8829', bookingId: 'GZ-8829', customer: 'Azka Gans',     date: '24 Okt 2023', amount: 750000, method: 'QRIS',          status: 'Lunas' },
  { id: 'TX-3321', bookingId: 'GZ-3321', customer: 'Rian Hidayat',  date: 'Hari Ini',    amount: 160000, method: 'Transfer Bank', status: 'Belum Bayar' },
  { id: 'TX-1244', bookingId: 'GZ-1244', customer: 'Dani Prasetyo', date: 'Hari Ini',    amount: 325000, method: 'Tunai / Cash',  status: 'Belum Bayar' },
  { id: 'TX-9912', bookingId: 'GZ-9912', customer: 'Siti Aminah',   date: 'Besok',       amount: 180000, method: 'QRIS',          status: 'Belum Bayar' },
  { id: 'TX-7711', bookingId: 'GZ-7711', customer: 'Alex Rivano',   date: '28 Agu 2023', amount: 350000, method: 'Transfer Bank', status: 'Lunas' },
  { id: 'TX-5531', bookingId: 'GZ-5531', customer: 'Kevin Sanjaya', date: '15 Agu 2023', amount: 850000, method: 'QRIS',          status: 'Lunas' },
]

export default function AdminPaymentsPage() {
  const [transactions, setTransactions] = useState(initialTransactions)
  const [filter, setFilter] = useState<'Semua' | 'Lunas' | 'Belum Bayar'>('Semua')

  const filteredTx = transactions.filter((t) => filter === 'Semua' || t.status === filter)

  // Total pendapatan yang terkumpul (Lunas)
  const totalIncome = transactions
    .filter((t) => t.status === 'Lunas')
    .reduce((sum, t) => sum + t.amount, 0)

  // Total pembayaran tertunda (Belum Bayar)
  const pendingAmount = transactions
    .filter((t) => t.status === 'Belum Bayar')
    .reduce((sum, t) => sum + t.amount, 0)

  const handleMarkAsPaid = (id: string) => {
    setTransactions((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: 'Lunas' } : t))
    )
  }

  const formatRupiah = (n: number) => {
    return 'Rp ' + n.toLocaleString('id-ID')
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar Admin ── */}
      <AdminSidebar activePage="payments" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">

        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
          <div>
            <h1 className="text-xl font-bold">Verifikasi Pembayaran</h1>
            <p className="text-xs text-gray-500 mt-1">Konfirmasi tagihan masuk dan kelola status pembayaran customer</p>
          </div>
        </header>

        {/* Content Container */}
        <div className="px-8 py-8 space-y-6">

          {/* Row 1: KPI Ringkasan Keuangan */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {/* Total Income */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">Pendapatan Diterima</p>
              <p className="mt-2 text-2xl font-black text-green-500">{formatRupiah(totalIncome)}</p>
              <p className="text-[0.65rem] text-gray-600 mt-1.5">Dari total transaksi berstatus Lunas</p>
            </div>

            {/* Pending Amount */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">Tagihan Tertunda</p>
              <p className="mt-2 text-2xl font-black text-yellow-500">{formatRupiah(pendingAmount)}</p>
              <p className="text-[0.65rem] text-gray-600 mt-1.5">Memerlukan konfirmasi pembayaran</p>
            </div>

            {/* Total Completed Transactions */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm sm:col-span-2 md:col-span-1">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">Rasio Pembayaran</p>
              <p className="mt-2 text-2xl font-black text-white">
                {transactions.filter((t) => t.status === 'Lunas').length} / {transactions.length}
              </p>
              <p className="text-[0.65rem] text-gray-600 mt-1.5">Transaksi lunas dibanding total transaksi</p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e1e1e] pb-4">
            <div className="flex gap-2">
              {(['Semua', 'Lunas', 'Belum Bayar'] as const).map((tab) => {
                const isActive = filter === tab
                let tabStyle = 'border border-[#2c2c2c] text-gray-400 hover:border-[#444] hover:text-white'
                if (isActive) {
                  tabStyle = 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                }
                return (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${tabStyle}`}
                  >
                    {tab}
                  </button>
                )
              })}
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Menampilkan {filteredTx.length} invoice tagihan
            </span>
          </div>

          {/* Transactions Table Card */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-[#222] text-[0.7rem] font-bold uppercase tracking-wider text-gray-500">
                    <th className="pb-3">No. Invoice</th>
                    <th className="pb-3">Kode Booking</th>
                    <th className="pb-3">Pelanggan</th>
                    <th className="pb-3">Tanggal</th>
                    <th className="pb-3">Metode</th>
                    <th className="pb-3">Total Tagihan</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3 text-right">Tindakan</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTx.map((tx) => {
                    const isPaid = tx.status === 'Lunas'
                    return (
                      <tr key={tx.id} className="border-b border-[#1f1f1f] last:border-0">
                        {/* No Invoice */}
                        <td className="py-4 font-mono font-bold text-gray-400">{tx.id}</td>
                        {/* Kode Booking */}
                        <td className="py-4 font-mono text-gray-500">{tx.bookingId}</td>
                        {/* Pelanggan */}
                        <td className="py-4 font-bold text-white">{tx.customer}</td>
                        {/* Tanggal */}
                        <td className="py-4 text-xs text-gray-400">{tx.date}</td>
                        {/* Metode */}
                        <td className="py-4 text-xs text-gray-400">{tx.method}</td>
                        {/* Total Tagihan */}
                        <td className="py-4 font-semibold text-gray-200">{formatRupiah(tx.amount)}</td>
                        {/* Status */}
                        <td className="py-4">
                          <span className={`inline-flex rounded-full border px-2.5 py-1 text-[0.65rem] font-bold ${
                            isPaid
                              ? 'text-green-500 bg-green-500/10 border-green-500/20'
                              : 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                        {/* Actions */}
                        <td className="py-4 text-right">
                          {!isPaid ? (
                            <button
                              onClick={() => handleMarkAsPaid(tx.id)}
                              className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-green-700 active:scale-95 shadow-md shadow-green-600/20"
                            >
                              Konfirmasi Lunas
                            </button>
                          ) : (
                            <span className="text-xs text-gray-600 font-medium">Terverifikasi ✅</span>
                          )}
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
