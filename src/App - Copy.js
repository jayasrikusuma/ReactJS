import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import landmarks from './component/landmarks.json'
import LandMark from './component/landmarks.js'
import FamousPlaces from './component/placeDetails'


function App() {

  const [query, setQuery] = useState(''); 
  const [lardmarkName, setLardmarkName] = useState(''); 
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');

  function handleSearchQuery(e){
    e.preventDefault()
    setQuery(e.target.value)
  }
  function searchFamousPlace(e){
    e.preventDefault()
    {
      landmarks.map( landmark => {
      
/*           <div key={landmark.landmark_name}>
            <p>Landmark: {landmark.landmark_name} in City:{landmark.city}</p>
          </div> */

          setLardmarkName(landmark.landmark_name);
          setCity(landmark.city);
          setCategory(landmark.category);
        

      })


    } 
  }
  
  
  return (
    <div className="App">
      Famous Place in the World!!#
      <FamousPlaces />
      {/* 
      {/*  Famous Place in the World!!#
      {
        landmarks.map( landmark => {
          return(
            <div key={landmark.landmark_name}>
              <p>Landmark: {landmark.landmark_name} in City:{landmark.city}</p>
            </div>
          )

        })

      } 
      }
    */}

<div>
            <p style={{color: 'gray', fontSize: '30px'}}>
                Search for famous places in the world!
            </p>
            <p>
                Enter City and click search.
            </p>
            <label>City</label>
                <br></br>
          <input type="text" value={query} onChange={handleSearchQuery} placeholder="Enter city. Ex: New York "/>
          </div>
          <br></br>
          <button onClick={searchFamousPlace}>Search</button>
          <div>Name: {lardmarkName} </div>
          <div>City: {city} </div>
          <div> Category:{category}</div>

    </div>

    
  );
}

export default App;
