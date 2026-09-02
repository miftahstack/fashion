import Application from '../layouts/Application'
import Favourite from '../layouts/Favourite'
import Footer from '../layouts/Footer'
import HeroSection from '../layouts/HeroSection'
import JoinCommunity from '../layouts/JoinCommunity'
import Logo from '../layouts/Logo'
import Menu from '../layouts/Menu'
import NewArrival from '../layouts/NewArrival'
import Shop from '../layouts/Shop'


const Home = () => {


  return (
    <>
    <Menu/>
    <HeroSection/>
    <Logo/>
    <NewArrival/>
    <Shop/>
    <Favourite/>
    <Application/>
    <JoinCommunity/>
    <Footer/>
    </>
  )
}

export default Home