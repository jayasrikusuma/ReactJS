import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import LandMarks from './component/landmarks.js'
import NavBar from './component/NavBar'
import PlaceDetails from './component/placeDetails'


function App() {   
  
  return (  

    <Router>
    <div>
    <NavBar />
    <div className="row" style={{color: 'gray', fontSize: '30px'}}>
   
    </div>

      <Routes>
        <Route exact path="/" element={<LandMarks />} />
        <Route exact path="/Home" element={<LandMarks />} />            
        <Route exact path="/Home/:city/:name/:fact/:latitude/:longitude/:category/:type" element={<PlaceDetails />} />

      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
