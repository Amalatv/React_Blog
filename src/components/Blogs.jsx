import React, {useEffect, useState } from "react";

const Blogs = (props) => {

  const sliceDescription = props.description.slice(0, 180);
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };
  
  return (
    <div className="w3-card-4 w3-margin w3-white ">
      <img src={props.imageUrl} alt="Nature" style={{ width: "100%", height: "390px", objectFit: "cover" }} />
      <div className="w3-container">
        <h3>
          <b>{props.title}</b>
        </h3>
        <h5>
          {props.titledescription}{" "}
          <span className="w3-opacity">{props.date}</span>
        </h5>
      </div>
      <div className="w3-container">
        <p>{isDescriptionVisible ? props.description : sliceDescription} </p>

        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button
                onClick={toggleDescription}
                className="w3-button w3-padding-large w3-white w3-border"
              >
                <b>{isDescriptionVisible ? "READ LESS »" : "READ MORE »"}</b>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments &nbsp;</b> <span className="w3-tag">0</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Blogs;
