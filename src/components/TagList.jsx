import React from "react";

const Tags = (props) => {
    return (
        <span className="w3-tag w3-light-grey w3-small w3-margin-bottom"
       style ={{ marginLeft: '5px' }}>{props.list}
        </span>
    )
};

export default Tags;