import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProductsSection } from "@/components/home/products-section"
import { CategoriesSection } from "@/components/home/categories-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <CategoriesSection />
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  )
}
