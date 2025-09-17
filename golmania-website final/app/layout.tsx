import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Navigation } from "@/components/navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "GOLMANIA - Aventura Futbolística | Videojuego 3D",
  description:
    "¡Únete a la aventura futbolística definitiva! Colecciona los pedazos del ticket dorado viajando por países vibrantes en este emocionante juego inspirado en el arte urbano.",
  keywords: ["videojuego", "fútbol", "aventura", "3D", "GOLMANIA", "ticket dorado", "países", "cultura futbolística"],
  authors: [{ name: "GOLMANIA Team" }],
  creator: "GOLMANIA",
  publisher: "GOLMANIA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://golmania.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GOLMANIA - Aventura Futbolística",
    description:
      "¡Únete a la aventura futbolística definitiva! Colecciona los pedazos del ticket dorado viajando por países vibrantes.",
    url: "https://golmania.vercel.app",
    siteName: "GOLMANIA",
    images: [
      {
        url: "/images/golmania-logo.png",
        width: 1200,
        height: 630,
        alt: "GOLMANIA - Videojuego de Aventura Futbolística",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GOLMANIA - Aventura Futbolística",
    description: "¡Únete a la aventura futbolística definitiva! Colecciona los pedazos del ticket dorado.",
    images: ["/images/golmania-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navigation />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
