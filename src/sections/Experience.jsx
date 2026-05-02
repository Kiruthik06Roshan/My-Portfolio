import { motion } from 'framer-motion'

const experience = {
  title: 'Web Developer Intern',
  company: 'ClutchX',
  duration: 'Jan 2025 – Mar 2025 · 3 months',
  accomplishments: [
    'Redesigned 3 key user flows, improving interaction clarity and reducing friction',
    'Improved mobile responsiveness across 5+ device breakpoints',
    'Shipped 4 scalable frontend features in a collaborative Agile environment',
    'Maintained clean, modular code following component-based architecture principles',
  ],
}

const freelanceExperience = {
  title: 'Freelance AI Projects',
  company: 'Independent · 2024 – Present',
  accomplishments: [
    'Built GramiBot, KumbhYatra, and Tamil NLP as independent AI systems',
    'Managed full project lifecycle from ideation to deployment',
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[#262626] bg-[#111111] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6B7280]\">Professional Experience</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl\">Experience</h2>
          <p className="max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base\">
            Hands-on experience building and shipping product features in a fast-paced environment.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          whileHover={{ y: -2 }}
          className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#161616] p-6 shadow-md hover:shadow-lg"
        >
          <div className="absolute inset-y-0 left-0 w-[3px] bg-[#3B82F6]" />

          <div className="relative flex flex-col gap-5 pl-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{experience.title}</h3>
              <p className="text-sm font-medium text-[#3B82F6]">• {experience.company}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">{experience.duration}</p>
            </div>

            <ul className="space-y-3">
              {experience.accomplishments.map((accomplishment, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-7 text-[#A1A1AA]">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                  <span>{accomplishment}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          whileHover={{ y: -2 }}
          className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#161616] p-6 shadow-md hover:shadow-lg"
        >
          <div className="absolute inset-y-0 left-0 w-[3px] bg-[#3B82F6]" />

          <div className="relative flex flex-col gap-5 pl-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{freelanceExperience.title}</h3>
              <p className="text-sm font-medium text-[#3B82F6]">• {freelanceExperience.company}</p>
            </div>

            <ul className="space-y-3">
              {freelanceExperience.accomplishments.map((accomplishment, idx) => (
                <li key={idx} className="flex gap-3 text-sm leading-7 text-[#A1A1AA]">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[#3B82F6]" />
                  <span>{accomplishment}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
