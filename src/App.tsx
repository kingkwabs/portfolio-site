import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  CircleDot,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  GraduationCap,
  FolderGit2,
  Mail,
  MapPin,
  Network,
  Route,
  Briefcase,
  Zap,
} from 'lucide-react'
import { type CSSProperties, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

type Project = {
  id: string
  name: string
  kicker: string
  summary: string
  detail: string
  status: string
  impact: string
  color: 'acid' | 'cyan' | 'ember' | 'blue' | 'green' | 'violet'
  stack: string[]
  href?: string
  icon: typeof BrainCircuit
  node: { x: number; y: number }
}

type ExperienceVisualSpec = {
  kind: 'data' | 'evaluation' | 'campus'
  label: string
  title: string
  metrics: string[]
}

type ExperienceItem = {
  company: string
  role: string
  date: string
  body: string
  tags: string[]
  visual: ExperienceVisualSpec
}

type SkillReelCard = {
  id: string
  title: string
  kicker: string
  body: string
  proof: string
  image: string
  imageAlt: string
  color: Project['color']
  stack: string[]
  icon: typeof BrainCircuit
}

const resumeUrl = '/Kwabena-Appiah-Resume-Dec-2025.docx'
const githubUrl = 'https://github.com/kingkwabs'
const linkedinUrl = 'https://www.linkedin.com/in/kwabena-appiah-17b33a244/'
const emailUrl = 'mailto:koa24@cornell.edu'

const projects: Project[] = [
  {
    id: 'field-ai',
    name: 'Field AI',
    kicker: 'AI scheduling platform',
    summary:
      'Constraint-aware planning system that ingests tasks from email, calendar, and notifications.',
    detail:
      'Building an AI-driven route optimization and daily scheduling engine with explainable replanning for time windows, priorities, travel time, and disruptions.',
    status: 'In progress',
    impact: 'Autonomous ingestion + explainable planning',
    color: 'acid',
    stack: ['Python', 'Node.js', 'TypeScript', 'Express', 'REST APIs'],
    icon: Route,
    node: { x: 49, y: 16 },
  },
  {
    id: 'idc-energy',
    name: 'IDC Energy',
    kicker: 'Full-stack workflow suite',
    summary:
      'RDS Aurora PostgreSQL systems and QuickBooks-integrated internal tools for energy operations.',
    detail:
      'Designing and deploying data infrastructure with a team of engineers and consultants, then turning it into a proprietary interface for transaction workflows.',
    status: 'Internship',
    impact: 'Projected 30-40% productivity lift',
    color: 'green',
    stack: ['PostgreSQL', 'AWS RDS Aurora', 'QuickBooks API', 'Dashboards'],
    icon: Zap,
    node: { x: 17, y: 39 },
  },
  {
    id: 'civsim',
    name: 'CivSim',
    kicker: 'Multi-agent AI simulator',
    summary:
      'Catan-style board-game engine with MCTS and reinforcement-learning agents.',
    detail:
      'Built a Python game environment with 101 passing tests, axial hex boards, valid-action enumeration, tournament metrics, MCTS, and an actor-critic RL training pipeline.',
    status: 'Research platform',
    impact: '101 tests across game, MCTS, and RL systems',
    color: 'cyan',
    stack: ['Python', 'PyTorch', 'MCTS', 'RL', 'Simulation'],
    href: 'https://github.com/kingkwabs/civsim',
    icon: BrainCircuit,
    node: { x: 83, y: 39 },
  },
  {
    id: 'planetoids',
    name: 'PLANETOIDS',
    kicker: 'Arcade physics game',
    summary:
      'Asteroids-style game with ship physics, collision handling, bullets, and animated thrusters.',
    detail:
      'Implemented model/controller architecture for dynamic arcade gameplay, including vector movement, asteroid breakup, border collision, and fire-rate control.',
    status: 'Game project',
    impact: 'Physics, collision, and animation systems',
    color: 'blue',
    stack: ['Python', 'GameApp', 'Vectors', 'Collision', 'Animation'],
    href: 'https://github.com/kingkwabs/PLANETOIDS',
    icon: CircleDot,
    node: { x: 30, y: 68 },
  },
  {
    id: 'mcdiver',
    name: 'McDiver',
    kicker: 'Graph search game',
    summary:
      'Sewer-navigation game using graph algorithms, optimized data structures, and search strategy.',
    detail:
      'Used graph algorithms and concurrency concepts to navigate weighted game maps, optimize search behavior, and reason about heaps, trees, and linked structures.',
    status: 'Academic project',
    impact: 'Graph search, BFS, and heuristics',
    color: 'ember',
    stack: ['Java', 'Graphs', 'BFS', 'Heaps', 'Concurrency'],
    href: 'https://github.com/kingkwabs/McDiver',
    icon: Network,
    node: { x: 74, y: 70 },
  },
]

const experience: ExperienceItem[] = [
  {
    company: 'IDC Energy',
    role: 'Full-stack software engineering intern',
    date: 'Aug. 2025 - present',
    body: 'Deploying RDS Aurora PostgreSQL data systems and building a QuickBooks-integrated internal suite for transaction entry, storage, retrieval, and analytics.',
    tags: ['AWS RDS', 'PostgreSQL', 'QuickBooks', 'Workflow tools'],
    visual: {
      kind: 'data',
      label: 'Infrastructure map',
      title: 'Aurora -> QuickBooks',
      metrics: ['RDS', 'API', 'Ops'],
    },
  },
  {
    company: 'Outlier AI',
    role: 'Generative AI evaluation contributor',
    date: '2025',
    body: 'Curated and evaluated datasets for generative AI systems, contributing to model-quality improvements reported at 15%.',
    tags: ['AI evaluation', 'Datasets', 'Quality review'],
    visual: {
      kind: 'evaluation',
      label: 'Model review',
      title: 'Prompt -> Rubric -> Score',
      metrics: ['Dataset', 'Review', '+15%'],
    },
  },
  {
    company: 'Cornell University',
    role: 'Service center team member + orientation leader',
    date: '2024 - 2025',
    body: 'Supported campus operations, student inquiries, mail and package flow, and incoming-student orientation programming.',
    tags: ['Operations', 'Student support', 'Leadership'],
    visual: {
      kind: 'campus',
      label: 'Campus ops',
      title: 'Students -> Support',
      metrics: ['Mail', 'Move-in', 'Orient'],
    },
  },
]

const skills = [
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'SQL',
  'PostgreSQL',
  'AWS',
  'REST APIs',
  'Machine learning',
  'MCTS',
  'Graph algorithms',
  'OCaml',
  'C/C++',
  'Crew AI',
  'OpenAI API',
  'QuickBooks API',
]

const proof = [
  {
    icon: GraduationCap,
    label: 'Cornell CS 2026',
    text: 'B.S. Computer Science, College of Engineering',
  },
  {
    icon: Database,
    label: 'RDS Aurora PostgreSQL',
    text: 'Data systems for operational reliability',
  },
  {
    icon: BriefcaseBusiness,
    label: 'QuickBooks workflows',
    text: 'Internal tools projected to lift productivity 30-40%',
  },
  {
    icon: BrainCircuit,
    label: 'AI model evaluation',
    text: 'Dataset curation and evaluation improving quality by 15%',
  },
  {
    icon: Code2,
    label: 'Algorithms + agents',
    text: 'Graph search, MCTS, RL, and planning systems',
  },
]

const skillReelCards: SkillReelCard[] = [
  {
    id: 'planning-engines',
    title: 'AI planning engines',
    kicker: 'agents + route logic',
    body:
      'I model time windows, priorities, travel constraints, and replanning loops so AI systems can explain why a plan changed.',
    proof: 'FieldAI route planning',
    image: '/assets/reel/fieldai-planning.png',
    imageAlt: 'FieldAI route planning mobile interface',
    color: 'acid',
    stack: ['Python', 'TypeScript', 'OpenAI API', 'Routing'],
    icon: Route,
  },
  {
    id: 'data-systems',
    title: 'Data-backed workflows',
    kicker: 'postgres + operations',
    body:
      'I turn messy operational workflows into structured records, dashboards, and retrieval paths that teams can trust.',
    proof: 'Aurora, QuickBooks, analytics',
    image: '/assets/reel/node-graph.png',
    imageAlt: 'Hand-drawn systems graph used for algorithm planning',
    color: 'green',
    stack: ['PostgreSQL', 'AWS RDS', 'Dashboards', 'APIs'],
    icon: Database,
  },
  {
    id: 'search-simulation',
    title: 'Search + simulation',
    kicker: 'graphs, mcts, agents',
    body:
      'I build state spaces, valid-action systems, heuristics, and tests for game-like environments and decision agents.',
    proof: 'CivSim and McDiver',
    image: '/assets/reel/mcdiver-sprites.png',
    imageAlt: 'McDiver explorer sprite sheet',
    color: 'cyan',
    stack: ['Java', 'Python', 'Graphs', 'MCTS'],
    icon: BrainCircuit,
  },
  {
    id: 'interaction-systems',
    title: 'Interaction systems',
    kicker: 'physics + interfaces',
    body:
      'I care about the moment where code becomes usable: responsive controls, clear feedback, and motion that explains state.',
    proof: 'PLANETOIDS arcade systems',
    image: '/assets/reel/planetoids-ship.png',
    imageAlt: 'PLANETOIDS arcade ship asset',
    color: 'blue',
    stack: ['Animation', 'Collision', 'Vectors', 'UI state'],
    icon: Code2,
  },
  {
    id: 'product-judgment',
    title: 'Product judgment',
    kicker: 'ship useful software',
    body:
      'I connect engineering detail to product taste: precise scope, useful defaults, readable interfaces, and accountable outcomes.',
    proof: 'Full-stack delivery',
    image: '/assets/kwabena-linkedin-profile.jpg',
    imageAlt: 'Kwabena Appiah profile portrait',
    color: 'violet',
    stack: ['React', 'Systems thinking', 'UX', 'Shipping'],
    icon: BriefcaseBusiness,
  },
]

const signalLines = [
  'calendar.event -> task window',
  'email.thread -> structured work order',
  'constraint graph -> route plan',
  'agent rollout -> explainable decision',
  'postgres row -> operational dashboard',
  'quickbooks event -> transaction state',
]

const labLines = [
  {
    label: 'ingest',
    text: 'Translate messy inputs into typed tasks, events, and records.',
  },
  {
    label: 'model',
    text: 'Make constraints explicit: time, priority, travel, inventory, state.',
  },
  {
    label: 'reason',
    text: 'Use search, heuristics, agents, and evaluation to choose the next move.',
  },
  {
    label: 'ship',
    text: 'Expose the logic in interfaces people can trust and operate.',
  },
]

const focusWords = ['planning', 'routing', 'agents', 'systems', 'interfaces']

function App() {
  const [selectedId, setSelectedId] = useState(projects[0].id)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    document.documentElement.classList.add('motion-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 },
    )

    const sections = document.querySelectorAll<HTMLElement>('.scroll-reveal')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const workSection = document.querySelector<HTMLElement>('#work')
    if (reduceMotion || !workSection) return

    let animationFrame = 0

    const updateProgress = () => {
      animationFrame = 0
      const start = workSection.offsetTop - 96
      const travel = Math.max(1, workSection.offsetHeight - window.innerHeight)
      const progress = Math.min(1, Math.max(0, (window.scrollY - start) / travel))
      const distance = window.innerWidth <= 1180 ? -56 : -42
      workSection.style.setProperty('--reel-offset', `${(progress * distance).toFixed(3)}%`)
    }

    const requestUpdate = () => {
      if (animationFrame) return
      animationFrame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      window.cancelAnimationFrame(animationFrame)
      workSection.style.removeProperty('--reel-offset')
    }
  }, [])

  return (
    <main className="site-shell">
      <Header />
      <section className="hero-section" id="top">
        <AnimatedGridPattern />
        <div className="hero-copy reveal">
          <div className="hero-intro">
            <p className="eyebrow">
              <span aria-hidden="true">//</span> Full-stack & AI engineer
            </p>
            <img
              className="profile-photo"
              src="/assets/kwabena-linkedin-profile.jpg"
              alt="Kwabena Appiah profile portrait"
            />
          </div>
          <h1>Systems that learn, route, and ship.</h1>
          <p className="hero-lede">
            I build full-stack AI tools, workflow systems, and algorithmic games
            that turn complex problems into reliable, intelligent products.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <a className="button button-primary" href="#work">
              View work <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a className="button button-secondary" href={resumeUrl}>
              Open resume <Download aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="identity-strip" aria-label="Profile highlights">
            <img
              src="/assets/cornell-c-logo.svg"
              alt="Cornell University C logo"
            />
            <div>
              <strong>Cornell University</strong>
              <span>B.S. Computer Science, 2026</span>
            </div>
            <div className="identity-divider" aria-hidden="true" />
            <MapPin aria-hidden="true" size={22} />
            <div>
              <strong>Ithaca, NY</strong>
              <span>Available for software and AI roles</span>
            </div>
          </div>
        </div>
        <SystemsPanel
          projects={projects}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />
      </section>

      <SkillMarquee />

      <section className="section work-section scroll-reveal" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true">//</span> Skills showcase
            </p>
            <h2>The systems that power my work.</h2>
          </div>
          <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
            View GitHub <ExternalLink aria-hidden="true" size={16} />
          </a>
        </div>

        <SkillReel cards={skillReelCards} />
      </section>

      <section className="section proof-section scroll-reveal" id="resume">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true">//</span> Resume highlights
            </p>
            <h2>Signals that map to shipped work.</h2>
          </div>
          <a className="button button-secondary" href={resumeUrl}>
            Resume DOCX <FileText aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="proof-grid">
          {proof.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                className="proof-item"
                key={item.label}
                style={{ '--stagger': `${index * 58}ms` } as CSSProperties}
              >
                <Icon aria-hidden="true" size={30} />
                <div>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="section experience-section scroll-reveal" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span aria-hidden="true">//</span> Experience
            </p>
            <h2>Engineering work across data, AI, and operations.</h2>
          </div>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article
              className="timeline-item"
              key={`${item.company}-${item.role}`}
              style={{ '--stagger': `${index * 70}ms` } as CSSProperties}
            >
              <ExperienceVisual date={item.date} visual={item.visual} />
              <div className="timeline-body">
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <p>{item.body}</p>
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section lab-section scroll-reveal" id="skills">
        <div className="lab-panel">
          <div className="lab-copy">
            <p className="eyebrow">
              <span aria-hidden="true">//</span> Skill stack
            </p>
            <h2>From ambiguous inputs to useful software.</h2>
            <p>
              The through-line is systems thinking: decompose the messy workflow,
              model the constraints, expose the logic through a usable interface,
              then evaluate whether it actually helps.
            </p>
          </div>
          <div className="kinetic-type" aria-label="Animated skill system">
            <div className="type-hero" aria-hidden="true">
              <span>I build with</span>
              <div className="word-window">
                <div className="focus-words">
                  {focusWords.map((word) => (
                    <strong key={word}>{word}</strong>
                  ))}
                </div>
              </div>
            </div>
            <div className="logic-lines">
              {labLines.map((line, index) => (
                <div
                  className="logic-line"
                  key={line.label}
                  style={{ '--delay': `${index * 0.16}s` } as CSSProperties}
                >
                  <span>{line.label}</span>
                  <p>{line.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Kwabena Appiah home">
        <span className="brand-mark">KA</span>
        <span>Kwabena Appiah</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="header-status">
        <span aria-hidden="true" />
        Available for new opportunities
      </div>
    </header>
  )
}

function SystemsPanel({
  projects,
  selectedId,
  onSelect,
}: {
  projects: Project[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  const now = new Date()
  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? projects[0]

  return (
    <aside className="systems-panel reveal" aria-label="Interactive project console">
      <BorderBeam />
      <Particles />
      <div className="systems-topbar">
        <span>
          Signal console <b>live</b>
        </span>
        <span>UTC {time}</span>
      </div>
      <div className="console-canvas">
        <div className="console-orbit" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="console-copy">
          <p className="console-label">Selected system</p>
          <h3>{selectedProject.name}</h3>
          <p>{selectedProject.detail}</p>
          <div className="console-stack">
            {selectedProject.stack.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="project-switcher" aria-label="Project selector">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={`switcher-row tone-${project.color} ${
                project.id === selectedId ? 'is-active' : ''
              }`}
              onClick={() => onSelect(project.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{project.name}</strong>
              <small>{project.status}</small>
            </button>
          ))}
        </div>
        <div className="signal-stream" aria-hidden="true">
          <div>
            {[...signalLines, ...signalLines].map((line, index) => (
              <span key={`${line}-${index}`}>{line}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="stack-status" aria-label="Core stack status">
        {['Python', 'Java', 'TypeScript', 'PostgreSQL', 'AWS'].map((item) => (
          <span key={item}>{item}</span>
        ))}
        <strong>All systems online</strong>
      </div>
    </aside>
  )
}

function SkillReel({ cards }: { cards: SkillReelCard[] }) {
  return (
    <div className="skill-reel">
      <div className="skill-reel-copy">
        <p>
          AI planning, data infrastructure, algorithms, and interfaces, traced
          through the projects and constraints that shaped them.
        </p>
        <div className="reel-readout" aria-label="Skill reel readout">
          <span>05 working signals</span>
          <span>AI, data, algorithms, interfaces</span>
        </div>
      </div>

      <div className="skill-reel-viewport">
        <div className="skill-reel-track" style={{ '--card-count': cards.length } as CSSProperties}>
          {cards.map((card, index) => {
            const Icon = card.icon

            return (
              <article
                className={`skill-card tone-${card.color}`}
                key={card.id}
                style={{ '--stagger': `${index * 70}ms` } as CSSProperties}
              >
                <div className="skill-card-top">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon aria-hidden="true" size={20} />
                </div>
                <figure className="skill-card-media">
                  <img src={card.image} alt={card.imageAlt} loading="eager" />
                </figure>
                <div className="skill-card-body">
                  <p>{card.kicker}</p>
                  <h3>{card.title}</h3>
                  <span>{card.proof}</span>
                  <p>{card.body}</p>
                </div>
                <div className="skill-card-stack" aria-label={`${card.title} stack`}>
                  {card.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function ExperienceVisual({
  date,
  visual,
}: {
  date: string
  visual: ExperienceVisualSpec
}) {
  return (
    <div className={`experience-visual visual-${visual.kind}`}>
      <div className="timeline-date">
        <CalendarClock aria-hidden="true" size={18} />
        {date}
      </div>
      <div className="visual-stage" aria-hidden="true">
        <p>{visual.label}</p>
        <h4>{visual.title}</h4>
        {visual.kind === 'data' && <DataFlowVisual visual={visual} />}
        {visual.kind === 'evaluation' && <EvaluationVisual visual={visual} />}
        {visual.kind === 'campus' && <CampusVisual visual={visual} />}
      </div>
    </div>
  )
}

function DataFlowVisual({ visual }: { visual: ExperienceVisualSpec }) {
  return (
    <div className="data-flow-visual">
      <span>{visual.metrics[0]}</span>
      <i />
      <span>{visual.metrics[1]}</span>
      <i />
      <span>{visual.metrics[2]}</span>
    </div>
  )
}

function EvaluationVisual({ visual }: { visual: ExperienceVisualSpec }) {
  return (
    <div className="evaluation-visual">
      {visual.metrics.map((metric, index) => (
        <div key={metric}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{metric}</strong>
        </div>
      ))}
    </div>
  )
}

function CampusVisual({ visual }: { visual: ExperienceVisualSpec }) {
  return (
    <div className="campus-visual">
      {visual.metrics.map((metric, index) => (
        <span key={metric} style={{ '--index': index } as CSSProperties}>
          {metric}
        </span>
      ))}
    </div>
  )
}

function SkillMarquee() {
  const doubled = [...skills, ...skills]

  return (
    <section className="marquee-section" aria-label="Skills">
      <div className="marquee-track">
        {doubled.map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </section>
  )
}

function AnimatedGridPattern() {
  const squares = useMemo(
    () =>
      Array.from({ length: 26 }, (_, index) => ({
        '--left': `${(index * 17) % 100}%`,
        '--top': `${(index * 29) % 100}%`,
        '--delay': `${(index % 8) * 0.55}s`,
      })),
    [],
  )

  return (
    <div className="animated-grid" aria-hidden="true">
      {squares.map((square, index) => (
        <span key={index} style={square as CSSProperties} />
      ))}
    </div>
  )
}

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let animationId = 0
    const particles = Array.from({ length: 72 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00055,
      vy: (Math.random() - 0.5) * 0.00055,
      size: 0.7 + Math.random() * 1.6,
      alpha: 0.12 + Math.random() * 0.48,
    }))

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, width, height)
      frame += 1
      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        if (particle.x < 0 || particle.x > 1) particle.vx *= -1
        if (particle.y < 0 || particle.y > 1) particle.vy *= -1
        const pulse = Math.sin(frame * 0.018 + index) * 0.18 + 0.82
        ctx.beginPath()
        ctx.fillStyle =
          index % 5 === 0
            ? `rgba(148, 132, 207, ${particle.alpha * pulse})`
            : `rgba(105, 167, 190, ${particle.alpha * 0.42 * pulse})`
        ctx.arc(particle.x * width, particle.y * height, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })
      animationId = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="particles" aria-hidden="true" />
}

function BorderBeam({ subtle = false }: { subtle?: boolean }) {
  return <span className={`border-beam ${subtle ? 'is-subtle' : ''}`} aria-hidden="true" />
}

function ContactFooter() {
  return (
    <footer className="contact-footer scroll-reveal" id="contact">
      <div>
        <p className="eyebrow">
          <span aria-hidden="true">//</span> Contact
        </p>
        <h2>Let’s build the system that makes the world move.</h2>
      </div>
      <div className="contact-actions">
        <a className="button button-primary" href={emailUrl}>
          <Mail aria-hidden="true" size={17} /> Email Kwabena
        </a>
        <a className="button button-secondary" href={linkedinUrl} target="_blank" rel="noreferrer">
          <Briefcase aria-hidden="true" size={17} /> LinkedIn
        </a>
        <a className="button button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
          <FolderGit2 aria-hidden="true" size={17} /> GitHub
        </a>
      </div>
      <a className="footer-jump" href="#top" aria-label="Back to top">
        <ArrowDown aria-hidden="true" size={18} />
      </a>
    </footer>
  )
}

export default App
