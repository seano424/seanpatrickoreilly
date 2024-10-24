import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Header from '@/components/Header'

import { Eater, Kablammo, Butcherman } from 'next/font/google'

const eater = Eater({
  subsets: ['latin'],
  weight: ['400'],
})

const kablammo = Kablammo({
  subsets: ['latin'],
  weight: ['400'],
})

const butcherman = Butcherman({
  subsets: ['latin'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'SEANPATRICKOREILLY.COM',
  description: 'Sean Patrick OReilly',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${kablammo.className} antialiased container dark dark:bg-black dark:text-gray-50 flex flex-col min-h-screen py-8`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <footer className="flex gap-1 items-center justify-center">
          <span>©</span>
          <span>My Signature</span>
        </footer>
      </body>
    </html>
  )
}
