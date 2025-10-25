import { Header } from "@/components/header"
import { BloodBankDirectory } from "@/components/blood-bank-directory"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function BloodBanksPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BloodBankDirectory />
      <Footer />
      <AIAssistant />
    </main>
  )
}
