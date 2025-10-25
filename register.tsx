import { Header } from "@/components/header"
import { RegisterCamp } from "@/components/register-camp"
import { Footer } from "@/components/footer"

export default function RegisterCampPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <RegisterCamp />
      <Footer />
    </main>
  )
}
