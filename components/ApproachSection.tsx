'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Search, Target, Wrench, ArrowUpRight } from 'lucide-react'

const steps = [
  {
    icon: Lightbulb,
    title: 'Understand',
    description: 'Research users, systems, incentives and constraints.',
  },
  {
    icon: Search,
    title: 'Reframe',
    description: 'Identify root causes instead of symptoms.',
  },
  {
    icon: Target,
    title: 'Prioritize',
    description: 'Focus teams on the few decisions that matter most.',
  },
  {
    icon: Wrench,
    title: 'Build',
    description: 'Transform insights into products and experiences.',
  },
  {
    icon: ArrowUpRight,
    title: 'Scale',
    description: 'Design systems, organizations and processes that endure.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function ApproachSection() {
  return (
    <section id="approach" className="bg-[#E8EEF5] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-2xl md:text-3xl font-medium text-[#0B1628] text-center mb-14"
        >
          How I create{' '}
          <span className="underline underline-offset-4 decoration-[#0B1628]/60">
            Product Impact
          </span>
        </motion.h2>

        {/* Dark card with steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="bg-[#0B1628] rounded-2xl md:rounded-3xl px-8 md:px-12 py-10 md:py-14"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-6"
          >
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div key={step.title} variants={itemVariants} className="relative">
                  {/* Icon */}
                  <div className="mb-5">
                    <Icon size={24} strokeWidth={1.5} className="text-white/90" />
                  </div>

                  {/* Title + arrow */}
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-heading text-white font-medium text-base md:text-lg">
                      {step.title}
                    </h3>
                    {index < steps.length - 1 && (
                      <span className="text-white/50 hidden md:block">→</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="font-body text-white/60 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="mt-4 text-white/30 text-lg md:hidden">↓</div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
