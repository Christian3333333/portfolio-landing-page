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
        {/* Left — hero image (desktop only) */}
        <div className="hidden md:block relative w-full md:h-auto" style={{ marginBottom: '127px' }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20image-LVYWUziXc5qsD0tbNKv9ZqnAaRuEf8.png"
            alt="Christian Cabanillas working late at night"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* subtle gradient overlay on right edge to blend into dark bg */}
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#0B1628]" />
        </div>

        {/* Right — gradient (region 1) + text (region 2) stacked */}
        <div className="flex flex-col justify-center min-h-screen md:min-h-screen col-span-1">
          {/* Region 1 — gradient blob */}
          <div className="relative h-56 md:h-72 overflow-hidden w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Region%201-7PuWApBsmLXTVLUS4SFrym1S2lSgrk.png"
              alt=""
              fill
              priority
              className="object-cover object-center mix-blend-screen opacity-90 md:object-contain md:object-right-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Region 2 — text block, sits close beneath the gradient */}
          <div className="px-8 md:px-16 pb-12 md:pb-16 pt-2 max-w-lg">
            <motion.h1
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight text-balance mb-4"
            >
              Christian Cabanillas
            </motion.h1>

            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-body text-white/80 text-base md:text-lg leading-relaxed mb-3 text-balance"
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
