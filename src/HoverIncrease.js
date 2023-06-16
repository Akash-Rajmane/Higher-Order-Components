import React from "react";
import UpdatedComponent from "./UpdatedComponent";

const HoverIncrease = (props) => {
  const { fontSize, increaseFont } = props;
  return (
    <div>
      <button onMouseOver={increaseFont}>Increase font on hover</button>
      <p style={{ fontSize }}>Size of font : {fontSize}</p>
    </div>
  );
};

export default UpdatedComponent(HoverIncrease);
