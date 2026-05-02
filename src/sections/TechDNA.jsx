import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Core Languages',
    skills: ['C', 'C++', 'Python'],
    primary: ['C++'],
  },
  {
    category: 'Frontend Systems',
    skills: ['React', 'Tailwind CSS', 'JavaScript'],
    primary: ['React', 'Tailwind CSS'],
  },
  {
    category: 'Backend Systems',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
    primary: ['Node.js'],
  },
  {
    category: 'AI / ML Capabilities',
    skills: ['NLP', 'Deep Learning', 'Transformers', 'BiLSTM/BiGRU', 'Sequence Modeling', 'Text Classification', 'scikit-learn', 'HuggingFace'],
    primary: ['NLP'],
  },
  {
    category: 'Tools & Infrastructure',
    skills: ['Git', 'GitHub', 'MongoDB', 'MySQL', 'VS Code', 'Postman'],
    primary: ['GitHub', 'MongoDB'],
  },
  {
    category: 'Currently Learning',
    skills: ['LangChain', 'Docker', 'FastAPI'],
    primary: ['FastAPI'],
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

export default function TechDNA() {
  return (
    <section id="tech-dna" className="border-b border-[#262626] bg-[#0A0A0A] px-6 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]\">Skills Section</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl\">Tech DNA</h2>
          <p className="max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base\">
            Technologies I use to design and deploy intelligent systems
          </p>
          <p className="max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base\">
            Focused on building scalable, efficient, and maintainable systems
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.category}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-xl border border-[#262626] bg-[#161616] p-6 shadow-md hover:shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold tracking-tight text-white">{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isPrimary = group.primary?.includes(skill)
                    return (
                      <motion.span
                        key={skill}
                        whileHover={{ y: -1 }}
                        transition={{ duration: 0.15 }}
                        className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] transition-all duration-200 ${
                          isPrimary
                            ? 'border-[#3B82F6] bg-[#1e3a8a] text-[#93c5fd] hover:border-[#60a5fa]'
                            : 'border-[#3B82F6] bg-[#1e3a8a] text-[#93c5fd] hover:border-[#60a5fa]'
                        }`}
                      >
                        {skill}
                      </motion.span>
                    )
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
