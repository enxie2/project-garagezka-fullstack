import Link from 'next/link'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-3xl"></div>
        <div className="relative rounded-3xl border border-gray-800 bg-[#0f0f0f]/90 p-8 shadow-xl shadow-red-500/10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">GARAGEZKA</p>
            <h1 className="mt-4 text-3xl font-bold text-white">Buat Akun Baru</h1>
            <p className="mt-2 text-sm text-gray-400">Daftar untuk booking servis tanpa antri</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Nama lengkap</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="contoh@email.com"
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Nomor HP</label>
              <input
                type="tel"
                placeholder="0812xxxx"
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  placeholder="Masukkan password"
                  className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">Konfirmasi password</label>
                <input
                  type="password"
                  placeholder="Ulangi password"
                  className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
                />
              </div>
            </div>
            <div className="flex items-start gap-3">
              <input id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-600 bg-[#111111] text-red-500 focus:ring-red-500" />
              <label htmlFor="terms" className="text-sm text-gray-300">
                Saya menyetujui <span className="text-white underline decoration-red-500">Syarat & Ketentuan</span> serta <span className="text-white underline decoration-red-500">Kebijakan Privasi</span> GARAGEZKA.
              </label>
            </div>
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
            >
              DAFTAR
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Sudah punya akun?{' '}
            <Link href="/login" className="font-semibold text-white hover:text-red-400">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
