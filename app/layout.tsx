import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Alan Ferreira | Desenvolvedor Full Stack',
  description: 'Portfólio de Alan Ferreira de Oliveira - Desenvolvedor Full Stack com Java, Spring Boot, Angular, React e TypeScript. Conheça projetos, formação e currículo.',
  metadataBase: new URL('https://www.alanfo.dev'),
  alternates: { canonical: '/' },
  openGraph: { title: 'Alan Ferreira | Desenvolvedor Full Stack', description: 'Projetos com Java, Spring Boot, Angular, React e TypeScript.', url: '/', locale: 'pt_BR', type: 'website' },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}