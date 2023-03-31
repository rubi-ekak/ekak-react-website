
import React,{useEffect} from 'react'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'

const CleanEnergy = () => {
  useEffect(()=>{
    googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
      console.log(window.location.pathname)
   },[])

  return (
    <div>
      <h1>hello clean energy</h1>
    </div>
  )
}

export default CleanEnergy
