import React from "react";
import "./style.css";

function Row() {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;