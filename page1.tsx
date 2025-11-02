"use client"

import { Header } from "@/components/header"
import { BloodBankDetails } from "@/components/blood-bank-details"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"
import { mockBloodBanks } from "@/lib/mock-data"
import { useParams } from "next/navigation"

export default function BloodBankDetailPage() {
  const params = useParams()
  const bank = mockBloodBanks.find((b) => b.id === params.id)

  if (!bank) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <p className="text-center text-gray-600">Blood bank not found</p>
        </div>
        <Footer />
        <AIAssistant />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <BloodBankDetails bank={bank} />
      </div>
      <Footer />
      <AIAssistant />
    </main>
  )
}
