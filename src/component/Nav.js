import './navform.css';
import React from "react";
import { Link } from 'react-router-dom';
import insta from "./pic/insta.png";
import camera from "./pic/camera.png";
const Navig=()=>{
    return(
        <div className="Nav-container">
            <div className="logo">
        <span> <img id="insta-pic" src={insta} alt="insta-pic"/></span>
        <span><h2 className='insta-text'>Instagram</h2></span>
        </div>
        <div>
            <Link to='/new'>
            <span> <img id="camera-pic" alt="camera" src={camera}/></span>
            </Link>
            
            
            </div>
             
        </div>
    )
}
export default Navig;