'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Link, Download } from 'lucide-react'

const contacts = [
  {
    label: '+51 916624795',
    href: 'https://wa.me/51916624795',
    icon: MessageCircle,
    ariaLabel: 'Contact via WhatsApp',
  },
  {
    label: 'cjcabanillasingaruca@gmail.com',
    href: 'mailto:cjcabanillasingaruca@gmail.com',
    icon: Mail,
    ariaLabel: 'Send email',
  },
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/christiancabanillas',
    icon: Link,
    ariaLabel: 'View LinkedIn profile',
  },
  {
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1fWO4I_fECsYT6UCE2815prx3gK0awMiv/view?usp=sharing',
    icon: Download,
    ariaLabel: 'Download resume',
  },
]

export default function ContactFooter() {
  return (
    <footer className="bg-[#F5F2EE] pt-0 pb-12">
      <div className="max-w-7xl mx-auto px-[4.5] md:px-10">
        {/* Divider */}
        <div className="border-t border-[#0B1628]/15 mb-10" />

        {/* Contact bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#B8BCE0] rounded-2xl px-6 md:px-12 py-5 flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={contact.ariaLabel}
                className="flex items-center gap-2 text-[#0B1628] hover:text-[#0B1628]/70 transition-colors duration-200 font-body text-sm font-medium group"
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className="flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                />
                <span className={`underline underline-offset-2 decoration-transparent group-hover:decoration-[#0B1628]/50 transition-all duration-200 ${contact.label === 'cjcabanillasingaruca@gmail.com' ? 'text-xs' : 'text-sm'}`}>
                  {contact.label}
                </span>
              </a>
            )
          })}
        </motion.div>

        {/* Copyright */}
        <p className="font-body text-[#0B1628]/50 text-xs text-center">
          Copyright &copy; 2020-2026 Christian Cabanillas. All rights reserved
        </p>
      </div>
    </footer>
  )
}
