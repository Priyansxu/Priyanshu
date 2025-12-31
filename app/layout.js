import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata = {
  title: 'Priyanshu',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}