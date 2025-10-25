import { Header } from "@/components/header"
import { DonorLogin } from "@/components/donor-login"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <DonorLogin />
      <Footer />
    </main>
  )
}
