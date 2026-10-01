function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-shell">
        <div className="footer-identity">
          <p>Milan Stanojević</p>
          <p>Frontend-focused Full-Stack Developer</p>
        </div>
        <p className="footer-location">Belgrade, Serbia</p>
        <p className="footer-year">© {new Date().getFullYear()} Milan Stanojević</p>
      </div>
    </footer>
  )
}

export default Footer