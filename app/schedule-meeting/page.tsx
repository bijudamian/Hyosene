import { Container } from "@/components/ui/container"
import { MeetingScheduler } from "@/components/meeting-scheduler"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ScheduleMeeting() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Container className="py-12">
          <h1 className="text-4xl font-bold mb-6 text-center">Schedule a Meeting</h1>
          <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
            Book a time to discuss how our revolutionary graphene battery technology can benefit your business.
          </p>
          <MeetingScheduler />
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}

