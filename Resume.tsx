import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}

const ENTRIES: ResumeEntry[] = [
  {
    period: '2017 – 2021',
    place: 'BITS Goa',
    role: 'B.E. Computer Science',
    points: [
      'Computer Science foundation across software engineering, systems and problem solving.',
      'Built the foundation that later shaped a backend + AI engineering career.',
    ],
  },
  {
    period: 'Jun 2021 – Jul 2022',
    place: 'Tekion',
    role: 'Software Engineer',
    points: [
      'Built backend services and distributed systems for enterprise automotive software.',
      'Worked on service-oriented APIs, data flows and production engineering.',
    ],
  },
  {
    period: 'Jul 2022 – Aug 2024',
    place: 'Walmart',
    role: 'AI Engineer',
    points: [
      'Worked across backend systems, data platforms and machine-learning/AI use cases.',
      'Built production workflows spanning cloud infrastructure, analytics and intelligent automation.',
    ],
  },
  {
    period: 'Aug 2024 – Present',
    place: 'Salesforce',
    role: 'Member of Technical Staff · AI / Backend',
    points: [
      'Build backend and AI systems spanning LLMs, RAG, agents and enterprise integrations.',
      'Work with cloud platforms, data pipelines, distributed services and production reliability.',
    ],
  },
  {
    period: 'Current',
    place: 'Voice AI Venture',
    role: 'Founder / Builder',
    points: [
      'Exploring Voice AI products that combine native-language experiences, LLMs and real-time interaction.',
      'Focused on turning practical AI capabilities into useful end-user products.',
    ],
  },
]

const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1] as const

const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang: _lang }: { lang: 'en' | 'zh' }) {
  return (
    <section className="resume" lang="en">
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        Experience & Education
      </motion.h2>

      <div className="timeline">
        {ENTRIES.map((entry, i) => (
          <Entry key={entry.place} entry={entry} index={i} />
        ))}
      </div>
    </section>
  )
}
