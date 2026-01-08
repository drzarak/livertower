import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liver Tower Lahore – AI Chat with Dr. Affan Qaiser',
  description: 'Connect with Dr. Muhammad Affan Qaiser, renowned Gastroenterologist and Transplant Hepatologist at Liver Tower Lahore. Get expert guidance on liver health, digestive issues, and wellness. Advanced GI & Liver Tower clinics - Ring Road near DHA Phase 5, Lahore.',
  keywords: 'Dr. Affan Qaiser, Gastroenterologist Lahore, Transplant Hepatologist Pakistan, Liver specialist Lahore, Advanced GI & Liver Tower, Hepatology Lahore, Liver Transplant, Online Consultation, Liver Tower Lahore',
  authors: [{ name: 'Dr. Muhammad Affan Qaiser' }],
  openGraph: {
    title: 'Liver Tower Lahore – AI Chat with Dr. Affan Qaiser',
    description: 'Expert gastroenterology and hepatology consultation with Dr. Affan Qaiser',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
