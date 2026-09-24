export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

const SECTIONS: WorkSection[] = [
  {
    id: 'voice-ai',
    no: '01',
    title: 'Voice AI',
    tagline: 'Real-time conversational systems',
    items: [
      {
        name: 'Voice AI Assistant',
        meta: 'LLMs · RAG · tool calling',
        tags: ['Voice AI', 'LLMs', 'RAG', 'Agents'],
        slug: 'voice-ai-assistant',
      },
    ],
  },
  {
    id: 'mcp',
    no: '02',
    title: 'AI Infrastructure',
    tagline: 'MCP · agents · enterprise tools',
    items: [
      {
        name: 'MCP Integration Platform',
        meta: 'Model Context Protocol',
        tags: ['MCP', 'Claude', 'Tool Calling', 'RAG'],
        slug: 'mcp-integration-platform',
      },
    ],
  },
  {
    id: 'data-ai',
    no: '03',
    title: 'Data + AI',
    tagline: 'BigQuery · Databricks · fraud analytics',
    items: [
      {
        name: 'Fraud Dashboard Migration',
        meta: 'ECOMM → T360',
        tags: ['BigQuery', 'Databricks', 'SQL', 'Data Pipelines'],
        slug: 'fraud-dashboard-migration',
      },
    ],
  },
  {
    id: 'cloud',
    no: '04',
    title: 'Cloud Engineering',
    tagline: 'Azure · Log Analytics · automation',
    items: [
      {
        name: 'Cloud Cost Optimization',
        meta: 'Log export + retention automation',
        tags: ['Azure', 'Logic Apps', 'KQL', 'Blob Storage'],
        slug: 'cloud-cost-optimization',
      },
    ],
  },
]

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  en: {
    title: 'Selected Work',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Highlights',
    visitLabel: 'Open project',
    detailPlaceholder: 'Project details',
    phImageLabel: 'Project visual',
    phButtonLabel: 'Open',
    countLabel: (n) => `${n} projects`,
    sections: SECTIONS,
  },
  zh: {
    title: 'Selected Work',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Highlights',
    visitLabel: 'Open project',
    detailPlaceholder: 'Project details',
    phImageLabel: 'Project visual',
    phButtonLabel: 'Open',
    countLabel: (n) => `${n} projects`,
    sections: SECTIONS,
  },
}

export const SECTION_COVERS: Record<string, string> = {}
export function sectionCount(section: WorkSection): number {
  return section.items?.length ?? 0
}
