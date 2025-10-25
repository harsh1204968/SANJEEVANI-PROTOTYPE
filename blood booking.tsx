import { Header } from "@/components/header"
import { BloodBookingSystem } from "@/components/blood-booking-system"
import { Footer } from "@/components/footer"
import { AIAssistant } from "@/components/ai-assistant"

export default function BloodBookingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <BloodBookingSystem />
      </div>
      <Footer />
      <AIAssistant />
    </main>
  )
}
