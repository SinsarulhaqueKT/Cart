
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import './App.css'
import "./car.css"
import "./Popup.css"
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Cart from './components/Cart';
import Tyres from './components/Newcardcomponents/Tyres/Tyres';
import Discs from './components/Newcardcomponents/Discs/Discs';
import Seats from './components/Newcardcomponents/Seats';
import Subboofer from './components/Newcardcomponents/Subboofer';
import Stearing from './components/Newcardcomponents/Stearing';
import Airfilter from './components/Newcardcomponents/Airfilter';
import OuterEngine from './components/Newcardcomponents/OuterEngine';
import InnerEngine from './components/Newcardcomponents/InnerEngine';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/' element={<Navbar />} >
  <Route path='home' index element={<Homepage />}/>
  <Route path='cart' element={<Cart/>}/>
  <Route path='Tyres' element={<Tyres/>}/>
  <Route path='Discs' element={<Discs/>}/>
  <Route path='Seats' element={<Seats/>}/>
  <Route path='Subboofer' element={<Subboofer/>}/>
  <Route path='Airfilter' element={<Airfilter/>}/>
  <Route path='Outerengine' element={<OuterEngine/>}/>
  <Route path='InnerEngine' element={<InnerEngine/>}/>
  <Route path='stearing' element={<Stearing/>}/>
  <Route path='Addcart' element={<Cart/>}/>
  <Route path='cartnew' element={<Cart/>}/>



 



</Route>

</Routes>




</BrowserRouter>


    </div>
  );
}

export default App;
