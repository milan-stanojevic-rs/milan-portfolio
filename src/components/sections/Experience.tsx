import { useRef } from 'react'
import { useExperienceMotion } from '../../hooks/useExperienceMotion'

const roles = [
  {
    id: 'intern', chapter: '01', label: 'Intern',
    title: 'Software Development Intern', period: 'Jul 2022 — Nov 2022',
    summary: 'Started with internal application workflows, resolving UI and data-management issues.',
    highlights: [
      'Assisted with internal UI forms and documentation-related features.',
      'Debugged Product Backlog Items including UI text changes and employee sorting behavior.',
    ],
    // No technology stack was supplied for the internship; do not infer one.
    technologies: null,
  },
  {
    id: 'junior', chapter: '02', label: 'Junior',
    title: 'Junior Full-Stack Developer', period: 'Nov 2022 — Aug 2024',
    summary: 'Built responsive React interfaces, reusable forms and API integrations across enterprise HR applications.',
    highlights: [
      'Developed reusable inputs, dropdowns, modals and form controls.',
      'Integrated React applications with REST APIs and React Router.',
      'Built and maintained ASP.NET Core APIs with Dapper and SQL Server, with MSTest coverage.',
    ],
    technologies: 'React · JavaScript · TypeScript · SCSS · React Router · ASP.NET Core · Dapper · SQL Server · MSTest',
  },
  {
    id: 'medior', chapter: '03', label: 'Medior',
    title: 'Medior Full-Stack Developer', period: 'Aug 2024 — Feb 2026',
    summary: 'Developed enterprise React and TypeScript features for HR and payroll SaaS, with a focus on reusable UI architecture and complex workflows.',
    highlights: [
      'Built responsive interfaces with Material UI and SCSS from Figma specifications and shared design-system guidelines.',
      'Integrated frontend features with REST and GraphQL APIs.',
      'Wrote and maintained unit, integration and end-to-end tests using Jest, React Testing Library and Playwright.',
    ],
    technologies: 'React · TypeScript · MUI · SCSS · REST · GraphQL · Jest · Playwright · ASP.NET Core · SQL Server',
  },
]

function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  useExperienceMotion(sectionRef)

  return (
    <section ref={sectionRef} id="experience" aria-labelledby="experience-heading" className="experience-editorial bg-canvas text-ink">
      <div className="experience-shell">
        <header className="experience-intro">
          <h2 id="experience-heading" className="experience-display">
            <span data-experience-display className="experience-display-work">Work </span>
            <span data-experience-display>Experience</span>
          </h2>
          <p className="experience-intro-note">From internship to mid-level engineer.</p>
        </header>

        <div className="experience-company">
          <div>
            <p className="experience-eyebrow">2022 — 2026</p>
            <h3>Paycor</h3>
            <p className="experience-company-sector">B2B HR &amp; Payroll SaaS</p>
          </div>
          <div className="experience-company-story">
            <p>Professional experience building enterprise HR and payroll software, with a strong focus on React, TypeScript and frontend engineering.</p>
            <nav aria-label="Career progression" className="experience-progression">
              {roles.map((role, index) => (
                <span key={role.id}>
                  {index > 0 && <span aria-hidden="true" className="experience-progression-arrow">→</span>}
                  <a href={`#experience-${role.id}`} className="editorial-link">{role.label}</a>
                </span>
              ))}
            </nav>
          </div>
        </div>

        <ol className="experience-chapters">
          {roles.map((role) => (
            <li key={role.id} id={`experience-${role.id}`} data-experience-chapter className={`experience-chapter experience-chapter-${role.id}`}>
              <div className="experience-chapter-meta">
                <span className="experience-chapter-number" aria-hidden="true">{role.chapter}</span>
                <p>{role.period}</p>
              </div>
              <div className="experience-chapter-body">
                <h4 data-experience-reveal>{role.title}</h4>
                <div data-experience-reveal className="experience-chapter-copy">
                  <p className="experience-summary">{role.summary}</p>
                  <ul className="experience-highlights">
                    {role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  {role.technologies && <p className="experience-stack">{role.technologies}</p>}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience