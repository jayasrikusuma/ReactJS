import React from 'react';
import {Link} from 'react-router-dom';



function NavBar  () {
    return (
    <div className="top" style={{ color: "black", fontSize: '50px',  height:"100px", margin: "10px", background: "#E8CBE4", textAlign:"center"}}>        
        <Link to="/Home"> Famous Landmarks </Link>    
    </div> 
    )
}


export default NavBar;