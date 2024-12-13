"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { Container } from "@/components/ui/container"
import Image from 'next/image'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-16 lg:py-24">
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Revolutionary Graphene Battery Technology
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Powering the future with advanced graphene-based energy storage solutions. Perfect for businesses and startups looking for cutting-edge battery technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/schedule-meeting">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mt-8 lg:mt-0"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-image.jpg-27TzOT0R0oLqq9qurlKNbdxSb82CNX.jpeg"
              alt="Advanced Battery Technology Visualization"
              fill
              priority
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    </section>
  )
}

