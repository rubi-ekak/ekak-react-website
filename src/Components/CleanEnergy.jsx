import React,{useEffect} from 'react'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'
import { useLocation } from "react-router-dom";

const CleanEnergy = () => {

  const location=useLocation()
 useEffect(()=>{
  googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
     console.log(window.location.pathname)
 },[location])

  return (
    <div>
      <h1>hello clean energy</h1>
    </div>
  )
}

export default CleanEnergy
