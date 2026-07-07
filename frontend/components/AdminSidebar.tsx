/* ─────────────────────────────────────────────────────────
   components/AdminSidebar.tsx
   Komponen sidebar khusus halaman Admin.
   Props: `activePage` — nama halaman admin yang aktif.
───────────────────────────────────────────────────────── */

import Link from 'next/link'
import {
  GridIcon,
  CalendarNavIcon,
  UserNavIcon,
  WrenchIcon,
  LogoutIcon,
  UserAvatarIcon,
} from './icons'

/* ─── Tipe ────────────────────────────────────────────── */
type AdminActivePage = 'dashboard' | 'bookings' | 'customers' | 'mechanics' | 'payments'

interface AdminSidebarProps {
  activePage: AdminActivePage
}

/* ─── Daftar Navigasi Admin ───────────────────────────── */
const adminNavItems: { label: string; id: AdminActivePage; icon: React.ReactNode; href: string }[] = [
  { label: 'Admin Dashboard', id: 'dashboard', icon: <GridIcon />,        href: '/admin/dashboard' },
  { label: 'Booking Masuk',   id: 'bookings',  icon: <CalendarNavIcon />, href: '/admin/bookings'  },
  { label: 'Pembayaran',      id: 'payments',  icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <line x1="12" y1="10" x2="12" y2="10" />
      <line x1="2" y1="10" x2="22" y2="10" />
    </svg>
  ), href: '/admin/payments' },
  { label: 'Data Pelanggan',  id: 'customers', icon: <UserNavIcon />,     href: '/admin/customers' },
  { label: 'Data Mekanik',    id: 'mechanics', icon: <WrenchIcon />,      href: '/admin/mechanics' },
]

/* ─── Komponen ────────────────────────────────────────── */
export default function AdminSidebar({ activePage }: AdminSidebarProps) {
  return (
    <aside className="flex w-[230px] flex-shrink-0 flex-col border-r border-[#1e1e1e] bg-[#161616]">
      {/* Logo */}
      <div className="px-6 py-7">
        <span className="text-[1.1rem] font-black tracking-[0.2em] text-red-500 block">
          GARAGEZKA
        </span>
        <span className="text-[0.65rem] font-bold tracking-[0.1em] text-gray-500 uppercase mt-1 block">
          Admin Portal
        </span>
      </div>

      {/* Navigasi */}
      <nav className="flex-1 space-y-0.5 px-3">
        {adminNavItems.map((item) => {
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

      {/* Profil Admin */}
      <div className="border-t border-[#1e1e1e] px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600/10 text-red-500 border border-red-500/20">
              <UserAvatarIcon />
            </div>
            <div>
              <span className="block text-xs font-semibold text-gray-200">System Admin</span>
              <span className="block text-[0.65rem] text-gray-500">Superuser</span>
            </div>
          </div>
          <Link href="/login" className="text-gray-500 transition hover:text-red-400">
            <LogoutIcon />
          </Link>
        </div>
      </div>
    </aside>
  )
}
