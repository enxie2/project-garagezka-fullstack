import Link from 'next/link'
import AdminSidebar from '@/components/AdminSidebar'
import {
  CalendarCardIcon,
  UserNavIcon,
  WrenchIcon,
  MotorcycleIcon,
  ChevronDownIcon,
} from '@/components/icons'

/* ─── Mock Data Admin Dashboard ───────────────────── */
const kpiData = [
  {
    label: 'Total Booking Hari Ini',
    value: '14',
    change: '+3 sejak pagi ini',
    isPositive: true,
    icon: <CalendarCardIcon />,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  },
  {
    label: 'Pendapatan Bulan Ini',
    value: 'Rp 8.450.000',
    change: '+12% vs bulan lalu',
    isPositive: true,
    icon: <span className="font-bold text-sm">Rp</span>,
    color: 'text-green-500 bg-green-500/10 border-green-500/20',
  },
  {
    label: 'Pelanggan Aktif',
    value: '47',
    change: '+5 minggu ini',
    isPositive: true,
    icon: <UserNavIcon />,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
  },
  {
    label: 'Mekanik Tersedia',
    value: '3 / 5',
    change: '2 sedang bekerja',
    isPositive: false,
    icon: <WrenchIcon />,
    color: 'text-red-500 bg-red-500/10 border-red-500/20',
  },
]

const recentBookings = [
  {
    id: 'GZ-8829',
    customer: 'Azka Gans',
    motor: 'Yamaha MT-09',
    service: 'Servis Lengkap',
    time: '09:00 WIB',
    status: 'Selesai',
  },
  {
    id: 'GZ-3321',
    customer: 'Rian Hidayat',
    motor: 'Honda Vario 160',
    service: 'Ganti Oli & Rem',
    time: '10:30 WIB',
    status: 'Diproses',
  },
  {
    id: 'GZ-1244',
    customer: 'Dani Prasetyo',
    motor: 'Kawasaki W175',
    service: 'Tune Up',
    time: '11:15 WIB',
    status: 'Menunggu',
  },
  {
    id: 'GZ-9912',
    customer: 'Siti Aminah',
    motor: 'Vespa Sprint 150',
    service: 'Servis Ringan',
    time: '13:00 WIB',
    status: 'Menunggu',
  },
  {
    id: 'GZ-4412',
    customer: 'Bambang U.',
    motor: 'Honda Beat',
    service: 'Ganti Ban Belakang',
    time: '14:30 WIB',
    status: 'Menunggu',
  },
]

const systemActivities = [
  { time: '10 mins ago', desc: 'Booking GZ-4412 dibuat oleh Bambang U.' },
  { time: '25 mins ago', desc: 'Status booking GZ-8829 diubah ke Selesai oleh Budi (Mekanik)' },
  { time: '1 hour ago', desc: 'Mekanik Rizky Pratama mengubah status ke Tersedia' },
  { time: '2 hours ago', desc: 'Pelanggan baru Dani Prasetyo mendaftarkan diri' },
]

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <AdminSidebar activePage="dashboard" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-[#1e1e1e]">
          <div>
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-xs text-gray-500 mt-1">Hari ini: Selasa, 7 Juli 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
            <span className="text-xs font-semibold text-green-400">Sistem Online & Stabil</span>
          </div>
        </header>

        {/* Content Container */}
        <div className="px-8 py-8 space-y-6">

          {/* Row 1: KPI Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {kpiData.map((kpi, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-gray-500">{kpi.label}</p>
                    <p className="mt-2 text-2xl font-black text-white">{kpi.value}</p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${kpi.color}`}>
                    {kpi.icon}
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[#222222] pt-3 text-[0.7rem]">
                  <span className="text-gray-400">{kpi.change}</span>
                  <span className="text-gray-600">Real-time</span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Status Booking Overview */}
          <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
              Status Operasional Booking
            </h2>
            <div className="flex h-3 w-full rounded-full bg-[#222] overflow-hidden">
              <div className="h-full bg-green-600 w-[60%]" title="Selesai (60%)" />
              <div className="h-full bg-blue-600 w-[20%]" title="Diproses (20%)" />
              <div className="h-full bg-yellow-600 w-[20%]" title="Menunggu (20%)" />
            </div>
            <div className="mt-4 flex gap-6 text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-600" />
                <span className="text-gray-400">Selesai: 60%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-gray-400">Diproses: 20%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-yellow-600" />
                <span className="text-gray-400">Menunggu: 20%</span>
              </div>
            </div>
          </div>

          {/* Row 3: Recent Bookings & System Logs */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1.1fr]">
            
            {/* Recent Bookings Table */}
            <div className="rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base font-bold">Booking Terbaru</h3>
                <Link
                  href="/admin/bookings"
                  className="text-xs font-semibold text-red-500 hover:text-red-400 transition"
                >
                  Kelola Semua Booking
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#222] text-[0.7rem] font-bold uppercase tracking-wider text-gray-500">
                      <th className="pb-3">Kode</th>
                      <th className="pb-3">Pelanggan</th>
                      <th className="pb-3">Motor</th>
                      <th className="pb-3">Layanan</th>
                      <th className="pb-3">Jam</th>
                      <th className="pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((b) => {
                      let statusStyle = 'text-green-500 bg-green-500/10 border-green-500/20'
                      if (b.status === 'Diproses') statusStyle = 'text-blue-500 bg-blue-500/10 border-blue-500/20'
                      if (b.status === 'Menunggu') statusStyle = 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20'
                      
                      return (
                        <tr key={b.id} className="border-b border-[#1f1f1f] last:border-0">
                          <td className="py-4 font-mono font-bold text-gray-200">{b.id}</td>
                          <td className="py-4 font-medium text-white">{b.customer}</td>
                          <td className="py-4 text-xs text-gray-400">{b.motor}</td>
                          <td className="py-4 text-xs text-gray-400">{b.service}</td>
                          <td className="py-4 text-xs text-gray-400">{b.time}</td>
                          <td className="py-4 text-right">
                            <span className={`inline-flex rounded-full border px-2 py-0.5 text-[0.65rem] font-bold ${statusStyle}`}>
                              {b.status}
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* System Activities Logs */}
            <div className="flex flex-col justify-between rounded-2xl border border-[#1e1e1e] bg-[#191919] p-6">
              <div>
                <h3 className="text-base font-bold mb-5">Aktivitas Sistem</h3>
                <div className="space-y-4">
                  {systemActivities.map((act, i) => (
                    <div key={i} className="flex items-start gap-3 border-l-2 border-red-600/30 pl-4 py-0.5">
                      <div className="flex-1">
                        <p className="text-xs text-gray-300 leading-relaxed">{act.desc}</p>
                        <span className="text-[0.65rem] text-gray-600 mt-1 block">{act.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="mt-6 w-full rounded-xl border border-[#2c2c2c] py-3 text-center text-xs font-semibold text-gray-400 transition hover:border-[#444444] hover:text-white">
                Lihat Audit Logs
              </button>
            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
