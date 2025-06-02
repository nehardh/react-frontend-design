import './App.css'
import FindProperties from './components/FindProperties'
import Guide from './components/Guide'
import HomesList from './components/HomesList'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className='hero-section'>
        <img src="/hero-image.jpg" alt="Hero" className="hero-image" />
        <div className="overlay">
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
