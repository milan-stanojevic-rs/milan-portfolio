import { useRef } from 'react'
import { ProjectVisual } from '../ui/ProjectVisual'
import { projects } from '../../data/projects'
import { useSelectedWorkMotion } from '../../hooks/useSelectedWorkMotion'

// A deliberately short first read; full technical detail lives in projects.ts.
const summaries = [
  { description: 'Personal finance, with context. Track transactions and budgets, then explore your financial data with a streaming AI assistant.', stack: 'React · TypeScript · Fastify · PostgreSQL · Claude AI', highlights: ['Real-time AI responses via Server-Sent Events.', 'Shared Zod schemas and types across a Turborepo monorepo.'] },
  { description: 'An enterprise-style HR workspace built around reusable interfaces, responsive workflows and accessible employee experiences.', stack: 'React · TypeScript · SCSS · Vitest · Playwright', highlights: ['Feature-based architecture with reusable UI components.', 'Unit, integration and end-to-end coverage with GitHub Actions CI.'] },
  { description: 'Employee records and browser-native screen recording in one full-stack application.', stack: 'React · TypeScript · Express 5 · SQLite · Zod', highlights: ['Runtime validation from API requests to database rows.', 'Native screen capture and recording with lifecycle cleanup.'] },
] as const

const dimensions = [[[1919, 1079]], [[1919, 951], [498, 950]], [[1919, 1025], [1919, 1032]]] as const

function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null)
  useSelectedWorkMotion(sectionRef)
  return (
    <section ref={sectionRef} id="work" aria-labelledby="work-heading" className="selected-work scroll-mt-20 bg-canvas text-ink">
      <div className="work-shell">
        <header className="work-intro">
          <h2 id="work-heading" className="work-heading"><span data-work-heading>Selected</span><span data-work-heading>Work</span></h2>
          <p className="work-intro-note">Projects where I explore frontend engineering, full-stack architecture and product development.</p>
        </header>
        {projects.map((project, index) => (
          <article key={project.id} data-work-project className={`work-project work-project-${project.id}`} aria-labelledby={`project-${project.id}`}>
            <header className="work-project-heading">
              <p className="work-number">{project.number}</p>
              <h3 id={`project-${project.id}`} data-work-title>{project.name}</h3>
              <p className="work-subtitle">{project.subtitle}</p>
            </header>
            <div className="work-images">
              {project.images.map((image, imageIndex) => (
                <div key={image.src} data-work-visual data-work-drift={imageIndex ? '-56' : '-24'} className={`work-visual work-image-${imageIndex + 1}`}>
                  <ProjectVisual src={image.src} alt={image.alt} width={dimensions[index][imageIndex]?.[0]} height={dimensions[index][imageIndex]?.[1]} phone={project.id === 'peopleops' && imageIndex === 1} />
                </div>
              ))}
            </div>
            <div data-work-copy className="work-copy">
              <div className="work-summary">
                <p className="work-description">{summaries[index].description}</p>
                <p className="work-stack">{summaries[index].stack}</p>
                <div className="work-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="editorial-link">
                      {link.label} <span aria-hidden="true" className="motion-arrow arrow-diagonal">↗</span>
                    </a>
                  ))}
                </div>
              </div>
              <ul className="work-highlights">
                {summaries[index].highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
        <div className="work-exit" aria-hidden="true" />
      </div>
    </section>
  )
}

export default SelectedWork