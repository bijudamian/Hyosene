import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TermsOfService() {
  return (
    <Container className="py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Terms of Service</CardTitle>
          <CardDescription className="text-lg">
            Please read these Terms of Service carefully before using our services.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
              <AccordionContent>
                By accessing or using our Services, you agree to be bound by these Terms. If you don't agree to these Terms, do not use the Services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2. Changes to Terms</AccordionTrigger>
              <AccordionContent>
                We may modify the Terms at any time, in our sole discretion. If we do so, we'll let you know either by posting the modified Terms on the Site or through other communications.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. Privacy Policy</AccordionTrigger>
              <AccordionContent>
                Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>4. Copyright Policy</AccordionTrigger>
              <AccordionContent>
                We respect the intellectual property rights of others and expect users of the Services to do the same. We will respond to notices of alleged copyright infringement that comply with applicable law and are properly provided to us.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>5. Termination</AccordionTrigger>
              <AccordionContent>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-8 text-sm text-muted-foreground">
            These Terms of Service are effective as of June 1, 2023 and shall remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Terms of Service at any time and you should check these Terms of Service periodically.
          </p>
        </CardContent>
      </Card>
    </Container>
  )
}

