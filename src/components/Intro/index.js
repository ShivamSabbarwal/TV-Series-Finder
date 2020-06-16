import React from "react";

const Intro = (props) => {
  const { message } = props;

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Intro;
