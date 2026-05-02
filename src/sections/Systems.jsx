import { motion } from 'framer-motion'

const projects = [
  {
    title: 'GramiBot — Rural Intelligence System',
    description: 'Enables rural users to access government services using multilingual AI and document understanding',
    impact: 'Designed to serve rural communities lacking digital access',
    tags: ['Multilingual AI', 'Document AI', 'OCR'],
    badge: 'CIVIC TECH · AI',
    approach: [
      'Designed modular chatbot architecture for scalability',
      'Integrated multilingual NLP for broader accessibility',
      'Optimized document processing for faster responses',
    ],
    github: 'https://github.com',
  },
  {
    title: 'KumbhYatra — Smart Mobility Platform',
    description: 'AI-driven crowd management system with QR access, SOS alerts, and real-time tracking',
    impact: 'Built for large-scale crowd events with real-time safety needs',
    tags: ['Crowd Safety', 'Live Tracking', 'QR Access'],
    badge: 'SAFETY · REAL-TIME',
    approach: [
      'Built real-time tracking and alert system',
      'Designed scalable crowd management logic',
      'Integrated mapping and notification services',
    ],
    github: 'https://github.com',
  },
  {
    title: 'Tamil NLP — Predictive Language Model',
    description: 'Deep learning model using BiLSTM/BiGRU for bilingual Tamil-English next-word prediction',
    impact: 'Targets bilingual Tamil-English speakers underserved by existing NLP tools',
    tags: ['BiLSTM', 'BiGRU', 'NLP'],
    badge: 'NLP · RESEARCH',
    approach: [
      'Implemented sequence models (BiLSTM/BiGRU)',
      'Optimized preprocessing pipeline for code-mixed text',
      'Focused on contextual prediction accuracy',
    ],
    github: 'https://github.com',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Systems() {
  return (
    <section id="systems" className="border-b border-[#262626] bg-[#111111] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]">Projects Section</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">SYSTEMS I&apos;VE BUILT</h2>
          <p className="max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
            Selected systems focused on practical impact, structured execution, and calm technical clarity.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative flex h-full overflow-hidden rounded-xl border border-[#262626] bg-[#161616] p-6 shadow-md hover:border-[#3B82F6] hover:shadow-lg"
            >
              <div className="flex h-full min-h-[360px] flex-1 flex-col gap-5">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span className="inline-flex text-[10px] font-medium uppercase tracking-[0.2em] text-[#3B82F6]">
                    {project.badge}
                  </span>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#A1A1AA]">MY ROLE: Solo Developer</p>
                  <p className="text-sm leading-7 text-[#A1A1AA]">{project.description}</p>
                  <p className="text-sm leading-7 text-[#A1A1AA]">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg border border-[#3B82F6] bg-[#1e3a8a] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#93c5fd]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <details className="space-y-3 rounded-xl border border-[#262626] bg-[#161616] p-4">
                  <summary className="cursor-pointer list-none text-[10px] font-medium uppercase tracking-[0.28em] text-[#3B82F6]">
                    View Details ↓
                  </summary>
                  <div className="pt-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#3B82F6]">Approach</p>
                    <ul className="mt-3 space-y-2">
                      {project.approach.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6 text-[#A1A1AA]">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>

                <div className="mt-auto flex items-center gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-[#262626] bg-transparent px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white hover:border-[#3B82F6]"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
