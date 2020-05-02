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
        <h5 className="card-title developer-name">
          <b>{props.name}</b>
        </h5>
        <p className="card-text">Front End / Back End</p>
        <a
          href={props.portfolio}
          className="developer-links"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i className="fas fa-laptop"></i>&nbsp;Portfolio
        </a>{" "}
        <br />
        <a
          href={props.github}
          className="developer-links"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i className="fab fa-github"></i>&nbsp; Github
        </a>{" "}
        <br />
        <a
          href={props.linkedIn}
          className="developer-links"
          rel="noreferrer noopener"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i> &nbsp; LinkedIn
        </a>
      </div>
    </div>
  );
}

export default developerCard;
