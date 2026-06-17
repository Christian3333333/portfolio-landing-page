'use client'

import { motion } from 'framer-motion'

const systems = [
  {
    title: 'People',
    description: 'Understanding needs, motivations, and trust.',
    work: ['GenIA', 'Finniu', 'ChecaBien'],
  },
  {
    title: 'Decisions',
    description: 'Helping people make better decisions.',
    work: ['ChecaBien', 'Minedu', 'Finniu'],
  },
  {
    title: 'Technology',
    description: 'Turning capabilities into useful experiences.',
    work: ['GenIA', 'Hype', 'AI Products'],
  },
  {
    title: 'Organizations',
    description: 'Aligning stakeholders, incentives, and execution.',
    work: ['BCP', 'UTP', 'Finniu'],
  },
]

export default function SystemsSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-[4.5] md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-medium text-[#0B1628] text-center mb-14"
        >
          Understanding Complex Systems
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#C5C7E8]/50 rounded-2xl p-7 flex flex-col gap-4"
            >
              <h3 className="font-heading text-[#0B1628] font-semibold text-lg">
                {system.title}
              </h3>
              <p className="font-body text-[#0B1628]/70 text-sm leading-relaxed">
                {system.description}
              </p>
              <div>
                <p className="font-body text-[#0B1628] font-semibold text-sm mb-2">Work:</p>
                <ul className="flex flex-col gap-1">
                  {system.work.map((item) => (
                    <li
                      key={item}
                      className="font-body text-[#0B1628]/80 text-sm flex items-start gap-2"
                    >
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-[#0B1628]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
