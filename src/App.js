import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Mainpage from './Component/Mainpage';
import Careerpage from './Careerpage';
import Chevronlist from './Component/Chevronlist';
import Projectimeline from './Component/Projectimeline';
import Timelineproduct from './Component/Timelineproduct';
// import Aboutservice from './Component/Aboutservice';


function App() {
  return (
    <div className="">
      <Navbar/>
     
      <Mainpage/>
      {/* <Chevronlist/> */}
      
      
  
     
      {/* <Careerpage/> */}
      {/* <Frontsection/>
      <Service/>
      <Aboutservice/>
      <Chief/>
      <Values/>
      <Award/>
      <Industry/>
      <Motiv/> */}

      <Footer/>
      <Projectimeline/>
     
    </div>
  );
}

export default App;
