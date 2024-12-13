import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from 'next/link'

const jobOpenings = [
  {
    title: "Battery Engineer",
    department: "R&D",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Materials Scientist",
    department: "Research",
    location: "Chennai, India",
    type: "Full-time",
  },
  {
    title: "Software Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Container className="py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Be part of the revolution in energy storage technology. We're always looking for talented individuals to join our team and help shape the future of sustainable energy.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.department}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-2"><strong>Location:</strong> {job.location}</p>
                  <p className="mb-4"><strong>Type:</strong> {job.type}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/careers/apply">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see a role that fits?</h2>
            <p className="text-lg mb-6">
              We're always on the lookout for exceptional talent. If you're passionate about sustainable energy and innovation, we want to hear from you!
            </p>
            <Button size="lg" asChild>
              <Link href="/careers/send-resume">
                Send Us Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

