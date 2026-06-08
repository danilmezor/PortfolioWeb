// All site copy lives here so wording can be tweaked without touching components.
// NOTE (double-blind): the ACSAC paper is presented as title + summary + metrics only,
// with NO downloadable PDF / author-identifying link, until it clears review.

export const profile = {
  name: 'Danil Zanozin',
  role: 'ML / AI Engineer',
  // mono sub-line facets, cycled in the hero
  facets: ['Applied ML', 'LLM agent safety', 'Quantitative research', 'Production AI systems'],
  email: 'danil.zanozin@gmail.com',
  portrait: '/portrait.jpg',
  // Phone-stripped general résumé. Source: resume/resume.tex → public/resume.pdf.
  resume: '/resume.pdf',
}

export const about = {
  lead:
    'I build production AI systems and the safety mechanisms that contain them — and I research what I ship.',
  body:
    'My work sits where applied machine learning meets real deployments: LLM agent safety, ' +
    'quantitative trading, and the engineering that makes both hold up under live conditions. ' +
    'I sole-built a production AI platform, validated a privacy mechanism on it, and wrote the paper end-to-end.',
  facts: [
    'B.S. Computer Science · CSU Channel Islands',
    'Incoming M.S. · Fall 2026',
    'Minors: Cybersecurity & Mathematics',
  ],
}

export const links = {
  github: 'https://github.com/danilmezor',
  linkedin: 'https://www.linkedin.com/in/danil-zanozin-603878199/',
  tradingview: 'https://www.tradingview.com/u/mezor13/#published-scripts',
  instagram: 'https://www.instagram.com/muscrue/',
  photography: 'https://danilzanozin.com/',
}

// Selected work — research is folded in here as a card, not a separate section.
export const projects = [
  {
    id: 'traciora',
    name: 'Traciora',
    kind: 'Startup · Founder & Sole Engineer',
    blurb:
      'AI that runs the operational side of your business — and actually knows it. Traciora listens to ' +
      'and analyzes every customer phone call, handles routine customer ops, and answers from a complete, ' +
      'always-current picture of your company. Customer operations tailored to your business and fluent in ' +
      'how it works — the busywork your team shouldn’t have to do, done.',
    href: 'https://traciora.com/',
    tag: 'Live',
    accent: true,
  },
  {
    id: 'pii',
    name: 'PII Virtualization',
    kind: 'Research · Sole-authored',
    blurb:
      'A reversible, session-scoped tokenization layer for LLM tool-calling agents: two-stage detection, ' +
      'an encrypted vault, and a fail-closed leak guard. Cuts raw-PII sent to external model providers to ' +
      'near-zero with no loss of tool-calling utility — validated on a live production deployment.',
    metrics: [
      { value: '99.63%', label: 'raw-PII reduction' },
      { value: '0', label: 'tool-call degradation' },
      { value: '21k', label: 'detector evaluations' },
    ],
    status: 'Under double-blind review · ACSAC 2026',
    // intentionally no href / no PDF while under review
  },
  {
    id: 'acds',
    name: 'Agentic AI for Autonomous Cyber Defense',
    kind: 'Research · Co-authored',
    blurb:
      'Formalizes agentic cybersecurity agents as constrained POMDPs with a structured adversarial threat ' +
      'model and a NIST CSF-aligned staged-autonomy taxonomy, evaluated on LANL auth/DNS/flows telemetry.',
    status: 'Work in progress',
  },
  {
    id: 'kadabra',
    name: 'Kadabra',
    kind: 'Capstone · Systematic Trading Framework',
    blurb:
      'An end-to-end framework for researching and deploying systematic crypto strategies: live execution ' +
      '(Binance/Hyperliquid), a multi-test robustness gate (PBO, Deflated Sharpe, MCPT, walk-forward), and ' +
      'explicit failure recovery. Three strategies cleared the gate and trade live.',
    metrics: [
      { value: '+10.59%', label: '2026 YTD' },
      { value: '1.25', label: 'Sharpe' },
    ],
    stack: ['Python', 'Numba', 'Optuna', 'ArcticDB'],
    href: 'https://danilmezor.github.io/capstone-2026/',
    tag: 'Live',
  },
  {
    id: 'oss',
    name: 'TradingView Indicators',
    kind: 'Pine Script · TradingView',
    blurb:
      'A curated set of trading indicators and market features, written in Pine Script and published on ' +
      'TradingView. Traders use them daily to inform discretionary decisions — several reached the ' +
      'platform’s front page.',
    metrics: [{ value: '1000+', label: 'daily users' }],
    href: 'https://www.tradingview.com/u/mezor13/#published-scripts',
  },
  {
    id: 'wildhorse',
    name: 'Wild Horse Analytics',
    kind: 'Competition · 1st place',
    blurb:
      'A predictive staffing agent for campus dining built at the US AI Camp (CSU system / AWS / Cal Poly ' +
      'SLO): gradient boosting over historical, weather, and event data with an inference dashboard. ' +
      'Winning submission.',
    metrics: [{ value: '1st', label: 'US AI Camp' }],
    href: 'https://dxhub.calpoly.edu/ai-summer-camp-archive/csu-ai-summer-camp-projects/wild-horse-analytics-csu/',
  },
]

// Highlights strip — animated counters. `suffix`/`prefix` render as static mono.
export const highlights = [
  { to: 99.63, suffix: '%', label: 'raw-PII reduction', emphasis: true },
  { to: 1.5, label: 'Sharpe ratio', emphasis: true },
  { to: 1000, suffix: '+', label: 'library users' },
  { to: 3.84, label: 'GPA · top 5%' },
]

export const awards = [
  '1st · US AI Camp (CSU / AWS)',
  '1st · Kaggle crypto forecasting',
  '1st & 2nd · ICPC regionals (2-year colleges)',
  '5th · temperature prediction (conformal)',
]

export const stack = [
  {
    group: 'ML & Research',
    items: ['PyTorch', 'HuggingFace', 'Scikit-learn', 'XGBoost', 'Conformal Prediction', 'Experimental Design'],
  },
  {
    group: 'LLM / Agent Safety',
    items: ['LangChain', 'LangGraph', 'MCP / FastMCP', 'Guardrails', 'PII Tokenization', 'Threat Modeling'],
  },
  {
    group: 'Quant',
    items: ['Time Series', 'Walk-forward Validation', 'Backtesting', 'Risk Management', 'ArcticDB'],
  },
  {
    group: 'Infrastructure',
    items: ['Python', 'TypeScript', 'FastAPI', 'Docker', 'Langfuse', 'AWS'],
  },
]
