import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/language-context"
import { AuthProvider } from "@/lib/auth-context"
import { AdminProvider } from "@/lib/admin-context"
import { EmergencyAlerts } from "@/components/emergency-alerts"
import { AIHealthAssistant } from "@/components/ai-health-assistant"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjeevani - Blood Donation Portal",
  description: "Donate blood, save lives. Find blood banks, check availability, and register for donation camps.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          <AuthProvider>
            <AdminProvider>
              {children}
              <EmergencyAlerts />
              <AIHealthAssistant />
            </AdminProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}

