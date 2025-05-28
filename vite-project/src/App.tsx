import './App.css'
import Guide from './components/Guide'
import HomesList from './components/HomesList'
import Navbar from './components/Navbar'
import Search from './components/Search'

function App() {
  return (
    <>
      <main className='hero-container'>
        <img src="/hero-image.jpg" alt="Hero Background" className="hero-image" />
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="guide-wrapper">
          <Guide />
        </div>
        <Search />
        <HomesList/>
      </main>
    </>
  )
}

export default App
