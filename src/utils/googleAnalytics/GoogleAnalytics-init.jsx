import  ReactGA from "react-ga";

const googleAnalyticsActions={};

googleAnalyticsActions.initGoogleAnalytics=async()=>{
    ReactGA.initialize("UA-260928288-1");
    ReactGA.pageview(window.location.pathname + window.location.search)
   
};
export  {googleAnalyticsActions};