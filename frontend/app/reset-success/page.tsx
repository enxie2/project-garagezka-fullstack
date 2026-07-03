import Link from 'next/link'

export default function ResetSuccessPage() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 rounded-full bg-red-500 opacity-20 blur-3xl"></div>
        <div className="relative rounded-3xl border border-gray-800 bg-[#0f0f0f]/90 p-8 text-center shadow-xl shadow-red-500/10">
          <div className="mb-8">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 text-red-500">
              ✓
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-500">GARAGEZKA</p>
            <h1 className="mt-4 text-3xl font-bold text-white">Password Berhasil Diubah</h1>
            <p className="mt-2 text-sm text-gray-400">Silakan login menggunakan password baru Anda.</p>
          </div>
          <Link
            href="/login"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
          >
            Kembali ke Login →
          </Link>
        </div>
      </div>
    </main>
  )
}
