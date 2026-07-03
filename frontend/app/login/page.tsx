import Link from 'next/link'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-3xl"></div>
        <div className="relative rounded-3xl border border-gray-800 bg-[#0f0f0f]/90 p-8 shadow-xl shadow-red-500/10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">GARAGEZKA</p>
            <h1 className="mt-4 text-3xl font-bold text-white">Selamat Datang Kembali</h1>
            <p className="mt-2 text-sm text-gray-400">Masuk untuk melanjutkan servis motor Anda</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email atau nomor HP</label>
              <input
                type="text"
                placeholder="nama@email.com atau 0812..."
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="mb-2 block text-sm font-medium text-gray-300">Password</label>
                <Link href="/forgot-password" className="text-sm text-red-500 hover:text-red-400">
                  Lupa Password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="Masukkan password Anda"
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <div className="flex items-center gap-3">
              <input id="remember" type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-[#111111] text-red-500 focus:ring-red-500" />
              <label htmlFor="remember" className="text-sm text-gray-300">Ingat Saya</label>
            </div>
            <Link
              href="/dashboard"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
            >
              MASUK
            </Link>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            Belum punya akun?{' '}
            <Link href="/register" className="font-semibold text-white hover:text-red-400">
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
