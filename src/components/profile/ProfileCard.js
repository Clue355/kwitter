import React from "react";
//import "./ProfileCard.css";



export const ProfileCard = (props) => {
    // Not to be confused with "this.setState" in classes
  
console.log(props)

// export default function ProfileCard (props) {
//    // const [ username, setUsername ] = useState("")
//     useEffect(()=> {

//         setUsername(profile.auth.username)
//         console.log(props)

//     },[])
  
return (
    <h1>Hi! {props.username} </h1>
)
};


