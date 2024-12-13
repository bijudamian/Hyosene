"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Image from "next/image"

export function TechnologySection() {
  return (
    <section id="technology" className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Graphene Technology</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Hyocene's proprietary graphene-based battery technology represents a quantum leap in energy storage. By
              harnessing the unique properties of graphene, we've developed batteries that are:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Significantly more energy-dense</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Faster charging</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Longer-lasting</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-none text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>More environmentally friendly</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/graphene.jpg-FHmUHyk8cnmwmeL2ICUHxEmwRFEMEC.jpeg"
              alt="Graphene Technology Illustration"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

