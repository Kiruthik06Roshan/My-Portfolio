import { motion } from 'framer-motion'

export default function Approach() {
  return (
    <section id="approach" className="border-b border-[#262626] bg-[#0A0A0A] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex w-full flex-col items-center gap-8 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-xs uppercase tracking-[0.3em] text-[#3B82F6]"
          >
            Problem Solving Approach
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="relative space-y-5"
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.05),transparent_75%)] blur-[84px]" />
            </div>

            <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-3 gap-y-2 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Think → Break Down → Optimize → Validate
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              How I approach solving complex problems
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="space-y-3"
          >
            <p className="max-w-3xl text-base leading-8 text-[#A1A1AA]">
              Every problem I encounter gets decomposed into its core structure. I identify known patterns, choose the optimal algorithm, and validate against edge cases before considering a solution complete. Clarity and correctness over cleverness.
            </p>
            <p className="max-w-2xl text-base leading-8 text-[#A1A1AA]">Focused on patterns, efficiency, and correctness</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}