import React from "react";
import { Zoom } from "react-reveal";
import "../Work/Work.scss";

const WorkCard = ({ item }) => {
  const shortid = require("shortid");

  return (
    <>
      <Zoom>
        <div key={shortid.generate()} className="work-container">
          <div className="work-picture">
            <a className="picture_link" target={"blank"} href={item.url}>
              <img src={item.img} alt={item.alt} />
            </a>
          </div>
          <h4 className="work-h4">
            <a target={"blank"} href={item.url}>
              {item.name} <i className="fa-sharp fa-solid fa-link"></i>
            </a>
            <span></span>
            <a target={"blank"} href={item.github}>
              <i className="fa-brands fa-github-alt"></i>
            </a>
          </h4>
          <p className="work-text">{item.definition}</p>
          <div className="work-languages">
            {item.stacks.map((stack) => (
              <span key={shortid.generate()}>{stack}</span>
            ))}
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default WorkCard;
