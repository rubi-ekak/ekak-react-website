import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import "./fonts/gilroy/Gilroy-Bold.ttf";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CleanEnergy from "./Components/CleanEnergy";
import Mobility from "./Components/Mobility";
import Ekakshar from "./Components/Ekakshar";






function App() {


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
