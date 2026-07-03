import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GARAGEZKA - Presisi. Performa. Profesional',
  description: 'Servis Motor Jadi Lebih Mudah. Booking servis tanpa antri dengan sistem terintegrasi dan mekanik profesional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
