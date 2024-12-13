"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Car, Factory, Lightbulb } from 'lucide-react'
import { Container } from "@/components/ui/container"

const solutions = [
  {
    title: "Electric Vehicles",
    description: "High-performance graphene batteries for next-generation electric vehicles.",
    icon: Car,
  },
  {
    title: "Energy Storage",
    description: "Large-scale energy storage solutions for renewable power systems.",
    icon: Battery,
  },
  {
    title: "Industrial",
    description: "Reliable power solutions for industrial equipment and machinery.",
    icon: Factory,
  },
  {
    title: "Consumer Electronics",
    description: "Advanced battery technology for portable electronic devices.",
    icon: Lightbulb,
  },
]

export function SolutionsGrid() {
  return (
    <section className="py-24 bg-muted/50">
      <Container>
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold">Applications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our graphene battery technology powers a wide range of applications across multiple industries
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 rounded-tl-full" />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

