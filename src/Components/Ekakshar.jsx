import React,{useEffect} from 'react'
import { googleAnalyticsActions } from '../utils/googleAnalytics/GoogleAnalytics-init'

const Ekakshar = () => {

  useEffect(()=>{
    googleAnalyticsActions.initGoogleAnalytics("UA-260928288-1")
      console.log(window.location.pathname)
   },[])
  return (
    <div>
      ekakshar
    </div>
  )
}

export default Ekakshar
