import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./fonts/gilroy/Gilroy-Bold.ttf";
import Navbar from "./Components/Navbar";
import Carousal from "./Components/Carousal";
import About from "./Components/About";
import Cards1 from "./Components/Cards/Cards1";
import Cards2 from "./Components/Cards/Cards2";
import Card3 from "./Components/Cards/Card3";

function App() {
  return (
    <div>
    {/* <Navbar/> */}
      <Carousal/> 
      <About/>
      {/* <Cards1/> */}
     <Cards2/>
     <Card3/>

    </div>
  );
}

export default App;
