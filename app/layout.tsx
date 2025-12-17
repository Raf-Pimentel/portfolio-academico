import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Melo - Academic Portfolio',
  description: 'Mechatronics Engineering student at Unicamp, researcher in Computer Vision and Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

