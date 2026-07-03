import Link from 'next/link'

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-3xl"></div>
        <div className="relative rounded-3xl border border-gray-800 bg-[#0f0f0f]/90 p-8 shadow-xl shadow-red-500/10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">GARAGEZKA</p>
            <h1 className="mt-4 text-3xl font-bold text-white">Lupa Password?</h1>
            <p className="mt-2 text-sm text-gray-400">Masukkan email untuk reset password</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                placeholder="nama@email.com"
                className="w-full rounded-2xl border border-gray-700 bg-[#111111] px-4 py-3 text-gray-200 outline-none transition focus:border-red-500"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
            >
              Kirim Link Reset
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            <Link href="/login" className="font-semibold text-white hover:text-red-400">
              ← Kembali ke Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
