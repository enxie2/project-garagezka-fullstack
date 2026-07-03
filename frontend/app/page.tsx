import BerandaHeader from '@/components/BerandaHeader'
import BerandaHero from '@/components/BerandaHero'
import BerandaFitur from '@/components/BerandaFitur'
import BerandaAksi from '@/components/BerandaAksi'
import BerandaFooter from '@/components/BerandaFooter'

export default function Home() {
  return (
    <main className="bg-dark">
      <BerandaHeader />
      <BerandaHero />
      <BerandaFitur />
      <BerandaAksi />
      <BerandaFooter />
    </main>
  )
}
