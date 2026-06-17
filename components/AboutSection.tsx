'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const paragraphs = [
  "I've always been drawn to complexity.",
  'I find myself asking the same question: what is really driving outcomes beneath the surface?',
  'My work sits at the intersection of product, strategy, AI, and design.',
  'I help organizations understand how people, needs and technology interact, then translate those insights into scalable products and strategic decisions.',
  "I believe the most impactful products don't just solve problems—they help people make better decisions, change systems, and unlock new possibilities.",
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F5F2EE] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-medium text-[#0B1628] mb-12"
        >
          About me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-5"
          >
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-[#0B1628] text-base md:text-lg leading-relaxed"
              >
                {p}
              </p>
            ))}
          </motion.div>

          {/* Right — portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Portrait%20image-7YOdJa59cSloZxs60gW8Aqru9W2TxD.png"
                  alt="Portrait of Christian Cabanillas"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
