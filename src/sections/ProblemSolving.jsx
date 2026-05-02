import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, duration = 1.5 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    const frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration])

  return count
}

export default function ProblemSolving() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  return (
    <section
      ref={sectionRef}
      id="problem-solving"
      className="border-b border-[#262626] bg-[#111111] px-6 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto flex min-h-[58vh] w-full max-w-4xl items-center justify-center px-6">
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
            className="text-xs uppercase tracking-[0.35em] text-[#6B7280]"
          >
            Data Structures & Algorithms
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
            className="relative space-y-3"
          >
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.06),transparent_75%)] blur-[80px]" />
            </div>

            <div className="text-7xl font-bold tracking-tight text-[#3B82F6] sm:text-8xl lg:text-9xl">
              <span>
                {isInView ? <Counter target={600} duration={1.5} /> : 0}
                <span className="text-[#93c5fd]">+</span>
              </span>
            </div>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Problems Solved
            </h2>
            <p className="text-sm uppercase tracking-[0.22em] text-[#6B7280]">Across Data Structures &amp; Algorithms</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="max-w-2xl text-base leading-8 text-[#A1A1AA]">
              LeetCode: 500+ problems · HackerRank: 100+ problems · Top 15% globally
            </p>
            <div className="mx-auto flex max-w-2xl flex-col gap-3 rounded-xl border border-[#262626] bg-[#161616] p-5 text-left shadow-md sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#3B82F6]">What I Focus On</p>
              <ul className="space-y-2 text-sm leading-6 text-[#A1A1AA]">
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                  <span>Trees, Graphs, Dynamic Programming</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                  Pattern recognition and optimization
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                  <span>Writing efficient and clean solutions</span>
                </li>
              </ul>
              <div className="space-y-2 border-t border-[#262626] pt-4\">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#3B82F6]">Approach</p>
                <p className="text-sm leading-7 text-[#A1A1AA]">
                  Break down problems → Identify patterns → Optimize solutions → Validate edge cases
                </p>
              </div>
            </div>
            <p className="text-sm font-medium tracking-[0.2em] text-[#6B7280]">Consistency &gt; Intensity</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
