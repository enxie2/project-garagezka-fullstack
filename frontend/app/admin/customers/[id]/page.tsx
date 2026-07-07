'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import AdminSidebar from '@/components/AdminSidebar'
import {
  ArrowLeftIcon,
  MotorcycleIcon,
} from '@/components/icons'

/* ─── Mock Database Pelanggan ───────────────────── */
const customersDb: Record<string, {
  id: number; name: string; email: string; hp: string; lokasi: string
  vehicles: { name: string; plate: string; year: string }[]
  services: { id: string; service: string; date: string; cost: string; status: string }[]
}> = {
  '1': {
    id: 1, name: 'Azka Gans', email: 'alex.rivano@example.com', hp: '+62 812 3456 7890', lokasi: 'Jakarta, Indonesia',
    vehicles: [
      { name: 'Honda Vario 160', plate: 'B 1234 ABC', year: '2022' },
      { name: 'Yamaha MT-09',    plate: 'B 1234 GZ',  year: '2023' },
    ],
    services: [
      { id: 'GZ-8829', service: 'Servis Lengkap', date: '24 Okt 2023', cost: 'Rp 750.000', status: 'Selesai' },
      { id: 'GZ-9988', service: 'Ganti Oli',      date: '12 Sep 2023', cost: 'Rp 100.000', status: 'Selesai' },
      { id: 'GZ-5512', service: 'Tune Up',        date: '02 Jun 2023', cost: 'Rp 150.000', status: 'Selesai' },
    ],
  },
  '2': {
    id: 2, name: 'Rian Hidayat', email: 'rian.hid@example.com', hp: '+62 899 1234 5678', lokasi: 'Depok, West Java',
    vehicles: [
      { name: 'Honda Vario 160', plate: 'B 6021 SSA', year: '2021' },
    ],
    services: [
      { id: 'GZ-3321', service: 'Ganti Oli & Rem', date: 'Hari Ini', cost: 'Rp 160.000', status: 'Diproses' },
      { id: 'GZ-2211', service: 'Servis Ringan',   date: '15 Jul 2023', cost: 'Rp 150.000', status: 'Selesai' },
    ],
  },
}

export default function AdminCustomerDetailPage() {
  const params = useParams()
  const id = params?.id as string

  const customer = customersDb[id] ?? {
    id: Number(id) || 99,
    name: 'Pelanggan Umum',
    email: 'email@example.com',
    hp: '—',
    lokasi: '—',
    vehicles: [],
    services: [],
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar Admin ── */}
      <AdminSidebar activePage="customers" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8 max-w-5xl space-y-6">

          {/* Header */}
          <div className="flex items-center gap-3">
            <Link
              href="/admin/customers"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2c2c2c] text-gray-400 transition hover:border-[#444444] hover:text-white"
            >
              <ArrowLeftIcon />
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white">
                Profil Pelanggan
              </h1>
              <p className="text-xs text-gray-500 mt-0.5">
                ID Pelanggan: <span className="font-mono text-gray-400">#MEB-{String(customer.id).padStart(3, '0')}</span>
              </p>
            </div>
          </div>

          {/* Info Card Pelanggan */}
          <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Biodata Lengkap</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm">
              <div>
                <p className="text-xs text-gray-500">Nama Pelanggan</p>
                <p className="mt-1 font-bold text-white">{customer.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="mt-1 font-bold text-white">{customer.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Nomor Handphone</p>
                <p className="mt-1 font-bold text-white">{customer.hp}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Domisili / Lokasi</p>
                <p className="mt-1 font-bold text-white">{customer.lokasi}</p>
              </div>
            </div>
          </div>

          {/* Grid: Kendaraan + Riwayat */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.8fr]">

            {/* List Motor Pelanggan */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Daftar Kendaraan</h3>
              
              {customer.vehicles.length === 0 ? (
                <p className="text-xs text-gray-500 italic">Belum mendaftarkan kendaraan.</p>
              ) : (
                customer.vehicles.map((v, i) => (
                  <div key={i} className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#222] text-red-500">
                      <MotorcycleIcon />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{v.name}</p>
                      <p className="text-xs text-red-500 font-mono mt-0.5 font-bold">{v.plate}</p>
                      <span className="inline-block bg-[#222] px-2 py-0.5 rounded text-[0.65rem] text-gray-500 mt-1.5 font-medium">Tahun {v.year}</span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Riwayat Servis Pelanggan */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Riwayat Booking Servis</h3>
              
              <div className="rounded-3xl border border-[#1e1e1e] bg-[#191919] p-6 overflow-hidden">
                {customer.services.length === 0 ? (
                  <p className="text-xs text-gray-500 italic">Belum ada riwayat transaksi.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-[#222] text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                          <th className="pb-3">Kode</th>
                          <th className="pb-3">Layanan</th>
                          <th className="pb-3">Tanggal</th>
                          <th className="pb-3 text-right">Biaya</th>
                          <th className="pb-3 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customer.services.map((s) => {
                          const isSelesai = s.status === 'Selesai'
                          return (
                            <tr key={s.id} className="border-b border-[#1f1f1f] last:border-0">
                              <td className="py-4 font-mono font-bold text-gray-400">{s.id}</td>
                              <td className="py-4 font-bold text-white">{s.service}</td>
                              <td className="py-4 text-gray-500">{s.date}</td>
                              <td className="py-4 text-right font-semibold text-gray-300">{s.cost}</td>
                              <td className="py-4 text-right">
                                <span className={`inline-flex rounded-full border px-2 py-0.5 text-[0.6rem] font-bold ${
                                  isSelesai
                                    ? 'text-green-500 bg-green-500/10 border-green-500/20'
                                    : 'text-blue-500 bg-blue-500/10 border-blue-500/20'
                                }`}>
                                  {s.status}
                                </span>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
