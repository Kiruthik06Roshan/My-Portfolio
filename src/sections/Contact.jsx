import { motion } from 'framer-motion'

const contactMethods = [
  {
    label: 'Primary Email',
    value: 'yourname@gmail.com',
    href: 'mailto:yourname@gmail.com',
    icon: '✉',
  },
  {
    label: 'GitHub',
    value: 'github.com/kiruthik',
    href: 'https://github.com',
    icon: '⚙',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kiruthik',
    href: 'https://linkedin.com',
    icon: '◉',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="border-b border-[#262626] bg-[#0A0A0A] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <div className="flex flex-col gap-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]\">Get in Touch</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl\">Contact</h2>
          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base\">
            Feel free to reach out for opportunities or collaborations
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -2 }}
          className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#161616] p-6 shadow-md hover:shadow-lg"
        >
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel={method.href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="group/item flex flex-col gap-3 transition-all duration-200"
              >
                <motion.div
                  whileHover={{ y: -1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl text-[#3B82F6]">{method.icon}</span>
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A1A1AA] group-hover/item:text-[#93c5fd]">
                    {method.label}
                  </span>
                </motion.div>
                <p className="break-all text-sm leading-6 text-[#93c5fd] group-hover/item:text-[#bfdbfe]">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-[#A1A1AA]\">
            Interested in building impactful systems or collaborating on challenging problems? Let&apos;s connect.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#6B7280]\">
            Currently open to full-time roles and internships · Available from June 2025
          </p>
        </motion.div>
      </div>
    </section>
  )
}
