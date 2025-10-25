import { Header } from "@/components/header"
import { BloodAvailabilitySearch } from "@/components/blood-availability-search"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function BloodAvailabilityPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <BloodAvailabilitySearch />
      <Footer />
      <AIAssistant />
    </main>
  )
}
