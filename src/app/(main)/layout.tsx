import type { Metadata } from 'next'
import QueryProvider from '@/components/QueryProvider/QueryProvider'
import {  Be_Vietnam_Pro } from 'next/font/google'

import SmoothScrolling from '@/components/SmoothScrolling/SmoothScrolling'
import 'swiper/css';

const greateVibes = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '500', '400']
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
                <QueryProvider>
                    <SmoothScrolling>
                    {children}
                    </SmoothScrolling>
                </QueryProvider>
            </body>
        </html>
    )
}
