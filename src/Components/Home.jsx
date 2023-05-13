import React,{useEffect} from 'react'
import About from './About'
import Card3 from './Cards/Card3'
import Cards1 from './Cards/Cards1'
import Cards2 from './Cards/Cards2'
import Footer from './Footer'
import Map from './Map'
import Navbar from './Navbar'
import Team from './Team'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'
import Card4 from './Cards/Card4'
import Carousal1 from './Carousal1'
import CompanyValues from './Cards/CompanyValues'





const Home = () => {
  useEffect(()=>{
    googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
      console.log(window.location.pathname)
   },[])
  
  return (
    <div >
      <Navbar/>
    
      <Carousal1/>
      <About/>
      <Cards1/>
      <Cards2/>
      <Card3/>
      <Card4/>
      <CompanyValues/>
       <Team/>
      <Map/>
      <Footer/>

    
    </div>
  )
}

export default Home
