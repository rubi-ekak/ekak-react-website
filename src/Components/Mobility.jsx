import React,{useEffect} from 'react'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'

const Mobility = () => {
  useEffect(()=>{
    googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
      console.log(window.location.pathname)
   },[])

  return (
    <div>
      <h1>
          check for mobility
      </h1>
    </div>
  )
}

export default Mobility
