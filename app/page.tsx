import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { TechnologySection } from "@/components/technology-section"
import { ProductsSection } from "@/components/products-section"
import { SolutionsGrid } from "@/components/solutions-grid"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TechnologySection />
        <ProductsSection />
        <SolutionsGrid />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

