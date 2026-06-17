'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function HeroSection() {
  return (
    <section className="relative bg-[#0B1628] min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left — hero image */}
        <div className="relative w-full h-64 md:h-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image-LVYWUziXc5qsD0tbNKv9ZqnAaRuEf8.png"
            alt="Christian Cabanillas working late at night"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* subtle gradient overlay on right edge to blend into dark bg */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#0B1628] hidden md:block" />
        </div>

        {/* Right — text content */}
        <div className="relative flex flex-col justify-end md:justify-center px-8 md:px-16 py-16 md:py-0">
          {/* Gradient blob - positioned top-right of the right panel */}
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20Gradient-aV86lAIEbgsJZBpsHrVXgIC0vtaRIP.png"
              alt=""
              fill
              priority
              className="object-cover object-top opacity-70 mix-blend-screen"
              sizes="50vw"
            />
          </div>

          <div className="relative z-10 max-w-lg">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-balance mb-4"
            >
              Christian Cabanillas
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-6 text-balance"
            >
              Transforming complexity into scalable products and systems
            </motion.p>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-white font-medium text-sm md:text-base tracking-wide"
            >
              Product Strategy · AI Products · Design
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
