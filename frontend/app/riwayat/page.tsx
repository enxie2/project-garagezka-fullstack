import Sidebar from '@/components/Sidebar'
import {
  MotorcycleIcon,
  WrenchIcon,
  GearIcon,
  LightningIcon,
  ClockIcon,
} from '@/components/icons'

/* ─── Mock Data Riwayat Servis ───────────────────── */
const dataRiwayat = [
  {
    id: 1,
    date: '24 OKT 2023',
    plate: 'B 4522 TZU',
    label: 'Servis Lengkap',
    motor: 'Honda Vario 160',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 450.000',
    icon: <MotorcycleIcon />,
  },
  {
    id: 2,
    date: 'HARI INI, 09:15',
    plate: 'B 6021 SSA',
    label: 'Ganti Oli & Cek Rem',
    motor: 'Yamaha XSR 155',
    status: 'Diproses',
    type: 'est',
    info: '14:00 WIB',
    icon: <WrenchIcon />,
    isToday: true,
  },
  {
    id: 3,
    date: '12 OKT 2023',
    plate: 'B 3321 KKA',
    label: 'Tune Up',
    motor: 'Kawasaki W175',
    status: 'Menunggu',
    type: 'total',
    info: 'Rp 325.000',
    icon: <ClockIcon />,
  },
  {
    id: 4,
    date: '05 OKT 2023',
    plate: 'B 4522 TZU',
    label: 'Kelistrikan - Cek ECU & Aki',
    motor: 'Kawasaki Ninja ZX-25R',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 850.000',
    icon: <LightningIcon />,
  },
  {
    id: 5,
    date: '20 SEP 2023',
    plate: 'B 4522 TZU',
    label: 'Servis Ringan',
    motor: 'Honda Vario 160',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 150.000',
    icon: <GearIcon />,
  },
  {
    id: 6,
    date: '28 AGU 2023',
    plate: 'B 4522 TZU',
    label: 'Ganti Ban Belakang',
    motor: 'Honda Vario 160',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 350.000',
    icon: <MotorcycleIcon />,
  },
  {
    id: 7,
    date: '15 AGU 2023',
    plate: 'B 4522 TZU',
    label: 'Pengecekan Aki',
    motor: 'Kawasaki Ninja ZX-25R',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 50.000',
    icon: <LightningIcon />,
  },
  {
    id: 8,
    date: '30 JUL 2023',
    plate: 'B 4522 TZU',
    label: 'Servis Berkala 10.000 KM',
    motor: 'Honda Vario 160',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 225.000',
    icon: <GearIcon />,
  },
  {
    id: 9,
    date: '12 JUL 2023',
    plate: 'B 4522 TZU',
    label: 'Ganti Kampas Rem',
    motor: 'Kawasaki Ninja ZX-25R',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 180.000',
    icon: <MotorcycleIcon />,
  },
  {
    id: 10,
    date: '05 JUL 2023',
    plate: 'B 4522 TZU',
    label: 'Servis Ringan',
    motor: 'Honda Vario 160',
    status: 'Selesai',
    type: 'total',
    info: 'Rp 150.000',
    icon: <GearIcon />,
  },
]

/* ─── Page ───────────────────────────────────────── */
export default function RiwayatServisPage() {
  return (
    <div className="flex min-h-screen bg-[#111111] font-sans text-white">
      {/* ── Sidebar ── */}
      <Sidebar activePage="riwayat" />

      {/* ── Main Content ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        <div className="px-8 py-8">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-semibold tracking-tight text-white">
              Riwayat Servis
            </h1>
          </div>

          {/* List Rows Container */}
          <div className="space-y-4 max-w-6xl">
            {dataRiwayat.map((item) => {
              // Status Badge Styles
              let statusBg = 'bg-[#0f241a] text-[#4ade80] border-[#1e462e]'
              let statusDot = 'bg-[#4ade80] shadow-[0_0_8px_#4ade80]'
              
              if (item.status === 'Diproses') {
                statusBg = 'bg-[#0c1e30] text-[#60a5fa] border-[#163a5f]'
                statusDot = 'bg-[#60a5fa] shadow-[0_0_8px_#60a5fa]'
              } else if (item.status === 'Menunggu') {
                statusBg = 'bg-[#2a1d0f] text-[#fbbf24] border-[#553b1b]'
                statusDot = 'bg-[#fbbf24] shadow-[0_0_8px_#fbbf24]'
              }

              return (
                <div
                  key={item.id}
                  className="relative flex flex-col md:flex-row md:items-center justify-between rounded-2xl border border-[#1e1e1e] bg-[#191919] p-5 shadow-sm transition hover:border-[#2a2a2a] gap-4"
                >
                  
                  {/* Left Section (Icon + Details) */}
                  <div className="flex items-center gap-4 flex-1">
                    
                    {/* Icon Box */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#222222] text-red-500">
                      {item.icon}
                    </div>

                    {/* Details */}
                    <div>
                      {/* Sub-header Date & Plate */}
                      <p className="text-xs font-semibold tracking-wide text-gray-500 mb-1">
                        {item.isToday ? (
                          <span className="text-[#fa1818] font-bold">HARI INI, 09:15</span>
                        ) : (
                          item.date
                        )}
                        <span className="mx-2 text-gray-700">•</span>
                        <span>{item.plate}</span>
                      </p>
                      
                      {/* Service Title */}
                      <h3 className="text-base font-bold text-white leading-snug">
                        {item.label}
                      </h3>
                      
                      {/* Motor Name */}
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {item.motor}
                      </p>
                    </div>

                  </div>

                  {/* Right Section (Status + Pricing) */}
                  <div className="flex items-center justify-between md:justify-end gap-6 border-t border-[#222222]/50 pt-4 md:border-t-0 md:pt-0">
                    
                    {/* Status Badge */}
                    <div className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${statusBg}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${statusDot}`} />
                      {item.status}
                    </div>

                    {/* Cost / Estimated Time */}
                    <div className="text-right min-w-[100px]">
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-gray-500">
                        {item.type === 'total' ? 'Total Biaya' : 'Est. Selesai'}
                      </p>
                      <p className="mt-1 text-sm font-extrabold text-white">
                        {item.info}
                      </p>
                    </div>

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
