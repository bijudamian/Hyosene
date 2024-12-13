"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to revolutionize your energy storage solutions? Contact Hyosene Battery today!
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg sm:text-xl font-semibold select-all">+91 91503 45616</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg sm:text-xl">info@hyosenebattery.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <p className="text-lg sm:text-xl">Chennai, India</p>
            </div>
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link href="/schedule-meeting">Schedule a Meeting</Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] sm:h-[450px] md:h-[500px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/founder.jpg-mGkxkKUksJE3ptafr2aG9iwsaFiK7P.jpeg"
              alt="Founder KARTHIKESH"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-2xl" />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white overflow-y-auto max-h-full">
              <h3 className="text-2xl font-bold mb-2">About Us</h3>
              <p className="text-base sm:text-lg mb-4">
                Founded by KARTHIKESH, Hyosene Battery Pvt Ltd is at the forefront of graphene battery technology. 
                Our mission is to revolutionize energy storage, providing sustainable and high-performance 
                solutions for businesses across industries.
              </p>
              <p className="text-base sm:text-lg">
                With a team of expert engineers and scientists, we're committed to pushing the boundaries 
                of what's possible in battery technology, driving innovation, and contributing to a 
                greener future.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

