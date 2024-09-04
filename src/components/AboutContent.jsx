import React from "react";

const MyName = (props) => {
  return (

    <div className="w3-card w3-margin w3-margin-top">

      <img src={props.imageUrl} alt="about image" style={{ width: "100%" }} />

      <div className="w3-container w3-white">
        <h4>
          <b>{props.aboutheading}</b>
        </h4>
        <p>{props.about}</p>
      </div>
      
    </div>
  )
};

export default MyName;
