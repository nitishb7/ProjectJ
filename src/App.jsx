import './App.css'
import HeroSlider from './components/Heroslider'
import Navbar from './components/Navbar'
import ShopCollections from './components/ShopCollections'

function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <HeroSlider></HeroSlider>
      <ShopCollections></ShopCollections>
    </div>
  )
}

export default App
