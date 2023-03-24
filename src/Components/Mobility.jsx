import React,{useEffect} from 'react'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'
import { useLocation } from "react-router-dom";


const Mobility = () => {
  const location=useLocation()
  useEffect(()=>{
   googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
      console.log(window.location.pathname)
  },[location])
 


  return (
    <div>
      <h1>
          check for mobility
      </h1>
    </div>
  )
}

export default Mobility
