import React from 'react';
import { useState } from "react"; 
import landmarksData from './landmarks.json'
import CNTower from './../images/CNTower.jpg'
import GetDetails from './GetDetails'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
    useParams
} from 'react-router-dom';
import PlaceDetails from './getPlaces'


function LandMarks(){

    const [image, setImage] = useState('')

    const [places, setPlaces] = useState(null);

  
  function handleClick (landmark){
    setPlaces(landmark);
    
  };



    return (
        <div className="row" style={{ fontSize: '25px',  border: "5px solid #540808"}}>
            
        {

            landmarksData.map( (landmark) => {
            console.log(landmark) 
            return(    
                    
            <div className="col-6" padding="10px">
                <div key={landmark.image}>
                    
                <h3 style={{color: 'blue', fontSize: '25px', border:"red"}}>{landmark.landmark_name}</h3>
                <p><span >Category:</span><span> {landmark.category}</span></p>
                <p>Type: {landmark.type}</p>
                <p>City: {landmark.city}</p>
                <p>Fact: {landmark.fact}</p>

                </div>

                <div className="col-6" style={{ border: "5px solid #540808" , width: 300, height: 300}}>

                <img 
                src= {landmark.image} className ="flex justify-content-start m-3" 
                display="flex" width={250} height={250} alt="new" 
                //onClick={()=>handleClick(landmark)} 
                />
                
                
                
               
                
                    
                
                    
                

                
            




            <br></br> <br></br> 
            

            </div>
            {   
                    
                setPlaces && <Link  to={` ${landmark.city}/${landmark.landmark_name}/${landmark.fact}/${landmark.location.latitude}/${landmark.location.longitude} `} >ShowDetails</Link>   
                        
            }
            </div>








            )

            })

            }  


        </div>
    );

}

export default LandMarks