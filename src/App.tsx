import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import SelectedWork from './components/sections/SelectedWork'
import Experience from './components/sections/Experience'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'

import { useInitialHashNavigation } from './hooks/useInitialHashNavigation'

function App() {
  useInitialHashNavigation()
  useRevealOnScroll()
  return (
    <>
      <Navbar />
      <main className="bg-canvas text-ink">
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
