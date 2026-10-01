import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pankaj Makwana - Full-Stack Developer & Designer | 12+ Years Experience",
  description:
    "Experienced Full-Stack Developer & Designer from Rajkot, India. Specializing in PHP, Laravel, React, Next.js, Vue.js, and modern web technologies. 100+ projects completed with 12+ years of expertise.",
  keywords:
    "Full-Stack Developer, Web Designer, PHP Developer, Laravel Expert, React Developer, Next.js, Vue.js, Freelance Developer, Rajkot Developer, India",
  authors: [{ name: "Pankaj Makwana" }],
  creator: "Pankaj Makwana",
  publisher: "Pankaj Makwana",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pankajmakwana.dev",
    title: "Pankaj Makwana - Full-Stack Developer & Designer | 12+ Years Experience",
    description:
      "Experienced Full-Stack Developer & Designer from Rajkot, India. Specializing in PHP, Laravel, React, Next.js, Vue.js, and modern web technologies. 100+ projects completed with 12+ years of expertise.",
    siteName: "Pankaj Makwana Portfolio",
    images: [
      {
        url: "/images/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Pankaj Makwana - Full-Stack Developer & Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Makwana - Full-Stack Developer & Designer | 12+ Years Experience",
    description:
      "Experienced Full-Stack Developer & Designer from Rajkot, India. Specializing in PHP, Laravel, React, Next.js, Vue.js, and modern web technologies.",
    images: ["/images/profile-pic.jpg"],
    creator: "@pankajmakwana",
  },
  alternates: {
    canonical: "https://pankajmakwana.dev",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
