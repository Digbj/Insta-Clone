import { Link } from "react-router-dom";
import React from "react";
import pic from "./pic/home-pic.png"
const Home=()=>{
    return(
        <div className="loading-page">
       <div className="Home-container">
       <div className="div1">
                <img id="front" src={pic} alt="Home Pic"/>
            </div>
            <div className="div2">
                <h1>10x Team</h1>
                <Link to='/posts'>
                <button className="btn">Enter</button>
                </Link>
                   
                
            </div>
        </div>  
           
        </div>
    )
}
export default Home;