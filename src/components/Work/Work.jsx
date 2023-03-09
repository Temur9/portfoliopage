import React from "react";
import "../Work/Work.scss";
import WorkCard from "./work-card";

import works from "./Works";

const Work = () => {
  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <div className="work-section">
            {works.map((item) => (
                <WorkCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
