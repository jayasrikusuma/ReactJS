import React from 'react';
import { useState } from "react"; 
import landmarksData from './landmarks.json'

import {
	Link
} from 'react-router-dom';


function LandMarks(){

    const [places, setPlaces] = useState(null);

  
  function handleClick (landmark){
    setPlaces(landmark);
    
  };

    return (
        <div className="row" style={{ fontSize: '30px',  margin: "10px"}}>
            
        {

            landmarksData.map( (landmark) => {
            //console.log(landmark) 
            return(    
                    
            <div className="col-4" padding="10px">
                <div key={landmark.image}>
                <br></br>   
                <h3 style={{color: '#880DE4', fontSize: '30px', border:"red"}}><span>{landmark.landmark_name}</span></h3>

                </div>

                <div className="col-4" style={{ padding: "7px", background: "#D5B2CF" , width: 300, height: 300}}>

                <img 
                src= {landmark.image} className ="flex justify-content-start m-3" 
                display="flex" width={250} height={250} alt="new" 
                //onClick={()=>handleClick(landmark)} 
                />
                
            <br></br> <br></br>            

            </div>
            {   
                  //Show landmark details
                  setPlaces && <Link  to={` ${landmark.city}/${landmark.landmark_name}/${landmark.fact}/${landmark.location.latitude}/${landmark.location.longitude}/${landmark.category}/${landmark.type} `} ><h5>More Details</h5></Link>   
            }
            </div>

            )

            })

            }  


        </div>
    );

}

export default LandMarks