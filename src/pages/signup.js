import React from 'react';
import { useState } from 'react';
const Signup=()=>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const collectData = async()=> {
        console.warn(name,email,password);
        let result = await fetch("http://localhost:5000/register",{
            method: 'post',
            body : JSON.stringify({name,email,password}),
            headers :{
                'Content-Type' : 'application/json'
            }
        });  
        result = await result.json();
        console.warn(result);
    }
    return(
        <div className='register'>
            <h2 className='heading-register'>Registration Form</h2>
            <input className='inputbox' type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <input className='inputbox' type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input className='inputbox' type="password" placeholder='Enter Password'value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button className='btn-r' type='button' onClick={collectData}>Register</button>
        </div>
    )
}

export default Signup;