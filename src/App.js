import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./fonts/gilroy/Gilroy-Bold.ttf";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import CleanEnergy from "./Components/CleanEnergy";
import Mobility from "./Components/Mobility";
import Ekakshar from "./Components/Ekakshar";



const TRACKING_ID = "UA-260928288-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, [location]);


  return (
    <div className="container-fluid">
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />       
        <Route path="/cleanenergy" element={<CleanEnergy />} />
        <Route path="/mobility" element={<Mobility />} />
        <Route path="/ekakshar" element={<Ekakshar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
