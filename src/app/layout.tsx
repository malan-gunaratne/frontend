import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'
import BreakpointObserver from './components/Observer/BreakpointObserver'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malan Gunaratne',
  description: 'Malan\'s website',
}

const menu = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resources', label: 'Resources'},
  { href: '/contact', label: 'Contact' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header menu={menu} />
        <BreakpointObserver />
        {children}
      </body>
    </html>
  )
}
