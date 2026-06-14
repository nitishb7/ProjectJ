import './App.css'
import FeaturedProducts from './components/FeaturedProducts'
import HeroSlider from './components/Heroslider'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <HeroSlider></HeroSlider>
      <FeaturedProducts></FeaturedProducts>
    </div>
  )
}

export default App
