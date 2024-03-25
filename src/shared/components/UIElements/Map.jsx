import React from "react";

import "./Map.css";

const Map = (props) => {
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <h2>Here is map</h2>
    </div>
  );
};
export default Map;
