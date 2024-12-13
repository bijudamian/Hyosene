import { Container } from "@/components/ui/container"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearnMore() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Container className="py-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Learn More About Hyosene Battery</h1>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Our Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover the revolutionary graphene-based battery technology that powers our products.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Explore the wide range of applications for our advanced battery solutions.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Learn about our commitment to sustainable energy solutions and environmental responsibility.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

