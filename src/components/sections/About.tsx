import { useRef } from 'react'
import { useAboutMotion } from '../../hooks/useAboutMotion'

const toolkitGroups = [
  {
    name: 'FRONTEND',
    technologies: ['React', 'TypeScript', 'JavaScript', 'React Router', 'HTML5', 'CSS / SCSS', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'STATE & DATA',
    technologies: ['Redux Toolkit', 'RTK Query', 'React Context', 'useReducer', 'React Hook Form', 'Zod', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'TESTING',
    technologies: ['Jest', 'React Testing Library', 'Vitest', 'Playwright', 'MSTest'],
  },
  {
    name: 'BACKEND',
    technologies: ['C#', 'ASP.NET Core', 'Node.js', 'Express', 'Fastify', 'Dapper', 'Prisma', 'SQL Server', 'PostgreSQL', 'SQLite'],
  },
  {
    name: 'TOOLING & DELIVERY',
    technologies: ['Vite', 'Webpack', 'Git', 'GitHub Actions', 'Azure DevOps', 'CI/CD', 'pnpm', 'Turborepo', 'Docker'],
  },
]

const principles = [
  {
    id: 'architecture', number: '01', title: 'UI architecture',
    copy: 'I build reusable React components around clear state boundaries and maintainable frontend structure. Shared UI patterns and design-system thinking keep complex interfaces consistent.',
    annotation: 'Components / State / Design systems',
  },
  {
    id: 'fundamentals', number: '02', title: 'Browser & fundamentals',
    copy: 'I like understanding what happens beneath the framework: the DOM, browser behavior and HTTP flows. Working with browser APIs means considering performance, resource lifecycles and how an interaction actually reaches the screen.',
    annotation: 'DOM / HTTP / Browser APIs',
  },
  {
    id: 'quality', number: '03', title: 'Quality',
    copy: 'Testing, accessibility and maintainability are part of building the interface. I care about keyboard navigation, responsive behavior and thoughtful interactions, supported by unit, integration and end-to-end tests.',
    annotation: 'Testing / Accessibility / Interaction',
  },
  {
    id: 'full-stack', number: '04', title: 'Full-stack thinking',
    copy: 'I follow a feature beyond the frontend: through the API, backend logic and persistence, to delivery. Independent projects let me explore those connections with Node.js, Fastify, PostgreSQL, browser Media APIs and AI integrations.',
    annotation: 'Frontend → API → Backend → Persistence → Delivery',
  },
]

function About() {
  const sectionRef = useRef<HTMLElement>(null)
  useAboutMotion(sectionRef)

  return (
    <section ref={sectionRef} id="about" aria-labelledby="about-heading" className="about-editorial bg-canvas text-ink">
      <div className="about-shell">
        <header className="about-intro">
          <p className="about-eyebrow">About / Approach</p>
          <h2 id="about-heading" className="about-display"><span data-about-display>How </span><span data-about-display>I build</span></h2>
          <p className="about-personal">I'm a frontend-focused Full-Stack Developer based in Belgrade, Serbia, with professional experience building enterprise B2B SaaS applications.</p>
        </header>

        <ol className="about-principles">
          {principles.map((principle) => (
            <li key={principle.id} className={`about-principle about-principle-${principle.id}`}>
              <span data-about-number className="about-principle-number" aria-hidden="true">{principle.number}</span>
              <div data-about-reveal className="about-principle-copy">
                <h3>{principle.title}</h3>
                <p className="about-principle-description">{principle.copy}</p>
                <p className="about-annotation">{principle.annotation}</p>
              </div>
            </li>
          ))}
        </ol>

        <section aria-labelledby="about-toolkit-heading" className="about-toolkit">
          <div data-about-reveal className="about-index-intro">
            <p className="about-eyebrow">Technical index</p>
            <h3 id="about-toolkit-heading">Core toolkit</h3>
          </div>
          <dl className="about-toolkit-index">
            {toolkitGroups.map((group) => (
              <div key={group.name} data-about-reveal className="about-toolkit-row">
                <dt>{group.name}</dt>
                <dd><ul>{group.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="about-education-heading" className="about-education">
          <h3 id="about-education-heading">Education</h3>
          <ul>
            <li>
              <h4>Master of Science in Information Technology</h4>
              <p>Part-time · 2021 — Present</p>
              <p>Information Technology School, Belgrade</p>
            </li>
            <li>
              <h4>Bachelor of Science in Information Technology</h4>
              <p>2014 — 2018</p>
              <p>Information Technology School, Belgrade</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default About