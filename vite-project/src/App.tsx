import './App.css'
import FindProperties from './components/FindProperties'
import Guide from './components/Guide'
import HomesList from './components/HomesList'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
  return (
    <>
      {/* Hero Section */}
      <section className='hero-section'>
        <img src="/hero-image.png" alt="Hero" className="hero-image" />
        <div className="overlay">
          <Navbar />
          <Guide />
          <Search />
        </div>
      </section>

      {/* Homes Section */}
      <HomesList />

      {/* Find Properties section */}
      <FindProperties />
    </>
  )
}

export default App
