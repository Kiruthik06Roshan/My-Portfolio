import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen border-b border-[#262626] bg-[#0A0A0A] px-6 pt-28 pb-20 sm:px-8 lg:px-10"
    >
      <div className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl items-center">
        <div className="grid w-full gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6B7280]">Hero Section</p>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full border-2 border-[#3B82F6] bg-[#111111] shadow-sm" />
                <div className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">Product-minded AI Developer</div>
              </div>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-bold leading-[1] tracking-tight text-white sm:text-6xl lg:text-7xl">Kiruthik Roshan</h1>
                <p className="max-w-2xl text-base leading-7 text-[#E5E5E5] sm:text-lg">
                  I build AI systems that work for people — not just in demos
                </p>
                <p className="max-w-2xl text-sm leading-7 text-[#A1A1AA] sm:text-base">
                  Strong foundation in Data Structures &amp; Algorithms with hands-on experience building scalable systems
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <motion.a
                href="#systems"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center justify-center rounded-xl border border-[#3B82F6] bg-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#2563EB] hover:shadow-lg"
              >
                View Systems
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center justify-center rounded-xl border border-[#262626] bg-[#161616] px-6 py-3 text-sm font-medium text-white shadow-md hover:border-[#3B82F6] hover:shadow-lg"
              >
                GitHub
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="inline-flex items-center justify-center rounded-xl border border-[#262626] bg-transparent px-6 py-3 text-sm font-medium text-white hover:border-[#3B82F6] hover:text-white"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
            className="relative flex min-h-[320px] items-center justify-center lg:min-h-[520px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.1),rgba(59,130,246,0.03)_55%,transparent_78%)] blur-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96" />
            </div>

            <div className="relative h-[320px] w-full max-w-[420px] rounded-xl border border-[#262626] bg-[#111111] p-6 shadow-md sm:h-[380px] lg:h-[520px]">
              <div className="flex h-full flex-col justify-between rounded-xl border border-[#262626] bg-transparent p-6\">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#3B82F6]\">
                  <span>CHENNAI, IN</span>
                  <span>OPEN TO WORK</span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <img 
                    src="/MyProfile.jpeg" 
                    alt="Profile" 
                    className="h-44 w-44 rounded-full border-2 border-[#3B82F6] object-cover sm:h-52 sm:w-52"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#3B82F6]">
                  <span>AI DEVELOPER</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
