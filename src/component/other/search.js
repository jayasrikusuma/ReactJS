
import { useState, useEffect } from "react";
import landmarks from './landmarks.json'
import LandMarks from './landmarks.js'
import GetDetails from './GetDetails'


function Search() {

  const [query, setQuery] = useState(''); 
  const [lardmarkName, setLardmarkName] = useState(''); 
  const [city, setCity] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [places, setPlace] = useState([]);
 
  function handleSearchQuery(e){
    e.preventDefault()
    setQuery(e.target.value)
  
    
  }
  function searchFamousPlace(e){
    e.preventDefault()
    {
        
        
            
            landmarks.map( (landmark) => {
                
                console.log("Search:LandMarks:", landmark);
                setPlace([ [landmark], ...places]);
                console.log("Search:Places: ", places);  
                console.log("Seach:Check")
                console.log("Seach:Check: Query", query)
                console.log("Seach:Check: City", landmark.city)
                if(landmark.city === query) {
                    return(
                        <div>
                    <GetDetails places={landmark} query={query} />
                    </div>
                    )
                } 

            })        
        

    } 
      
  }
  
  
  return (
    <div >

    <div>
        <p style={{color: 'grey', fontSize: '30px'}}>
            ** Search for famous landmarks in the world!! **
        </p>
        <p>
            Enter City and click search.
        </p>
        <label>City: </label>
        
        <input type="text" style={{align: "left", color: 'grey', width: '300px'}} value={query} onChange={handleSearchQuery} placeholder="Enter city. Ex: New York "/>
        </div>
        <br></br>
        <button onClick={searchFamousPlace}>Search</button>
        
         

    </div>

    
  );
}

export default Search;
