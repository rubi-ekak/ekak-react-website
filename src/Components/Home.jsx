import React,{useEffect} from 'react'
import About from './About'
import Card3 from './Cards/Card3'
import Cards1 from './Cards/Cards1'
import Cards2 from './Cards/Cards2'
import Carousal from './Carousal'
import Footer from './Footer'
import Map from './Map'
import Navbar from './Navbar'
import Team from './Team'

import ReactGA from "react-ga4";




const Home = () => {
 
  
  return (
    <div>
      <Navbar/>
      <Carousal/>
      <About/>
      <Cards1/>
      <Cards2/>
      <Card3/>
      <Team/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Home
