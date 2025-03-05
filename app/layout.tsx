import type { Metadata, Viewport } from 'next'
import './globals.css'

const APP_NAME = 'PWA Template'
const APP_DEFAULT_TITLE = 'PWA Template'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION = 'A NextJS Template for PWA + Supabase'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFE3',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          fetchPriority="high"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@1&f[]=jet-brains-mono@1&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased">{children}</body>
    </html>
  )
}
