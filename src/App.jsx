import './App.css'
import HeroSlider from './components/Heroslider'
import Navbar from './components/Navbar'
import SaleOffer from './components/SaleOffer'
import ShopCollections from './components/ShopCollections'

function App() {

  return (
    <div className='app'>
      <Navbar></Navbar>
      <HeroSlider></HeroSlider>
      <ShopCollections></ShopCollections>
      <SaleOffer></SaleOffer>
    </div>
  )
}

export default App
