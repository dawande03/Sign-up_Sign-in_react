import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './component/Details';
import ShowApidata from './component/ShowApidata';
import CallApiOnclick from './component/CallApiOnclick';
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route  path="/home" element={<Home/>}/>
        <Route  exact path="/login" element={<Login/>}/>
        <Route exact path='/details' element={<Details/>}/>
        <Route exact path='/apidata' element={<ShowApidata/>}/>
        <Route exact path='/callapi' element={<CallApiOnclick/>}></Route>
      </Routes>
     </Router>
     </div>
  );
}

export default App;
