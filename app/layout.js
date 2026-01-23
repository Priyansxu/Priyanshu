import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'

export const metadata = {
  metadataBase: new URL('https://priyanshu.is-a.dev'),

  title: {
    default: 'Priyanshu Gupta',
    template: '%s | Priyanshu',
  },

  description: 'Developer & Designer | Building things, questioning everything, sharing the journey.',

  alternates: {
  canonical: 'https://priyanshu.is-a.dev/',
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'Priyanshu Gupta',
    description: 'Developer & Designer | Building things, questioning everything, sharing the journey.',
    url: 'https://priyanshu.is-a.dev',
    siteName: 'Priyanshu',
    images: ['/og.png'],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}