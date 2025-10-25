"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DonorDashboardMenu } from "@/components/donor-dashboard-menu"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Award, Calendar, Droplets } from "lucide-react"

export default function DashboardPage() {
  const { donor, isLoggedIn } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/donor/login")
    }
  }, [isLoggedIn, router])

  if (!isLoggedIn || !donor) {
    return null
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <DonorDashboardMenu />
        <div className="flex-1 p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900">Welcome, {donor.firstName}!</h1>
              <p className="text-gray-600 mt-2">Manage your donations and track your impact</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-in-up">
              <Card className="p-6 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Total Donations</p>
                    <p className="text-3xl font-bold text-red-600 mt-2">{donor.totalDonations}</p>
                  </div>
                  <Heart className="w-12 h-12 text-red-600 opacity-20" />
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Reward Points</p>
                    <p className="text-3xl font-bold text-red-600 mt-2">{donor.rewardPoints}</p>
                  </div>
                  <Award className="w-12 h-12 text-red-600 opacity-20" />
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Blood Type</p>
                    <p className="text-3xl font-bold text-red-600 mt-2">{donor.bloodType}</p>
                  </div>
                  <Droplets className="w-12 h-12 text-red-600 opacity-20 fill-red-600" />
                </div>
              </Card>

              <Card className="p-6 bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">Status</p>
                    <p
                      className={`text-lg font-bold mt-2 capitalize ${
                        donor.availability === "available" ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      {donor.availability}
                    </p>
                  </div>
                  <Calendar className="w-12 h-12 text-gray-400 opacity-20" />
                </div>
              </Card>
            </div>

            {/* Profile Info */}
            <Card className="p-8 bg-white shadow-lg border border-gray-200 animate-fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Full Name</p>
                  <p className="text-gray-900 font-semibold mt-1">
                    {donor.firstName} {donor.lastName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Email</p>
                  <p className="text-gray-900 font-semibold mt-1">{donor.email}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Phone</p>
                  <p className="text-gray-900 font-semibold mt-1">{donor.phone}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Date of Birth</p>
                  <p className="text-gray-900 font-semibold mt-1">{donor.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">City</p>
                  <p className="text-gray-900 font-semibold mt-1">{donor.city}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Hemoglobin Level</p>
                  <p className="text-gray-900 font-semibold mt-1">{donor.hemoglobin} g/dL</p>
                </div>
              </div>
              <Button className="mt-6 bg-red-600 hover:bg-red-700 text-white">Edit Profile</Button>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
