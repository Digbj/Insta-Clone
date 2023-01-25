import React from "react";
import share_icon from './pic/send.png'
import more from "./pic/more.png";
import heart from './pic/heart.png'
const Posts = (props) => {
    const {data}=props
    const like=Math.random()*100|0
    let date = new Date();
    let currentDate=date.toLocaleDateString();
    return (
        <div className="post-container">
            <div className="header">
                <div className='information'>
                    <h6 className='name'>{data.name}</h6>
                    <p className="location">{data.address}</p>
                </div>
                <div className="three-dot">
                    <span><img className="more-icon" src={more} alt="more"/></span>
                </div>
            </div>
            <div className="image-box">
                <img className='post-image' src={`http://localhost:8000/images/${data.imgFile}`}  alt="post" />
            </div>
            <div className="footer">
                <span><img className='heart-icon' src={heart} alt="heart" /></span>
                <span><img className='send-icon' src={share_icon}  alt="send"/></span>
                <span className='date'>{currentDate}</span>
                <p className='likes'>{like} likes</p>
                <p className='titel'>{data.description}</p>
            </div>
        </div>
    )
}
export default Posts;