import { Container } from "@/components/ui/container"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApplyNow() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Container className="py-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Apply for a Position</CardTitle>
              <CardDescription>Fill out the form below to apply for a position at HyperVolts Battery.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" required />
                </div>
                <div>
                  <Label htmlFor="resume">Resume/CV</Label>
                  <Input id="resume" type="file" accept=".pdf,.doc,.docx" required />
                </div>
                <div>
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea id="coverLetter" rows={5} />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full">Submit Application</Button>
            </CardFooter>
          </Card>
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

