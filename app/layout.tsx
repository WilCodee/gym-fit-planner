import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from './components/Header'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GymFit Planner - Your Fitness Companion',
  description:
    'Plan your workouts and nutrition with ease. Track your fitness progress.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>&copy; 2024 GymFit Planner. Build your best self.</p>
        </footer>
      </body>
    </html>
  )
}
