import { motion } from 'framer-motion'

const entries = [
  {
    period: '2017 – 2021',
    place: 'BITS Goa',
    role: 'B.Tech in Computer Science',
    points: ['Computer Science foundation across software engineering, systems, algorithms and problem solving.'],
  },
  {
    period: 'Jun 2021 – Jul 2022',
    place: 'Tekion',
    role: 'Software Engineer',
    points: ['Built backend services and production APIs for enterprise automotive software.','Worked across service-oriented architecture, data flows and production engineering.'],
  },
  {
    period: 'Jul 2022 – Aug 2024',
    place: 'Walmart',
    role: 'AI Engineer',
    points: ['Worked across backend platforms, data pipelines and AI engineering workflows.','Built cloud-based production workflows spanning analytics, automation and intelligent services.'],
  },
  {
    period: 'Aug 2024 – Present',
    place: 'Salesforce',
    role: 'Member of Technical Staff · AI / Backend',
    points: ['Build enterprise backend and AI systems involving LLMs, RAG, agents, MCP and cloud integrations.','Work across distributed services, Azure, Databricks, Cosmos DB, Key Vault and production reliability.'],
  },
  {
    period: 'Current',
    place: 'Voice AI Venture',
    role: 'Founder / Builder',
    points: ['Exploring voice-first AI products with real-time conversation, retrieval, tool execution and native-language experiences.'],
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Resume() {
  return (
    <section className="resume" lang="en">
      <motion.h2 className="resume-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.7, ease: EASE }}>
        Experience & Education
      </motion.h2>
      <div className="timeline">
        {entries.map((entry) => (
          <motion.div className="tl-entry" key={entry.place} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-12% 0px -12% 0px' }} transition={{ duration: 0.72, ease: EASE }}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="tl-body">
              <div className="tl-period">{entry.period}</div>
              <div className="tl-head"><h3 className="tl-place">{entry.place}</h3></div>
              <div className="tl-role">{entry.role}</div>
              <ul className="tl-points">{entry.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
