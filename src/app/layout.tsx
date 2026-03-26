import type { Metadata } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

const manrope = Manrope({ 
  subsets: ['latin'],
  variable: '--font-manrope'
})

export const metadata: Metadata = {
  title: 'Simple Green by Jelena',
  description: 'Premium vegansko i low-gluten iskustvo na razini umjetnosti.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr" className="scroll-smooth">
      <body className={`${playfair.variable} ${manrope.variable} font-sans bg-[#F4F1ED] text-[#121A15] antialiased overflow-x-hidden selection:bg-[#B1C898] selection:text-[#121A15]`}>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
