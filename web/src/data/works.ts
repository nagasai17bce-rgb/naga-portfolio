export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}
export interface WorkGroup { heading: string; items: string[] }
export interface WorkSection {
  id: string; no: string; title: string; tagline: string
  items?: WorkListItem[]; groups?: WorkGroup[]; awards?: string[]; footer?: string
}
export interface WorksLang {
  title: string; closeLabel: string; openLabel: string; hint: string; awardsLabel: string
  visitLabel: string; detailPlaceholder: string; phImageLabel: string; phButtonLabel: string
  countLabel: (n: number) => string; sections: WorkSection[]
}

const sections: WorkSection[] = [
  { id: 'voice-ai', no: '01', title: 'Voice AI', tagline: 'Realtime conversation · RAG · tool execution',
    items: [{ name: 'Voice AI Assistant', meta: 'LLMs · RAG · Agents', tags: ['Voice AI','RAG','Realtime'], slug: 'voice-ai-assistant' }],
    footer: 'Voice-first AI products for natural-language and native-language experiences.' },
  { id: 'mcp', no: '02', title: 'AI Infrastructure', tagline: 'MCP · agents · enterprise tool calling',
    items: [{ name: 'MCP Integration Platform', meta: 'MCP · Claude · Tool Calling', tags: ['MCP','Agents','Tool Calling'], slug: 'mcp-integration-platform' }] },
  { id: 'fraud', no: '03', title: 'Data + AI', tagline: 'BigQuery · T360 · Tableau',
    items: [{ name: 'Fraud Dashboard Migration', meta: 'ECOMM → T360', tags: ['BigQuery','T360','Tableau'], slug: 'fraud-dashboard-migration' }] },
  { id: 'cloud', no: '04', title: 'Cloud Engineering', tagline: 'Azure · Log Analytics · automation',
    items: [{ name: 'Cloud Cost Optimization', meta: 'Telemetry export + retention', tags: ['Azure','KQL','Blob','Logic Apps'], slug: 'cloud-cost-optimization' }] },
  { id: 'membership', no: '05', title: 'Enterprise Backend', tagline: 'Cosmos DB · Databricks · secure cloud',
    items: [{ name: 'Membership Reconciliation Platform', meta: 'Azure · Cosmos DB · Key Vault', tags: ['Cosmos DB','Databricks','AAD/RBAC'], slug: 'membership-reconciliation' }] }
]

const data: WorksLang = {
  title: 'Selected Work', closeLabel: 'Back', openLabel: 'Explore', hint: 'Keep scrolling',
  awardsLabel: 'Highlights', visitLabel: 'Open project', detailPlaceholder: 'Project details',
  phImageLabel: 'Project visual', phButtonLabel: 'Open', countLabel: (n) => n + ' projects', sections
}
export const WORKS: Record<'en' | 'zh', WorksLang> = { en: data, zh: data }
export const SECTION_COVERS: Record<string, string> = {}
export function sectionCount(section: WorkSection): number { return section.items?.length || 0 }
