import { useRef } from 'react'
import { useContactMotion } from '../../hooks/useContactMotion'

function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  useContactMotion(sectionRef)

  return (
    <section ref={sectionRef} id="contact" aria-labelledby="contact-heading" className="contact-editorial">
      <div className="contact-shell">
        <h2 id="contact-heading" className="contact-display"><span data-contact-display>Contact</span></h2>
        <div data-contact-reveal className="contact-invitation">
          <p>Let's build something thoughtful.</p>
          <p className="contact-support">Interested in frontend and full-stack opportunities.</p>
        </div>
        <div data-contact-reveal className="contact-actions">
          <a href="mailto:milan@milan-stanojevic.com" className="editorial-link contact-email">
            <span>milan@milan-stanojevic.com</span><span aria-hidden="true" className="motion-arrow arrow-diagonal">â†—</span>
          </a>
          <ul className="contact-secondary">
            <li><a href="https://www.linkedin.com/in/milanstanojeviÄ‡" target="_blank" rel="noopener noreferrer" className="editorial-link">LinkedIn <span aria-hidden="true" className="motion-arrow arrow-diagonal">â†—</span></a></li>
            <li><a href="https://github.com/milan-stanojevic-rs" target="_blank" rel="noopener noreferrer" className="editorial-link">GitHub <span aria-hidden="true" className="motion-arrow arrow-diagonal">â†—</span></a></li>
            <li><a href="/Milan_Stanojevic_CV.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link">Download CV <span aria-hidden="true" className="motion-arrow arrow-down">â†“</span></a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
