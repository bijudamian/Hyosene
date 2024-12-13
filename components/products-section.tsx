"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: "HyoseneCell™",
    description: "High-capacity graphene-enhanced battery cells for various applications.",
    features: ["Extended cycle life", "Rapid charging", "High energy density"],
  },
  {
    name: "HyosenePack™",
    description: "Customizable battery packs for electric vehicles and energy storage systems.",
    features: ["Scalable design", "Advanced thermal management", "Intelligent BMS"],
  },
  {
    name: "HyoseneGrid™",
    description: "Large-scale energy storage solutions for renewable energy integration.",
    features: ["Modular architecture", "High power output", "Long-term reliability"],
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-muted">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of cutting-edge graphene battery solutions
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button className="mt-4" variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

