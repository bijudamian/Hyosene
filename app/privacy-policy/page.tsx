import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <Container className="py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Privacy Policy</CardTitle>
          <CardDescription className="text-lg">
            At Hyosene Battery Pvt Ltd, we are committed to protecting your privacy and ensuring the security of your personal information.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Company details</li>
            <li>Usage data and preferences</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Hyosene Battery Pvt Ltd and our users. Specifically, we use your information to:
          </p>
          <ul>
            <li>Provide and deliver the products and services you request</li>
            <li>Send you technical notices, updates, and support messages</li>
            <li>Communicate with you about products, services, offers, and events</li>
            <li>Improve and develop new products and services</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing and Disclosure</h2>
          <p>
            We do not share your personal information with companies, organizations, or individuals outside of Hyosene Battery Pvt Ltd except in the following cases:
          </p>
          <ul>
            <li>With your consent</li>
            <li>For legal reasons</li>
            <li>To protect rights, property, or safety</li>
          </ul>

          <p className="mt-8 text-sm text-muted-foreground">
            This privacy policy is effective as of June 1, 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically.
          </p>
        </CardContent>
      </Card>
    </Container>
  )
}

