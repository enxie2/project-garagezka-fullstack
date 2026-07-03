import Link from 'next/link'

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#090909] via-[#080808] to-[#050505] text-white">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-start">
        <aside className="w-full rounded-[36px] border border-gray-800 bg-[#101010]/90 p-6 shadow-[0_30px_80px_rgba(255,45,45,0.1)] lg:w-[320px]">
          <div className="mb-10 flex items-center gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-lg font-bold text-white">G</div>
            <span className="text-xl font-bold tracking-[0.06em] text-red-500">GARAGEZKA</span>
          </div>
          <nav className="space-y-3 text-sm text-gray-300">
            <a href="#" className="flex items-center gap-3 rounded-2xl bg-red-500/10 px-4 py-3 text-red-400 shadow-sm shadow-red-500/10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-red-500/20 text-red-300">▣</span>
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-gray-300">📝</span>
              Booking Servis
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-gray-300">🏍️</span>
              Kendaraan Saya
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-gray-300">⏳</span>
              Riwayat Servis
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-gray-300">🔔</span>
              Notifikasi
            </a>
            <a href="#" className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-white/5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-gray-300">👤</span>
              Profil
            </a>
          </nav>
          <div className="mt-14 rounded-3xl border border-gray-800 bg-[#0f0f0f] p-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gray-700"></div>
              <div>
                <p className="font-semibold">Azka Gans</p>
                <p className="text-xs text-gray-500">Member Aktif</p>
              </div>
            </div>
          </div>
        </aside>

        <section className="flex-1 space-y-8">
          <div className="flex flex-col gap-6 rounded-[36px] border border-gray-800 bg-[#101010]/90 p-8 shadow-[0_30px_80px_rgba(255,45,45,0.08)] lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm text-gray-400">Selamat Datang, Azka.</p>
              <h1 className="mt-2 text-3xl font-bold">Jadwal Servis Berikutnya</h1>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-2xl bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600">
              Booking Servis Sekarang
            </Link>
          </div>

          <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
            <div className="rounded-[36px] border border-gray-800 bg-[#101010]/90 p-8 shadow-[0_30px_80px_rgba(255,45,45,0.08)]">
              <div className="flex items-center justify-between gap-4 text-sm text-gray-400">
                <span className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-red-300">Mendatang</span>
                <span className="text-red-400">Jadwal Servis Berikutnya</span>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[30px] border border-gray-800 bg-[#0d0d0d] p-6">
                  <p className="text-sm text-gray-400">Tanggal</p>
                  <p className="mt-4 text-2xl font-semibold">24 Oktober 2023</p>
                </div>
                <div className="rounded-[30px] border border-gray-800 bg-[#0d0d0d] p-6">
                  <p className="text-sm text-gray-400">Waktu</p>
                  <p className="mt-4 text-2xl font-semibold">09:00 WIB</p>
                </div>
              </div>
              <div className="mt-8 rounded-[30px] border border-gray-800 bg-[#0d0d0d] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Motor</p>
                    <h2 className="mt-2 text-xl font-semibold">Ducati Panigale V4</h2>
                    <span className="mt-2 inline-flex rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">Servis Rutin</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Estimasi Biaya</p>
                    <p className="mt-2 text-2xl font-bold text-red-500">Rp 250.000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[36px] border border-gray-800 bg-[#101010]/90 p-6 shadow-[0_30px_80px_rgba(255,45,45,0.08)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Notifikasi</p>
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                </div>
                <div className="mt-6 rounded-[30px] border border-gray-800 bg-[#0d0d0d] p-5">
                  <p className="text-sm font-semibold text-red-300">Servis Selesai</p>
                  <p className="mt-3 text-sm text-gray-400">Motor Anda siap diambil di bengkel.</p>
                </div>
                <button className="mt-6 w-full rounded-2xl border border-gray-700 bg-transparent px-4 py-3 text-sm font-semibold text-white transition hover:border-red-500">
                  Lihat Semua Notifikasi
                </button>
              </div>
              <div className="rounded-[36px] border border-gray-800 bg-[#101010]/90 p-6 shadow-[0_30px_80px_rgba(255,45,45,0.08)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Riwayat Servis</p>
                  <Link href="#" className="text-sm font-semibold text-red-400 hover:text-red-300">
                    Lihat Semua
                  </Link>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: 'Servis Lengkap', date: '12 Sep 2023', status: 'Selesai', price: 'Rp 250.000' },
                    { label: 'Ganti Oli', date: '15 Jul 2023', status: 'Selesai', price: 'Rp 100.000' },
                    { label: 'Tune Up', date: '02 Jun 2023', status: 'Selesai', price: 'Rp 150.000' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-[30px] border border-gray-800 bg-[#0d0d0d] px-4 py-4">
                      <div>
                        <p className="font-semibold">{item.label}</p>
                        <p className="text-sm text-gray-500">{item.date}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs text-cyan-300">{item.status}</span>
                        <p className="mt-2 text-sm text-gray-300">{item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-[36px] border border-gray-800 bg-[#101010]/90 p-6 shadow-[0_30px_80px_rgba(255,45,45,0.08)]">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Terakhir Servis</p>
                <p className="mt-4 text-3xl font-semibold">42 Hari Lalu</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
