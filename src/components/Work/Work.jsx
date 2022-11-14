import React from "react";
import "../Work/Work.scss";

import works from "./Works";

const shortid = require("shortid");

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <div className="work-section">
            {works.map(
              ({ name, url, img, alt, github, definition, stacks } = works) => (
                <div key={shortid.generate()} className="work-container">
                  <div className="work-picture">
                    <a className="picture_link" target={"blank"} href={url}>
                      <img src={img} alt={alt} />
                    </a>
                  </div>
                  <h4 className="work-h4">
                    <a target={"blank"} href={url}>
                      {name} <i className="fa-sharp fa-solid fa-link"></i>
                    </a>
                    <span></span>
                    <a target={"blank"} href={github}>
                      <i className="fa-brands fa-github-alt"></i>
                    </a>
                  </h4>
                  <p className="work-text">{definition}</p>
                  <div className="work-languages">
                    {stacks.map((stack) => (
                      <span key={shortid.generate()}>{stack}</span>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
