import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Highlights from './components/sections/Highlights'
import Stack from './components/sections/Stack'
import Beyond from './components/sections/Beyond'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Highlights />
        <Stack />
        <Beyond />
      </main>
      <Footer />
    </>
  )
}
