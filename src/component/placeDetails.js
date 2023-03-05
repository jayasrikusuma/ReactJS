import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function PlaceDetails() {
let {city, name, fact, latitude, longitude, category, type} = useParams();
console.log("PlaceDetails - ", {city, name, fact})

  return(
    
    <div className="row" style={{  fontSize: '15px',  padding: "10px", border: "3px solid #340808", margin: "10px"}}>
      
           
      <h1 style={{color: 'Green', fontSize: '30px', border:"red"}}>{name}</h1>
      <ul>
        <li><p><span >Category:</span><span> {category}</span></p></li>
        <li><p>Type: {type}</p></li>
        <li><p>City: {city}</p></li>
        <li><p>Fact: {fact}</p></li>
        <li><p>Location:</p></li>      
        <ul>
          <li>Latitude: {latitude}</li>
          <li>Longitude: {longitude}</li>
        </ul>
      </ul>

    </div>
  );



};

export default PlaceDetails;