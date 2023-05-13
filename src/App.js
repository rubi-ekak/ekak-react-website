import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./fonts/gilroy/Gilroy-Bold.ttf";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import CleanEnergy from "./Components/CleanEnergy";
// import { ContactUs } from "./Components/Cards/ContactUs";
import ContactForm from "./Components/Cards/ContactForm";
import {Helmet} from "react-helmet";



const TRACKING_ID = "UA-260928288-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  

  return (
    <div className="">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Ekak Innovations</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Helmet application" />
            </Helmet>



      <Home/>
      {/* <Router>
        <Routes> */}
   {/* <ContactForm/> */}
        {/* <Route path="/" element={<Home />} />        */}
         {/* <Route path="/cleanenergy" element={<CleanEnergy />} /> */}
        
        {/* </Routes>
      </Router> */}
    </div>
  );
}

export default App;
