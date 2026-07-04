'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

/* ─── Icons lokal ────────────────────────────────── */
const UserBigIcon = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
)

const CameraIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)

const EditFieldIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"/>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
)

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

const SaveIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
)

const LockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)

/* ─── Page ───────────────────────────────────────── */
export default function ProfilPage() {
  const [isEditing, setIsEditing] = useState(false)

  const [form, setForm] = useState({
    nama: 'Azka Gans',
    email: 'alex.rivano@example.com',
    hp: '+62 812 3456 7890',
    lokasi: 'Jakarta, Indonesia',
  })

  const [saved, setSaved] = useState({ ...form })

  const handleSave = () => {
    setSaved({ ...form })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setForm({ ...saved })
    setIsEditing(false)
  }

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      <Sidebar activePage="profil" />

      <main className="flex flex-1 flex-col items-center overflow-y-auto px-6 py-10">
        <div className="w-full max-w-[620px]">

          {/* Page Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              Profil Pengguna
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Kelola informasi pribadi dan keamanan akun Anda di bengkel Garagezka.
            </p>
          </div>

          {/* Main Profile Card */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] overflow-hidden">

            {/* Avatar & Identity */}
            <div className="flex items-center gap-5 px-7 py-6">
              {/* Avatar */}
              <div className="relative flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-[#2a2a2a] text-gray-400">
                  <UserBigIcon />
                </div>
                <button className="absolute -bottom-1.5 -right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700">
                  <CameraIcon />
                </button>
              </div>

              {/* Name & ID */}
              <div>
                <h2 className="text-xl font-extrabold text-white">{saved.nama}</h2>
                <p className="mt-1 text-sm text-gray-500">ID Pelanggan: GZ-98231</p>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1e1e1e]" />

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-5 px-7 py-6">
              {/* Nama Lengkap */}
              <div>
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={form.nama}
                    disabled={!isEditing}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] py-3 pl-4 pr-10 text-sm text-gray-200 outline-none transition disabled:cursor-default disabled:text-gray-300 focus:border-red-500/50"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600">
                    <EditFieldIcon />
                  </span>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={form.email}
                    disabled={!isEditing}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] py-3 pl-4 pr-10 text-sm text-gray-200 outline-none transition disabled:cursor-default disabled:text-gray-300 focus:border-red-500/50"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600">
                    <MailIcon />
                  </span>
                </div>
              </div>

              {/* Nomor HP */}
              <div>
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Nomor HP
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={form.hp}
                    disabled={!isEditing}
                    onChange={(e) => setForm({ ...form, hp: e.target.value })}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] py-3 pl-4 pr-10 text-sm text-gray-200 outline-none transition disabled:cursor-default disabled:text-gray-300 focus:border-red-500/50"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600">
                    <PhoneIcon />
                  </span>
                </div>
              </div>

              {/* Lokasi */}
              <div>
                <label className="block text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gray-500 mb-2">
                  Lokasi
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={form.lokasi}
                    disabled={!isEditing}
                    onChange={(e) => setForm({ ...form, lokasi: e.target.value })}
                    className="w-full rounded-xl border border-[#2a2a2a] bg-[#111111] py-3 pl-4 pr-10 text-sm text-gray-200 outline-none transition disabled:cursor-default disabled:text-gray-300 focus:border-red-500/50"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-600">
                    <MapPinIcon />
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#1e1e1e]" />

            {/* Action Buttons */}
            <div className="flex items-center justify-between px-7 py-5">
              <button
                onClick={isEditing ? handleSave : undefined}
                disabled={!isEditing}
                className="flex items-center gap-2 rounded-xl border border-[#2c2c2c] bg-transparent px-5 py-2.5 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <SaveIcon />
                Simpan Edit
              </button>

              {isEditing ? (
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 rounded-xl border border-[#2c2c2c] bg-transparent px-5 py-2.5 text-sm font-bold text-gray-300 transition hover:border-[#444444] hover:text-white"
                >
                  Batal
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-600/25 transition hover:bg-red-700 active:scale-95"
                >
                  <LockIcon />
                  Edit Profil
                </button>
              )}
            </div>

          </div>

          {/* Security Notice Card */}
          <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#1e1e1e] bg-[#191919] px-7 py-5">
            {/* Red left accent */}
            <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 rounded-l-2xl" />

            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex-shrink-0 text-red-500">
                <ShieldIcon />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Keamanan Akun</p>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-400">
                  Pastikan Anda tidak membagikan kredensial login Garagezka kepada siapapun untuk menjaga data kendaraan dan riwayat servis Anda tetap privat.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
