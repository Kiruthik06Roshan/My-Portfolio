import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Systems from './sections/Systems'
import TechDNA from './sections/TechDNA'
import ProblemSolving from './sections/ProblemSolving'
import Approach from './sections/Approach'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

const sections = [
  { component: Hero, key: 'hero' },
  { component: Systems, key: 'systems' },
  { component: TechDNA, key: 'tech-dna' },
  { component: ProblemSolving, key: 'problem-solving' },
  { component: Approach, key: 'approach' },
  { component: Experience, key: 'experience' },
  { component: Contact, key: 'contact' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#A1A1AA] antialiased">
      <Navbar />
      <main className="pt-20">
        <div className="relative overflow-hidden">{sections.map(({ component: Section, key }) => <Section key={key} />)}</div>
      </main>
      <Footer />
    </div>
  )
}
