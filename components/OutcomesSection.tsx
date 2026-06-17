'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const outcomes = [
  {
    id: 'genia',
    title: 'GenIA',
    metrics: '+75% weekly usage   +50 NPS',
    description: 'Increasing efectiveness of an AI Assistant',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GenIA%20image-bifXnjbJQDwNYkabtXMVuYaxWvCKpT.png',
    imageAlt: 'GenIA AI Assistant app interface on a tablet',
    bgDark: true,
    href: 'https://drive.google.com/file/d/1RJKzjZgLoGqdf_JGxM6Ljr500bjLD6j4/view?usp=drive_link',
  },
  {
    id: 'hype',
    title: 'Hype',
    metrics: '42% workflow efficiency',
    description: 'Simplyfing an AI content generation tool',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hype%20image-HXLlEL8Gy78olvI2kcF32c1QYHwtjO.png',
    imageAlt: 'Hype content generation tool — collage of content creators',
    bgDark: false,
    href: 'https://drive.google.com/file/d/14WcGFnXQwwFigQtcXmZ6OSho81XFHyaK/view?usp=drive_link',
  },
  {
    id: 'finniu',
    title: 'Finniu',
    metrics: '10% conversion increase',
    description: 'Redefining product & growth strategy for high-ticket investors',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Finniu%20image-xMorKczQeAOrUyaEiI09h7btJatspR.png',
    imageAlt: 'Two professionals in a business meeting, smiling',
    bgDark: true,
    href: 'https://drive.google.com/file/d/1Lz2yakY3huj8VKvB_u5ruUR9XCaftXla/view?usp=drive_link',
  },
  {
    id: 'checabien',
    title: 'ChecaBien',
    metrics: '70% satisfaction   200k users',
    description: 'Building a reliable civic-tech platform',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChecaBien%20image-UcNIaQmJ4vp5AG4kER7LhaMJrIpDvh.png',
    imageAlt: 'Young man smiling while using his phone',
    bgDark: true,
    href: 'https://drive.google.com/file/d/1JokNGA6bQkmiitmIq7dhOh30KxU_WxuS/view?usp=drive_link',
  },
]

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-medium text-[#0B1628] text-center mb-14"
        >
          Selected Outcomes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {outcomes.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer block ${
                item.bgDark ? 'bg-[#0F1E35]' : 'bg-[#F5EFDF]'
              }`}
            >
              {/* Image area */}
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Text area */}
              <div className="px-7 py-6">
                <h3
                  className={`font-heading text-xl font-medium mb-1 ${
                    item.bgDark ? 'text-white' : 'text-[#0B1628]'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`font-body text-sm mb-1 ${
                    item.bgDark ? 'text-white/60' : 'text-[#0B1628]/60'
                  }`}
                >
                  {item.metrics}
                </p>
                <p
                  className={`font-body text-sm ${
                    item.bgDark ? 'text-white/80' : 'text-[#0B1628]/80'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
