import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Roadmap } from './components/roadmap'
import { About } from './components/about'
import { Highlights } from './components/highlights'
import { Footer } from './components/footer'
import { Socials } from './components/socials'
import { Tokenomics } from './components/tokenomics'

import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Roadmap data={landingPageData.Roadmap} />
      <About data={landingPageData.About} />
      <Highlights data={landingPageData.Highlights} />
      <Tokenomics data={landingPageData.Tokenomics} />
      <Socials data={landingPageData.Socials} />
      <Footer />
    </div>
  )
}

export default App
