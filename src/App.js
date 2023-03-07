import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import "./fonts/gilroy/Gilroy-Bold.ttf";
import Navbar from "./Components/Navbar";
import Carousal from "./Components/Carousal";

function App() {
  return (
    <div>
      <Navbar/>
      <Carousal/>
    </div>
  );
}

export default App;
