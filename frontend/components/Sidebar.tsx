/* ─────────────────────────────────────────────────────────
   components/Sidebar.tsx
   Komponen sidebar yang dipakai bersama di semua halaman.
   Props: `activePage` — nama halaman yang sedang aktif.
───────────────────────────────────────────────────────── */

import Link from 'next/link'
import {
  GridIcon,
  CalendarNavIcon,
  BikeNavIcon,
  HistoryNavIcon,
  BellIcon,
  UserNavIcon,
  LogoutIcon,
  UserAvatarIcon,
} from './icons'

/* ─── Tipe ────────────────────────────────────────────── */
type ActivePage = 'dashboard' | 'booking' | 'kendaraan' | 'riwayat' | 'notifikasi' | 'profil'

interface SidebarProps {
  activePage: ActivePage
}

/* ─── Daftar Navigasi ─────────────────────────────────── */
const navItems: { label: string; id: ActivePage; icon: React.ReactNode; href: string }[] = [
  { label: 'Dashboard',      id: 'dashboard',  icon: <GridIcon />,        href: '/dashboard' },
  { label: 'Booking Servis', id: 'booking',    icon: <CalendarNavIcon />, href: '/booking'   },
  { label: 'Kendaraan Saya', id: 'kendaraan',  icon: <BikeNavIcon />,     href: '#'          },
  { label: 'Riwayat Servis', id: 'riwayat',    icon: <HistoryNavIcon />,  href: '#'          },
  { label: 'Notifikasi',     id: 'notifikasi', icon: <BellIcon />,        href: '#'          },
  { label: 'Profil',         id: 'profil',     icon: <UserNavIcon />,     href: '#'          },
]

/* ─── Komponen ────────────────────────────────────────── */
export default function Sidebar({ activePage }: SidebarProps) {
  return (
    <aside className="flex w-[220px] flex-shrink-0 flex-col border-r border-[#1e1e1e] bg-[#161616]">
      {/* Logo */}
      <div className="px-6 py-7">
        <span className="text-[1.1rem] font-black tracking-[0.2em] text-red-500">
          GARAGEZKA
        </span>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 space-y-0.5 px-3">
        {navItems.map((item) => {
          const isActive = activePage === item.id
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Profil User */}
      <div className="border-t border-[#1e1e1e] px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2a2a2a] text-gray-300">
              <UserAvatarIcon />
            </div>
            <span className="text-sm font-medium text-gray-200">Azka Gans</span>
          </div>
          <button className="text-gray-500 transition hover:text-red-400">
            <LogoutIcon />
          </button>
        </div>
      </div>
    </aside>
  )
}
