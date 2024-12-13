import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CookiePolicy() {
  return (
    <Container className="py-24">
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">Cookie Policy</CardTitle>
          <CardDescription className="text-lg">
            This Cookie Policy explains how Hyosene Battery Pvt Ltd uses cookies and similar technologies to recognize you when you visit our website.
          </CardDescription>
        </CardHeader>
        <CardContent className="prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why do we use cookies?</h2>
          <p>
            We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of cookies we use</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type of cookie</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Essential cookies</TableCell>
                <TableCell>These cookies are strictly necessary to provide you with services available through our Website and to use some of its features.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Analytics cookies</TableCell>
                <TableCell>These cookies help us understand how visitors interact with our Website, by collecting and reporting information anonymously.</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Marketing cookies</TableCell>
                <TableCell>These cookies are used to make advertising messages more relevant to you and your interests.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or by setting or amending your web browser controls to accept or refuse cookies.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            This Cookie Policy is effective as of June 1, 2023 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Cookie Policy at any time and you should check this Cookie Policy periodically.
          </p>
        </CardContent>
      </Card>
    </Container>
  )
}

