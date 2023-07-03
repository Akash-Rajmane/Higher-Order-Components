import React from "react";
import HigherOrderComponent from "./UpdatedComponent";

const ClickIncrease = (props) => {
  const { fontSize, increaseFont } = props;
  return (
    <div>
      <button onClick={increaseFont}>Increase font with click</button>
      <p style={{ fontSize }}>Size of font: {fontSize}</p>
    </div>
  );
};

export default HigherOrderComponent(ClickIncrease);
