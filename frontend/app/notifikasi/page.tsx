'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'

/* ─── Icons lokal untuk page ini ────────────────── */
const CalendarBookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <polyline points="9,15 11,17 15,13" />
  </svg>
)

const ToolsCrossIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
)

/* ─── Data Notifikasi ────────────────────────────── */
type GroupKey = 'HARI INI' | 'KEMARIN'

interface Notif {
  id: number
  group: GroupKey
  time: string
  badge: 'BERHASIL' | 'SELESAI' | 'MENUNGGU'
  title: string
  desc: string
  type: 'calendar' | 'tools'
  isNew: boolean
}

const notifData: Notif[] = [
  {
    id: 1,
    group: 'HARI INI',
    time: '10:45 AM',
    badge: 'BERHASIL',
    title: 'Booking Servis Dikonfirmasi',
    desc: 'Jadwal servis berkala untuk Kawasaki Z900 Anda pada 24 Okt telah dikonfirmasi oleh tim ahli kami.',
    type: 'calendar',
    isNew: true,
  },
  {
    id: 2,
    group: 'HARI INI',
    time: '08:20 AM',
    badge: 'SELESAI',
    title: 'Servis Selesai Dikerjakan',
    desc: 'Unit Honda CB650R Anda telah selesai menjalani pengecekan sistem kelistrikan. Siap untuk dipacu kembali.',
    type: 'tools',
    isNew: false,
  },
  {
    id: 3,
    group: 'KEMARIN',
    time: 'Kemarin, 14:00',
    badge: 'SELESAI',
    title: 'Servis Selesai Dikerjakan',
    desc: 'Unit Yamaha MT-09 Anda telah selesai menjalani servis rutin dan pengecekan mesin. Performa kini kembali optimal.',
    type: 'tools',
    isNew: false,
  },
  {
    id: 4,
    group: 'KEMARIN',
    time: 'Kemarin, 09:15',
    badge: 'SELESAI',
    title: 'Servis Selesai Dikerjakan',
    desc: 'Unit Kawasaki ZX-25R Anda telah selesai diproses untuk detailing dan pembersihan menyeluruh.',
    type: 'tools',
    isNew: false,
  },
]

/* ─── Badge style helper ─────────────────────────── */
function getBadgeStyle(badge: Notif['badge']) {
  if (badge === 'BERHASIL') return 'bg-red-600 text-white'
  if (badge === 'MENUNGGU') return 'bg-[#2a1d0f] text-[#fbbf24] border border-[#553b1b]'
  return 'bg-[#222222] text-gray-400 border border-[#2c2c2c]'
}

/* ─── Page ───────────────────────────────────────── */
export default function NotifikasiPage() {
  const [notifications, setNotifications] = useState(notifData)

  const newCount = notifications.filter((n) => n.isNew).length

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isNew: false })))
  }

  const groups: GroupKey[] = ['HARI INI', 'KEMARIN']

  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <Sidebar activePage="notifikasi" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">

        {/* Top bar */}
        <div className="border-b border-[#1e1e1e] px-8 py-5">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-white">Notifikasi</h1>
            {newCount > 0 && (
              <span className="inline-flex items-center rounded-md bg-red-600 px-2 py-0.5 text-[0.65rem] font-extrabold uppercase tracking-wider text-white">
                {newCount} BARU
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 max-w-4xl">
          
          {/* Hero heading */}
          <div className="mb-8">
            <h2 className="text-5xl font-black uppercase tracking-tight text-white leading-none">
              Aktivitas Terbaru
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              Kelola dan pantau semua aktivitas kendaraan Anda dalam satu dashboard.
            </p>
          </div>

          {/* Grouped notifications */}
          <div className="space-y-8">
            {groups.map((group) => {
              const items = notifications.filter((n) => n.group === group)
              if (items.length === 0) return null

              return (
                <div key={group}>
                  {/* Group header */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gray-500">
                      {group}
                    </span>
                    {group === 'HARI INI' && newCount > 0 && (
                      <button
                        onClick={markAllRead}
                        className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-red-500 transition hover:text-red-400"
                      >
                        Tandai Sudah Baca
                      </button>
                    )}
                  </div>

                  {/* Notification cards */}
                  <div className="space-y-3">
                    {items.map((notif) => (
                      <div
                        key={notif.id}
                        className={`relative flex gap-4 rounded-2xl border bg-[#191919] p-5 transition ${
                          notif.isNew
                            ? 'border-[#1e1e1e] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-l-2xl before:bg-red-600'
                            : 'border-[#1e1e1e] hover:border-[#2a2a2a]'
                        }`}
                      >
                        {/* Unread left accent */}
                        {notif.isNew && (
                          <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-red-600" />
                        )}

                        {/* Icon */}
                        <div
                          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${
                            notif.isNew
                              ? 'bg-red-600/15 text-red-500'
                              : 'bg-[#222222] text-gray-400'
                          }`}
                        >
                          {notif.type === 'calendar' ? <CalendarBookIcon /> : <ToolsCrossIcon />}
                        </div>

                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <div className="mb-2 flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2">
                              {/* Badge */}
                              <span
                                className={`rounded-md px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider ${getBadgeStyle(notif.badge)}`}
                              >
                                {notif.badge}
                              </span>
                            </div>
                            {/* Time */}
                            <span className="flex-shrink-0 text-xs text-gray-600">
                              {notif.time}
                            </span>
                          </div>

                          <h3 className={`text-sm font-bold leading-snug ${notif.isNew ? 'text-white' : 'text-gray-200'}`}>
                            {notif.title}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                            {notif.desc}
                          </p>
                        </div>
                      </div>
                    ))}
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
