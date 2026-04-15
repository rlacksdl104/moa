import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKR = Noto_Sans_KR({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-kr"
});

export const metadata: Metadata = {
  title: '모아 - 청년을 위한 공동구매 플랫폼',
  description: '20~30대 청년을 위한 공동구매 플랫폼. 생활용품부터 전자기기, 취미·문화 상품까지 함께 구매하고 최대 50% 할인받으세요.',
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
    <html lang="ko" className="bg-background">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
