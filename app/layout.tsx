import "@/styles/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Metadata } from 'next'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Hyosene Battery Pvt Ltd - Revolutionary Graphene Battery Technology",
  description: "Hyosene Battery Pvt Ltd: Powering the future with advanced graphene-based energy storage solutions. Contact us for cutting-edge battery technology for your business or startup.",
  keywords: "graphene, battery, energy storage, startup, technology",
  openGraph: {
    title: "Hyosene Battery Pvt Ltd - Revolutionary Graphene Battery Technology",
    description: "Hyosene Battery Pvt Ltd: Powering the future with advanced graphene-based energy storage solutions. Contact us for cutting-edge battery technology for your business or startup.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Hyocene Graphene Battery Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyosene Battery Pvt Ltd - Revolutionary Graphene Battery Technology",
    description: "Hyosene Battery Pvt Ltd: Powering the future with advanced graphene-based energy storage solutions. Contact us for cutting-edge battery technology for your business or startup.",
    images: ["https://images.unsplash.com/photo-1558244661-d248897f7bc4?auto=format&fit=crop&w=1200&h=630&q=80"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

