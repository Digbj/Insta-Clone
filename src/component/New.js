import './navform.css';
import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Navig from './Nav';
const User = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [imgFile, setimgFile] = useState("");
    const [description, setDescription] = useState("");

    const Submit = () => {
        // console.log(imgFile);

        const formData = new FormData();
        formData.append('name', name);
        formData.append('address', address);
        formData.append('imgFile', imgFile);
        formData.append('description', description);
        //consoling the append key value using for each
        // formData.forEach((key,value)=>{
        //     console.log(key,value)
        // })

        fetch("http://localhost:8000/new", {
            method: 'POST',
           body:formData
           //before api call the form data will be partitioned to to parts
           //files [] ,body data{}(name, address,description)
        })
    }
    return (
        <>
            <Navig />
            <div className='form-container'>


                <div id="file">

                    <input type="file"  onChange={(e) => setimgFile(e.target.files[0])}></input>
                    {/* <input type='text' value={imgFile} placeholder="No File Choosen" /> */}
                </div>
                <div id="details">
                    <input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
                    <input value={address} placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </div>


                <textarea value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
                <Link to='/posts'>
                <button className='button' onClick={Submit} >Submit</button>
                </Link>
                


            </div>
        </>

    )
}
export default User;