import { useState, useEffect } from "react";
import landmarks from './landmarks.json'
import LandMarks from './landmarks.js'



function GetDetails(props){
    console.log("GetDetails:Query-XX:", props.query)
    console.log("GetDetails:Places-XX:", props.places)

    if(props.places.city === props.query){
    return(

        <div className="App">
            <div>
            <h3 style={{color: 'blue', fontSize: '25px', border:"red"}}>{props.places.landmark_name}</h3>
                <p><span >Category:</span><span> {props.places.category}</span></p>
                <p>Type: {props.places.type}</p>
                <p>City: {props.places.city}</p>
                <p>Fact: {props.places.fact}</p>
                </div>
               
                <div className="col-6" style={{ border: "5px solid #540808" , width: 300, height: 300}}>
                <a href={props.places.image}>
                    <img 
                    src= {props.places.image} className ="d-flex justify-content-start m-3" 
                    display="flex" width={250} height={250} alt="new"                     
                    />                
                </a> 
                <br></br> <br></br> 
        </div>
        </div>


    )}else{
        return(
            <div>No matches found!!</div>
        )
    }


}

export default GetDetails
