import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Melo - Portfólio Acadêmico',
  description: 'Graduando em Engenharia Mecatrônica na Unicamp, pesquisador em Computer Vision e Machine Learning',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

