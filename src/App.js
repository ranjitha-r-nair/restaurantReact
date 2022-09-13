import './App.css';
import Navbaarr from './components/Navbaarr';
// import Fooot from './components/Fooot';
import Home from './components/Home'
import Restaurantdetails from './components/Restaurantdetails';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
     
        <Navbaarr></Navbaarr>
{/* <Main> */}

        {/* <Home></Home> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurantdetails/:id' element={<Restaurantdetails/>}/>


        
        </Routes>
        {/* </Main> */}
     
    </div>
    </Router>
  );
}

export default App;
