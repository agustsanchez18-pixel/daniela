import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daniela - Psicóloga Profesional | Chile',
  description: 'Consulta psicológica profesional en Chile. Especialista en terapia individual y familiar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
