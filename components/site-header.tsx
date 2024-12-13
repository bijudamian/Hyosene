import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Container } from "@/components/ui/container"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { DialogTitle } from "@/components/ui/dialog"

export function SiteHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-bold">Hyosene Battery Pvt Ltd</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 text-sm font-medium">
            {[
              { name: "Technology", href: "/#technology" },
              { name: "Products", href: "/#products" },
              { name: "Applications", href: "/#applications" },
              { name: "About Us", href: "/#about-us" },
              { name: "Contact", href: "/#contact" },
              { name: "Careers", href: "/careers" }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="transition-colors hover:text-primary relative group px-3 py-2"
              >
                {item.name}
                <span className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-125 transition-all duration-300 ease-out z-[-1]"></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/schedule-meeting">Get in Touch</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <nav className="flex flex-col space-y-4 mt-8">
                  {[
                    { name: "Technology", href: "/#technology" },
                    { name: "Products", href: "/#products" },
                    { name: "Applications", href: "/#applications" },
                    { name: "About Us", href: "/#about-us" },
                    { name: "Contact", href: "/#contact" },
                    { name: "Careers", href: "/careers" }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-4" asChild>
                    <Link href="/schedule-meeting">Get in Touch</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  )
}

