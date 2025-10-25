import { Header } from "@/components/header"
import { DonationCampsList } from "@/components/donation-camps-list"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function CampsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <DonationCampsList />
      <Footer />
      <AIAssistant />
    </main>
  )
}
