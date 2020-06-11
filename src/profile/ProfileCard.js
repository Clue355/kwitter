import React, { useEffect, useState } from "react";
import "./profileCard.css";





export default function ProfileCard (props) {
    const [ username, setUsername ] = useState("")
    useEffect(()=> {
        let profile = window.KWITTER.store.getState()
        setUsername(profile.auth.username)
        console.log(props)
        console.log(window.KWITTER.store.getState())
    },[])
  
return (
    <h1>Hi! {username} </h1>
)
};


