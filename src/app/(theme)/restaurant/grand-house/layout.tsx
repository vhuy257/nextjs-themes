import type { Metadata } from 'next'
import QueryProvider from '@/components/QueryProvider/QueryProvider'
import {  Cormorant_Garamond } from 'next/font/google'

import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling'
import Layout from '@/components/restaurant/grand-house/Layout/Layout';

import 'swiper/css';
import './grand-house.css'

const greateVibes = Cormorant_Garamond({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Grand Restaurant | Asian Restaurant Theme',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={greateVibes.className}>
          <SmoothScrolling>
            {children}
          </SmoothScrolling>
      </body>
    </html>
  )
}
