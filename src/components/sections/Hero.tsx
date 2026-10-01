import { useRef } from 'react'
import { ProjectVisual } from '../ui/ProjectVisual'
import { useHeroMotion } from '../../hooks/useHeroMotion'

function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  useHeroMotion(heroRef)

  return (
    <section ref={heroRef} id="top" aria-labelledby="hero-heading" className="hero-editorial bg-canvas text-ink">
      <div className="hero-shell">
        <div data-hero-identity className="hero-identity">
          <p className="hero-location">Belgrade, Serbia</p>
          <p className="hero-role">Frontend-focused Full-Stack Developer</p>
        </div>

        <p data-hero-name className="hero-name">Milan <span>Stanojević</span></p>

        <h1 id="hero-heading" className="hero-headline">
          <span data-hero-line className="hero-line">I build modern </span>
          <span data-hero-line className="hero-line">web applications </span>
          <span data-hero-line className="hero-line hero-line-considered text-balance">thoughtfully designed, built to perform.</span>
        </h1>

        <div className="hero-bottom">
          <div className="hero-intro">
            <p data-hero-detail className="hero-description">
              React and TypeScript developer with 4 years of professional experience
              building enterprise web applications, reusable UI systems and
              full-stack product features.
            </p>
            <div data-hero-detail className="hero-actions">
              <a href="#work" className="editorial-link">
                View selected work <span aria-hidden="true" className="motion-arrow arrow-down">↓</span>
              </a>
              <a href="https://github.com/milan-stanojevic-rs" target="_blank" rel="noopener noreferrer" className="editorial-link">
                GitHub <span aria-hidden="true" className="motion-arrow arrow-diagonal">↗</span>
              </a>
            </div>
            <p data-hero-detail className="hero-availability">
              <span aria-hidden="true" className="hero-status-dot" />
              Open to Frontend &amp; Full-Stack opportunities
            </p>
          </div>

          <div data-hero-detail className="hero-project-wrap">
            <figure data-hero-drift className="hero-project">
              <div className="hero-project-image">
                <ProjectVisual src="/projects/fluxo/dashboard.png" width={1919} height={1079}
                  alt="Fluxo personal finance dashboard" priority />
              </div>
              <figcaption className="hero-project-caption">
                <div>
                  <p className="hero-project-label">Featured project</p>
                  <p className="hero-project-title">Fluxo <span>Full-Stack + AI</span></p>
                </div>
                <p className="hero-project-tech">React · TypeScript · Fastify · PostgreSQL</p>
              </figcaption>
            </figure>
          </div>
        </div>

        <p data-hero-detail className="hero-toolkit">React · TypeScript · UI Engineering · Full-Stack</p>
      </div>
    </section>
  )
}

export default Hero