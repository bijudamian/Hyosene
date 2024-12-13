import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">Hyosene Battery Pvt Ltd</h2>
              <p className="text-muted-foreground mb-4">
                Advancing energy storage technology with graphene innovation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#products" className="text-muted-foreground hover:text-primary">
                    Battery Cells
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="text-muted-foreground hover:text-primary">
                    Battery Packs
                  </Link>
                </li>
                <li>
                  <Link href="/#products" className="text-muted-foreground hover:text-primary">
                    Energy Systems
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about-us" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-16 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hyosene Battery Pvt Ltd. All rights reserved.</p>
            <p className="mt-2">
              <a href="tel:+919150345616" className="hover:text-primary">+91 91503 45616</a> | Chennai, India
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

