import React from "react";
import "./style.css";

function developerCard(props) {
  return (
    <div key={props.id} className="card developerCard mb-3">
      <div className="card-body">
        <img
          key={props.id}
          alt={props.name}
          src={props.image}
          className="card-img-top rounded-circle"
        />
        <hr />
        <h5 className="card-title">
          <b>{props.name}</b>
        </h5>
        <p className="card-text">Front End / Back End</p>
        <a href={props.url} />
      </div>
    </div>
  );
}

export default developerCard;
