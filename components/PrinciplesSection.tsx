'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const principles = [
  {
    number: 'Principle 1',
    text: 'AI is not always the right solution',
  },
  {
    number: 'Principle 2',
    text: 'Trust is more important than intelligence.',
  },
  {
    number: 'Principle 3',
    text: 'AI should reduce cognitive effort, not increase it.',
  },
  {
    number: 'Principle 4',
    text: 'The best AI experiences hide complexity.',
  },
]

export default function PrinciplesSection() {
  return (
    <section id="principles" className="bg-[#0B1628] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-medium text-white text-center mb-14 md:mb-20"
        >
          I Design AI Products that People Trust
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Designing%20AI%20Products%20image-1RiiofGQ1IYKHg07mTKRrFTUv1wod2.png"
              alt="Hand touching a glowing digital interface in blue light"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          {/* Right — principles list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col"
          >
            {principles.map((p, index) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="py-6 border-b border-white/20 first:pt-0 last:border-b-0"
              >
                <p className="font-heading text-white font-semibold text-base mb-1">
                  {p.number}
                </p>
                <p className="font-body text-white/70 text-sm leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
