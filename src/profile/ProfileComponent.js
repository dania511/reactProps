import React from "react";


const ProfileComponent = (props) =>{
   
    return (
      <div>
      {props.handleName(props.FullName)}
       <h1>{props.FullName}</h1>
       <img src={props.image} />
       <p>{props.bio}</p>
       <h2>{props.profession}</h2>
       </div>
      
     );
    };

    export default ProfileComponent;