import React from "react";
import Typed from "react-typed";

const TypedText = () => {
  return (
    <>
      <div className="animated-typing">
        <Typed
          strings={["Front-end Developer"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>
    </>
  );
};

export default TypedText;
